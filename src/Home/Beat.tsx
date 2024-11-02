function Beat(){
    return(
        <>
            <table className={"bg-zinc-950 border-black rounded mt-4 mx-4 w-5/6 text-center text-white max-w-4xl"}>
                <tbody>
                <tr>
                    <td className={"p-2 w-1"}>
                        <img src={"./src/assets/1.png"} alt={"beat title"} className={"ml-1 h-36 max-h-20 max-w-52"}/>
                    </td>

                    <td className={"w-1/12 max-w-4"}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor"
                             className="ml-3 lbi bi-play-fill" viewBox="0 0 16 16">
                            <path
                                d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393"/>
                        </svg>

                        {/*<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"*/}
                        {/*     className="bi bi-stop-fill" viewBox="0 0 16 16">*/}
                        {/*    <path*/}
                        {/*        d="M5 3.5h6A1.5 1.5 0 0 1 12.5 5v6a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 11V5A1.5 1.5 0 0 1 5 3.5"/>*/}
                        {/*</svg>*/}
                    </td>

                    <td className={"font-bold uppercase text-lg w-1/6"}>
                        cozy
                    </td>

                    <td className={"w-52 lowercase"}>
                        156 BPM
                    </td>

                    <td className={"w-52 lowercase"}>
                        g key
                    </td>




                    <td>
                        <div className="flex flex-col items-center">
                            <button
                                className="flex items-center bg-white text-black py-3 px-3 rounded-md font-bold text-lg space-x-2">
                                <img src="./src/assets/cart.png" alt="beat-title"
                                     className="w-6 h-6 object-contain hidden sm:block"/>
                                <span className="text-base sm:text-lg">30.00$</span>
                            </button>
                        </div>


                    </td>
                </tr>
                </tbody>
            </table>
        </>
    )

}

export default Beat