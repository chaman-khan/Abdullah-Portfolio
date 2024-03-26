const Footer = () => {
    return (
        <div className="bg-gray-100 flex justify-evenly"> 
            <div>
                <p>@2023 Abdullah Afzal <span>All Rights Reserved</span></p>
            </div>
            <div className="flex space-x-5">
                <a href="/about" className="hover:underline">About</a>
                <a href="/privacypolicy" className="hover:underline">Privacy Policy</a>
                <a href="/licensing" className="hover:underline">Licensing</a>
                <a href="/contact" className="hover:underline">Contact</a>
            </div>
        </div>
    )
}

export default Footer