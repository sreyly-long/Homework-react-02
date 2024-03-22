import React, { useState } from 'react';

const ClienComponent = ({ img, name, message, date }) => {
    const [starred, setStarred] = useState(false);

    const handleStarClick = () => {
        setStarred(!starred);
    };

    return (
        <div className="max-h-[200px]">
            <div className="bg-white border border-gray-200 rounded-md shadow dark:bg-gray-800 dark:border-gray-700">
                <div className="flex items-center justify-between pt-2">
                    <h5 className="text-[10px] font-bold leading-none text-gray-900 dark:text-white pl-[50px]">{name}</h5>
                    <a href="#" className="text-[10px] font-medium hover:underline pr-2" onClick={handleStarClick}>
                    <i className={`fa-regular fa-star ${starred ? 'fa-solid fa-star' : ''}`}></i>
                    </a>
                </div>
                <div>
                    <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                        <li>
                            <div className="flex items-center">
                                <div className="flex-shrink-0">
                                    <img className="w-7 h-7 rounded-full ml-2 mb-5" src={img} alt="Neil image" />
                                </div>
                                <div className="flex-1 ms-4">
                                    <p className="text-[10px] text-gray-500 dark:text-gray-400 mb-[10px]">
                                        {message}
                                    </p>
                                </div>
                                <p className="text-[10px]">{date}</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ClienComponent;
