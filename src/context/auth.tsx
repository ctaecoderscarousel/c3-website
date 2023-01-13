import React, { FC } from 'react'
import { createContext, useContext, useEffect, useState } from 'react'
import { signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth'
import { firebaseAuth } from '../utils/firebaseInit'
import cookies from 'js-cookie'
import { api } from '../utils/api'
import { toast } from 'react-hot-toast'

const AuthContext = createContext({
    isAuthenticated: false,
    user: null,
    displayName: '',
    photoURL: '',
    signIn: () => {},
    logout: () => {},
    loading: true,
})

export const AuthProvider: FC<{ children: any }> = ({ children }) => {
    const provider = new GoogleAuthProvider()

    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)
    const [displayName, setDisplayName] = useState(' ')
    const [photoURL, setPhotoURL] = useState(' ')

    const logout = () => {
        signOut(firebaseAuth)
            .then(() => {
                cookies.remove('accessToken')
                setUser(null)
                setPhotoURL('')
                setDisplayName('')
                delete api.defaults.headers.Authorization
            })
            .catch((err: any) => {
                toast.error(err.message)
            })
    }

    const signIn = async () => {
        const result = await signInWithPopup(firebaseAuth, provider)
            .then(async (res) => {
                const { user }: any = res
                const { accessToken } = user
                if (accessToken) {
                    cookies.set('accessToken', accessToken, { expires: 60 })

                    api.defaults.headers.Authorization = `Bearer ${accessToken}`
                    const { data } = await api.get('/api/auth')
                    console.log(data)
                    const { result: userData } = data
                    const { picture, name } = userData

                    if (userData) {
                        setUser(userData)
                        setPhotoURL(picture)
                        setDisplayName(name)
                    }
                    toast.success('Login Successful')
                }
            })
            .catch((err: any) => {
                toast.error(err.message)
            })
    }

    async function loadUserFromCookie() {
        const accessToken = cookies.get(`accessToken`)
        if (accessToken) {
            api.defaults.headers.Authorization = `Bearer ${accessToken}`
            try {
                const { data } = await api.get('/api/auth')
                const { result: user } = data
                const { picture, name } = user
                console.log(user)
                if (user) {
                    setUser(user)
                    setPhotoURL(picture)
                    setDisplayName(name)
                }
            } catch (err: any) {
                if (err.response.data.err.code === 'auth/id-token-expired') {
                    cookies.remove('accessToken')
                    setUser(null)
                    delete api.defaults.headers.Authorization
                }
                console.log(err)
            }
        }
        setLoading(false)
    }

    useEffect(() => {
        if (loading) {
            loadUserFromCookie()
        }
    }),
        [loading]

    return (
        <AuthContext.Provider
            value={{
                isAuthenticated: !!user,
                user,
                displayName,
                photoURL,
                signIn,
                logout,
                loading,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}
export const useAuth = () => useContext(AuthContext)
