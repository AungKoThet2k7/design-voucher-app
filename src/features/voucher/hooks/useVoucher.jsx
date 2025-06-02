import { useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import useSWR from "swr";
import { fetchVouchers } from "../../../services/voucher";
import { debounce } from "lodash";
import { urlToParamObject } from "../../../utils/url";

const useVoucher = () => {
  const location = useLocation();

  const [params, setParams] = useSearchParams();

  const [fetchUrl, setFetchUrl] = useState(
    import.meta.env.VITE_API_URL + "/vouchers" + location.search
  );

  const { data, error, isLoading } = useSWR(fetchUrl, fetchVouchers);

  const handleSearch = debounce((e) => {
    if (e.target.value) {
      setParams({ q: e.target.value });
      setFetchUrl(
        import.meta.env.VITE_API_URL + `/vouchers?q=${e.target.value}`
      );
    } else {
      setParams({});
      setFetchUrl(import.meta.env.VITE_API_URL + "/vouchers");
    }
  }, 500);

  const updateFetchUrl = (url) => {
    setParams(urlToParamObject(url));
    setFetchUrl(url);
  };

  const handleSort = (sortData) => {
    const sortParams = new URLSearchParams(sortData).toString();
    setParams(sortData);
    setFetchUrl(import.meta.env.VITE_API_URL + `/vouchers?${sortParams}`);
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

export default useVoucher;
