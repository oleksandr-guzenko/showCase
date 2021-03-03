import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import {
  BigImage,
  BigImageContainer,
  ProductAuthorGeneration,
  ProductAuthorImage,
  ProductAuthorName,
  ProductAuthorsContainer,
  ProductDetailContainer,
  ProductInfoContainer,
  ProductInfoDesc,
  ProductInfoReportDownload,
  ProductInfoReportDownloadContainer,
  ProductInformationContainer,
  ProductInfoReportDownloadIcon,
  ProductInfoTitle,
  Loader,
  LoaderContainer,
  LoaderText,
} from "./ProductDetailElements";

const ProductDetail = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const { product_id } = useParams();

  const fetchProduct = () => {
    axios
      .get(`http://localhost:7000/api/products/${product_id}`)
      .then((res) => setProduct(res.data))
      .then(() => setLoading(false))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  const {
    imageURL,
    product_name,
    product_desc,
    product_file_link,
    product_contributors,
  } = product;

  return !loading ? (
    <>
      <ProductDetailContainer>
        <BigImageContainer>
          <BigImage small={imageURL} large={imageURL} />
        </BigImageContainer>
        <ProductInformationContainer>
          <ProductInfoContainer>
            <ProductInfoTitle>{product_name}</ProductInfoTitle>
            <ProductInfoDesc lines={10} anchorClass='showmoreless'>
              {product_desc}
            </ProductInfoDesc>
            <ProductInfoReportDownloadContainer>
              <ProductInfoReportDownload href={product_file_link}>
                <ProductInfoReportDownloadIcon /> Download
              </ProductInfoReportDownload>
            </ProductInfoReportDownloadContainer>
          </ProductInfoContainer>
          <ProductAuthorsContainer>
            <div>
              <ProductAuthorImage />
            </div>
            <div>
              <ProductAuthorName>
                {product_contributors.person_name}
              </ProductAuthorName>
              <ProductAuthorGeneration>
                Angkatan {product_contributors.batch_of_school_year}
              </ProductAuthorGeneration>
            </div>
          </ProductAuthorsContainer>
        </ProductInformationContainer>
      </ProductDetailContainer>
    </>
  ) : (
    <LoaderContainer loading={loading}>
      <Loader loading={loading} size={50} />
      <LoaderText>Loading</LoaderText>
    </LoaderContainer>
  );
};

export default ProductDetail;
