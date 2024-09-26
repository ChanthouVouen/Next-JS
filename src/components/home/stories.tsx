"use client";
import { title } from "process";
import { useState } from "react";


function Stories() {

    const data = [
        {'id': 1, img: 'https://www.fcbarcelona.com/photo-resources/2024/08/02/8a9b0297-8621-4e35-b523-fd71f285cf36/202407_Web_Landing_Widgets_600x892_01_Mascul-_CAT.jpg?width=300&height=446', title: "MEN'S FOOTBALL"},
        {'id': 2, img: 'https://www.fcbarcelona.com/photo-resources/2024/08/02/f203afc4-1cc3-4057-8078-48b36324d6dd/202407_Web_Landing_Widgets_600x892_01_BIT_CAT.jpg?width=300&height=446', title: "BARCE IMMERSIVE TURE "},
        {'id': 3, img: 'https://www.fcbarcelona.com/photo-resources/2024/08/02/1a9dfb4a-fab8-47fe-930b-b1d68058729c/202407_Web_Landing_Widgets_600x892_02_Bar-aland_CAT.jpg?width=300&height=446', title: 'BARCELAND'},
        {'id': 4, img: 'https://www.fcbarcelona.com/photo-resources/2024/08/02/89c70133-fb82-48f5-91dd-6b37a2a8586b/202407_Web_Landing_Widgets_600x892_02_B-squet_CAT.jpg?width=300&height=446', title: 'BASKATE'},
        {'id': 5, img: 'https://www.fcbarcelona.com/photo-resources/2024/08/02/e08dba01-f583-4d1b-8bc8-8babffadfd45/202407_Web_Landing_Widgets_600x892_01_Femen-_CAT.jpg?width=300&height=446', title: "WOMEN'S FOOTBALL"},
        {'id': 6, img: 'https://www.fcbarcelona.com/photo-resources/2024/08/02/509bc6f6-ad2d-4e5a-bafb-9d1fae59c3d7/202407_Web_Landing_Widgets_600x892_01_Futsal_CAT.jpg?width=300&height=446', title: "FUTSAL"},
        {'id': 7, img: 'https://www.fcbarcelona.com/photo-resources/2024/08/02/ac6aa717-28fb-4a05-bb04-29380a496674/202407_Web_Landing_Widgets_600x892_01_Handbol_CAT.jpg?width=300&height=446', title: "HANDBALL"},
        {'id': 8, img: 'https://www.fcbarcelona.com/photo-resources/2024/08/02/6e0e04c8-fd08-45af-980c-8be56b4068b4/202407_Web_Landing_Widgets_600x892_01_Hoquei_CAT.jpg?width=300&height=446', title: "ROLLER HOCKEY"},
    ]

    const scrollRight=()=>{
        document.getElementById("slider").scrollTo({
            left: document.getElementById("slider").scrollLeft - 220,
            behavior: "smooth"
        });
    }

    const scrollLeft=()=>{
        document.getElementById("slider").scrollTo({
            left: document.getElementById("slider").scrollLeft + 220,
            behavior: "smooth"
        });
    }

    return (
        <div className="stories w-100 bg-white m-5 mb-5 rounded-lg">
            <div className="title h-40 flex items-center justify-center">
                <h1 className="font-bold text-4xl">BARCE HISTORIES</h1>
            </div>
            <div className="h-90 relative flex items-center m-5"> 
                <div id="slider" className="w-full h-90 overflow-x-hidden scroll whitespace-nowrap scroll-smooth" style={{paddingTop: '10px'}}>

                {data.map((item)=>{
                    return (
                        <div className="inline-block cursor-pointer hover:scale-105 ease-in-out duration-300 relative" style={{width: '220px', height: '300px', margin: '5px', borderRadius: '8px'}}>
                            <img key={item.id} src={item.img} className="w-full h-full" style={{borderRadius: '8px'}} alt="" />
                            <div className=" absolute w-full h-full top-0 left-0 bg-red-300 opacity-0 z-10 transition-opacity duration-300 hover:opacity-40" style={{background: 'linear-gradient(180deg, rgba(27,22,171,0.5578606442577031) 0%, rgba(0,0,0,0.5886729691876751) 57%)', borderRadius: '8px'}}></div>
                            <h1 className="absolute text-white font-bold z-20 text-1xl" style={{top: '80%', left: '15px'}}>{item.title}</h1>
                        </div>

                    )
                })}
                </div>
                <button onClick={scrollRight} type="button" className="absolute top-0 start-0 z-10 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
                    </svg>
                    <span className="sr-only">Previous</span>
                </span>
            </button>
            <button onClick={scrollLeft} type="button" className="absolute top-0 end-0 z-10 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                    </svg>
                    <span className="sr-only">Next</span>
                </span>
            </button>
            </div>
        </div>
    )
}

export default Stories;