import { categories, mockData } from "../assets/mockData"
import HeroImg from '../assets/hero-page.png'
import InfoSection from "../components/InfoSection/InfoSection"
import CategorySection from "../components/CategorySection/CategorySection"
import { setProducts } from "../redux/productSlice"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import ProductCard from "../components/ProductCard/ProductCard"
import Shop from "./Shop"

const Home = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.product)

    useEffect(() => {
        dispatch(setProducts(mockData))
    }, [dispatch])

    return (
        <div>
            <div className="bg-white mt-2 px-4 md:px-16 lg:px-24">
                <div className="container mx-auto py-4 flex flex-col md:flex-row md:space-x-4">
                    <div className="w-full md:w-3/12">
                        <div className="bg-red-600 text-white text-xs font-bold px-2 py-2.5">SHOP BY CATEGORIES</div>
                        <ul className="space-y-4 bg-gray-100 p-3 border">
                            {
                                categories.map((category, index) => (
                                    <li key={index} className="flex items-center text-sm font-medium">
                                        <div className="w-2 h-2 border border-red-500 rounded-full mr-2"></div>
                                        {category}
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="w-full md:w-9/12 mt-4 md:mt-0 h-96 relative">
                        <img src={HeroImg} alt="" className="h-full w-full" />
                        <div className="absolute top-16 left-8">
                            <p className="text-gray-600 mb-4">Code With Ahmed</p>
                            <h2 className="text-3xl font-bold">Welcome to E-Shop</h2>
                            <p className="text-xl mt-2.5 font-bold text-gray-800">MILLIONS + PRODUCTS</p>
                            <button className="bg-red-600 px-8 py-1.5 text-white mt-4 hover:bg-red-700
                            transform transition-transform duration-300 hover:scale-105">
                                SHOP NOW
                            </button>
                        </div>
                    </div>
                </div>
                <InfoSection />
                <CategorySection />

                <div className="container mx-auto py-12">
                    <h2 className="text-2xl font-bold mb-6 text-center">Top Products</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
                        {
                            products.products && products.products.slice(0, 5).map((product, index) => (
                                <ProductCard key={index} product={product} />
                            ))
                        }
                    </div>
                </div>
            </div>
            <Shop />
        </div>

    )
}

export default Home
