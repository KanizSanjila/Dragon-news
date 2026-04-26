import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const RightSidebar = () => {
    return (
         <div>
          <h1 className="p-1 font-bold text-xl">Login With</h1>
            <div className='flex flex-col gap-3 mt-3'>
              <button className='btn border-blue-400 text-blue-400 p-2 '><FaGoogle />Login with Google</button>
              <button className='btn border-black p-2'><FaGithub />Login with Github</button>
            </div>  
        </div>
    );
};

export default RightSidebar;