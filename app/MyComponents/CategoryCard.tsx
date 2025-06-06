"use client";
import { cn } from "@/lib/utils";


export default function CategoryCard({title, description, imageUrl}: {
  title?: string;
  description?: string;
  imageUrl?: string;}) {
  return (
    <div className="max-w-xs w-full group/card">
      <div
        className={
          "cursor-pointer overflow-hidden relative card h-52 w-80 rounded-md shadow-xl max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4 bg-cover bg-gray-700"
        }
        style={imageUrl ? { backgroundImage: `url(${imageUrl})` } : {}}
      >
        <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
        <div className="flex-row items-center space-x-4 z-10">
          
        </div>
        <div className="text content">
          <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
        {title || "Category Title"}
          </h1>
          <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
        {description ||
          "This is a brief description of the category. It provides an overview of what to expect."}
          </p>
        </div>
      </div>
    </div>
  );
}
