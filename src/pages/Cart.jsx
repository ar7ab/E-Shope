import { useDispatch, useSelector } from "react-redux";
import { FaTrash } from "react-icons/fa";
import EmptyCart from '../assets/emptycart.png';
import { useState } from "react";
import Modal from "../components/Modal/Modal";
import ChangeAddress from "../components/ChangeAddress/ChangeAddress";
import { removeFromCart, increaseQuantity, decreaseQuantity } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";

const Cart = () => {
    const cart = useSelector((state) => state.cart);
    const [address, setAddress] = useState("main street, 0012");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8 min-h-96 overflow-x-hidden">
            {cart.products.length > 0 ? (
                <div>
                    <h3 className="text-3xl font-semibold mb-6 text-gray-700">SHOPPING CART</h3>
                    <div className="flex flex-col sm:flex-row justify-between space-y-8 sm:space-x-10 mt-8">
                        {/* Product List */}
                        <div className="sm:w-full md:w-2/3">
                            <div className="flex justify-between border-b items-center mb-6 text-xs font-bold text-gray-600">
                                <p>PRODUCTS</p>
                                <div className="flex space-x-4 sm:hidden">
                                    <p>PRICE</p>
                                    <p>QUANTITY</p>
                                    <p>SUBTOTAL</p>
                                    <p>REMOVE</p>
                                </div>
                            </div>

                            {/* Mapping over products */}
                            {cart.products.map((product) => (
                                <div
                                    key={product.id}
                                    className="flex flex-col sm:flex-row items-center justify-between p-4 border-b hover:bg-gray-50 transition max-w-full"
                                >
                                    {/* Product Info (Image, Name) */}
                                    <div className="flex items-center space-x-4 mb-4 sm:mb-0">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="w-20 h-20 object-contain rounded max-w-full" // Resize image for mobile
                                        />
                                        <div className="flex-1 ml-4">
                                            <h3 className="text-lg font-semibold text-gray-700 truncate">{product.name}</h3>
                                        </div>
                                    </div>

                                    {/* Price, Quantity, Subtotal */}
                                    <div className="flex items-center justify-between space-x-4 text-sm sm:flex-row flex-col">
                                        <p className="text-gray-700">${product.price}</p>

                                        {/* Quantity Control */}
                                        <div className="flex items-center border rounded-lg">
                                            <button
                                                className="text-xl font-bold px-2 border-r hover:text-gray-700"
                                                onClick={() => dispatch(decreaseQuantity(product.id))}
                                            >
                                                -
                                            </button>
                                            <p className="text-lg px-4">{product.quantity}</p>
                                            <button
                                                onClick={() => dispatch(increaseQuantity(product.id))}
                                                className="text-xl px-2 border-l hover:text-gray-700"
                                            >
                                                +
                                            </button>
                                        </div>

                                        {/* Subtotal */}
                                        <p className="text-gray-700">${(product.quantity * product.price).toFixed(2)}</p>

                                        {/* Remove Button */}
                                        <button
                                            onClick={() => dispatch(removeFromCart(product.id))}
                                            className="text-red-500 hover:text-red-700 transition ease-linear duration-200"
                                        >
                                            <FaTrash />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Cart Total */}
                        <div className="sm:w-full md:w-1/3 bg-white p-6 rounded-lg shadow-md border border-gray-200">
                            <h3 className="text-lg font-semibold mb-4 text-gray-700">CART TOTAL</h3>
                            <div className="flex justify-between mb-4 border-b pb-2 text-sm text-gray-600">
                                <span>Total Items:</span>
                                <span>{cart.totalQuantity}</span>
                            </div>
                            <div className="mb-4 border-b pb-3 text-gray-600">
                                <p>Shipping:</p>
                                <p className="ml-2">
                                    Shipping to:{" "}
                                    <span className="font-semibold text-gray-700">{address}</span>
                                </p>
                                <button
                                    onClick={() => setIsModalOpen(true)}
                                    className="text-blue-500 hover:text-blue-700 mt-1 ml-2 text-sm transition"
                                >
                                    Change Address
                                </button>
                            </div>
                            <div className="flex justify-between mb-6 text-gray-700">
                                <span>Total Price:</span>
                                <span>${cart.totalPrice.toFixed(2)}</span>
                            </div>
                            <button
                                onClick={() => navigate('../checkout')}
                                className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition"
                            >
                                Proceed to Checkout
                            </button>
                        </div>
                    </div>

                    {/* Modal for Changing Address */}
                    <Modal
                        isModalOpen={isModalOpen}
                        setIsModalOpen={setIsModalOpen}
                    >
                        <ChangeAddress setAddress={setAddress} setIsModalOpen={setIsModalOpen} />
                    </Modal>
                </div>
            ) : (
                <div className="flex justify-center mt-10">
                    <img src={EmptyCart} alt="Empty Cart" className="h-80 sm:h-96 object-contain max-w-full" />
                </div>
            )}
        </div>
    );
};

export default Cart;
