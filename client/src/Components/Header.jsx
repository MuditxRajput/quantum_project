import React, { useEffect, useState } from 'react';
import { IoMdMenu } from "react-icons/io";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Logo from '../Images/Aktu_Quantum.png';
import { setMobileMenu } from '../Slices/UserSlice';
import HeaderButton from './HeaderButton';
import NavMenu from './NavMenu';
const Header = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const navigate = useNavigate();
    const[isOpen,setIsOpen] = useState(false);
    const dispatch = useDispatch();
    // const toggleMenu = useCallback(()=>{
        
    // },[isOpen])
    const toggleMenu = ()=>{
        setIsOpen(!isOpen);
    }
    useEffect(()=>{
        dispatch(setMobileMenu(isOpen));
        
    },[isOpen,dispatch])
  return (
    <>
    <div className=' m-1 flex   text-white justify-between'>
        <div className='   text-xl sm:text-3xl text-black cursor-pointer' onClick={()=>{navigate('/')}}>
            <img src={Logo} alt='logo' className=' mt-2 ml-1  w-[70px] md:w-[140px]'/>
        </div>
        <div className='flex  sm:w-[700px] justify-evenly items-center  text-md '>
            <NavMenu/>
            {
                user? 
                (<div className=' flex gap-6 text-black'>
                   {/* {user["name"]} */}
                   <HeaderButton text = "Logged out" />
                </div>)
                :<div className=' flex gap-6'>
            <HeaderButton text = "Sign Up"  />
            <HeaderButton text = "Sign In"/>
            </div>
            }
            {/* {
                user && <div className=' flex gap-6'>
                User
                </div>
            } */}
           
            <div className='text-black sm:hidden text-3xl cursor-pointer'>
                <IoMdMenu onClick={toggleMenu}/>
            </div>
          
        </div>
    </div>
       
    </>
    
  )
}

export default Header