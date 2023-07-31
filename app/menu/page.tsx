import { menu } from "@/data";
import Link from "next/link";

const MenuPage = () => {
  return (
    <div className='w-full min-h-[80vh] px-4 py-12 flex flex-col justify-center '>
    <p className="text-center text-2xl font-semibold text-green-500">Menu</p>
      <div className='mt-6 flex flex-col sm:flex-row rounded-xl overflow-hidden max-w-6xl mx-auto text-center'>
        {menu.map((category) => (
          <Link
            href={`/menu/${category.slug}`}
            key={category.id}
            className='w-full h-1/3 sm:h-1/2 bg-cover px-8 py-8 sm:py-16 shadow-xl border border-green-200'
            style={{ backgroundImage: `url(${category.img})` }}>
            <div className={`text-${category.color} w-1/2`}>
              <h2 className='uppercase font-semibold text-2xl text-left'>
                {category.title}
              </h2>
              <p className='text-sm my-4 sm:my-8'>{category.desc}</p>
              <button
                aria-label='menu slug button'
                className={`bg-${category.color} text-green-600 border border-green-600 px-4 py-2 rounded-full`}>
                Explore
              </button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MenuPage;
