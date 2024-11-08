"use client";
import { ArrowLeft, Moon, Sun } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Running = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    let intervalID;
    if (isRunning) {
      const startTime = Date.now() - time;
      intervalID = setInterval(() => {
        setTime(Date.now() - startTime);
      }, 10); // 10ms
    } else {
      clearInterval(intervalID);
    }
    return () => clearInterval(intervalID);
  }, [isRunning]);

  const minutos = Math.floor(time / 60000);
  const segundos = Math.floor((time % 60000) / 1000);
  const milisegundos = Math.floor((time % 1000) / 10);

  const formatNumber = (num) => String(num).padStart(2, "0");

  const startStop = () => {
    setIsRunning(!isRunning);
  };

  const reset = () => {
    setIsRunning(false);
    setTime(0);
  };

  return (
    <>
      <div className="flex flex-col min-h-screen justify-center items-center gap-6 transition-all duration-200">
        <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
          <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
            <span className="font-mono text-5xl">
              <span>{formatNumber(minutos)}</span>
            </span>
            min
          </div>
          <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
            <span className="font-mono text-5xl">
              <span>{formatNumber(segundos)}</span>
            </span>
            sec
          </div>
          <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
            <span className="font-mono text-5xl">
              <span>{formatNumber(milisegundos)}</span>
            </span>
            mil
          </div>
        </div>
        <button
          className={`${
            isRunning
              ? "btn btn-outline btn-secondary"
              : "btn btn-outline btn-accent"
          }`}
          onClick={startStop}
        >
          {isRunning ? "Stop" : "Start"}
        </button>
        <button className="btn btn-outline" onClick={reset}>
          Reset
        </button>
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

export default Running;
