import { NextPage } from 'next'
import { useEffect } from 'react'
import { Events } from '../components/Home/Events'

const Home: NextPage = () => {
    useEffect(() => {
        const script = document.createElement('script')

        script.src =
            'https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js'
        script.async = true

        document.body.appendChild(script)

        return () => {
            document.body.removeChild(script)
        }
    }, [])

    return (
        <div className="col-span-6 flex flex-col">
            <div className="px-10 py-8 md:py-16 grid grid-cols-5 w-full items-center bg-primary-700">
                <span className="col-span-3 grow flex items-center justify-center font-bold text-xl md:text-5xl bg-gradient-to-r from-primary-light via-primary to-secondary bg-clip-text text-transparent p-2">
                    Programming Club of CTAE
                </span>
                <div className="col-span-2">
                    <lottie-player
                        background="transparent"
                        speed="1"
                        loop
                        autoplay
                        style={{ padding: '0.5rem' }}
                        src="https://assets2.lottiefiles.com/packages/lf20_fg8zotvy.json"
                    />
                </div>
            </div>
            <Events />
        </div>
    )
}

export default Home
