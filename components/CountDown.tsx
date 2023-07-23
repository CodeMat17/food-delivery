"use client";

import Countdown from "react-countdown";

const endingDate = new Date("2023-12-31");

const CountDown = () => {
  return (
    <div className='text-4xl font-bold tracking-widest text-yellow-600 pt-2 pb-4'>
      <Countdown date={endingDate} />
    </div>
  );
};

export default CountDown;
