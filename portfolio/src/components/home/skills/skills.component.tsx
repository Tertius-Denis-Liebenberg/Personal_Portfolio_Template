"use client"

import { otherSkills, personalSkills, programmingSkills, softwareSkills } from "./skills.data"

export function Skills(){
    return <div className="">
        <div className="mb-10">
            <h2 className="mb-4 skill-header">Personal Skills</h2>
            <div>
                <div className="lg:columns-2 text-start">
                    {personalSkills.map((item, index)=>{
                        const proficiency = item.itemProficiency

                        return <div className="mb-3 md:mx-4 mb-1 flex items-center" key={index}>
                            <span className="text-stone-200 font-medium text-orange-700 mr-4 skill-text">{item.itemName}</span>
                            <div className="flex-grow bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                                <div className="bg-orange-500 h-2.5 rounded-full flex-shrink-0" style={{width: proficiency}}></div>
                            </div>  
                        </div>
                    })}
                </div>
            </div>
        </div>
        <div className="mb-10">
            <h2 className="mb-4 skill-header">Programming Skills</h2>
            <div>
                <div className="lg:columns-2 text-start">
                    {programmingSkills.map((item, index)=>{
                        const proficiency = item.itemProficiency

                        return <div className="mb-3 md:mx-4 mb-1 flex items-center" key={index}>
                            <span className="text-stone-200 font-medium text-orange-700 mr-4 skill-text">{item.itemName}</span>
                            <div className="flex-grow bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                                <div className="bg-orange-500 h-2.5 rounded-full flex-shrink-0" style={{width: proficiency}}></div>
                            </div>  
                        </div>
                    })}
                </div>
            </div>
        </div>
        <div className="mb-10">
            <h2 className="mb-4 skill-header">Software Skills</h2>
            <div>
                <div className="lg:columns-2 text-start">
                    {softwareSkills.map((item, index)=>{
                        const proficiency = item.itemProficiency

                        return <div className="mb-3 md:mx-4 mb-1 flex items-center" key={index}>
                            <span className="text-stone-200 font-medium text-orange-700 mr-4 skill-text">{item.itemName}</span>
                            <div className="flex-grow bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                                <div className="bg-orange-500 h-2.5 rounded-full flex-shrink-0" style={{width: proficiency}}></div>
                            </div>  
                        </div>
                    })}
                </div>
            </div>
        </div>
        <div className="mb-10">
            <h2 className="mb-4 skill-header">Other Skills</h2>
            <div>
                <div className="lg:columns-2 text-start">
                    {otherSkills.map((item, index)=>{
                        const proficiency = item.itemProficiency

                        return <div className="mb-3 md:mx-4 mb-1 flex items-center" key={index}>
                            <span className="text-stone-200 font-medium text-orange-700 mr-4 skill-text">{item.itemName}</span>
                            <div className="flex-grow bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                                <div className="bg-orange-500 h-2.5 rounded-full flex-shrink-0" style={{width: proficiency}}></div>
                            </div>  
                        </div>
                    })}
                </div>
            </div>
        </div>
    </div>
}