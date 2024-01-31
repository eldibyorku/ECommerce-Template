import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb = (props) => {
  const { product } = props;
  return (
    <>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a href="#">Home</a>
          </li>
          <li class="breadcrumb-item">
            <Link>{product.category}</Link>
          </li>
          <li class="breadcrumb-item">{product.name}</li>
        </ol>
      </nav>
    </>
  );
};

export default Breadcrumb;
