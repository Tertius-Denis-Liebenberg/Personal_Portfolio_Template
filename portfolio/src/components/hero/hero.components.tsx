"use client"

import { heroItems } from "./hero.data"

export function Hero(){
    return <section className="bg-custom">
        <section className="nav bg-overlay-custom">
            <h1 className="cursor-default lg:text-8xl text-3xl">John Doe</h1>
            <h3 className="span loader">
                {heroItems.map((item, index)=>{
                    return <span key={index} className="m lg:hover:text-4xl lg:text-3xl hover:text-base text-sm">
                        {item.textItem}
                    </span>
                })}
            </h3>
        </section>
    </section>
}