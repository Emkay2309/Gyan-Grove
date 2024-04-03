import { FaHeart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { CiUser } from "react-icons/ci";

const Header = () => {
    return (
        <div>
            <div className="bg-[#ffffff] flex  justify-around items-center flex-row my-4">
                <h1 className="text-[#CF2D2D] text-xl  font-bold">BookUsNow</h1>
                <div className="flex gap-2 w-1/3">
                    <button className="sm:block hidden w-1/5 bg-black  rounded-lg text-white text-semibold ">Catogories</button>
                    <div className=" w-4/5 flex items-center relative ">
                        <input className="sm:block hidden px-2 py-1 w-full border-[#B0BABF] border-2  rounded-lg " placeholder="Type..."></input>
                        <span className="absolute flex  right-2 "><FaSearch /></span>
                    </div>
                </div>
                <div className="flex w-1/6 items-center justify-evenly">
                    <FaHeart />
                    <p className="sm:block hidden ">Favorites</p>
                    <button className="sm:block hidden border-[#B0BABF] border-2 px-1 rounded-md w-1/10 text-[#989090]">Sign In</button>
                    <CiUser className="sm:block "/>
                </div>
            </div>
        </div>
    )
}
export default Header;