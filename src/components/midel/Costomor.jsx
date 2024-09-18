import { Midelcon } from "@/app/svg/MidelIcon";

export const Costomor = () => {
  return (
    <div className="w-full flex   justify-center  items-center pt-20 mt-[50px]">
      <div className="container h-[650px] items-center ">
        <div className="flex flex-col items-center gap-[20px]">
          <p className="text-[35px] font-bold w-[384px] h-[100px] text-center flex justify-center items-center ">
            Trusted by Thousands of Happy Customer
          </p>
          <p className="mt-5 w-[555px] flex justify-center items-center text-center ">
            These are the stories of our customers who have joined us with great
            pleasure when using this crazy feature.
          </p>
        </div>

        <div className="flex  gap-10 pt-20 justify-center ">
          <div className=" h-[230px] w-[400px] border-2 border-gray-300 rounded-lg  hover:shadow-2xl hover:border-red-500">
            <div className="ml-10 mt-10 flex gap-5">
              <img src="./fake.png" alt="" className="w-[50px] h-[ 50px]" />
              <div>
                <p className="text-[18px] font-bold">Viezh Robert</p>
                <p className="text-[14px] text-[#4F5665]">Warsaw, Poland</p>
              </div>
              <div className="flex ml-24 gap-1">
                <p className="text-[16px ]">4.5</p>
                <p className="mt-1 ">
                  <Midelcon />
                </p>
              </div>
            </div>
            <p className="w-[340px] ml-8 mt-5">
              “Wow... I am very happy to use this VPN, it turned out to be more
              than my expectations and so far there have been no problems.
              LaslesVPN always the best”.
            </p>
          </div>

          <div className="h-[230px] w-[400px] border-2 border-gray-300 rounded-lg  hover:shadow-2xl hover:border-red-500">
            <div className="ml-10 mt-10 flex gap-5">
              <img src="./face.png" alt="" className="w-[50px] h-[ 50px]" />
              <div>
                <p className="text-[18px] w-[142px] font-bold">
                  Yessica Christy
                </p>
                <p className="text-[14px] text-[#4F5665]">Shanxi, China</p>
              </div>
              <div className="flex ml-14 gap-1">
                <p className="text-[16px ]">4.5</p>
                <p className="mt-1 ">
                  <Midelcon />
                </p>
              </div>
            </div>
            <p className="w-[340px] ml-8 mt-5">
              “I like it because I like to travel far and still can connect with
              high speed.”.
            </p>
          </div>

          <div className=" h-[230px] w-[400px] border-2 border-gray-300 rounded-lg   hover:shadow-2xl hover:border-red-500">
            <div className="ml-10 mt-10 flex gap-5">
              <img src="./asian.png" alt="" className="w-[50px] h-[ 50px]" />
              <div>
                <p className="text-[18px] w-[142px] font-bold">Kim Young Jou</p>
                <p className="text-[14px] text-[#4F5665]">Seoul, South Korea</p>
              </div>
              <div className="flex ml-14 gap-1">
                <p className="text-[16px ]">4.5</p>
                <p className="mt-1 ">
                  <Midelcon />
                </p>
              </div>
            </div>
            <p className="w-[340px] ml-8 mt-5">
              “This is very unusual for my business that currently requires a
              virtual private network that has high security.”.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
