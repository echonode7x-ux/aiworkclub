import { SITE_CONFIG } from "./constants";

export function constructMetadata({
  title = SITE_CONFIG.name,
  description = SITE_CONFIG.description,
  image = SITE_CONFIG.ogImage,
  icons = "/favicon.ico",
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string;
  icons?: string;
  noIndex?: boolean;
} = {}) {
  return {
    title: {
      default: title,
      template: `%s | ${SITE_CONFIG.name}`,
    },
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@aiplaybook",
    },
    icons,
    metadataBase: new URL(SITE_CONFIG.url),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
