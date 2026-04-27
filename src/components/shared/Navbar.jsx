"use client";
import Link from 'next/link';
import userImg from '@/assets/user.png'
import Image from 'next/image';
import NavLink from './NavLink';
import { authClient } from '@/lib/auth-client';

const Navbar = () => {
    const {data:session,isPending} = authClient.useSession();
    const user = session?.user
    console.log(user)
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
          {isPending?("loading...") : user ? (<div className='flex items-center gap-3'>
                {/* <h2>Hello, {user.name}</h2>
                <Image src={user.image || userImg} alt='user' width={40} height={40}></Image> */}
                <Image src={userImg} alt='user' width={40} height={40}></Image>
                <button className='btn bg-[#1E1E1E] text-white font-bold
                ' onClick={async()=>await authClient.signOut()}>LogOut</button>
            </div>) :
(                <Link href={'/login'}><button className='btn bg-[#1E1E1E] text-white font-bold'>Login</button></Link>)}
        </div>
    );
};

export default Navbar;