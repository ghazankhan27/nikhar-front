import Image from "next/image";
import { useState } from "react";

export function ServiceCard({ children, object }) {
  const [blur, setBlur] = useState("");
  const [top, setTop] = useState("");

  const onMouseEnterCard = () => {
    setBlur("blur-sm");
    setTop("-translate-y-12 md:-translate-y-24");
  };

  const onMouseLeaveCard = () => {
    setBlur("");
    setTop("");
  };

  return (
    <div
      onMouseEnter={onMouseEnterCard}
      onMouseLeave={onMouseLeaveCard}
      className="flex justify-center items-center h-48 md:h-96 relative"
    >
      <div
        className={
          top +
          " bottom-6 md:bottom-20 absolute z-10 cursor-pointer duration-300"
        }
      >
        <p className="text-xl md:text-2xl lg:text-3xl text-white">
          {object.name}
        </p>
      </div>
      <Image
        className={blur + " duration-300"}
        src={object.image}
        layout="fill"
      ></Image>
      <div className="absolute w-full h-full bg-gradient-to-t from-black opacity-100 cursor-pointer"></div>
    </div>
  );
}
