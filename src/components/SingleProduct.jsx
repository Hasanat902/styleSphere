import { useContext, useEffect } from "react";
import { Shopcontext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import Breadcrum from "./Breadcrum";
import ProductDisplay from "./ProductDisplay";
import DescriptionBox from "./DescriptionBox";
import NewCollection from "./NewCollection";

const SingleProduct = () => {
  const { all_product } = useContext(Shopcontext);
  const { productId } = useParams();
  const product = all_product.find((p) => p.id === Number(productId));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="max-w-7xl mx-auto my-32">
      <Breadcrum product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox product={product} />
      <NewCollection />
    </div>
  );
};

export default SingleProduct;
