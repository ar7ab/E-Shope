import { NavLink, Link, useNavigate } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import Modal from '../Modal/Modal'
import Login from '../Login/Login';
import Register from '../Register/Register';
import { setSearchTerm } from '../../redux/productSlice';


const Navbar = () => {
    const [isModelOpen, setIsModelOpen] = useState(false);
    const [isLogin, setIsLogin] = useState(true);
    const [search, setSearch] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(setSearchTerm(search));
        navigate('/filtered-data')
    }

    const openSignUp = () => {
        setIsLogin(false);
        setIsModelOpen(true);
    }

    const openLogin = () => {
        setIsLogin(true);
        setIsModelOpen(true);
    }

    const products = useSelector(state => state.cart.products);
    return (
        <nav className="bg-white shadow-md font-sans">
            <div className="container mx-auto px-4 md:px-16 lg:px-24 py-4 flex justify-between items-center">
                <div className="text-2xl font-bold">
                    <Link to="/">E-Shope</Link>
                </div>
                <div className="relative flex-1 px-4">
                    <form className="relative" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="Search Product"
                            className="w-full border border-gray-300 rounded-md py-2 px-4"
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <button type="submit" className="absolute top-3 right-3 text-red-500">
                            <FaSearch />
                        </button>
                    </form>
                </div>
                <div className="flex items-center space-x-4 relative">
                    <Link to="/cart">
                        <FaShoppingCart className="text-xl" />
                        {products.length > 0 ? <span className='absolute top-0 text-xs w-4 h-4 left-3
                        bg-red-600 rounded-full flex justify-center items-center text-white'>
                            {products.length}
                        </span> : <></>}
                    </Link>
                    <button
                        className="hidden md:block"
                        onClick={() => setIsModelOpen(true)}
                    >
                        Login | Register
                    </button>
                    <button className="block md:hidden"
                        onClick={() => setIsModelOpen(true)}>
                        <FaUser className="text-xl" />

                    </button>
                </div>
            </div>
            <div className="flex items-center justify-center space-x-10 py-4 text-sm font-bold">
                <NavLink
                    to='/'
                    className={({ isActive }) => isActive ? "text-red-500" : "hover:text-red-500"}
                >
                    Home
                </NavLink>
                <NavLink
                    to='/shop'
                    className={({ isActive }) => isActive ? "text-red-500" : "hover:text-red-500"}
                >
                    Shop
                </NavLink>
                <NavLink
                    to='contact'
                    className={({ isActive }) => isActive ? "text-red-500" : "hover:text-red-500"}
                >
                    Contact
                </NavLink>
                <NavLink
                    to='about'
                    className={({ isActive }) => isActive ? "text-red-500" : "hover:text-red-500"}
                >
                    About
                </NavLink>
            </div>
            <Modal isModalOpen={isModelOpen} setIsModalOpen={setIsModelOpen}>
                {isLogin ? <Login openSignUp={openSignUp} /> : <Register openLogin={openLogin} />}
            </Modal>
        </nav>

    )
}

export default Navbar