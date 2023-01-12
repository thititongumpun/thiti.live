import { PageInfo } from "../types/type";

export const fetchPageInfo = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfo`);
  const data = await res.json();
  const socials: PageInfo = data.pageInfo;

  return socials;
}