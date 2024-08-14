"use client"

import { heroItems } from "./hero.data"

export function Hero(){
    return <section className="nav bg-custom">
        <h1 className="cursor-default">John Doe</h1>
        <h3 className="span loader">
            {heroItems.map((item, index)=>{
                return <span key={index} className="m">
                    {item.textItem}
                </span>
            })}
        </h3>
    </section>
}