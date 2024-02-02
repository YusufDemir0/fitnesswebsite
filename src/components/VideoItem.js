import React from "react";

export const VideoItem = () => {
  return (
    <div className="flex border p-2 m-2 rounded-lg shadow-lg grid-col-1 ">
      <div className="flex flex-col-1">
        <h2 className="text-xl font-semibold mb-2">Ryan Gosling</h2>
        <p className="">Yaş: 30 Erkek</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, maiores
          beatae. Voluptatem dolore temporibus corrupti illum explicabo aut
          voluptate iste.
        </p>
        <button className="text-bg-primary mt-2">Talep Ekle</button>
      </div>
    </div>
  );
};
