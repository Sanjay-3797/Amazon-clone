import React from "react";
import { recipes } from "../../assets/sgbites/Recipes";

const Latest = () => {
  return (
    <div className="w-full bg-black text-white p-2">
      <div className="text-white text-2xl p-3">Latest Recipes :</div>
      {recipes.map((item) => (
        <div className="p-3 flex gap-x-6 justify-start">
          <iframe
            className="border rounded-xl"
            width="470"
            height="245"
            src={item.link}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          />
          <div className="w-2/3">
            <div className="text-4xl">{item.title}</div>
            <div>{item.benefit}</div>
            <div>{item.recipe}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Latest;
