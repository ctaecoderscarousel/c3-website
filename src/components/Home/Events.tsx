import Image from 'next/image'
import { FC } from 'react'
import { eventsData } from '../../data/events'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

export const Events: FC<{}> = ({}) => {
    return (
        <div className="flex p-3 md:p-10 flex-col items-center">
            <h2 className="text-3xl md:text-5xl font-bold text-primary-light pb-4">
                Events
            </h2>

            <div className="flex flex-col w-full space-y-3">
                {eventsData.map((event) => {
                    return (
                        <div
                            key={event.index}
                            className={`flex ${
                                event.align === 'left'
                                    ? 'md:flex-row '
                                    : 'md:flex-row-reverse '
                            } items-center  flex-col  p-5  rounded-xl bg-primary/30 shadow-md`}
                        >
                            <div className="w-1/2 h-52 ">
                                <Carousel
                                    infiniteLoop
                                    autoPlay
                                    interval={2000}
                                    showArrows={false}
                                    showStatus={false}
                                >
                                    {event.eventImgs.map((imgUrl, i) => {
                                        return (
                                            <div
                                                key={i}
                                                className="w-52 h-52"
                                            >
                                                <Image
                                                    src={imgUrl}
                                                    fill
                                                    alt={event.eventName}
                                                    style={{
                                                        objectFit: 'contain',
                                                    }}
                                                />
                                            </div>
                                        )
                                    })}
                                </Carousel>
                            </div>
                            <p className="text-white">{event.eventDesc}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
