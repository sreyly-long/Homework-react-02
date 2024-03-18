import Cards from "./Cards";

const ContentComponent = () => {
    return (
        <section>
            <section className=" gap-10 ">
                {/* <nav className="mt-[60px] bg-white border-gray-200 dark:bg-gray-900">
                    <div className="  hidden  md:flex md:w-auto md:order-1" id="navbar-user">
                        <ul className="m-5 gap-4 font-medium md:p-0  border border-gray-100 rounded-lg bg-gray-50 md:space-x-8  md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li className="pl-8 ">
                                <i className="fa-solid fa-house"></i>
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
                </nav> */}
                <section className="  ">
                    <div className="navbar">
                        <div className="navbar-start">
                            <a className="btn btn-ghost text-xl">Projects</a>
                        </div>
                        <div className="navbar-end">
                            <a className="btn">ADD NEW PROJECT</a>
                        </div>
                    </div>
                    {/* button for finish project */}
                    <section className="gap-5 flex justify-center">
                        <button className="btn bg-violet-200">
                            <i class="fa-solid fa-gift"></i>
                            Finish Project <br />13
                        </button>
                        <button className="btn bg-violet-300">
                            <i class="fa-solid fa-download"></i>
                            Upcoming <br />13
                        </button>
                        <button className="btn bg-pink-400">
                            <i class="fa-solid fa-bars"></i>
                            Total Project <br />13
                        </button>
                        <button className="btn btn-error">
                            <i class="fa-solid fa-spinner"></i>
                            In Progess <br />4
                        </button>
                    </section>
                    <section className="flex mt-5 gap-5 justify-center">
                        <Cards />
                        <Cards />
                        <Cards />

                    </section>
                </section>
            </section>

        </section>


    )
}
export default ContentComponent;