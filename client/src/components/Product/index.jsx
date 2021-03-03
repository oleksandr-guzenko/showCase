import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ProductContainer,
  ProductContributor,
  ProductGeneration,
  ProductImage,
  ProductInfo,
  ProductInfoCol_1,
  ProductInfoCol_2,
  ProductTitle,
  ProductViewIcon,
} from "./ProductElements";

const Product = ({ productInfo }) => {
  const {
    productId,
    image,
    product_name,
    product_contributors,
    product_generation,
  } = productInfo;

  const [titleLength, setTitleLength] = useState(30);
  const [contributorsLength, setContributorsLength] = useState(28);

  return (
    <>
      <ProductContainer>
        <ProductImage
          src={image}
          description={
            <Link to={`/products/${productId}`}>
              <ProductViewIcon />
            </Link>
          }
        />
        <ProductInfo>
          <ProductInfoCol_1>
            <ProductTitle text={product_name} length={titleLength} />
            <ProductContributor
              text={product_contributors}
              length={contributorsLength}
            />
          </ProductInfoCol_1>
          <ProductInfoCol_2>
            <ProductGeneration>Angkatan {product_generation}</ProductGeneration>
          </ProductInfoCol_2>
        </ProductInfo>
      </ProductContainer>
    </>
  );
};

export default Product;
