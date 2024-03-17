const Cards = () => {
    return(
        <>
         {/* Cards */}
           <div className="gap-5 w-[200px] max-w-sm bg-white border border-gray-200 rounded-[20px] shadow dark:bg-gray-800 dark:border-gray-700">
               <div className="flex justify-end px-4 pt-4">
                   <button id="dropdownButton" data-dropdown-toggle="dropdown" className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
                       <span className="sr-only">Open dropdown</span>
                       <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                           <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>
                       </svg>
                   </button>
                   {/* <!-- Dropdown menu --> */}
                   <div id="dropdown" className="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                       <ul className="py-2" aria-labelledby="dropdownButton">
                       <li>
                           <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Edit</a>
                       </li>
                       <li>
                           <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Export Data</a>
                       </li>
                       <li>
                           <a href="#" className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
                       </li>
                       </ul>
                   </div>
               </div>
               <div class="flex flex-col  pb-10">
                    <p>ABA</p>
                   <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Web Designing</h5>
                   <button className=" py-1 text-center text-sm rounded-lg inline-flex items-center dark:text-blue-500 bg-pink-100 text-red-500">Full Time</button>
                   <hr className="w-full h-px bg-gray-200 border-0 dark:bg-gray-700 mt-5"/>
               </div>
               <div className="flex float-right ml-[10px] mb-5">
                <button className="pb-15 rounded-lg bg-purple-500 px-5 py-1 text-center text-sm font-[30px] text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 flex m-r">See Detail</button>
               </div>
           </div>
       </>

    )
}
export default Cards;