"use client";
import { ArrowLeft, Moon, Sun } from "lucide-react";
import Link from "next/link";
import React from "react";
import { useEffect, useState } from "react";

const Consumo = () => {
  const [valor, setValor] = useState(null);
  const [name, setName] = useState(null);
  const [text, setText] = useState("");
  const [resp, setResp] = useState(null);

  useEffect(() => {
    fetch("/api/test")
      .then((res) => res.json())
      .then((res) => setValor(res.mensaje))
      .catch((error) => console.log(error));
    fetch("/api/nombre")
      .then((res) => res.json())
      .then((res) => setName(res.nombre))
      .catch((error) => console.log(error));
  }, []);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      fetch("api/test", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre: text }),
      })
        .then((res) => res.json())
        .then((res) => setResp(res.mensaje));
    } catch {}
  };

  return (
    <>
      <div className="flex flex-col min-h-screen justify-center items-center gap-3">
        <h1>
          {valor && name ? (
            <>
              <div className="card text-white bg-emerald-600 w-96">
                <div className="card-body">
                  <h2 className="card-title">{valor}</h2>
                  <p>{name}</p>
                  <form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-3 mt-2"
                  >
                    <label className="input input-bordered flex items-center gap-2">
                      Name
                      <input
                        type="text"
                        className="grow"
                        placeholder="Isaac"
                        onChange={handleChange}
                      />
                    </label>
                    <input
                      type="submit"
                      className="btn btn-active btn-neutral"
                    />
                  </form>
                  {resp && (
                    <>
                      <div className="chat chat-end">
                        <div className="chat-bubble">{resp}</div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </>
          ) : (
            <div className="card text-white bg-rose-800 w-96">
              <div className="card-body">
                <span className="loading loading-spinner loading-lg"></span>
                <p>Loading...</p>
              </div>
            </div>
          )}
        </h1>
      </div>
      <section className="absolute top-5 left-5">
        <Link href={"/"}>
          <ArrowLeft />
        </Link>
      </section>
    </>
  );
};

export default Consumo;
