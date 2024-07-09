import { useContext, useState } from "react";
import myContext from "../../context/myContext";
import { useNavigate } from "react-router";
import { Search } from 'lucide-react';


const SearchBar = () => {
    const context = useContext(myContext);
    const { getAllProduct } = context
    // Search State 
    const [search, setSearch] = useState("");

    // Filter Search Data
    const filterSearchData = getAllProduct.filter((obj) => obj.title.toLowerCase().includes(search)).slice(0, 8)

    const navigate = useNavigate();

    return (
        <div className="bg-blue-600">
            {/* search input  */}
            <div className="input flex bg-blue-600 items-center justify-center">
               <div className="flex items-center justify-between bg-gray-200 rounded-lg mb-2 w-80 lg:w-[55%]">
               <input
                    type="text"
                    placeholder='Search products here...'
                    onChange={(e) => setSearch(e.target.value)}
                    className=' placeholder-gray-400 bg-gray-200 rounded-lg px-2 py-2 w-96 lg:w-96 md:w-70 sm:w-50 outline-none text-black'
                />
                 <Search className="mr-3 text-gray-700"/>
               </div>
            </div>

            {/* search drop-down  */}
            <div className=" flex justify-center">
                {search && <div className="block absolute bg-blue-50  w-96 md:w-96 lg:w-[55%] z-50 my-1 rounded-lg px-2 py-2">
                    {filterSearchData.length > 0 ?
                        <>
                            {filterSearchData.map((item, index) => {
                                return (
                                    <div key={index} className="py-2 px-2 cursor-pointer " onClick={() => navigate(`/productinfo/${item.id}`)}>
                                        <div className="flex items-center gap-2 bg-white rounded-lg border-gray-500 border-b-2">
                                            <img className="w-10" src={item.productImageUrl} alt="" />
                                            {item.title}
                                        </div>
                                    </div>
                                )
                            })}
                        </>
                        :
                        <>
                            <div className="flex justify-center items-center ml-5">
                                <h1 className="lg:text-2xl text-gray-600 items-center justify-center flex">No Related Products Found !!!</h1>
                                <img className=" w-20" src="https://cdn-icons-png.flaticon.com/128/10437/10437090.png" alt="img" />
                            </div>
                        </>}
                </div>
                }
            </div>
        </div>
    );
}

export default SearchBar;