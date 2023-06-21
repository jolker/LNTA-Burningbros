import _ from "lodash";
import { useState, useRef } from "react";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { dataProducts, setData } from "../reducer/product";
import ProductItem from "./ProductItem";
import APIs from "../apis";
import { PRODUCT_PAGE_SIZE } from "../constant";
import Button from "@mui/material/Button";
import { useInView } from "react-cool-inview";

function InfiniteList() {
  const dispatch = useAppDispatch();
  const listProduct = useAppSelector(dataProducts);

  const [loadMore, setLoadMore] = useState(true);
  const [currentPage, setCurrentPage] = useState(20);

  const { observe } = useInView({
    // For better UX, we can grow the root margin so the data will be loaded earlier
    rootMargin: "50px 0px",
    // When the last item comes to the viewport
    onEnter: () => {
      if(loadMore) {
        handleClick();
      }
    },
  });

  const getData = async (page) => {
    return APIs.getProducts({ page, pageSize: PRODUCT_PAGE_SIZE });
  };

  if (!listProduct || listProduct.length <= 0) {
    return (
      <>
        <div> No Data </div>
      </>
    );
  }

  function handleClick() {
    setCurrentPage(currentPage + PRODUCT_PAGE_SIZE);
    getData(currentPage).then((res) => {
      let clone = _.cloneDeep(res);
      let temp = listProduct.concat(clone);
      dispatch(setData(temp));
      if (clone.length < PRODUCT_PAGE_SIZE) {
        setLoadMore(false);
      }
    });
  }

  return (
    <>
      <div className="grid grid-cols-4 gap-4">
        {listProduct?.map((product, idx) => (
          <div ref={idx === listProduct.length - 1 ? observe : null} key={product.id}>
            <ProductItem
              key={product.id}
              id={product.id}
              title={product.title}
              description={product.description}
              price={product.price}
              discountPercentage={product.discountPercentage}
              rating={product.rating}
              stock={product.stock}
              brand={product.brand}
              category={product.category}
              thumbnail={product.thumbnail}
              images={product.images}
            />
          </div>
        ))}
      </div>
      {/* <Button variant="contained" onClick={handleClick}>See more</Button> */}
    </>
  );
}

export default InfiniteList;
