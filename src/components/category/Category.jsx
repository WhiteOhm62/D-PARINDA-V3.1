import { useNavigate } from "react-router";

const category = [
    {
        image: 'https://cdn-icons-png.flaticon.com/256/4359/4359963.png',
        name: 'Fashion',
        id:"fashion"
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/256/11833/11833323.png',
        name: 'Shirt',
        id:"shirt"
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/256/8174/8174424.png',
        name: 'Jacket',
        id:"jacket"
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/256/7648/7648246.png',
        name: 'Mobile',
        id:"mobile"
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/256/12142/12142416.png',
        name: 'Laptop',
        id:"laptop"
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/256/10686/10686553.png',
        name: 'Shoes',
        id:"shoes"
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/256/12114/12114279.png',
        name: 'Home',
        id:"home"
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/256/11946/11946316.png',
        name: 'Books',
        id:"books"
    }
]


const Category = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className="flex flex-col  bg-blue-50 -mt-2">
                <div className="flex overflow-x-scroll lg:justify-center  hide-scroll-bar mt-3 mb-2">
                    <div className="flex ">
                        {category.map((item, index) => {
                            return (
                                <div key={index} className="px-3 lg:px-10">
                                    <div onClick={() => navigate(`/category/${item.id}`)} className=" w-16 h-16 lg:w-24 lg:h-24 max-w-xs rounded-full  bg-blue-500 transition-all hover:bg-blue-400 cursor-pointer mb-1 "  >
                                        <div className="flex justify-center mb-12">
                                            <img src={item.image} alt="img" />
                                        </div>
                                    </div>

                                    <h1 className=' text-sm lg:text-lg text-center font-medium title-font '>{item.name}</h1>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

             {/* style  */}
             <style dangerouslySetInnerHTML={{ __html: ".hide-scroll-bar {  -ms-overflow-style: none;  scrollbar-width: none;}.hide-scroll-bar::-webkit-scrollbar {  display: none;}" }} />
        </div>
    );
}

export default Category;