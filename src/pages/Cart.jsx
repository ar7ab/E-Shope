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
    const navigate = useNavigate()

    return (
        <div className="container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24">
            {cart.products.length > 0 ? (
                <div>
                    <h3 className="text-3xl font-semibold mb-6 text-gray-700">SHOPPING CART</h3>
                    <div className="flex flex-col md:flex-row justify-between space-y-8 md:space-x-10 mt-8">
                        {/* Product List */}
                        <div className="md:w-2/3">
                            <div className="flex justify-between border-b items-center mb-6 text-xs font-bold text-gray-600">
                                <p>PRODUCTS</p>
                                <div className="flex space-x-8">
                                    <p>PRICE</p>
                                    <p>QUANTITY</p>
                                    <p>SUBTOTAL</p>
                                    <p>REMOVE</p>
                                </div>
                            </div>
                            {cart.products.map((product) => (
                                <div
                                    key={product.id}
                                    className="flex items-center justify-between p-4 border-b hover:bg-gray-50 transition"
                                >
                                    <div className="md:flex items-center space-x-4">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="w-16 h-16 object-contain rounded"
                                        />
                                        <div className="flex-1 ml-4">
                                            <h3 className="text-lg font-semibold text-gray-700">{product.name}</h3>
                                        </div>
                                    </div>
                                    <div className="flex space-x-8 items-center">
                                        <p className="text-gray-700">${product.price}</p>
                                        <div className="flex items-center border rounded-lg">
                                            <button className="text-xl font-bold px-2 border-r hover:text-gray-700"
                                                onClick={() => dispatch(decreaseQuantity(product.id))}
                                            >-</button>
                                            <p className="text-lg px-4">{product.quantity}</p>
                                            <button
                                                onClick={() => dispatch(increaseQuantity(product.id))}
                                                className="text-xl px-2 border-l hover:text-gray-700">+</button>
                                        </div>
                                        <p className="text-gray-700">${(product.quantity * product.price).toFixed(2)}</p>
                                        <button
                                            onClick={() => dispatch(removeFromCart(product.id))}
                                            className="text-red-500 hover:text-red-700 transition ease-linear duration-200">
                                            <FaTrash />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Cart Total */}
                        <div className="md:w-1/3 bg-white p-6 rounded-lg shadow-md border border-gray-200">
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
                                    className="text-blue-500 hover:text-blue-700 mt-1 ml-2 text-sm transition">Change Address</button>
                            </div>
                            <div className="flex justify-between mb-6 text-gray-700">
                                <span>Total Price:</span>
                                <span>${cart.totalPrice.toFixed(2)}</span>
                            </div>
                            <button
                                onClick={() => navigate('/chekout')}
                                className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition">
                                Proceed to Checkout
                            </button>
                        </div>
                    </div>
                    <Modal
                        isModalOpen={isModalOpen}
                        setIsModalOpen={setIsModalOpen}
                    >
                        <ChangeAddress setAddress={setAddress} setIsModalOpen={setIsModalOpen} />
                    </Modal>
                </div>
            ) : (
                <div className="flex justify-center mt-10">
                    <img src={EmptyCart} alt="Empty Cart" className="h-96" />
                </div>
            )}
        </div>
    );
};

export default Cart;
