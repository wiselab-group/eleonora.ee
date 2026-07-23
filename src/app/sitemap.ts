import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = {
    en: `${siteUrl}/en`,
    ru: `${siteUrl}/ru`,
  };

  return [
    {
      url: `${siteUrl}/en`,
      lastModified: new Date(),
      alternates: { languages },
    },
    {
      url: `${siteUrl}/ru`,
      lastModified: new Date(),
      alternates: { languages },
    },
  ];
}
