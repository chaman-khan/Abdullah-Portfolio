import wallpaper from '../assets/Banner_wallpaper.png';
const Experties = () =>{
    const experties = ["HTML", "CSS", "JAVA", "javaScript", "typeScript", "Mobile App", "Redux", "Redux-toolkit", "Firebase", "Restfull APIs", "API's integration", "Animation"]
    return (
        <div className="main-container py-16">
            <h1 className="text-center text-4xl font-bold underline">My Experties</h1>
            <div style={{backgroundImage : `url(${wallpaper})`,backgroundRepeat: 'no-repeat', backgroundSize: '60%'}} className='flex items-center text-white text-center mt-14'>
                <div className='space-y-4 w-full p-8'>
                    <h1 className='text-4xl font-semibold'>I love these Technologies</h1>
                    <p className='text-balance'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, ut distinctio! Soluta fugiat asperiores incidunt odio harum molestiae dolorem natus.</p>
                    <button className='px-3 py-2 bg-orange-600 rounded-full'>Hire Me</button>
                </div>
                <div className='w-full flex justify-center space-x-3 flex-wrap pl-20'>{experties.map((itm) => <a href='/' className='px-3 py-1 bg-gray-400 rounded-full mb-3 hover:bg-orange-500'>{itm}</a>)}</div>
            </div>
        </div>
    )
}

export default Experties