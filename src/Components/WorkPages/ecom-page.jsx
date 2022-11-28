import React, { useState, useEffect } from "react";
import "../CSS/main-style.css";
import "../CSS/comps-styles.css";
import "../CSS/case-study-page.css";
import ReactLogo from "../Assets/React_logo.png";
import NodeLogo from "../Assets/node_js_logo.png";
import ReduxLogo from "../Assets/Redux_logo.png";
import CSSLogo from "../Assets/sass_logo.png";
import MongoDB from "../Assets/MongoDB_logo.png";

import Home from "../Assets/WorkSS/ecom_home.png";
import Cart from "../Assets/WorkSS/ecom_cart.png";
import Item from "../Assets/WorkSS/ecom_item.png";

import SSAlbum from "../Helpers/ss-album";

function EcomPage() {
  const [ images, _setImages ] = useState([
    {
      img: Home,
      title: "Home Page",
      details: `Visitors can see all the products here.`,
    },

    {
      img: Cart,
      title: "Cart",
      details: `User can add products to cart and then all those can viewed here. 
      User can directly buy respective product from here and also he can remove it from this list.`,
    },

    {
      img: Item,
      title: "Product View",
      details: `Complete Detailed Information about the product, including reviews and ratings. From here user can give review and rating for the product
      and can also add to cart or wish list and can purchase the product directly.
      `,
    },
  ]);
  // useEffect = (() => {}, [ curr_img_index ]);
  const [ curr_img_index, _set_Index ] = useState(0);
  const next = () => {
    if (curr_img_index < images.length - 1)
      _set_Index(curr_img_index => curr_img_index + 1);
  };

  const prev = () => {
    if (curr_img_index > 0) _set_Index(curr_img_index => curr_img_index - 1);
  };

  return (
    <div className="make-it-centered">
      <div className="CaseStudyPage">
        <div className="case-study-header d-flex-ac">
          <button className="back-btn" onClick={() => window.history.back()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-arrow-narrow-left"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#fff"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <line x1="5" y1="12" x2="19" y2="12" />
              <line x1="5" y1="12" x2="9" y2="16" />
              <line x1="5" y1="12" x2="9" y2="8" />
            </svg>
          </button>

          {/* <a href="/">
           
          </a> */}
          <h1>E-Commerce Website</h1>
        </div>
        <div className="case-study-para">
          <p>
            To learn and practice advance functionalities in MERN stack, I have
            created this ecommerce website, where user can see different
            electronics product and can do various things on the website related
            to product.
          </p>
          <button
            onClick={() => {
              window.open("https://ecommerce-site-psi.vercel.app");
            }}
          >
            See Website
          </button>

          <button
            style={{ marginLeft: "10px" }}
            onClick={() => {
              window.open(
                "https://github.com/Kshirsagar-Govind/ecommerce-site"
              );
            }}
          >
            Git Repo
          </button>
        </div>

        <SSAlbum images={images} />

        <div className="case-stidy-detail">
          <div className="c-header">
            <h2>Technologies Used</h2>
            <span className="c-hr" />
          </div>
          <div className="c-info">
            <p>
              Medium scaled web app, I used MERN stack for this app. Some charts
              apis like graph and pie chart.
              <ul>
                <li>
                  <img src={ReactLogo} alt="" />
                </li>

                <li>
                  <img src={NodeLogo} alt="" />{" "}
                </li>

                <li>
                  <img src={ReduxLogo} alt="" />{" "}
                </li>
                <li>
                  <img src={CSSLogo} alt="" />{" "}
                </li>

                <li>
                  <img src={MongoDB} alt="" />{" "}
                </li>
              </ul>
            </p>
          </div>
        </div>

        <div className="case-stidy-detail">
          <div className="c-header">
            <h2>Use Case</h2>
            <span className="c-hr" />
          </div>
          <div className="c-info">
            <p>
              Actually it is not for commercial use, And if I tell you honestly,
              i am still working on it, so yes, it is not completed yet. But let
              me tell you what User can do in this project, user can view
              products, then he can add them to his/her wishlists and then to
              cart and he/she can place order. And it has two user roles, one is
              what i have discribed and other is admin, who can add product to
              the database and then on the users side user can see new products.
            </p>
          </div>
        </div>
        <div className="case-stidy-detail">
          <div className="c-header">
            <h2>Challenges Faced</h2>
            <span className="c-hr" />
          </div>
          <div className="c-info">
            <p>-</p>
          </div>
        </div>
        <div className="case-stidy-detail">
          <div className="c-header">
            <h2>New Learnings</h2>
            <span className="c-hr" />
          </div>
          <div className="c-info">
            <p>
              <span>
                <li>Updating and deleting deeply nested objects in mongodb.</li>

                <li>Creating Popups with props.</li>
                <li>And lots of miner changes I learnt in this project.</li>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EcomPage;
