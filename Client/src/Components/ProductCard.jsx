import React, { useState } from "react";
import { assets } from "../assets/grocygoassets/assets";
import { useAppContext } from "../Context/AppContext";

const ProductCard = ({ product }) => {
  const [count, setCount] = useState(0);
  const { currency } = useAppContext();

  return (
    <div className="border border-gray-500/20 rounded-md md:px-4 px-3 py-2 bg-white min-w-56 max-w-56 w-full">
      <div className="group cursor-pointer flex items-center justify-center px-2">
        <img
          className="group-hover:scale-105 transition max-w-26 md:max-w-36"
          src={product.image[0]}
          alt={product.name}
        />
      </div>

      <div className="text-gray-500 text-sm sm:text-sm mt-1">
        <p className="text-gray-700 font-medium text-lg truncate w-full">
          {product.name}
        </p>

        {/* Rating stars */}
        <div className="flex items-center gap-0.5">
          {Array(5)
            .fill()
            .map((_, i) => (
              <img
                key={i}
                className="w-3.5 h-3.5"
                src={i < 4 ? assets.star_icon : assets.star_dull_icon}
                alt="star"
              />
            ))}
        </div>
      </div>

      <div className="flex items-end justify-between mt-3">
        <p className="md:text-xl text-base font-medium text-indigo-500">
          {currency}
          {product.offerPrice}{" "}
          <span className="text-gray-500/60 md:text-sm text-xs line-through">
            {currency}
            {product.price}
          </span>
        </p>

      
        <div className="text-indigo-500">
          {count === 0 ? (
            <button
              onClick={() => setCount(1)}
              className="flex items-center justify-center gap-1 bg-indigo-100 border border-indigo-300 md:w-[80px] w-[64px] h-[34px] rounded text-indigo-600 font-medium"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.167 7h11.667M7 1.167v11.667"
                  stroke="#615FFF"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Add
            </button>
          ) : (
            <div className="flex items-center justify-center gap-2 md:w-20 w-16 h-[34px] bg-indigo-500/25 rounded select-none">
              <button
                onClick={() => setCount((prev) => Math.max(prev - 1, 0))}
                className="cursor-pointer text-md px-2 h-full"
              >
                -
              </button>
              <span className="w-5 text-center">{count}</span>
              <button
                onClick={() => setCount((prev) => prev + 1)}
                className="cursor-pointer text-md px-2 h-full"
              >
                +
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
