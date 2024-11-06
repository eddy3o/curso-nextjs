import Link from "next/link";

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen justify-center items-center gap-3">
      <h1 className="text-4xl">Eddy!!</h1>
      <ul className="flex gap-5">
        <li className=""></li>
      </ul>
      <ul className="menu lg:menu-horizontal bg-base-200 rounded-box">
        <li>
          <details>
            <summary>Semana 1</summary>
            <ul>
              <li>
                <Link href={"/contador"}>Contador</Link>
              </li>
            </ul>
          </details>
        </li>
      </ul>
    </div>
  );
};

export default HomePage;
