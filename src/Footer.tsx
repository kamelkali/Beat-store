function Footer() {
    return (
        <>
            <footer className="footer bg-black text-base-content p-2 flex items-center justify-center">
                <p className="text-white flex items-center gap-1 mt-2 mb-2">
                    Copyright © {new Date().getFullYear()} - coded by
                    <span className="font-bold hover:text-red-700">kamelprd</span> 🌠
                </p>
            </footer>
        </>

    )
}

export default Footer