const ClienComponent = (props) => {
    const {name, description, profiles} = props
    return (
        <section>
            <div class="w-full max-w-md  bg-white border border-gray-200 rounded-md shadow  dark:bg-gray-800 dark:border-gray-700">
            <div class="flex items-center justify-between mb-2">
                <h5 class="text-[10px] font-bold leading-none text-gray-900 dark:text-white">{name}</h5>
                <a href="#" class="text-[10px] font-medium text-blue-600 hover:underline dark:text-blue-500">
                <i class="fa-solid fa-star"></i>
                </a>
            </div>
            <div class="flow-root">
                <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
                    <li>
                        <div class="flex items-center">
                            <div class="flex-shrink-0">
                                <img class="w-8 h-8 rounded-full" src={profiles} alt="Neil image" />
                            </div>
                            <div class="flex-1 max-w-[149px] ms-4">
                                <p class="text-[8px] text-gray-500 truncate dark:text-gray-400">
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