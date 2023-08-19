import { PageInfo } from "../typings";
import { groq } from "next-sanity";
import { sanityClient } from "../sanity";

const query = groq`
    *[_type == 'pageInfo'][0]
`;

export const fetchPageInfo = async () => {
  const res = await sanityClient.fetch(query);

  const pageInfo: PageInfo = res;

  return pageInfo;
};