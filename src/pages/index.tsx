import { NextPage } from "next";
import { useEffect } from "react";
import { Events } from "../components/Home/Events";

const Home: NextPage = () => {
  useEffect(() => {
    const script = document.createElement("script");

    script.src =
      "https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="col-span-6 flex flex-col">
      <div className="px-10 py-8 flex flex-col md:flex-row gap-3 items-center">
        <span className="col-span-3 grow flex items-center justify-center font-bold text-xl md:text-5xl bg-gradient-to-r from-primary-light via-primary to-secondary bg-clip-text text-transparent p-2">
          Programming Club of CTAE
        </span>
        <lottie-player
          className=""
          background="transparent"
          speed="1"
          loop
          autoplay
          style={{ padding: "0.5rem" }}
          src="https://assets2.lottiefiles.com/packages/lf20_fg8zotvy.json"
        ></lottie-player>
      </div>
      <hr className="border-primary/70 m-10 border-10" />
      <Events />
    </div>
  );
};

export default Home;
