"use client";
import { authClient } from '@/lib/auth-client';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const RightSidebar = () => {
  const handleGoogleSignin =async () => {
        const data = await authClient.signIn.social({
    provider: "google",
  });
  console.log(data)
}
  const handleGithubSignin =async () => {
        const data = await authClient.signIn.social({
     provider: "github"
  });
  console.log(data)
}
    return (
         <div>
          <h1 className="p-1 font-bold text-xl">Login With</h1>
            <div className='flex flex-col gap-3 mt-3'>
              <button className='btn border-blue-400 text-blue-400 p-2 ' onClick={handleGoogleSignin}><FaGoogle />Login with Google</button>
              <button className='btn border-black p-2' onClick={handleGithubSignin}><FaGithub />Login with Github</button>
            </div>  
        </div>
    );
};

export default RightSidebar;