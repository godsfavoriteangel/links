import React from 'react';
import Link from 'next/link'

const Nav = () => {
    return (
      <div>
        <ul id='nav' className='flex flex-row justify-center my-4 xl:w-[1200px] xl:mx-auto'>
          <li className='flex-1 text-right'>
            <Link href="/" className='text-pink-200 text-lg md:text-2xl text-shadow-[0_4px_12px_#fbcfe8] px-6 custom-cursor'>home</Link>
          </li>
          <li className='flex-1 text-center'>
            <Link href="/images" className='text-pink-200 text-lg md:text-2xl text-shadow-[0_4px_12px_#fbcfe8] custom-cursor'>⋆ ｡‧˚ʚ ୨୧ ɞ˚‧｡⋆</Link>
          </li>
          <li className='flex-1 text-left'>
            <Link href="/projects" className='text-pink-200 text-lg md:text-2xl text-shadow-[0_4px_12px_#fbcfe8] px-6 custom-cursor'>projects</Link>
          </li>
        </ul>
    </div>
    
    );
};

export default Nav;