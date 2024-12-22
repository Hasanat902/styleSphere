const MultipleBanner = () => {
  return (
    <div className="bg-gray-100">
      <div className="grid grid-cols-1 px-4 md:px-0 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-6 max-w-7xl mx-auto">
        {/* 1st banner */}
        <div className="relative h-[250px]">
          <img
            src="https://images.pexels.com/photos/6051248/pexels-photo-6051248.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="New Arrivals"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
          <div className="absolute inset-0 bg-gray-800 rounded-lg bg-opacity-50 flex flex-col items-center justify-center">
            <h2 className="text-white text-2xl font-bold">New Arrivals</h2>
            <button className="mt-2 px-3 py-1 bg-white text-green-800 rounded-md shadow hover:bg-gray-200">
              Discover
            </button>
          </div>
        </div>
        {/* 2nd banner */}
        <div className="relative h-[250px]">
          <img
            src="https://images.pexels.com/photos/5650023/pexels-photo-5650023.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Limited Offers"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
          <div className="absolute inset-0 bg-blue-900 rounded-lg bg-opacity-50 flex flex-col items-center justify-center">
            <h2 className="text-white text-2xl font-bold">Limited Offers</h2>
          </div>
        </div>
        {/* 3rd banner */}
        <div className="relative h-[250px] col-span-1 sm:col-span-2">
          <img
            src="https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Season Sale"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
          <div className="absolute inset-0 bg-yellow-800 bg-opacity-50 flex flex-col items-center justify-center rounded-lg">
            <h2 className="text-white text-4xl font-bold">Season Sale</h2>
            <p className="text-white my-2 text-lg">Up to 70% off</p>
            <button className="text-white bg-yellow-600 hover:bg-yellow-500 px-3 py-2 rounded-md">
              Shop Now
            </button>
          </div>
        </div>
        {/* 4th banner */}
        <div className="relative h-[250px] col-span-1 sm:col-span-2">
          <img
            src="https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Season Sale"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
          <div className="absolute inset-0 bg-orange-800 bg-opacity-50 flex flex-col items-center justify-center rounded-lg">
            <h2 className="text-white text-4xl font-bold">Season Sale</h2>
            <p className="text-white my-2 text-lg">Up to 70% off</p>
            <button className="text-white bg-red-600 hover:bg-red-500 px-3 py-2 rounded-md">
              Shop Now
            </button>
          </div>
        </div>
        {/* 5th banner */}
        <div className="relative h-[250px]">
          <img
            src="https://images.pexels.com/photos/5622859/pexels-photo-5622859.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Limited Offers"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
          <div className="absolute inset-0 bg-blue-900 rounded-lg bg-opacity-50 flex flex-col items-center justify-center">
            <h2 className="text-white text-2xl font-bold">Limited Offers</h2>
          </div>
        </div>
        {/* 6th banner */}
        <div className="relative h-[250px]">
          <img
            src="https://images.pexels.com/photos/4210857/pexels-photo-4210857.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="New Arrivals"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
          <div className="absolute inset-0 bg-gray-800 rounded-lg bg-opacity-50 flex flex-col items-center justify-center">
            <h2 className="text-white text-2xl font-bold">New Arrivals</h2>
            <button className="mt-2 px-3 py-1 bg-white text-green-800 rounded-md shadow hover:bg-gray-200">
              Discover
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultipleBanner;
