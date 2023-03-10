import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Header } from "../components";

function Details() {
  return (
    <div>
      <Header headPadding={true} />
      <main className="2xl:px-96 px-5">
        <div className="flex justify-between flex-col mt-5">
          <h1 className="text-3xl font-semibold">Casa Acantilado</h1>
          <div className="flex justify-between mt-3">
            <div>
              <span>
                4,6: <Link href={"#"}>5 commentaires</Link>
              </span>
            </div>
            <div className=" space-x-5">
              <Link href={"#"}>Partager</Link>
              <Link href={"#"}>Enregistre</Link>
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-lg flex flex-row  w-full h-[calc(60vh_-_64px)] mt-10">
          <div className="w-1/2 h-full relative">
            <Image
              className="object-fill transition hover:scale-125"
              alt="vide"
              fill
              src={"/2.webp"}
            />
          </div>

          <div className="w-1/2 grid grid-cols-2 grid-rows-2 gap-2 pl-2 h-full caret-lime-500">
            <div className="relative overflow-hidden">
              <Image
                className="object-fill transition hover:scale-125"
                alt="vide"
                fill
                src={"/1.webp"}
              />
            </div>
            <div className="relative overflow-hidden">
              <Image
                className="object-fill transition hover:scale-125"
                alt="vide"
                fill
                src={"/2.webp"}
              />
            </div>
            <div className="relative overflow-hidden">
              <Image
                className="object-fill transition hover:scale-125"
                alt="vide"
                fill
                src={"/3.webp"}
              />
            </div>
            <div className="relative overflow-hidden">
              <Image
                className="object-fill transition hover:scale-125"
                alt="vide"
                fill
                src={"/4.webp"}
              />
            </div>
          </div>
        </div>

        <div className="w-full mt-10 flex flex-row">
          <div className="w-2/3 pr-20">
            <div className="w-full border-b flex justify-between items-center border-b-slate-200 pb-5">
              <div>
                <h2 className="font-semibold text-2xl">
                  Logement entier : villa ??? Chez Bookiply
                </h2>
                <span>
                  6 voyageurs 3 . chambres . 4 lits . 3 salles de bain
                </span>
              </div>
              <div className=" w-16 h-16 rounded-full overflow-hidden relative">
                <Image src={"/1.webp"} fill alt="kj" />
              </div>
            </div>

            <div>
                <div>
                    <div></div>
                    <div>
                        <h3>Proc??dure d arriv??e irr??prochable</h3>
                        <p>100 % des voyageurs ont attribu?? 5 ??toiles ?? la proc??dure d arriv??e.</p>
                    </div>
                </div>
            </div>
          </div>
          <div className="w-1/3 h-96 bg-red-500"></div>
        </div>


      </main>
    </div>
  );
}

export default Details;
