import React, { useContext, useState } from "react";
import { ProductsContext } from "../../contexts/ProductsContext";
import Product from "../Product";
import {
  LoadmoreButton,
  LoadmoreButtonContainer,
  ProductsContainer,
  LoaderContainer,
  Loader,
  LoaderText,
} from "./ProductsElements";

const Products = () => {
  const { products, loading } = useContext(ProductsContext);
  const [visible, setVisible] = useState(9);

  return !loading ? (
    <>
      <ProductsContainer id='products'>
        {products.slice(0, visible).map((product) => (
          <Product
            key={product.productId}
            productInfo={{
              productId: product.productId,
              image: product.imageURL,
              product_name: product.product_name,
              product_contributors: product.product_contributors.person_name,
              product_generation:
                product.product_contributors.batch_of_school_year,
            }}
          />
        ))}
      </ProductsContainer>
      {visible < products.length && (
        <LoadmoreButtonContainer>
          <LoadmoreButton
            onClick={(e) => {
              setVisible(visible + 6);
            }}>
            Load More Products
          </LoadmoreButton>
        </LoadmoreButtonContainer>
      )}
    </>
  ) : (
    <LoaderContainer loading={loading}>
      <Loader loading={loading} size={50} />
      <LoaderText>Loading</LoaderText>
    </LoaderContainer>
  );
};

export default Products;
