export const Header = () => {
  return (
    <div className="w-full flex justify-center pt-[20px]">
      <div className="container flex justify-between h-[45px]">
        <div className="flex items-center">
          <img width={150} height={36} src="./Logo.png" alt="" />
        </div>
        <div className="flex gap-[50px] items-center ">
          <p>About</p>
          <p>Feateres</p>
          <p>Pricing</p>
          <p>Testimonials</p>
          <p>Help</p>
        </div>
        <div className="flex gap-[20px] items-center">
          <div className="btn btn-ghost rounded-[30px]">Sign in</div>
          <div className="w-[150px] border border-red-500 text-red-500  font-bold flex justify-center rounded-[30px] ">
            Sign up
          </div>
        </div>
      </div>
    </div>
  );
};
