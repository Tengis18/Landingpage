import { FooterIcon, InsdaIcon, TwiterIcon } from "@/app/svg/FooterIcon";

export const Footer = () => {
  return (
    <div className="w-full flex bg-[#F8F8F8] justify-center ">
      <div className="container flex h-[563px] justify-between">
        <div>
          <div className="pt-20">
            <img width={150} height={36} src="./Logo.png" alt="" />
            <p className="w-[340px] mt-10">
              LaslesVPN is a private virtual network that has unique features
              and has high security.
            </p>
          </div>
          <div className="flex mt-10">
            <FooterIcon />
            <TwiterIcon />
            <InsdaIcon />
          </div>
          <p className="text-[#AFB5C0]">©2020LaslesVPN</p>
        </div>

        <div className="pt-20 flex flex-col gap-2">
          <p className="font-bold">Product</p>
          <p className="text-[16px] text-[#4F5665] mt-3">Download </p>
          <p className="text-[16px] text-[#4F5665]">Pricing </p>
          <p className="text-[16px] text-[#4F5665]">Locations </p>
          <p className="text-[16px] text-[#4F5665]">Server </p>
          <p className="text-[16px] text-[#4F5665]">Countries </p>
          <p className="text-[16px] text-[#4F5665]">Blog </p>
        </div>

        <div className="pt-20 flex flex-col gap-2">
          <p className="font-bold">Engage</p>
          <p className="text-[16px] text-[#4F5665] mt-3">LaslesVPN ? </p>
          <p className="text-[16px] text-[#4F5665]">FAQ </p>
          <p className="text-[16px] text-[#4F5665]">Tutorials </p>
          <p className="text-[16px] text-[#4F5665]">About Us </p>
          <p className="text-[16px] text-[#4F5665]">Privacy Policy </p>
          <p className="text-[16px] text-[#4F5665]">Terms of Service </p>
        </div>

        <div className="pt-20 flex flex-col gap-2">
          <p className="font-bold">Earn Money</p>
          <p className="text-[16px] text-[#4F5665] mt-3">Affiliate </p>
          <p className="text-[16px] text-[#4F5665]">Become Partner </p>
        </div>
      </div>
    </div>
  );
};
