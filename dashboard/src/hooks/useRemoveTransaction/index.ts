import useLoading from "../useLoading";

const useRemoveTransaction = () => {
  const { isLoading, onFetchData } = useLoading({
    method: "post",
    api: `${process.env.REACT_APP_DOMAIN_API}/api/transaction/remove`,
  });

  return { isLoading, onFetchData };
};

export default useRemoveTransaction;
