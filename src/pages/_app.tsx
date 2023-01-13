import React from 'react'
import Head from 'next/head'
import '../../styles/globals.css'
import { useRouter } from 'next/router'
import type { AppProps } from 'next/app'
import { Toaster } from 'react-hot-toast'
import NextNProgress from 'nextjs-progressbar'
import { Navbar } from '../components/Common/Navbar'
import { Footer } from '../components/Common/Footer'
import { AuthProvider } from '../context/auth'
import DashboardNav from '../components/Common/DashboardNav'

export default function App({ Component, pageProps }: AppProps) {
    const router = useRouter()
    const routeName = router.pathname
        .split('/')
        .pop()!
        .split('-')
        .join(' ')
        .toString()

    const title = routeName.charAt(0).toUpperCase() + routeName.slice(1)

    return (
        <div className="grid grid-cols-6 bg-tertiary">
            <AuthProvider>
                <NextNProgress />
                <Head>
                    <title>{title ? title : 'CTAE Coders Carousel'}</title>
                    <meta
                        name="description"
                        content="Generated by create next app"
                    />
                    <link
                        rel="icon"
                        href="/favicon.ico"
                    />
                </Head>

                <Toaster toastOptions={{ duration: 3000 }} />

                {/* <Navbar /> */}
                {router.pathname.includes('/dashboard') ? (
                    <DashboardNav />
                ) : (
                    <Navbar />
                )}
                <Component {...pageProps} />
                {router.pathname.includes('/dashboard') ? (
                    <DashboardNav />
                ) : (
                    <Footer />
                )}
            </AuthProvider>
        </div>
    )
}
