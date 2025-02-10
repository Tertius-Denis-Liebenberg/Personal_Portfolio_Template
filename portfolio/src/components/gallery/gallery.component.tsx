"use client"

import Image from "next/image";
import { galleryItems } from "./gallery.data";

export function Gallery() {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryItems.map((item, index) => (
                <figure key={index} className="relative overflow-hidden rounded-lg" data-mouseover="hover:scale-150 transition-transform duration-300 ease-in-out">
                    <Image
                        src={item.imageURL}
                        width={500}
                        height={500}
                        alt=""
                        className="h-auto max-w-full rounded-lg transition-all duration-300 ease-in-out hover:scale-105"
                    />
                    <figcaption className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400 transition-all duration-300 ease-in-out hover:text-xl">
                        {item.imageDescription}
                    </figcaption>
                </figure>
            ))}
        </div>
    );
}
