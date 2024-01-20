"use client";

import Image from "next/image";
import { UploadButton } from "../utils/uploadthing";

export default function UploadImage({ handleUploadImage }) {
  const [selectedImage, setSelectedImage] = useState(null);

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
    <main className="">
      <UploadButton
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          <>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Upload Image
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleUploadImage}
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
          </>;
        }}
        onUploadError={(error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      />
    </main>
  );
}
