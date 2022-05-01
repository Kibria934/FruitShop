import React from 'react';
import'./Footer.css'
import { AiOutlineHome } from 'react-icons/ai';
import { IoMdPhonePortrait } from 'react-icons/io';
import { HiOutlineMail } from 'react-icons/hi';

const Footer = () => {
    const date = new Date()
    const year = date.getFullYear()
    return (
        <div >
           <div className='foot-container sticky-bottom'>
               <div className='text-white'>
                   <h5>Information</h5>
                   <ul>
                       <li className='texts'>New Products</li>
                       <li className='texts'>Top Products</li>
                       <li className='texts'>Our Blogs</li>
                       <li className='texts'>About our wearhouse</li>
                       <li className='texts'>About us</li>
                   </ul>
               </div>
               <div className='text-white mt-2'>
                   <h5>Contact us</h5>
               <p className='texts'><span className='texts-primary fs-4 m-1 p-1'><AiOutlineHome/></span> Bangladesh,Dhaka,Gazipur</p>
               <p className='texts'><span className='texts-primary fs-4 m-1 p-1'><IoMdPhonePortrait/></span> +880146388800</p>
               <p className='texts'><span className='texts-primary fs-4 m-1 p-1'><HiOutlineMail/></span> fruit999@gamil.com</p>
               </div>
           </div>
           <div className='f-bottom texts-white'>
              &copy; copyright Fruit Shop.  All right reserve Fruit Shop.{year}
           </div>
        </div>
    );
};

export default Footer;