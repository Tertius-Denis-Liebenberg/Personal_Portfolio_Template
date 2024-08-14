"use client"

import Image from "next/image";
import { projectItems } from "./projects.data";

export function Projects(){
    return <div>
        {projectItems.map((item, index)=>{
            return <div key={index} className="mb-20 border p-6 border-orange-950 rounded-lg">
                <div className="text-center flex justify-center underline underline-offset-4 cursor-default text-stone-300">
                    <h1 className="mb-8 project-header ">{item.projectName}</h1>
                </div>
                <div className="md:flex md:text-left text-stone-200">
                    <div className="project-image pb-6 md:mr-20">
                        <a href={item.projectPreview}>
                            <Image 
                                src={item.projectPreview}
                                width={500}
                                height={500}
                                alt={item.projectPreview}
                            />
                        </a>
                    </div>
                    <div className="project-text mx-auto cursor-default">
                        <span className="description-text">{item.projectDescription}</span>
                        <h5 className="mt-8">Languages:</h5>
                        <ul className="lg:columns-6 md:columns-4 columns-2 mt-2 mx-6 list-disc text-left">
                            {item.projectLanguages.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="flex justify-end">
                    <a href={item.projectURL} className="m-4">
                        <Image
                            src="/github.svg"
                            width={20}
                            height={20}
                            alt="Picture of the author"
                            className="invert"
                        />
                    </a>
                </div>
            </div>
        })}
    </div>
}