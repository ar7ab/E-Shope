import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    let year = new Date().getFullYear();

    return (
        <footer className="bg-gray-800 text-white py-8 px-4 md:px-16 lg:px-24">
            <div className="container mt-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <h3 className="text-xl font-semibold">E-Shope</h3>
                    <p className="mt-4">
                        Your one-stop for all your needs.
                        Shop with us and experience the best online shopping experience.
                    </p>
                </div>
                <div className="flex flex-col md:items-center">
                    <h4 className="text-lg font-semibold">Quick Links</h4>
                    <ul className="mt-4 space-y-2">
                        <li>
                            <Link to='/' className="hover:text-red-600 transition-all ease-linear duration-100">Home</Link>
                        </li>
                        <li>
                            <Link to='/shop' className="hover:text-red-600 transition-all ease-linear duration-100">Shop</Link>
                        </li>
                        <li>
                            <Link to='/contact' className="hover:text-red-600 transition-all ease-linear duration-100">Contact</Link>
                        </li>
                        <li>
                            <Link to='/about' className="hover:text-red-600 transition-all ease-linear duration-100">About</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-xl font-semibold">Follow us</h4>
                    <div className="flex space-x-4 mt-4">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 text-xl"><FaFacebook /></a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 text-xl"><FaTwitter /></a>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 text-xl"><FaGithub /></a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 text-xl"><FaLinkedin /></a>
                    </div>
                    <form className="flex items-center justify-center mt-8">
                        <input type="email" placeholder="Enter Email"
                            className="w-full outline-none p-2 rounded-l-lg bg-gray-800 border border-gray-600" />
                        <button className="bg-red-600 text-white px-4 py-2 rounded-r-lg border border-red-600">Subscribe</button>
                    </form>
                </div>
            </div>
            <div className="mt-8 border-t border-gray-700 pt-4">
                <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                    <p>&copy; {year} E-Shope. All rights reserved.</p>
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <a href="#" className="hover:text-red-600 transition-all ease-linear duration-100">Privacy Policy</a>
                        <a href="#" className="hover:text-red-600 transition-all ease-linear duration-100">Terms & Conditions</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
