export const Header = () => {
  return (
    <div className="w-full flex justify-center pt-[20px]">
      <div className="container flex justify-between h-[45px]">
        <div className="flex items-center">
          <img width={150} height={36} src="./Logo.png" alt="" />
        </div>
        <div className="flex gap-[50px] items-center ">
          <button>
            <a href="#Haeder">About</a>
          </button>
          <button>
            <a href="#Costomer">Feateres</a>
          </button>
          <button>
            <a href="#Midell">Pricing</a>
          </button>
          <button>
            <a href="#Contact">Testimonials</a>
          </button>
          <button>
            <a href="#Footer">Help</a>
          </button>
        </div>
        <div className="flex gap-[20px] items-center">
          <div className="btn btn-ghost rounded-[30px] hover:bg-red-500 hover:text-white hover:w-[150px]   hover:font-bold hover:flex justify-center ">
            Sign in
          </div>

          <button className="w-[150px] border border-red-500 text-red-500  font-bold flex justify-center rounded-[30px] hover:bg-red-500 hover:text-white">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};
