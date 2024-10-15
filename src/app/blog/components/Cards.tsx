import Image from 'next/image';
import { simpleBlogCard } from '../../lib/interface';
import { client, urlFor } from '../../lib/sanity';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

async function getData() {
  const query = `
    *[_type== 'blog'] | order(_createdAt desc){
        title,
          smallDescription,
          "currentSlug":slug.current,
          titleImage
      }`;
  const data = await client.fetch(query);

  return data;
}

export default async function Cards() {
  const data: simpleBlogCard[] = await getData();
  // console.log(data);
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 mt-5 gap-5'>
      {data.map((post, idx) => (
        <Link href={`/blog/${post.currentSlug}`} key={post.currentSlug}>
          <Card className='relative cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl rounded-lg overflow-hidden hover:bg-black'>
            <div className='overflow-hidden'>
              <Image
                src={urlFor(post.titleImage).url()}
                alt='image'
                width={500}
                height={500}
                className='rounded-t-lg h-[200px] object-cover'
                loading='eager'
                priority={true}
              />
            </div>
            <CardContent className='mt-5 transition-colors duration-300 hover:bg-black'>
              <h3 className='text-xl line-clamp-2 font-bold'>{post.title}</h3>
              <p className='line-clamp-3 text-sm mt-2 text-gray-300'>
                {post.smallDescription}
              </p>
            </CardContent>
            {/* <Button asChild className="w-full mt-7">
            <Link href={`/blog/${post.currentSlug}`}>
                Read More   
            </Link>
          </Button> */}
            <div className='absolute inset-0 flex items-end mb-4 justify-center bg-gradient-to-t from-black via-transparent to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100'>
              <span className='text-white text-lg font-bold transform translate-y-4 transition-transform duration-300 hover:translate-y-0 hover:shadow-lg hover:animate-pulse'>
                Read More
              </span>
            </div>
          </Card>
        </Link>
      ))}
    </div>
  );
}
