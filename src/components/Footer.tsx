import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='bg-black text-gray-200 py-14 border-t border-gray-700'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col md:flex-row justify-between items-center text-center md:text-left '>
          <div className='mb-4 md:mb-0'>
            <h1 className='text-2xl font-bold text-white'>Anik Malik</h1>
            <p className='text-sm text-gray-500'>Full Stack Developer</p>
            <p className='text-sm text-gray-400 mt-2'>
              Excelling in the development of scalable web applications and
              leveraging the latest web technologies.
            </p>
          </div>
          <div className='flex space-x-4 mr-5'>
            <a
              href='https://github.com/anikmalik30'
              target='_blank'
              rel='noopener noreferrer'
              className='text-gray-400 hover:text-white'
            >
              <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 24 24'>
                <path d='M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577v-2.165c-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.084 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.998.108-.775.42-1.305.763-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.467-2.38 1.235-3.22-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.98-.398 3-.403 1.02.005 2.043.137 3 .403 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.24 2.873.118 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.803 5.62-5.475 5.92.43.37.823 1.102.823 2.222v3.293c0 .32.218.694.825.576C20.565 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z' />
              </svg>
            </a>
            <a
              href='https://www.linkedin.com/in/anik-malik-6bb8a1245'
              target='_blank'
              rel='noopener noreferrer'
              className='text-gray-400 hover:text-white'
            >
              <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 24 24'>
                <path d='M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5 11.5h-3v-5.5c0-1.1-.9-2-2-2s-2 .9-2 2v5.5h-3v-10h3v1.5c.9-1.35 2.5-1.5 3.5-1.5 2.21 0 4 1.79 4 4v6.5z' />
              </svg>
            </a>
            <a
              href='mailto:contact@anikmalik.com'
              className='text-gray-400 hover:text-white'
            >
              <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 24 24'>
                <path d='M12 12.713l11.985-7.713c-.003-.002-11.985-7.713-11.985-7.713s-11.982 7.711-11.985 7.713l11.985 7.713zm0 2.287l-12-7.75v13.75c0 1.104.896 2 2 2h20c1.104 0 2-.896 2-2v-13.75l-12 7.75z' />
              </svg>
            </a>
          </div>
        </div>
        <div className='mt-4 flex flex-col md:flex-row justify-between items-center'>
          <div className='text-sm text-gray-400'>
            {/* <p>
              Contact: <a href='tel:+919898669035'>+91 9898669035</a>
            </p> */}
            <p>
              Email:{' '}
              <a href='mailto:contact@anikmalik.com'>contact@anikmalik.com</a>
            </p>
          </div>
          <div className='flex space-x-4 mt-4 md:mt-0'>
            <Link href='/' className='text-gray-400 hover:text-white'>
              Home
            </Link>
            <Link href='about' className='text-gray-400 hover:text-white'>
              About
            </Link>
            <Link href='blog' className='text-gray-400 hover:text-white'>
              Projects
            </Link>
            <Link href='contact' className='text-gray-400 hover:text-white'>
              Contact
            </Link>
          </div>
        </div>
        <div className='mt-4 text-center text-sm text-gray-500'>
          &copy; {new Date().getFullYear()} Anik Malik. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
