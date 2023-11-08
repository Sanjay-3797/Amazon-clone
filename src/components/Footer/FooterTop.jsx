import React from "react";

const FooterTop = () => {
  return (
    <div className="w-full bg-black text-white py-6 ">
      <div className="w-full border-t-[1px] border-b-[1px] py-8">
        <div className="w-64 mx-auto text-center flex flex-col gap-1">
          <p className="text-sm">See Personalised Recipes</p>
          <button className="w-full text-black bg-white rounded-md py-1 font-semibold cursor-pointer hover:bg-amber-200 active:bg-amber-300">
            Sign In
          </button>
          <p className="text-sm mt-1">
            New to Channel?{" "}
            <span className="text-blue-600 ml-1 cursor-pointer">
              Start here.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FooterTop;
