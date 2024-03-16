const NavbarsComponent = () => {
    return (
        <section>
            <nav className="bg-white border-gray-200 dark:bg-gray-900">
                    <div className="  hidden  md:flex md:w-auto md:order-1" id="navbar-user">
                        <ul className="font-medium md:p-0  border border-gray-100 rounded-lg bg-gray-50 md:space-x-8  md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li className="pl-8">
                                <i className="fa-solid fa-house"></i>
                            </li>
                            <li>
                                <i className="fa-solid fa-user"></i>   
                            </li>
                            <li>
                                 <i className="fa-solid fa-message"></i>
                            </li>
                            <li>
                                <i className="fa-solid fa-graduation-cap"></i>
                            </li>
                            <li>
                                <i className="fa-solid fa-clock"></i>
                            </li>
                            <li>
                                <i className="fa-solid fa-gear"></i>
                            </li>
                        </ul>
                    </div>
            </nav>

        </section>
    )
}
export default NavbarsComponent;
