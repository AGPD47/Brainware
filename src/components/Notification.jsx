import React from "react";
import { notificationImages } from "../constants";
import { notification1 } from "../assets";

const Notification = ({ className, title }) => {
  return (
    <div
      className={`${
        className || ""
      } flex items-center p-4 pre-6 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl gap-5`}
    >
      <img
        src={notification1}
        width={62}
        height={62}
        alt="image"
        className="rounded-xl"
      />
      <div className="flex-1">
        <h6 className="mb-1 font-semibold justify-between text-base">
          {title}
        </h6>
        <div className="flex items-center justify-between">
          <ul className="flex -m-0.5">
            {notificationImages.map((image, index) => (
              <li
                key={index}
                className="flex w-6 h-6 border-2  border-n-12 rounded-full overflow-hidden"
              >
                <img
                  src={image}
                  alt="icon"
                  className="w-full"
                  width={20}
                  height={20}
                />
              </li>
            ))}
          </ul>
          <div className="body-2 text-n-13">1 min ago</div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
