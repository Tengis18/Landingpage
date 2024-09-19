export const Card = () => {
  return (
    <div className="w-full  flex justify-center ">
      <div className="container h-[233px] items-center  carousel rounded-box ">
        <div className="w-[1130px] h-[233px] flex justify-between items-center bg-white rounded-[10px] ml-32">
          <div className="ml-20">
            <p className="text-[36px] font-bold w-[371px]">
              Subscribe Now for Get Special Features!
            </p>
            <p>Let's subscribe with us and find the fun.</p>
          </div>
          <div className="w-[250px] flex items-center  justify-center h-[60px] bg-[#F53838] mr-20 shadow-xl rounded-[10px]">
            <button className="text-[16px] font-bold text-white ">
              Subscribe Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
