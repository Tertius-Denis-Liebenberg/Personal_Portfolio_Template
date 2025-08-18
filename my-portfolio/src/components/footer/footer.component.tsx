"use client"

import Image from "next/image";
import { userItems, linkItems } from "./footer.data";

export function Footer(){
    return <footer className="shadow bg-stone-950">
        <div className="w-full mx-auto max-w-screen-xl p-4 sm:flex sm:items-center sm:justify-between">
            {userItems.map((item, index) => {
                return <div key={index}>
                    <h3 className="md:text-sm text-sm">{item.Name}</h3>
                    <h3 className="md:text-sm text-sm"><span className="text-orange-500">Call: </span>{item.Number}</h3>
                    <h3 className="md:text-sm text-sm"><span className="text-orange-500">Email: </span>{item.Email}</h3>
                </div>   
            })}
            
            <div className="flex mt-4 sm:justify-center sm:mt-0">
                {linkItems.map((item, index) => {
                    return <a key={index} target="_blank" href={item.itemURL} className="text-gray-500 hover:text-gray-900 dark:hover:text-white mx-2">
                    <Image
                        src={item.itemSvg}
                        width={20}
                        height={20}
                        alt="Picture of the author"
                        className="invert"
                    />
                </a>  
                })}
          </div>
        </div>
    </footer>
}