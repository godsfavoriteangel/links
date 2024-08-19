import React from 'react';
import Link from 'next/link'

const Nav = () => {
    return (
        <div>
        <ul id='nav'className='flex flex-row justify-center my-4'>
          <li>
            <Link href="/" className='text-pink-200 text-2xl text-shadow-[0_4px_12px_#fbcfe8] px-6 custom-cursor ' >home</Link>
          </li>
          <li>
            <Link href="/images" className='text-pink-200 text-2xl text-shadow-[0_4px_12px_#fbcfe8] px-6 custom-cursor' >⋆｡‧˚ʚ ୨୧ ɞ˚‧｡⋆</Link>
          </li>
          <li>
            <Link href="/coding" className='text-pink-200 text-2xl text-shadow-[0_4px_12px_#fbcfe8] px-6 custom-cursor' >projects</Link>
          </li>
        </ul>
      </div>
    );
};

export default Nav;