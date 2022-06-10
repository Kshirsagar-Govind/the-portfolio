import React, { useState, useEffect } from "react";

const SSAlbum = ({ images }) => {
  const [ curr_img_index, _set_Index ] = useState(0);
  const next = () => {
    if (curr_img_index < images.length - 1)
      _set_Index(curr_img_index => curr_img_index + 1);
  };

  const prev = () => {
    if (curr_img_index > 0) _set_Index(curr_img_index => curr_img_index - 1);
  };
  return (
    <div className="showcase-div">
      <div className="ss-div just-space">
        <span className="arrow-btn" onClick={() => prev()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-chevron-left"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#00abfb"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <polyline points="15 6 9 12 15 18" />
          </svg>
        </span>

        <img src={images[curr_img_index].img} alt="" />
        <span className="arrow-btn" onClick={() => next()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-chevron-right"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#00abfb"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <polyline points="9 6 15 12 9 18" />
          </svg>
        </span>
      </div>
      <div className="ss-details">
        <h1>{images[curr_img_index].title}</h1>
        <p>{images[curr_img_index].details}</p>
      </div>
    </div>
  );
};

export default SSAlbum;
