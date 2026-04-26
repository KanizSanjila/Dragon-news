import React from 'react';
import Marquee from 'react-fast-marquee';
const news = [
  {
    _id: "1",
    title: "Breaking News: Major Event Unfolds in the City",
  },
  {
    _id: "2",
    title: "Breaking News: New Policy Announced by the Government",
  },
  {
    _id: "3",
    title: "Breaking News: Sports Team Wins Championship",
  },
];
const BreakingNews = () => {
    return (
        <div className='flex container mx-auto bg-gray-300 p-4 justify-between'>
            <button className='btn text-white bg-[#D72050]'>Latest</button>
            <Marquee pauseOnHover={true} speed={100}>
                {news.map(n=><span key={n.id}>{n.title}</span>)}
            </Marquee>
        </div>
    );
};

export default BreakingNews;