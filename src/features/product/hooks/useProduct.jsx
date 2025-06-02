import { debounce } from "lodash";
import { useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import useSWR from "swr";
import { fetchProducts } from "../../../services/product";
import { urlToParamObject } from "../../../utils/url";

const useProduct = () => {
  const location = useLocation();

  const [params, setParams] = useSearchParams();

  const [fetchUrl, setFetchUrl] = useState(
    import.meta.env.VITE_API_URL + "/products" + location.search
  );

  const { data, error, isLoading } = useSWR(fetchUrl, fetchProducts);

  const handleSearch = debounce((e) => {
    if (e.target.value) {
      setParams({ q: e.target.value });
      setFetchUrl(
        import.meta.env.VITE_API_URL + `/products?q=${e.target.value}`
      );
    } else {
      setParams({});
      setFetchUrl(import.meta.env.VITE_API_URL + "/products");
    }
  }, 500);

  const updateFetchUrl = (url) => {
    setParams(urlToParamObject(url));
    setFetchUrl(url);
  };

  const handleSort = (sortData) => {
    const sortParams = new URLSearchParams(sortData).toString();
    setParams(sortData);
    setFetchUrl(import.meta.env.VITE_API_URL + `/products?${sortParams}`);
  };

  return {
    data,
    error,
    isLoading,
    handleSearch,
    updateFetchUrl,
    handleSort,
  };
};

export default useProduct;