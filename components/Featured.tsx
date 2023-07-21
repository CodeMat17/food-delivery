import Image from "next/image";

const Featured = () => {
  return (
    <div className='w-screen overflow-x-scroll text-[#f90057]'>
      {/* wrapper */}
      <div className="w-max flex">
        {/* single item */}
        <div className="w-screen h-[40vh] flex flex-col items-center justify-around">
          {/* image container */}
          <div className='relative'>
            <Image alt='' src='' fill />
          </div>
          {/* text container */}
          <div>
            <h1>Title</h1>
            <p>Desc</p>
            <span>123</span>
            <button>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
