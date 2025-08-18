"use client"

import Image from "next/image";
import { acomplishmentItems } from "./acomplishments.data"

export function Acomplishments(){
    return <div className="md:columns-2 text-start my-2">
        {acomplishmentItems.map((item, index)=>{
            return <div className="m-2 flex items-center" key={index}>
                <Image
                    src={item.itemSvg}
                    width={25}
                    height={25}
                    alt=""
                    className="invert"
                />
                <h3 className="ms-4 lg:text-lg text-xs">{item.itemName} <span className="font-bold">({item.itemYear})</span></h3>
            </div>
        })}
    </div>
}