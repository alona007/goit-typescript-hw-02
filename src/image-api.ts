import axios, { AxiosResponse } from "axios";
import { Image } from "./types";

const key = "8kz6qX3JDJw2lhxVpc-SBzdhuyqicQUdiHduys9-8sU";
axios.defaults.baseURL = "https://api.unsplash.com";

type FetchImagesParams = {
  topic: string;
  page?: number;
};

interface FetchImagesResponse {
  results: Image[];
  total: number;
  total_pages: number;
}

export const fetchImages = async ({
  topic,
  page = 1,
}: FetchImagesParams): Promise<FetchImagesResponse> => {
  const res: AxiosResponse<FetchImagesResponse> = await axios.get(
    "/search/photos",
    {
      params: {
        query: topic,
        page: page,
        per_page: 20,
        client_id: key,
      },
    }
  );
  return res.data;
};
