"use client"

import { educationItems } from "./education.data"

export function Education(){
    return <div className="">
        {educationItems.map((item, index)=>{
            return <div className="mb-20 mt-10 xl:w-2/3 mx-auto">
                <div className="mb-6" key={index}>
                    <h2 className="mx-2 cursor-default education-heading">{item.courseName}</h2>
                    <h3 className="mb-2 education-sub-heading">{item.companyName} ({item.courseYear})</h3>
                </div>
                <div className="text-start mx-auto">
                    <div className="mb-2 education-text">
                        <h5 className="mb-1 cursor-default">Subjects:</h5>
                        <ul className="lg:columns-3 md:columns-2 mt-2 mx-10 list-disc text-left">
                            {item.modules.map((item, index) => (
                                <li key={index} className="cursor-default">{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        })}
    </div>
}