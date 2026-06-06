import React, { useState } from "react";
import type { articleInput } from "./input";

const ImageUploader = ({ input }: { input: articleInput }) => {
  const [imageUrl, setImageUrl] = useState("");

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.currentTarget.files?.[0];
    const reader = new FileReader();
    reader.onload = () => {
      setImageUrl(reader.result as string);
    };
    reader.readAsDataURL(file!);
  };

  return (
    <div className="flex flex-col gap-3">
      <div
        id="temporary-image-container"
        className="border-dashed border border-text/50 w-full h-64 laptop-lg:h-96 hover:cursor-pointer"
      >
        {imageUrl ? (
          <img
            src={imageUrl}
            alt="cover-image"
            className="object-center object-contain h-full w-full"
          />
        ) : (
          <div className="relative w-full h-full flex flex-col justify-center items-center">
            <input
              onChange={handleImageUpload}
              className="absolute h-full w-full text-transparent hover:cursor-pointer"
              type="file"
              name={input.fieldName}
              id={input.fieldName}
            />
            <svg
              className="h-20 w-20"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
            >
              <path
                className="fill-text/50"
                d="M144 480c-79.5 0-144-64.5-144-144 0-63.4 41-117.2 97.9-136.5-1.3-7.7-1.9-15.5-1.9-23.5 0-79.5 64.5-144 144-144 55.4 0 103.5 31.3 127.6 77.1 14.2-8.3 30.8-13.1 48.4-13.1 53 0 96 43 96 96 0 15.7-3.8 30.6-10.5 43.7 44 20.3 74.5 64.7 74.5 116.3 0 70.7-57.3 128-128 128l-304 0zM305 191c-9.4-9.4-24.6-9.4-33.9 0l-72 72c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l31-31 0 102.1c0 13.3 10.7 24 24 24s24-10.7 24-24l0-102.1 31 31c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-72-72z"
              />
            </svg>
            <p>
              Upload cover image in any of the following formats png, jpeg or
              use the generate button to generate cover image based on your
              content
            </p>
          </div>
        )}
      </div>
      <div className="flex gap-2 w-full">
        <button className="relative ring-1 py-2 bg-offset-white-hover/90 hover:text-white hover:cursor-pointer hover:bg-text w-full">
          <input
            onChange={handleImageUpload}
            className="absolute h-full w-1/2 text-transparent hover:cursor-pointer"
            type="file"
            name={input.fieldName}
            id={input.fieldName}
          />
          Upload Image
        </button>
        <button className="ring-1 py-2 bg-offset-white-hover/90 hover:text-white hover:cursor-pointer hover:bg-text w-full">
          Generate Cover Image
        </button>
      </div>
    </div>
  );
};

export default ImageUploader;
