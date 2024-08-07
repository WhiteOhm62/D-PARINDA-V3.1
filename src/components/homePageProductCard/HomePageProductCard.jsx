import { useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import myContext from "../../context/myContext";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { addToCart, deleteFromCart } from "../../redux/cartSlice";


const HomePageProductCard = () => {
    const navigate = useNavigate();

    const context = useContext(myContext);
    const { getAllProduct } = context;

    const cartItems = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const addCart = (item) => {
        // console.log(item)
        dispatch(addToCart(item));
        toast.success("Added to cart")
    }

    const deleteCart = (item) => {
        dispatch(deleteFromCart(item));
        toast.success("Deleted from cart")
    }

    // console.log(cartItems)

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems])


    return (
        <div className="bg-blue-50 ">
            {/* Heading  */}
            <div className="p-2">
                <h1 className=" text-center mt-7 text-xl font-semibold">Best Selling Products</h1>
            </div>

            {/* main  */}
            <section className="text-gray-600 body-font ">
                <div className="container px-5 py-5 mx-auto">
                    <div className="flex flex-wrap ">
                        {getAllProduct.slice(0, 12).map((item, index) => {
                            const { id, title, price, productImageUrl ,category} = item
                            return (
                                <div key={index} className="flex p-2 w-1/2 lg:w-1/4 ">
                                    <div className="h-full w-full border border-gray-300 rounded-xl overflow-hidden shadow-md cursor-pointer">
                                        <img
                                            onClick={() => navigate(`/productinfo/${id}`)}
                                            className="h-40 w-full lg:h-80 object-fill"
                                            src={productImageUrl}
                                            alt="blog"
                                        />
                                        <div className="p-6">
                                            <h2 className="tracking-widest text-xs title-font font-bold capitalize text-blue-300 mb-1">
                                                {category}
                                            </h2>
                                            <h1 className="title-font text-sm font-medium text-gray-900 mb-3">
                                                {title.substring(0, 25)}
                                            </h1>
                                            <h1 className="title-font text-sm font-bold text-gray-900 mb-3">
                                                ₹{price}
                                            </h1>

                                            <div
                                                className="flex justify-center ">
                                                {cartItems.some((p)=> p.id === item.id) 
                                                
                                                ?
                                                <button
                                                    onClick={() => deleteCart(item)}
                                                    className=" bg-red-700 hover:bg-red-600 w-full text-white py-[4px] rounded-lg font-bold">
                                                    Remove
                                                </button>

                                                : 

                                                <button
                                                    onClick={() => addCart(item)}
                                                    className=" bg-blue-500 hover:bg-blue-600 w-full text-white py-[4px] rounded-lg font-bold">
                                                    Add To Cart
                                                </button>
                                            }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default HomePageProductCard;