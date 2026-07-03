import { useEffect } from "react";

const SITE_URL = "https://adityamore.work";

interface SEOProps {
  title: string;
  description: string;
  path?: string;
}

export const useSEO = ({ title, description, path = "/" }: SEOProps) => {
  useEffect(() => {
    document.title = title;

    const setMeta = (selector: string, attr: string, content: string) => {
      const el = document.querySelector(selector);
      if (el) el.setAttribute(attr, content);
    };

    const url = `${SITE_URL}${path}`;

    setMeta('meta[name="description"]', "content", description);
    setMeta('meta[property="og:title"]', "content", title);
    setMeta('meta[property="og:description"]', "content", description);
    setMeta('meta[property="og:url"]', "content", url);
    setMeta('meta[name="twitter:title"]', "content", title);
    setMeta('meta[name="twitter:description"]', "content", description);
    setMeta('link[rel="canonical"]', "href", url);

    window.scrollTo(0, 0);
  }, [title, description, path]);
};
