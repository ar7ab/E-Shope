import ManCategoryImg from '../../assets/man.png'
import WomanCategoryImg from '../../assets/woman.png'
import KidCategoryImg from '../../assets/kid.png'
const categories = [
    {
        title: 'Men',
        imageUrl: ManCategoryImg
    },
    {
        title: 'Women',
        imageUrl: WomanCategoryImg
    },
    {
        title: 'Kids',
        imageUrl: KidCategoryImg
    },
]
const CategorySection = () => {
    return (
        <div className='container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 cursor-pointer'>
            {
                categories.map((category, index) => (
                    <div key={index} className='relative h-64 transform transition-transform duration-300 hover:scale-105'>
                        <img src={category.imageUrl} alt=""
                            className='w-full h-full object-cover rounded-lg' />
                        <div className='absolute top-20 left-12'>
                            <p className='text-xl font-bold'>{category.title}</p>
                            <p className='text-gray-600'>View All</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default CategorySection