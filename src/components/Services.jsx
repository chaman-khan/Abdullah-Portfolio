const Services = () => {
    return(
        <>
        <div className="main-container pt-16">
        <h1 className="text-center text-4xl font-bold underline">My Services</h1>
        <div className="flex items-center space-x-5 px-8 mt-14 mb-4">
            <div className="service1 space-y-2 bg-slate-200 text-center border p-5 rounded-xl cursor-pointer hover:bg-orange-500 hover:text-white shadow-lg">
            <i class="text-5xl fa-solid fa-globe"></i>
                <h1 className="text-4xl">Web Development</h1>
                <p className="text-balance">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur expedita aliquid odio ullam alias minus totam obcaecati autem voluptatum repellat!</p>
                <button className="px-3 py-1 bg-orange-500 text-2xl rounded-full shadow-lg">Check</button>
            </div>
            <div className="service2 space-y-2 bg-slate-200 text-center border p-5 rounded-xl cursor-pointer hover:bg-orange-500 hover:text-white shadow-lg">
            <i class="text-5xl fa-solid fa-mobile-button"></i>
                <h1 className="text-4xl">App Development</h1>
                <p className="text-balance">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur expedita aliquid odio ullam alias minus totam obcaecati autem voluptatum repellat!</p>
                <button className="px-3 py-1 bg-orange-500 text-2xl rounded-full shadow-lg">Check</button>
            </div>
            <div className="service3 space-y-2 bg-slate-200 text-center border p-5 rounded-xl cursor-pointer hover:bg-orange-500 hover:text-white shadow-lg">
            <i class="text-5xl fa-brands fa-figma"></i>
                <h1 className="text-4xl">UI UX Design</h1>
                <p className="text-balance">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur expedita aliquid odio ullam alias minus totam obcaecati autem voluptatum repellat!</p>
                <button className="px-3 py-1 bg-orange-500 text-2xl rounded-full shadow-lg">Check</button>
            </div>
        </div>
        </div>
        </>
    )
}

export default Services