import Beat from "./Beat.tsx";

function SearchBar() {
    return (
        <>
            <div className="relative flex flex-col items-center justify-center h-screen bg-cover bg-center"
                 style={{backgroundImage: "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('./src/assets/background.gif')"}}>

                <h2 className="bg-transparent relative z-10 text-white mb-7 text-8xl font-bold hover:animate-pulse mt-20 max-w-4xl max-h-sm">
                    Buy my beats here
                </h2>
                <form className="bg-transparent relative z-10 flex w-full max-w-4xl">
                    <input
                        type="search"
                        placeholder="Search by tag, bpm or name"
                        className="flex-initial p-4 w-full bg-black border-4 border-solid border-gray-700 hover:border-red-900 text-white font-medium"
                    />
                </form>
                <Beat/>
            </div>
        </>
    )
}

export default SearchBar;
