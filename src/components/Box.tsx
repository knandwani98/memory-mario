"use client";

import { IMG_URL } from "@/lib/constants";
import { ICharacterData } from "@/types";
import Image from "next/image";

export const Box = (props: {
  data: ICharacterData;
  handleClick: (data: ICharacterData) => void;
}) => {
  const { data, handleClick } = props;

  return (
    <button
      disabled={data.isFlipped}
      className={`flex justify-center items-center`}
      onClick={() => handleClick(data)}
    >
      {data.isFlipped ? (
        <Image
          style={{
            transition: "transform 1s",
            transformStyle: "preserve-3d",
            transform: "rotateY(+180deg)",
          }}
          src={IMG_URL.CLOUDINARY_URL + data.character_img_url}
          width={1000}
          height={1000}
          className="size-24 object-contain"
          alt="background"
        />
      ) : (
        <Image
          style={{
            transition: "transform 1s",
            transformStyle: "preserve-3d",
          }}
          src={IMG_URL.CLOUDINARY_URL + IMG_URL.WALL}
          width={1000}
          height={1000}
          className="size-24 object-contain"
          alt="background"
        />
      )}
    </button>
  );
};
