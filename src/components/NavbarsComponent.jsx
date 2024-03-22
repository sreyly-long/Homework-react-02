const NavbarsComponent = () => {
    return (
        <section>
            <nav className="mt-[60px] border-gray-200 dark:bg-gray-900">
                    <div className="  hidden  md:flex md:w-auto md:order-1" id="navbar-user">
                        <ul className="m-5 gap-4 font-medium md:p-0  border  rounded-lg  md:space-x-8  md:flex-row md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li className="pl-8 ">
                                <i className="fa-solid fa-house   "></i>
                            </li>
                            <li className="pt-[20px]">
                                <i className="fa-solid fa-user"></i>   
                            </li>
                            <li className="pt-[20px]">
                                 <i className="fa-solid fa-message"></i>
                            </li>
                            <li className="pt-[20px]">
                                <i className="fa-solid fa-graduation-cap"></i>
                            </li>
                            <li className="pt-[20px]" >
                                <i className="fa-solid fa-clock"></i>
                            </li>
                            <li className="pt-[20px]">
                                <i className="fa-solid fa-gear"></i>
                            </li>
                        
                        </ul>
                    </div>
            </nav>

        </section>
    )
}
export default NavbarsComponent;
