import Link from "next/link";


const LeftSidebar = ({categories,isActiveId}) => {
    return (
        <div>
          <h1 className="p-1 font-bold text-xl">All Category</h1>
            <div>
              <ul className="flex flex-col gap-3 text-center">
                {categories.news_category.map(category=><li key={category.category_id} category={category} className={`${isActiveId==category.category_id && "bg-blue-600 text-white"} text-[#9F9F9F] p-1 rounded`}><Link href={`/category/${category.category_id}`} className="block">{category.category_name
}</Link></li>)}
              </ul>
            </div>  
        </div>
    );
};

export default LeftSidebar;