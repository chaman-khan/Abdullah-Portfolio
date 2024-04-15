import abd from '../assets/Abdullah2.jpg'
const ContactMeScreen = () => {
    return(
        <div className="px-20">
            <div className='flex'>
                <div className='w-full'>
                    <h2 className='my-10'>Social Media Links</h2>
                    <div className="flex-col space-y-6">
                    <div className="flex items-center space-x-6">
                    <div className="flex flex-wrap justify-center">
                    <a className='w-11 h-11 no-underline bg-blue-900 hover:bg-orange-600 cursor-pointer rounded-full flex justify-center items-center'>
                        <i className="fa-brands fa-facebook text-2xl text-white" />
                        </a>
                    </div>
                        <h5 className="text-blue-900">Contact Me on FaceBook</h5>
                    </div>
                    <div className="flex items-center space-x-6">
                    <div className="flex justify-center">
                    <a className='w-11 h-11 no-underline hover:bg-orange-600 cursor-pointer bg-red-600 rounded-full flex justify-center items-center'>
                        <i className="fa-brands fa-square-instagram text-2xl text-white" />
                        </a>
                    </div>
                        <h5 className="text-red-600">Contact Me on Instagram</h5>
                    </div>
                    
                    <div className="flex items-center space-x-6">
                    <div className="flex justify-center">
                    <a className='w-11 h-11 no-underline hover:bg-orange-600 cursor-pointer bg-blue-600 rounded-full flex justify-center items-center'>
                        <i className="fa-brands fa-twitter text-2xl text-white" />
                        </a>
                    </div>
                        <h5 className="text-blue-600">Contact Me on Twitter</h5>
                    </div>
                    <div className="flex items-center space-x-6">
                    <div className="flex justify-center">
                    <a className='w-11 h-11 no-underline hover:bg-orange-600 cursor-pointer bg-blue-700 rounded-full flex justify-center items-center'>
                        <i className="fa-brands fa-linkedin text-2xl text-white" />
                        </a>
                    </div>
                        <h5 className="text-blue-700">Contact Me on LinkedIn</h5>
                    </div>
                    <div className="flex items-center space-x-6">
                    <div className="flex justify-center">
                    <a className='w-11 h-11 no-underline hover:bg-orange-600 cursor-pointer bg-gray-950 rounded-full flex justify-center items-center'>
                        <i className="fa-brands fa-github text-2xl text-white" />
                        </a>
                    </div>
                        <h5 className="text-black">Contact Me on Github</h5>
                    </div>
                    </div>
                </div>
                <div className='w-full my-10 space-y-10'>
                <div className='flex justify-center'>
                <div className='bg-black' style={{width: 300, height: 300, borderRadius: 150, overflow: 'hidden'}}>
                    <img src={abd} style={{width: '100%', height: '100%'}} />
                </div>
                </div>
                <div className='flex space-x-7 justify-center'>
                <div className="flex space-x-3 items-center">
                        <i class="fa-solid fa-phone text-2xl"></i>
                        <span className=" text-2xl">+92 320 2230867</span>
                    </div>
                    <div className="flex space-x-3 items-center">
                     <i class="fa-brands fa-whatsapp text-2xl"></i>
                        <span className=" text-2xl">+92 320 2230867</span>
                    </div>
                </div>
                </div>
            </div>
            <hr />
            <div>
                {/* <form action="">
                    <input type="text" name="" id="" className='border-2 p-1'/>
                </form> */}
            </div>
           
        </div>
    )
}

export default ContactMeScreen