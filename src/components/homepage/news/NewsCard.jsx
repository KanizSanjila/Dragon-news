import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CiBookmark, CiShare2 } from 'react-icons/ci';
import { FaStar } from 'react-icons/fa';
import { IoEye } from 'react-icons/io5';

const NewsCard = ({n}) => {
    // console.log(n)

    return (
        <div className="card bg-base-100 shadow-sm">
  <div className="card-body">
    <div className='flex justify-between items-center bg-[#F3F3F3] p-4'>
        <div className='flex gap-1 items-center'>
            <Image src={n.author.img} alt={n.author.name} width={40} height={40} className='rounded-full'></Image>
            <div>
               <h2 className='font-semibold'>{n.author.name}</h2>
            <p className='text-xs'>{n.author.published_date}</p>
            </div>
        </div>
        <div className='flex '>
            <CiBookmark />
            <CiShare2 />
        </div>
    </div>
    <h2 className="card-title">{n.title}</h2>
     <figure>
    <Image src={n.image_url} alt={n.author.name} width={300} height={300} className='w-full'></Image>
  </figure>
  <p className='line-clamp-3'>{n.details}</p>
  <div className='mb-1 pb-2 border-b'>
    <Link href={`/news/${n._id}`}>
    <button className='btn bg-blue-400 text-white'>See Details</button>
    </Link>
  </div>
    <div className='flex justify-between'>
        <div className='flex justify-between items-center gap-1'>
             <FaStar className='text-amber-300' />
             <FaStar className='text-amber-300' />
             <FaStar className='text-amber-300' />
             <FaStar className='text-amber-300' />
             <FaStar className='text-amber-300' />
            <h2>{n.rating.number}</h2>
        </div>
        <div className='flex justify-between items-center gap-2'>
           <IoEye />
           <h2>{n.total_view}</h2>
        </div>
    </div>
  </div>
 
</div>
    );
};

export default NewsCard;