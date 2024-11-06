"use client";
import { ArrowLeft, Minus, Moon, Plus, Sun } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Contador = () => {
  const [contador, setContador] = useState(0);
  const [theme, setTheme] = useState("dark");
  const [emotion, setEmotion] = useState("neutral");
  const [isJumping, setIsJumping] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const FrogFace = ({ emotion }) => {
    switch (emotion) {
      case "happy":
        <>
          {/* ojos felices */}
          <div className="absolute top-2 left-2 w-4 bg-white rounded-full overflow-hidden">
            <div className="absolute top-1 left-2 w-2 h-2 bg-black rounded-full"></div>
            <div className="absolute bottom-0 w-full bg-green-500 transform translate-1 rotate-12"></div>
          </div>
          <div className="absolute top-2 left-2 w-4 bg-white rounded-full overflow-hidden">
            <div className="absolute top-1 left2 w-2 h-2 bg-black rounded-full"></div>
            <div className="absolute bottom-0 w-full bg-green-500 transform translate-1 -rotate-12"></div>
          </div>
          {/* sonrisa grande */}
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-5 border-b-4 border-green-700 rounded-full"></div>
          {/* mejillas felices */}
          <div className="absolute bottom-3 left-2 w-3 h-2 bg-pink-300 rounded-full opacity-60"></div>
          <div className="absolute bottom-3 right-2 w-3 h-2 bg-pink-300 rounded-full opacity-60"></div>
        </>;
      case "sad":
        <>
          {/* ojos tristes */}
          <div className="absolute top-3 left-2 w-4 h-4 bg-white rounded-full overflow-hidden">
            <div className="absolute top-2 left-1 w-2 h-2 bg-black rounded-full"></div>
            <div className="absolute top-0 w-full h-2 bg-green-500 transform translate-y-1 rotate-12"></div>
          </div>
          <div className="absolute top-3 right-2 w-4 h-4 bg-white rounded-full overflow-hidden">
            <div className="absolute top-2 left-1 w-2 h-2 bg-black rounded-full"></div>
            <div className="absolute top-0 w-full h-2 bg-green-500 transform translate-y-1 rotate-12"></div>
          </div>
          {/* boca triste */}
          <div className="absolute bottom-3 left-1/2 transform translate-x-1/2 w-6 h-4 border-t-4 border-green-700 rounded-full"></div>
          {/* lagrima */}
          <div className="absolute top-6 left-1 w-2 h-3 bg-blue-400 rounded-full animate-bounce"></div>
        </>;
      case "neutral":
        <>
          {/* ojos neutrales */}
          <div className="absolute top-2 left-2 w-4 h-4 bg-white rounded-full">
            <div className="absolute top-1 left-1 w-2 h-2 bg-black rounded-full"></div>
          </div>
          <div className="absolute top-2 right-2 w-4 h-4 bg-white rounded-full">
            <div className="absolute top-1 left-1 w-2 h-2 bg-black rounded-full"></div>
          </div>
          {/* boca neutral */}
          <div className="absolute bottom-2 left-1/2 transform translate-x-1/2 w-6 h-1 bg-green-700 rounded-full"></div>
        </>;
    }
  };

  const timelineNumbers = Array.from(
    { length: 11 },
    (_, i) => contador - 5 + i
  );

  return (
    <>
      <div className="flex flex-col min-h-screen justify-center items-center gap-6 transition-all duration-200">
        <section
          className={`text-4xl w-full max-w-3xl flex flex-col items-center gap-6 ${
            contador >= 0 ? "text-green-400" : "text-red-500"
          }`}
        >
          <div className="w-full bg-base-200 p-8 rounded-xl shadow-xl">
            <div className="relative h-40 mb-8">
              <div className="absolute top-24 left-0 w-full border-b-4 border-dotted border-primary"></div>
              <div className="absolute top-28 left-0 w-full flex justify-between px-4">
                {timelineNumbers.map((num, i) => (
                  <div key={i} className="relative flex flex-col items-center">
                    <div
                      className={`h-2 w-2 rounded-full ${
                        num === contador ? "bg-primary" : "bg-base-300"
                      }`}
                    >
                      <span
                        className={`text-sm font-bold ${
                          num === contador
                            ? "text-primary text-lg"
                            : "text-base-content"
                        }`}
                      >
                        {num}
                      </span>
                      {/* {num === contador && (
                        <div
                          className={`absolute ${
                            isJumping ? "-top-8" : "-top-2"
                          } left-1/2 transform translate-x-1/2 transition-all duration-500`}
                        >
                          <div className="w-16 h-12 bg-green-500 rounded-full relative">
                            <FrogFace emotion={emotion} />
                          </div>
                          <div className="absolute bottom-2 left-0 w-4 h-6 bg-green-500 rounded-full transform -rotate-45"></div>
                          <div className="absolute bottom-2 right-0 w-4 h-6 bg-green-500 rounded-full transform rotate-45"></div>
                        </div>
                      )} */}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col items-center space-y-6">
              <h2 className="text-3xl font-bold text-primary ">
                Froggy Counter
              </h2>
              <div className="text-6xl font-bold text-primary">{contador}</div>
            </div>
          </div>
        </section>
        <section className="flex gap-4">
          <button
            className="btn btn-success"
            onClick={() => setContador((prev) => prev + 1)}
          >
            <Plus />
          </button>
          <button
            className="btn btn-error"
            onClick={() => setContador((prev) => prev - 1)}
          >
            <Minus />
          </button>
        </section>
      </div>
      <section className="absolute top-5 left-5">
        <Link href={"/"}>
          <ArrowLeft />
        </Link>
      </section>
      <section className="absolute top-5 right-5">
        <button onClick={() => setTheme(theme === "retro" ? "dark" : "retro")}>
          {theme === "retro" ? <Moon /> : <Sun />}
        </button>
      </section>
    </>
  );
};

export default Contador;
