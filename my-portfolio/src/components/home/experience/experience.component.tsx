"use client"

import { companyItems } from "./experience.data"

export function Experience(){
    return <div>
        {companyItems.map((item, index) => {
            const letters = item.companyRole.split("")

            return <div className="mb-20 xl:w-2/3 mx-auto">
                <div className="mb-6 experience-heading" key={index}>
                    <h2 className="mx-2 cursor-default lg:text-4xl text-xl">{item.companyName} ( {item.dateStart} - {item.dateEnd} )</h2>
                    <h3 className="mb-2 loader">
                        {letters.map((letter, index) => {
                            return <span key={index} className="cursor-default lg:text-2xl text-base">
                                {letter}
                            </span>
                        })}
                    </h3>
                </div>
                <div className="text-start">
                    <div className="mb-4 responsibility-text">
                        <h3 className="mb-1 cursor-default lg:text-xl text-sm">Responsibilities:</h3>
                        <ul className="mt-2 mx-8 list-disc">
                            {item.responsibilities.map((item, index)=>{
                                return <li key={index} className="cursor-default lg:text-lg text-xs">{item}</li>
                            })}
                        </ul>
                    </div>
                    <div className="mb-2 language-text">
                        <h5 className="mb-1 cursor-default lg:text-xl text-sm">Languages Used:</h5>
                        <ul className="sm:columns-4 columns-2 mt-2 mx-10 list-disc text-left">
                            {item.techUsed.map((item, index) => (
                                <li key={index} className="cursor-default lg:text-lg text-xs">{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        })}
    </div>
}