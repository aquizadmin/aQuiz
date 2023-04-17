const runtimeConfig = useRuntimeConfig();

const useFetchWithHeaders = (req: string, opts: any) => useFetch(
  req,
  {
    ...opts,
    baseURL: runtimeConfig.public.apiBaseUrl,
    headers: {
      Authorization: `Bearer ${localStorage.getItem('access-token')}`,
    },
  });

export default useFetchWithHeaders;