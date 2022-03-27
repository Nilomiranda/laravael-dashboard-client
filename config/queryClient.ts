import axios from 'axios'
import {QueryClient} from "react-query";

const defaultQueryFunction = async ({ queryKey }) => {
  const [endpoint] = queryKey ?? [];

  const { data } = await axios.get(`http://localhost:8000/api/${endpoint}`);

  return data;
}

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: defaultQueryFunction,
    }
  }
})
