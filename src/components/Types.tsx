const Types = () => {
    const lists: Array<string> = ["Live shows", "Streams", "Movies", "Plays", "Events", "Sports", "Movies"];
    return (
        <div className="mb-4" >
            <ul  className="flex flex-row justify-evenly items-center text-[#989090] ">
                {
                    lists.map((show) => (
                        <li>
                            {show}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Types