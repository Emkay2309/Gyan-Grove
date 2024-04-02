import { FaHeart } from "react-icons/fa";



const Header = () => {
    return (

        <div>
            <div className="bg-[#ffffff] flex justify-between flex-row m-4">
                <h1 className="text-[#CF2D2D] text-xl  font-bold">BookUsNow</h1>
                <button className="bg-black text-white text-semibold w-1/10">Catogories</button>
                <input className="border-[#B0BABF] border-2  rounded-md w-1/3" placeholder="Type..."></input>
                <FaHeart />
                <p>Favorites</p>
                <button className="border-[#B0BABF] border-2  rounded-md w-1/10 text-[#989090]">Sign In</button>
            </div>

            <div>

            </div>

        </div>
    )
}
export default Header;