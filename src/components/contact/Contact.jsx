export const Contact = () => {
  return (
    <div className="w-full flex   justify-center  items-center " id="Contact">
      <div className="container h-[650px] items-center ">
        <div className="pt-20 flex justify-center items-center flex-col mt-5">
          <div className="flex flex-col justify-center items-center">
            <p className="text-[35px] font-bold w-[384px] h-[100px] flex justify-center   text-center  ">
              Huge Global Network of Fast VPN
            </p>
            <p className="mt-5 w-[555px] flex justify-center text-center ">
              See LaslesVPN everywhere to make it easier for you when you move
              locations.
            </p>
            <img
              src="./world.png"
              alt=""
              className="mt-[100px] w-[1060px] h-[537px]"
            />
            <div className="w-[1135px] h-[208px] flex justify-between items-center pt-20">
              <img src="./NETFLIX.png" alt="" className="w-[200px] h-[112px]" />
              <img src="./reddit.png" alt="" className="w-[190px] h-[60px]" />
              <img src="./AMAZON.png" alt="" className="w-[277px] h-[208px]" />
              <img src="./dicord.png" alt="" className="w-[187px] h-[63px]" />
              <img src="./Spotify.png" alt="" className="w-[171px] h-[52px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
