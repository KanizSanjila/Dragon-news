import { getNewsDetailsById } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';

export const generateMetadata =async ({params}) => {
    const {id} = await params
    const news = await getNewsDetailsById(id)
// console.log(news)
return {
  title: news.title,
  description: news.details,
}
};

const NewsDetailsPage =async ({params}) => {
    const {id} = await params
    // console.log('id',id)
const news = await getNewsDetailsById(id)
console.log(news)
    return (
        <div className='max-w-5xl mx-auto my-8'>
            <h3 className='font-bold'>Dragon News</h3>
  <div className="card-body">
     <figure>
    <Image src={news.image_url} alt={news.author.name} width={300} height={300} className='w-full'></Image>
  </figure>
  <p>{news.details}</p>
  <div className='mb-1 pb-2 border-b'>
    <Link href={`/category/${news.category_id}`}>
    <button className='btn bg-pink-700 text-white'><FaArrowLeft/>All news in this category</button>
    </Link>
  </div>
  </div>
</div>
    );
};

export default NewsDetailsPage;