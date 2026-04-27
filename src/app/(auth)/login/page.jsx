'use client';
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const LoginPage = () => {
    const [isShowPassword,setIsShowPassword] = useState(false)
      const { register, handleSubmit,watch,formState: { errors }} = useForm()
    const handleLoginFunc =async (data) => {
         const {name,email,photo,password} = data
        const { data:res, error } = await authClient.signIn.email({
    email: email, // required
    password: password, // required
    rememberMe: true,
    callbackURL: "/",
});
       console.log(res,error)
    }
    return (
        <div className='container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100'>
          <div className=' rounded-xl bg-white p-20'>
               <h2 className='font-bold text-2xl text-center'>Login your account</h2>
               <form action="" className='space-y-4' onSubmit={handleSubmit(handleLoginFunc)}>
                <fieldset className="fieldset">
  <legend className="fieldset-legend">Email address</legend>
  <input name='email' type="email" className="input" placeholder="Enter your email address" {...register("email",{ required: "This field is required" })}/>
      {errors.email && <span className='text-red-500 font-semibold'>{errors.email.message}</span>}
  <legend className="fieldset-legend">Password</legend>
  <input name='password' type={isShowPassword? "text":"password"} className="input" placeholder="Enter your password" {...register("password" , { required: "This field is required" })}/>
    {errors.password && <span className='text-red-500 font-semibold'>{errors.password.message}</span>}
  <button className="btn bg-black text-white my-5">Login</button>
</fieldset>

               </form>
  <p className='text-center'>Dont’t Have An Account ? <Link href={'/register'} className='text-red-400'>Register</Link></p>
            </div>  
        </div>
    );
};

export default LoginPage;