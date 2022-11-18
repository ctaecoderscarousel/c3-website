import Image from "next/image";
import { FC } from "react";
import { eventsData } from "../../data/events";

export const Events: FC<{}> = ({}) => {
  return (
    <div className="flex p-3 md:p-10 flex-col items-center">
      <h2 className="text-3xl md:text-5xl font-bold text-primary-light pb-4">
        Events
      </h2>
      <div className="flex flex-col space-y-3">
        {eventsData.map((event) => {
          return (
            <div
              key={event.index}
              className={`flex ${
                event.align === "left" ? "flex-row" : "flex-row-reverse"
              } items-center p-5 w-full rounded-xl bg-primary/30 shadow-md`}
            >
              <div className="flex relative">
                {event.eventImgs.map((imgUrl, i) => {
                  return (
                    <Image
                      key={i}
                      src={imgUrl}
                      width={200}
                      height={100}
                      alt={event.eventName}
                    />
                  );
                })}
              </div>
              <span className="text-white">{event.eventDesc}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
