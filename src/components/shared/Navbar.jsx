import Link from 'next/link';
import React from 'react';
import userImg from '@/assets/user.png'
import Image from 'next/image';
import NavLink from './NavLink';

const Navbar = () => {
    return (
        <div className='flex justify-between container mx-auto mt-6'>
            <div></div>
            <div>
                <ul className='pl-20 flex justify-between items-center gap-3 text-[#706F6F]'>
                    <li><NavLink href={'/'}>Home</NavLink></li>
                    <li><NavLink href={'/about'}>About</NavLink></li>
                    <li><NavLink href={'/career'} className={'text-amber-400'}>Career</NavLink></li>
                </ul>
            </div>
            <div className='flex items-center gap-3'>
                <Image src={userImg} alt='user' width={40} height={40}></Image>
                <Link href={'/login'}><button className='btn bg-[#1E1E1E] text-white font-bold'>Login</button></Link>
            </div>
        </div>
    );
};

export default Navbar;