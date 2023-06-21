import { SearchInput, InfiniteList } from "../components";
import { useEffect } from "react";
import { useAppDispatch } from "../app/hooks";
import { setData } from "../reducer/product";
import APIs from "../apis";
import { PRODUCT_PAGE_SIZE } from "../constant";
import _ from "lodash";

function Home() {
  const dispatch = useAppDispatch();

  const getData = async () => {
    return APIs.getProducts({ page: 0, pageSize: PRODUCT_PAGE_SIZE });
  };

  useEffect(() => {
    getData().then((res) => {
      let clone = _.cloneDeep(res)
      dispatch(setData(clone));
    });
  }, []);

  return (
    <>
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-md shadow-md mt-7 p-5">
          <SearchInput />
        </div>
        <div className="bg-white rounded-md shadow-md mt-7 p-5">
          <InfiniteList />
        </div>
      </div>
    </>
  );
}

export default Home;
