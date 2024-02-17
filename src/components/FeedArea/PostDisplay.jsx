import { Image } from "next/image";
import React from "react";

const PostDisplay = ({ postContent, imageUrl }) => {
  return (
    <>
      <div className="bg-white p-4 rounded-md shadow-md mb-4">
        <div className="flex justify-between px-3">
          <p className="text-base mb-2">{postContent}</p>
          <p className="text-sm text-gray-500">
            {new Date().toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
        {imageUrl && (
          <Image
            src={imageUrl}
            alt="Post Image"
            width={imageDimensions.width}
            height={imageDimensions.height}
            className="object-cover rounded-md mb-2"
          />
        )}
      </div>
    </>
  );
};

export default PostDisplay;
