'use client';
import Link from 'next/link';
import { useForm } from 'react-hook-form';

const LoginPage = () => {
      const { register, handleSubmit,watch,formState: { errors }} = useForm()
    const handleLoginFunc = (data) => {
       console.log(data)
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
  <input name='password' type="password" className="input" placeholder="Enter your password" {...register("password" , { required: "This field is required" })}/>
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