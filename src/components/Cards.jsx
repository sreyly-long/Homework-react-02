const Cards = (props) => {
    const {title, description,butt} = props
    return(
        <>
         {/* Cards */}
           <div className="gap-5 h-[240px] w-[200px] max-w-[200px] bg-white border border-gray-200 rounded-[20px] shadow dark:bg-gray-800 dark:border-gray-700">
               <div className="flex pt-4 justify-between">
                    <small className="font-small mt-2 text-gray-500 ml-2">12-12-2022</small>
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
               <div class="flex flex-col  pb-10 ml-2 mt-2">
                    <p className="text-gray-800">{title}</p>
                   <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white"><b>{description}</b></h5>
                   <button className="flex">{butt}</button>
                   <hr className="w-full h-px bg-gray-200 border-0 dark:bg-gray-700 mt-5"/>
                   <div>
                <button className=" float-right mt-5 mr-1 rounded-xl bg-purple-500 px-5 p-[10px] text-center text-sm  text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 flex"><small><b>See Detail</b></small></button>
               </div>
               </div>          
           </div>
       </>

    )
}
export default Cards;