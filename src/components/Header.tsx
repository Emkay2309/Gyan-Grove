import { FaHeart } from "react-icons/fa";

const Header = () => {
    return (
        <div className="bg-[#ffffff] ">
            <h1 className="text-[#CF2D2D] text-xl  font-bold">BookUsNow</h1>
            <button className="bg-black text-white text-semibold w-1/10">Catogories</button>
            <input className="border-[#B0BABF] border-2  rounded-md w-1/3" placeholder="Type..."></input>
            <FaHeart />
            <p>Favorites</p>
            <button className="border-[#B0BABF] border-2  rounded-md w-1/10 text-[#989090]">Sign In</button>
        </div>
    )
}
export default Header;