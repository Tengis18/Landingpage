import {
  DoneIcon,
  HaederIcon,
  HaedrIcon,
  HaerIcon,
  LineIcon,
} from "@/app/svg/haederIcon";

export const Headere = () => {
  return (
    <div className="w-full flex justify-center pt-32" id="Haeder">
      <div className="container  ">
        <div className="flex">
          <div>
            <p className="leading-[100px] text-5xl font-bold ">
              Want abyting to be easy with LaslesVPN.
            </p>
            <p className="text-lg leading-8 mt-10 w-[555px] h-[144px]">
              Provide a network for all your needs with ease and fun usinf
              LaslesVPN discveor intersting features from us.
            </p>
            <div className="bg-red-500 w-[250px] text-white font-bold drop-shadow-xl rounded-[10px] flex justify-center h-[60px] items-center ">
              Get Started
            </div>
          </div>
          <div>
            <img className="w-[611px] h-[382px]" src="./nvvr.png" alt="" />
          </div>
        </div>
        <div className="flex justify-center items-center   h-[200px] w-[1140px] ml-32  shadow-md mt-20 ">
          <div className="w-[1140px] h-[200px] flex  items-center ">
            <div className="flex  justify-center items-center ml-20">
              <HaederIcon />
              <div className="flex flex-col ml-5">
                <p className="font-bold flex  ">90+</p>
                <p>Users</p>
              </div>
            </div>
            <div className="ml-48">
              <LineIcon />
            </div>
            <div className="flex justify-center ml-32  items-center">
              <HaerIcon />
              <div className="flex flex-col ml-5">
                <p className="font-bold flex  items-center">30+</p>
                <p>Loations</p>
              </div>
            </div>
            <div className="ml-48">
              <LineIcon />
            </div>
            <div className="flex  items-center ml-20 justify-center">
              <HaedrIcon />
              <div className="flex flex-col ml-5">
                <p className="font-bold flex  items-center">50+</p>
                <p>Servers</p>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-20 flex ">
          <img className="w-[508px] h-[414px] ml-40" src="./head.png" alt="" />
          <div className="flex flex-col justify-center ml-40">
            <p className="font-bold text-[35px] w-[383px] h-[100px]">
              We Provide Many Features You Can Use
            </p>
            <p className="text-[16px] w-[427px] h-[100px] pt-3">
              You can explore the features that we provide with fun and have
              their own functions each feature.
            </p>
            <div className="flex gap-3">
              <DoneIcon />
              <p>Powerfull online protection.</p>
            </div>
            <div className="flex gap-3 mt-4">
              <DoneIcon />
              <p>Internet without borders.</p>
            </div>
            <div className="flex gap-3 mt-4">
              <DoneIcon />
              <p>Supercharged VPN</p>
            </div>
            <div className="flex gap-3 mt-4">
              <DoneIcon />
              <p>No specific time limits.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
