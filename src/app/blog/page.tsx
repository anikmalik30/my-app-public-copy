import Cards from './components/Cards';

export const revalidate = 30;

async function Blog() {
  return (
    <div className='min-h-screen bg-black overflow-hidden'>
      {/* <h1 className="font-bold text-2xl">Blog</h1> */}
      <h1 className='text-3xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-gray-400 z-10 mt-28 max-w-6xl mx-5 md:mx-auto'>
        Blog
      </h1>
      <div className='max-w-5xl mx-auto px-8 my-14'>
        <Cards />
      </div>
    </div>
  );
}

export default Blog;
