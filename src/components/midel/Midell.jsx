import { MidelIcon } from "@/app/svg/MidelIcon";
import { Costomor } from "./Costomor";

export const Midel = () => {
  return (
    <div className="w-full flex justify-center mt-32 items-center pt-32 bg-slate-50">
      <div className="container  ">
        <div className="flex justify-center ">
          <div className="flex flex-col ">
            <p className="font-bold text-[50px] ml-14">Choose Your Plan</p>
            <p className="pt-5  w-[555px] h-[60px] text-center">
              Let's choose the package that is best for you and explore it
              happily and cheerfully.
            </p>
          </div>
        </div>
        <div className="pt-20 flex gap-20 justify-center">
          <div className="w-[330px] h-[790px] border-2 border-gray-200 bg-white rounded-lg flex-col flex  hover:shadow-2xl hover:border-red-500">
            <img
              src="./Free.png"
              alt=""
              className="w-[144px] h-[165px] mt-10 ml-24"
            />
            <p className="text-[30px] font-bold ml-24 mt-10 ">Free Plan</p>
            <div className="flex  flex-col pt-10">
              <div className=" flex gap-5 ml-16 mt-5">
                <MidelIcon />
                <p>Unlimited Bandwitch</p>
              </div>
              <div className="flex gap-5 ml-16 mt-5 ">
                <MidelIcon />
                <p>Encrypted Connection</p>
              </div>
              <div className="flex gap-5 ml-16 mt-5">
                <MidelIcon />
                <p>No Traffic Logs</p>
              </div>
              <div className="flex gap-5 ml-16 mt-5">
                <MidelIcon />
                <p>Works on All Devices</p>
              </div>
              <p className="text-[30px] font-bold flex justify-center mt-32 ">
                Free
              </p>
              <div className="w-[177px] h-[45px] items-center ml-20 mt-5 border border-red-500 text-red-500 font-bold flex justify-center rounded-[30px]">
                Select
              </div>
            </div>
          </div>

          <div className="w-[330px] h-[790px] border-2 border-gray-200 bg-white rounded-lg hover:shadow-2xl hover:border-red-500">
            <img
              src="./Free.png"
              alt=""
              className="w-[144px] h-[165px] mt-10 ml-24"
            />
            <p className="text-[30px] font-bold ml-16 mt-10 ">Standard Plan</p>
            <div className="flex  flex-col pt-10">
              <div className=" flex gap-5 ml-16 mt-5">
                <MidelIcon />
                <p>Unlimited Bandwitch</p>
              </div>
              <div className="flex gap-5 ml-16 mt-5 ">
                <MidelIcon />
                <p>Encrypted Connection</p>
              </div>
              <div className="flex gap-5 ml-16 mt-5">
                <MidelIcon />
                <p>Yes Traffic Logs</p>
              </div>
              <div className="flex gap-5 ml-16 mt-5">
                <MidelIcon />
                <p>Works on All Devices</p>
              </div>
              <div className="flex gap-5 ml-16 mt-5">
                <MidelIcon />
                <p>Connect Anyware</p>
              </div>
              <p className="text-[30px] font-bold flex justify-center mt-20 ">
                $9 / mo
              </p>
              <div className="w-[177px] h-[45px] items-center ml-20 mt-5 border border-red-500 text-red-500 font-bold flex justify-center rounded-[30px]">
                Select
              </div>
            </div>
          </div>

          <div className="w-[330px] h-[790px] border-2 border-gray-200 bg-white rounded-lg hover:shadow-2xl hover:border-red-500">
            <img
              src="./Free.png"
              alt=""
              className="w-[144px] h-[165px] mt-10 ml-24"
            />
            <p className="text-[30px] font-bold ml-16 mt-10 ">Premium Plan</p>
            <div className="flex  flex-col pt-10">
              <div className=" flex gap-5 ml-16 mt-5">
                <MidelIcon />
                <p>Unlimited Bandwitch</p>
              </div>
              <div className="flex gap-5 ml-16 mt-5 ">
                <MidelIcon />
                <p>Encrypted Connection</p>
              </div>
              <div className="flex gap-5 ml-16 mt-5">
                <MidelIcon />
                <p>Yes Traffic Logs</p>
              </div>
              <div className="flex gap-5 ml-16 mt-5">
                <MidelIcon />
                <p>Works on All Devices</p>
              </div>
              <div className="flex gap-5 ml-16 mt-5">
                <MidelIcon />
                <p>Connect Anyware</p>
              </div>
              <div className="flex gap-5 ml-16 mt-5">
                <MidelIcon />
                <p>Get New Features</p>
              </div>
              <p className="text-[30px] font-bold flex justify-center mt-10 ">
                $12 / mo
              </p>
              <div className="w-[177px] h-[45px] items-center ml-20 mt-5 border border-red-500 bg-red-500  text-white font-bold flex justify-center rounded-[30px]">
                Select
              </div>
            </div>
          </div>
        </div>

        <div className="pt-32 flex justify-center items-center flex-col mt-5">
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

        <div>
          <div>
            <Costomor />
          </div>
        </div>
      </div>
    </div>
  );
};
