import { FC } from "react";
import Link from "next/link";

const Button: FC<{ text: string; link: string }> = ({ text, link }) => {
  return (
    <button className=" mx-4 my-4 text-1xl font-bold px-9 py-5 rounded-lg bg-black text-white hover:cursor-pointer  hover:bg-orange-500 hover:scale-125 hover: duration-500 ">
      <Link href={link}>{text}</Link>
    </button>
  );
};
export default Button;