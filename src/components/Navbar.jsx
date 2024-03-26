import { useState } from "react"
import { Link } from "react-router-dom";

const Navbar = () => {
    const [name, setName] = useState("Abdullah Afzal");
    const [menuLinks, setMenuLinks] = useState([{
        title: 'Home', link: '/home', id: 1
    }, {
        title: 'About', link: '/about', id: 2
    }, {
        title: 'Skills', link: '/skills', id: 3
    }, {
        title: 'Portfolio', link: '/portfolio', id: 4
    }, {
        title: 'Contact', link: '/contact', id: 5
    }])
    return(
        <div className="h-16 main flex justify-between px-16 items-center bg-gray-100">
        <h1 className="text-2xl font-bold">{name}</h1>
      
      <div className="space-x-6">
        {menuLinks.map(link => <Link key={link.id} to={link.link} className=" no-underline text-gray-950 hover:text-orange-600 cursor-pointer">{link.title}</Link>)}
        {/* <a href='/about' className="hover:text-orange-600">About</a>
        <a href='/skills' className="hover:text-orange-600">Skills</a>
        <a href='/portfolio' className="hover:text-orange-600">Portfolio</a>
        <a href='/contact' className="hover:text-orange-600">Contact</a> */}
      </div>
      <button className="px-3 py-2 bg-orange-600 rounded-full text-white">Hire Me</button>
    </div>
    )
}

export default Navbar