import { fullBlog } from '@/app/lib/interface';
import { client, urlFor, previewClient } from '@/app/lib/sanity';
import withFooter from '@/app/withFooter';
import { PortableText, PortableTextComponents } from 'next-sanity';
import Image from 'next/image';
import CodeBlockWithCopy from '../components/CodeBlockWithCopy';
import { Metadata } from 'next';
import { cookies } from 'next/headers';
import ExitPreviewButton from '@/components/ExitPreviewButton';

export const revalidate = 30;

async function getData(slug: string, preview: boolean) {
  const query = `
    *[_type == "blog" && slug.current == $slug]{
        "currentSlug":slug.current,
          title,
          content,
          titleImage,
          smallDescription,
          publishedAt,
          }[0]`;

  const params = { slug };

  const data = preview
    ? await previewClient.fetch(query, params)
    : await client.fetch(query, params);

  if (!data) {
    return <div>Preview content is not available.</div>;
  }

  return data;
}

const customPortableTextComponents: PortableTextComponents = {
  types: {
    image: ({ value }: { value: any }) => (
      <Image
        src={urlFor(value).url()}
        width={1200}
        height={675}
        alt={value.alt || 'Image'}
        className='rounded mt-8 mx-auto'
      />
    ),
    code: ({ value }: { value: any }) => (
      <CodeBlockWithCopy
        language={value.language || 'text'}
        code={value.code}
      />
    ),
  },
  marks: {
    // color: ({ children, value }) => (
    //   <span style={{ color: value.color?.hex }}>{children}</span>
    // ),
    favoriteColor: ({ children, value }) => {
      const color = value.color?.hex;
      return <span style={{ color }}>{children}</span>;
    },
    textColor: ({ children, value }) => (
      <span style={{ color: value.value }}>{children}</span>
    ),
    highlightColor: ({ children, value }) => (
      <span style={{ background: value.value }}>{children}</span>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className='custom-bullet-list'>{children}</ul>
    ),
    number: ({ children }) => (
      <ol className='custom-number-list'>{children}</ol>
    ),
  },
};

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const data: fullBlog = await getData(params.slug, false);
  const metaDescription =
    data.smallDescription || 'Default description for the blog post.';
  const metaTitle = `${data.title} | Anik Malik - Blog`;
  const metaUrl = `https://anikmalik.com/blog/${data.currentSlug}`;
  const metaImage = data.titleImage
    ? urlFor(data.titleImage).url()
    : 'default-image-url.jpg'; // Use a default image

  return {
    title: metaTitle,
    description: metaDescription,
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: metaUrl,
      type: 'article',
      images: [
        {
          url: metaImage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: metaTitle,
      description: metaDescription,
      images: [metaImage],
    },
    other: {
      'application/ld+json': JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: data.title,
        image: metaImage,
        author: {
          '@type': 'Person',
          name: 'Anik Malik',
        },
        publisher: {
          '@type': 'Organization',
          name: 'Anik Malik',
          logo: {
            '@type': 'ImageObject',
            url: 'https://anikmalik.com/cube-fallback.webp',
          },
        },
        datePublished: data.publishedAt,
        dateModified: data.publishedAt,
        description: metaDescription,
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': metaUrl,
        },
        articleBody: data.content.slice(0, 150),
      }),
    },
  };
}

async function BlogArticle({ params }: { params: { slug: string } }) {
  const cookieStore = cookies();
  const previewCookie = cookieStore.get('preview')?.value;
  const preview = previewCookie === 'true';

  const data: fullBlog = await getData(params.slug, preview);

  return (
    <div className='min-h-screen bg-black overflow-hidden'>
      <div className='max-w-5xl mx-auto px-8  my-28'>
        <h1>
          <span className='block text-base text-center text-primary font-semibold tracking-wide uppercase'>
            Anik Malik - Blog
          </span>
          <span className='mt-2 block text-2xl text-center leading-8 font-bold tracking-tight sm:text-3xl lg:text-4xl'>
            {data.title}
          </span>
        </h1>
        {data.titleImage && (
          <Image
            src={urlFor(data.titleImage).url()}
            width={1200}
            height={630}
            alt='Title Image'
            priority
            className='rounded mt-8 mx-auto'
          />
        )}
        <div className='mx-auto mt-16 prose prose-blue prose-lg dark:prose-invert'>
          <PortableText
            value={data.content}
            components={customPortableTextComponents}
          />
        </div>
        {/* Exit Preview Button */}
        {preview && <ExitPreviewButton />}
      </div>
    </div>
  );
}

export default withFooter(BlogArticle);
