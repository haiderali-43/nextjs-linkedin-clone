
import { Image } from "next/image";
import React from "react";

const PostDisplay = ({ postContent, imageUrl }) => {
  return (
    <div className="bg-white p-4 rounded-md shadow-md mb-4">
      <p className="text-base mb-2">{postContent}</p>

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
  );
};

export default PostDisplay;
