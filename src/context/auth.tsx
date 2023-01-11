import React, { FC } from 'react'
import { createContext, useContext, useEffect, useState } from 'react'
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { firebaseAuth } from '../utils/firebaseInit'

const AuthContext = createContext({
    isAuthenticated: false,
    signIn: () => {},
})

export const AuthProvider: FC<{ children: any }> = ({ children }) => {
    const provider = new GoogleAuthProvider()

    const [user, setUser] = useState(null)

    const signIn = async () => {
        console.log('abc')
        const result = await signInWithPopup(firebaseAuth, provider)
        console.log(result.user)
    }

    return (
        <AuthContext.Provider
            value={{
                isAuthenticated: !!user,
                signIn,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}
export const useAuth = () => useContext(AuthContext)

// export const useAuth = () => useContext(AuthContext)
