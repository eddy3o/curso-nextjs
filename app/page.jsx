"use client";
import React, { useEffect, useState } from "react";

const HomePage = () => {
  const [contador, setContador] = useState(0);
  useEffect(() => {
    console.log(contador);
  }, [contador]);

  return (
    <div className="flex flex-col min-h-screen justify-center items-center gap-1.5">
      <h1 className="text-4xl">Eddy!!</h1>
      {/* <section>{contador}</section>
      <section>
        <button className="btn" onClick={() => setContador((prev) => prev + 1)}>
          Sumar
        </button>
      </section> */}
    </div>
  );
};

export default HomePage;
