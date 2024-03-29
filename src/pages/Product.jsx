import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import Breadcrumb from "../Components/Breadcrumb/Breadcrumb";

const Product = () => {
  const { all_product } = useContext(ShopContext);

  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));
  console.log(productId);
  return (
    <div>
      <Breadcrumb product={product} />
    </div>
  );
};

export default Product;
