"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import useSWR from 'swr';
import { SiSpotify } from 'react-icons/si';
import Nav from './components/Nav';
import { prefix } from '../prefix.ts';
import { getImagePath } from '../helpers/getImagePath';


const fetcher = (url) => fetch(url).then((r) => r.json());
  

const Home = () => {
  const { data } = useSWR(`${prefix}/api/spotify`, fetcher);
  return (
    <div> 
      <Nav />
      <div id='home_main' className='w-[1100px] border-2 rounded-xl border-pink-200 shadow-[0_0_2px_#fbcfe8,inset_0_0_2px_#fbcfe8,0_0_5px_#fbcfe8,0_0_15px_#fbcfe8,0_0_30px_#fbcfe8] mx-auto mt-10 mb-10 justify-center items-center py-5 px-6 flex flex-row sm:w-[640px] md:w-[768px] lg:w-[1100px] ' >
          <div id='home_main_profile' className='flex flex-row items-center'>
          <Image 
            id='home_main_profile_img'
            src={getImagePath('pfp.png')} 
            alt='profile' 
            width={250}
            height={250}
            className='w-[250px] h-[250px] rounded-full md:w-[150px] md:h-[150px] lg:w-[250px] lg:h-[250px]'
          />
          <div id='home_main_profile_text' className='mx-7'>
            <h1 id='home_main_profile_title' className='text-pink-200 text-5xl text-shadow-[0_2px_12px_#eec3d6] font-porkys text-center'>
              ❤︎ h a r m o n y ❤︎
            </h1>
            <h2 id='home_main_profile_desc' className='text-pink-200 text-shadow-[0_2px_8px_#fbcfe8] w-[400px] mx-2 my-3 text-center font-rainyhearts text-xl/6'>
              21y/o based in LA  ☆ self taught web dev <br></br> So if on advanced addition absolute received replying throwing he. Delighted consisted newspaper of unfeeling as neglected so. Tell size come hard mrs and four fond a
            </h2>
          </div>
        </div>
        <div id='home_main_spotify' className=''>
          <div id='home_main_spotify_top' className=' rounded-lg border border-pink-200  w-[280px] flex flex-col  items-center pt-2 pb-2 shadow-[0_0_2px_#fbcfe8,inset_0_0_2px_#fbcfe8,0_0_5px_#fbcfe8,0_0_15px_#fbcfe8,0_0_1px_#fbcfe8] '>
            <p id='home_main_spotify_title' className='text-pink-200 text-shadow-[0_2px_8px_#fbcfe8] '>
            ♫ ₊˚. currently listening .˚₊ ♫
            </p>
            <div id='home_main_spotify_img' className='w-20 mt-2 mb-2'>
              {data?.isPlaying ? (
                <img
                  className='rounded-md'
                  src={`${prefix}${data?.albumImageUrl}`}
                  alt= {`${prefix}${data?.album}`}
                />
              ) : (
                <SiSpotify size={64} color={'#fbcfe8'}  className='m-auto'/>
              )}
            </div>
            <div id='home_main_spotify_bottom'>
              <p id='home_main_spotify_title' className='text-pink-200 text-shadow-[0_2px_8px_#fbcfe8] text-center'>
              {prefix}{data?.isPlaying ? data.title : 'Not Listening'}
              </p>
              <p id='home_main_spotify_artist' className='text-pink-200 text-shadow-[0_2px_8px_#fbcfe8] text-center'>
              {prefix}{data?.isPlaying ? data.artist : 'Spotify'}
              </p>
              <h3 id='home_main_spotify_time' className='text-pink-200 text-shadow-[0_2px_8px_#fbcfe8] text-center pt-2'>
                ▶︎ •၊ ၊||၊| ။ ||||။ ‌၊|• 0:10
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div>

      </div>
    </div>
  );
};

export default Home;