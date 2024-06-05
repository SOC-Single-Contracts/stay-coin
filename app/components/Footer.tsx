import insta from "../../public/insta.png";
import x from "../../public/x.png";
import linkedin from "../../public/linkedin.png";
import Image from "next/image";
export default function Footer() {
  return (
    <div className="bg-black text-white p-5 ">
      <p
        className="leading-[30px] md:text-6xl text-2xl lg:text-6xl text-center uppercase"
        style={{ fontWeight: 700 }}
      >
        stay <span className="text-primary underline">connected</span> <br />
        with us
      </p>

      <div className="flex justify-center my-10 items-center gap-3 lg:gap-5 ">
        <Image className="md:h-14 md:w-14 w-10" src={insta} alt="" />
        <Image className="md:w-20 w-16" src={x} alt="" />
        <Image className="md:w-20 w-16" src={linkedin} alt="" />
      </div>
      <hr className="border-gray-500" />
      <p className="text-center mt-5 text-sm">Copyright 2024 © Staycoin</p>
    </div>
  );
}
