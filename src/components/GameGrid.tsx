"use client";

import { IMG_URL } from "@/lib/constants";
import React, { useEffect, useState } from "react";
import { Box } from "./Box";
import { ICharacterData } from "@/types";

const STATIC_DATA = [...IMG_URL.CHARACTERS, ...IMG_URL.CHARACTERS].map(
  (character, i) => {
    return {
      id: i + 1,
      isFlipped: false,
      character_img_url: character,
    };
  }
);

export const GameGrid = () => {
  // const [grid, setGrid] = useState<number>(
  //   Math.sqrt(IMG_URL.CHARACTERS.length * 2)
  // );

  const [characterData, setCharacterData] =
    useState<ICharacterData[]>(STATIC_DATA);

  const [flippedImages, setFlippedImages] = useState<ICharacterData[]>([]);

  const handleFlip = (id: number, close?: boolean) => {
    return setCharacterData((prevData) => {
      return prevData?.map((character) => {
        if (character.id === id) {
          return { ...character, isFlipped: close ? false : true };
        }
        return character;
      });
    });
  };

  const handleClick = (data: ICharacterData) => {
    setFlippedImages((prevData) => prevData.concat(data));
    handleFlip(data.id);
  };

  var timer: any;
  useEffect(() => {
    if (flippedImages.length === 2) {
      if (
        flippedImages[0].character_img_url !==
        flippedImages[1].character_img_url
      ) {
        timer = setTimeout(() => {
          setFlippedImages([]);
          handleFlip(flippedImages[1].id, true);
          handleFlip(flippedImages[0].id, true);
          return;
        }, 700);

        return;
      }

      setFlippedImages([]);
      return;
    }

    return () => clearTimeout(timer);
  }, [flippedImages]);

  // console.log(setGrid);

  return (
    <div
      style={{
        gridTemplateColumns: `repeat(${6} , 1fr)`,
      }}
      className={`grid gap-4 max-w-[760px] mx-auto place-content-center`}
    >
      {characterData.map((box: ICharacterData) => (
        <Box key={box.id} data={box} handleClick={handleClick} />
      ))}
    </div>
  );
};
