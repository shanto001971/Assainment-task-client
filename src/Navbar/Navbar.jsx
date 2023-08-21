import { Link } from "react-router-dom";
import { AiOutlineShoppingCart,AiOutlineUser } from 'react-icons/Ai';
import { CiSearch } from 'react-icons/Ci';
import { BsListUl } from 'react-icons/Bs';


const Navbar = () => {
    return (
        <div className="flex justify-between items-center px-5 p-5">
            <h1 className="text-[#008ECC] font-bold">Rakibul Islam Mart</h1>
            <div className="w-[750px] flex items-center relative">
                <button className="absolute left-4 text-[#008ECC]"><CiSearch /></button>
                <input className=" border-[#008ECC] border-[1px] rounded-md w-full p-2 px-10" type="text" name="" id="" placeholder="Search essentials, groceries and more..."/>
                
                <button className="absolute right-4 text-[#008ECC]"><BsListUl/></button>
            </div>
            
            <div className="flex gap-[20px] list-none">
                <Link><li className="flex items-center gap-1 "><AiOutlineShoppingCart className="text-[#008ECC]"/> Cart</li></Link>
                <Link><li className="flex items-center gap-1"><AiOutlineUser className="text-[#008ECC]"/> Sign Up/Sing In</li></Link>
                <Link><li className="flex items-center gap-1"><AiOutlineUser className="text-[#008ECC]"/> Admin</li></Link>
            </div>
        </div>
    );
};

export default Navbar;