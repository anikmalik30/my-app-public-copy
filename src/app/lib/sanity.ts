import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';
import { env } from 'process';

export const client = createClient({
  projectId: env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2022-03-07',
  useCdn: false,
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}

export const previewClient = createClient({
  projectId: env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2022-03-07',
  useCdn: false,
  token: env.NEXT_PUBLIC_SANITY_PREVIEW_TOKEN,
  perspective: 'previewDrafts',
});
