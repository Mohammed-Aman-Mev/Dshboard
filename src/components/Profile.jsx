import React from "react";

const Profile = () => {
  return (
    <div className="w-full h-[400px] pt-[45px] md:w-[40%] flex flex-col items-start pl-[100px] sm:h-full bg-neutral-100 md:h-[100vh] lg:h-full lg:w-[30%]">
      <div className="flex w-full items-center">
        <div className="w-[50px] h-[50px] bg-[#1f5d76] rounded-full" />
        <div>
          <h1 className="text-xl font-bold">Hi Mike,</h1>
          <p className="text-[12px]">welcome back</p>
        </div>
      </div>
      <div>
        <h2>Today</h2>
        <h1>$19,000</h1>
        <p>Account balance</p>
        <h2>$4000</h2>
        <p>ldkfdhglsgl</p>
        <h2>$2000</h2>
        <p>ldkfdhglsgl</p>
        <button>I want to </button>
      </div>
    </div>
  );
};

export default Profile;
