import React, { useState } from 'react';

const Radio = () => {
  // click했을 때 / 색상을 그 버튼만 변경해주고 / input value 값을 전달
  return (
    <div className="flex flex-row items-center">
      <input
        type="radio"
        name="status"
        defaultChecked
        value="1"
        className="appearance-none border-[#C4C4C4] border-8 rounded-full w-[50px] h-[50px] bg-[#C4C4C4]"
        onClick={(e: React.MouseEvent<HTMLElement>) => {
          const target = e.target as HTMLInputElement;
          console.log(target.value);
        }}
      />
      ---
      <input
        type="radio"
        name="status"
        value="2"
        className="appearance-none border-[#C4C4C4] border-8 rounded-full w-[50px] h-[50px] bg-[#C4C4C4]"
      />
      ---
      <input
        type="radio"
        name="status"
        value="3"
        className="appearance-none border-[#C4C4C4] border-8 rounded-full w-[50px] h-[50px] bg-[#C4C4C4]"
      />
      ---
      <input
        type="radio"
        name="status"
        value="4"
        className="appearance-none border-[#C4C4C4] border-8 rounded-full w-[50px] h-[50px] bg-[#C4C4C4]"
      />
      ---
      <input
        type="radio"
        name="status"
        value="5"
        className="appearance-none border-[#C4C4C4] border-8 rounded-full w-[50px] h-[50px] bg-[#C4C4C4]"
      />
    </div>
  );
};

export default Radio;
