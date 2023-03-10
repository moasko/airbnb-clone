import Image from "next/image";
import React from "react";
import Logo from "../../atoms/logo";

function Header(props) {

  const {headPadding=false} = props

  return (
    <div className="border-b border-b-slate-200 w-full">
      <div className={`flex 2xl:px-${headPadding?"96":"20"} px-5 items-center justify-between`}>
        <div className="hidden lg:block">
             <Logo />
        </div>
        <div className="2xl:w-[450px] my-5 2xl:my-0 w-full">
          <div className="flex p-2 border shadow-md rounded-full">
            <div className="2xl:w-[400px] w-full">
              <input
                placeholder="Recherche"
                className="w-full outline-none px-5 h-full"
              />
            </div>
            <div className="bg-[#ff385c] flex justify-center items-center h-[32px] w-[32px] rounded-full">
              <Image src={"/search.svg"} alt="empty" width={20} height={20} />
            </div>
          </div>
        </div>
        <div className="hidden lg:block">
          <div className="flex space-x-5 items-center">
            <div className="p-[12px] hover:bg-slate-100 rounded-full font-semibold">
              <span>Mettre mon logement sur Airbnb</span>
            </div>
            <div className="p-[12px] flex justify-center items-center w-12  h-12 hover:bg-slate-100 rounded-full font-semibold">
              <Image src={"/language.svg"} alt="empty" width={18} height={18} />
            </div>
            <div className="p-[5px] hover:shadow-md flex space-x-6 border rounded-full font-semibold">
              <Image
                className="ml-2"
                src={"/menu.svg"}
                alt="empty"
                width={18}
                height={18}
              />
              <div className="w-8 h-8 relative bg-slate-500 rounded-full">
                <div className="w-3 h-3 absolute bg-red-500 border top-0 -right-1 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
