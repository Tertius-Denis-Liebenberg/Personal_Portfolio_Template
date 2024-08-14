"use client"

import Link from "next/link"
import { navigationItems } from "./navigation.data"
import { useState } from "react"

export function Navigation(){

	const [isOpen, setIsOpen] = useState(false);

	function toggleButton(){
		setIsOpen(!isOpen);
	}

	return <nav className="border-gray-200 bg-stone-900 sticky top-0 z-50 ">
		<div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4">
			<button type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden hover:bg-stone-600 focus:outline-none focus:ring-2 focus:ring-stone-800 hover:bg-stone-900 focus:ring-stone-900" onClick={toggleButton}>
				<span className="sr-only">Open main menu</span>
				<svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
					<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
				</svg>
			</button>

			{isOpen ? 
			<div className="w-full md:block md:w-auto">
				<ul className="font-medium flex flex-col p-4 md:p-0 mt-2 border border-stone-900 rounded-lg bg-stone-900 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 bg-stone-900 md:bg-stone-900 border-stone-600">
					{navigationItems.map((item, index)=>{
						return <Link href={item.pagePath} passHref key={index}>
							<li className="block py-2 px-3 mx-4 mt-1 bg-stone-800 rounded md:bg-transparent text-stone-200 md:p-0 hover:text-orange-600 text-center" onClick={toggleButton}>
								{item.tabName}
							</li>
						</Link>
					})}
				</ul>
			</div>
			:
			<div className="hidden w-full md:block md:w-auto">
				<ul className="font-medium flex flex-col p-4 md:p-0 mt-2 border border-stone-900 rounded-lg bg-stone-900 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 bg-stone-900 md:bg-stone-900 border-stone-600">
					{navigationItems.map((item, index)=>{
						return <Link href={item.pagePath} passHref key={index}>
							<li className="block py-2 px-3 mx-4 mt-1 bg-stone-800 rounded md:bg-transparent text-stone-200 md:p-0 hover:text-orange-600 text-center">
								{item.tabName}
							</li>
						</Link>
					})}
				</ul>
			</div>
			}
		</div>
	</nav>
}