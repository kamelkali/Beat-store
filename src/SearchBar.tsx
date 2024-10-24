function SearchBar(){
    return (
        <>

            <div
                className="flex flex-col items-center justify-center bg-[url('./src/assets/background.gif')] bg-cover bg-center h-screen">
                <h2 className={"text-white mb-5 text-7xl mx-8 font-bold"}>By my beats here</h2>
                <form className="w-full max-w-5xl">
                    <div>

                        <input
                            type="search"
                            placeholder="Search by tag, bpm or name"
                            className="w-full bg-black border-chart-3 border-gray-400 text-white rounded-lg"
                        />
                    </div>
                </form>
            </div>

        </>
    )
}

export default SearchBar