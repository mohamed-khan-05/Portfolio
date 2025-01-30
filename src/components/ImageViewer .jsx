import React from "react";

const ImageViewer = ({ view, pic, onClose }) => {
  if (!view) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 flex justify-center overflow-auto items-center bg-[#000000a1] z-50 p-4"
    >
      <img
        src={pic}
        alt=""
        className="scale-180 sm:scale-100 w-auto h-auto max-w-full max-h-[85vh] md:max-w-[85vw] md:max-h-[85vh] object-contain md:rotate-0 rotate-90 transform-gpu"
      />
    </div>
  );
};

export default ImageViewer;
