import type { Metadata } from "next";
import type { PageData } from "./types";
import { SITE_NAME } from "./site";

export function pageMetadata(page: PageData): Metadata {
  const post = page.schema.find((n) => n["@type"] === "BlogPosting") as
    | { datePublished?: string; dateModified?: string }
    | undefined;
  const socialTitle = page.socialTitle ?? page.title;
  return {
    title: { absolute: page.title },
    description: page.description,
    alternates: { canonical: page.path },
    robots: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
    openGraph: {
      ...(post
        ? { type: "article" as const, publishedTime: post.datePublished, modifiedTime: post.dateModified }
        : { type: "website" as const }),
      siteName: SITE_NAME,
      locale: "fa_IR",
      url: page.path,
      title: socialTitle,
      description: page.description,
      images: [{ url: page.image, width: 1200, height: 630, alt: page.imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description: page.description,
      images: [page.image],
    },
  };
}
