"use client";
import Image from "next/image";
import { useState } from "react";


function PostModal({ isOpen, onClose, onPost }) {
  const [postContent, setPostContent] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageDimensions, setImageDimensions] = useState({
    width: 0,
    height: 0,
  });

  const handlePost = () => {
    console.log("Posting:", postContent);
    console.log("Selected Image:", selectedImage);
    console.log("Image Dimensions:", imageDimensions);

    onPost({
      postContent: postContent,
      selectedImage: selectedImage ? URL.createObjectURL(selectedImage) : null,
      imageDimensions: imageDimensions,
    });

    // Close the modal
    onClose();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const imgElement = document.createElement("img");

    imgElement.onload = () => {
      const dimensions = {
        width: imgElement.width,
        height: imgElement.height,
      };

      // Set the image dimensions state
      setImageDimensions(dimensions);
    };

    imgElement.src = URL.createObjectURL(file);

    // Set the selected image
    setSelectedImage(file);
  };

  return (
    <div
      className={`${
        isOpen ? "block" : "hidden"
      } fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center`}
    >
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <textarea
          className="w-full h-32 p-2 border rounded-md mb-4"
          placeholder="What's on your mind?"
          value={postContent}
          onChange={(e) => setPostContent(e.target.value)}
        />

        <label className="block text-gray-700 text-sm font-bold mb-2">
          Upload Image
        </label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="w-full p-2 border rounded-md mb-4"
        />

        {selectedImage && (
          <div className="mb-4">
            <Image
              src={URL.createObjectURL(selectedImage)}
              alt="Selected"
              width={imageDimensions.width}
              height={imageDimensions.height}
              className="object-cover rounded-md"
            />
          </div>
        )}

        <div className="flex justify-end">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-md mr-2"
            onClick={handlePost}
          >
            Post
          </button>
          <button
            className="px-4 py-2 bg-gray-500 text-white rounded-md"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default PostModal;
