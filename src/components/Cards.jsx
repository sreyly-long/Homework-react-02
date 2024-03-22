const Cards = ({ title, company, type, date }) => {
    const typeToColor = {
        'Full Time': 'bg-pink-200 text-red-500 hover:bg-pink-300',
        'Part Time': 'bg-purple-200 text-purple-500 hover:bg-purple-300',
        'Freelance': 'bg-yellow-200 text-black-500 hover:bg-yellow-300',
    };
    return (
        <>
            <section className="grid grid-12 cols-md-3 cols-lg6">
                <div className="gap-5 w-[200px] max-w-[200px] bg-white border border-gray-200 rounded-[20px] shadow dark:bg-gray-800 dark:border-gray-700">
                    <div className="flex pt-4 justify-between">
                        <small className="font-small mt-2 text-gray-500 ml-2">{date}</small>
                        <button
                            className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
                            type="button"
                        >
                            <span className="sr-only">Open dropdown</span>
                            <svg
                                className="w-5 h-5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 16 3"
                            >
                                <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                            </svg>
                        </button>
                    </div>
                    <div className="flex flex-col pb-10 ml-2 mt-2">
                        <p className="text-gray-800">{company}</p>
                        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                            <b>{title}</b>
                        </h5>
                        <button className={`flex ${typeToColor[type]}   px-1 rounded w-[50%] `}>{type}</button>
                        <hr className="w-full h-px bg-gray-200 border-0 dark:bg-gray-700 mt-5" />
                    </div>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-[60%] text-sm p-2 float-right mb-3 mr-3">
                        See Detail
                    </button>
                </div>
            </section>
        </>
    );
};

export default Cards;
