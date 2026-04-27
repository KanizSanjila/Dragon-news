'use client';
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import { useForm } from 'react-hook-form';

const RegisterPage =() => {
      const { register, handleSubmit,watch,formState: { errors }} = useForm()
    const handRegisterFunc =async (data) => {
        const {name,email,photo,password} = data
    //    console.log(data)

    const { data:res, error } = await authClient.signUp.email({
    name: name , // required
    email: email, // required
    password: password, // required
    image:photo,
    callbackURL: "/",
});

console.log(res,error)
    }

    
    return (
        <div className='container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100'>
          <div className=' rounded-xl bg-white p-20'>
               <h2 className='font-bold text-2xl text-center'>Register your account</h2>
               <form action="" className='space-y-4' onSubmit={handleSubmit(handRegisterFunc)}>
                <fieldset className="fieldset">
  <legend className="fieldset-legend">Your Name</legend>
  <input name='name' type="text" className="input" placeholder="Enter your name" {...register("name",{ required: "This field is required" })}/>
      {errors.name && <span className='text-red-500 font-semibold'>{errors.name.message}</span>}
  <legend className="fieldset-legend">Photo URL</legend>
  <input name='photo' type="photo" className="input" placeholder="Enter your Photo URL" {...register("photo",{ required: "This field is required" })}/>
      {errors.photo && <span className='text-red-500 font-semibold'>{errors.photo.message}</span>}
  <legend className="fieldset-legend">Email address</legend>
  <input name='email' type="email" className="input" placeholder="Enter your email address" {...register("email",{ required: "This field is required" })}/>
      {errors.email && <span className='text-red-500 font-semibold'>{errors.email.message}</span>}
  <legend className="fieldset-legend">Password</legend>
  <input name='password' type="password" className="input" placeholder="Enter your password" {...register("password" , { required: "This field is required" })}/>
    {errors.password && <span className='text-red-500 font-semibold'>{errors.password.message}</span>}
  <button className="btn bg-black text-white my-5">Register</button>
</fieldset>

               </form>
            </div>  
        </div>
    );
};

export default RegisterPage;