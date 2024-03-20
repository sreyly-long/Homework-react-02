import { useState } from "react";

const ClienComponent = (props) => {
    const { name, description, profiles } = props
    return (
        <section>
            <div className=" bg-white border border-gray-200 rounded-md shadow  dark:bg-gray-800 dark:border-gray-700">
                <div className="flex items-center justify-between mb-2">
                    <h5 className="text-[10px] font-bold leading-none text-gray-900 dark:text-white">{name}</h5>
                    <a href="#" className="text-[10px] font-medium hover:underline pr-2">
                        <i className="fa-solid fa-star"></i>
                    </a>
                </div>
                <div className="flow-root">
                    <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                        <li>
                            <div className="flex items-center">
                                <div className="flex-shrink-0">
                                    <img className="w-8 h-8 rounded-full" src={profiles} alt="Neil image" />
                                </div>
                                <div className="flex-1 ms-4">
                                    <p className="text-[10px] text-gray-500 dark:text-gray-400 mb-[10px]">
                                        {description}
                                    </p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>


    )
}
export default ClienComponent;