import { ReactTyped } from 'react-typed';
import AbdImage from '../assets/Abdullah.jpeg'
import wallpaper from '../assets/Banner_wallpaper.png';
import Typed from 'typed.js';
import { useEffect, useRef } from 'react';
const Banner = () => {
    const el = useRef(null);

    useEffect(() => {
      const typed = new Typed(el.current, {
        strings: ["React Native Developer", "UI UX Designer", "CEO of CRYPTIX"], 
        startDelay: 200,
        typeSpeed: 40,
        backSpeed: 50,
        backDelay: 100
      });

      return () => {
        typed.destroy();
      };
    }, []);
    return (
        <div style={{backgroundImage : `url(${wallpaper})`, backgroundRepeat: 'no-repeat', backgroundSize: '60%'}} className="main-container flex items-center py-10">
            <div className='w-full flex justify-center'>
                <div className='w-4/5'>
                <h3  className='mt-3 text-3xl font-semibold text-white'>Hi, I am </h3>
                <h1 className='mt-3 text-5xl font-bold text-white'>Abdullah Afzal</h1>
                <h2 className='mt-3 mb-3 text-2xl text-white'>And I am a {" "} <span ref={el} className='font-bold'></span>
                
                </h2>
                <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa unde deserunt minus voluptatem fugit ipsum animi maiores repellendus dolores possimus modi beatae molestias dignissimos eos architecto, in fuga. Asperiores, at molestiae sapiente incidunt fugit ut! Nostrum temporibus, odio cumque provident!</p>
                <div className='flex space-x-3 my-3' >
                <a className='w-11 h-11 hover:bg-orange-600 cursor-pointer bg-gray-800 rounded-full flex justify-center items-center'>
                <i className="fa-brands fa-facebook text-2xl text-white" />
                </a>
                <a className='w-11 h-11 hover:bg-orange-600 cursor-pointer bg-gray-800 rounded-full flex justify-center items-center'>
                <i className="fa-brands fa-square-instagram text-2xl text-white" />
                </a>
                <a className='w-11 h-11 hover:bg-orange-600 cursor-pointer bg-gray-800 rounded-full flex justify-center items-center'>
                <i className="fa-brands fa-twitter text-2xl text-white" />
                </a>
                <a className='w-11 h-11 hover:bg-orange-600 cursor-pointer bg-gray-800 rounded-full flex justify-center items-center'>
                <i className="fa-brands fa-linkedin text-2xl text-white" />
                </a>
                <a className='w-11 h-11 hover:bg-orange-600 cursor-pointer bg-gray-800 rounded-full flex justify-center items-center'>
                <i className="fa-brands fa-github text-2xl text-white" />
                </a>
                </div>  
                <div className='mt-4'>
                <a href="/" className="px-3 py-2 bg-orange-600 rounded-full text-white">Contact Me</a>
                </div>
                </div>
            </div>
            <div className='w-full flex justify-center items-center'>
               <img className='w-2/5 self-center rounded-full shadow-lg' src={AbdImage} />
            </div>
        </div>
    )
}

export default Banner