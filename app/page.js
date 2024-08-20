"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import pfp from '../public/pfp.png';
import useSWR from 'swr';
import { SiSpotify } from 'react-icons/si';
import Nav from './components/Nav';


const fetcher = (url) => fetch(url).then((r) => r.json());
  

const Home = () => {
  const { data } = useSWR('/api/spotify', fetcher);
  return (
    <div> 
      <Nav />
      <div id='home_main' className='w-[375px] md:w-[768px] xl:w-[1100px] xl:border-2 xl:rounded-xl xl:border-pink-200 xl:shadow-[0_0_2px_#fbcfe8,inset_0_0_2px_#fbcfe8,0_0_5px_#fbcfe8,0_0_15px_#fbcfe8,0_0_30px_#fbcfe8] mx-auto xl:mt-10 xl:mb-10 justify-center items-center px-6 xl:py-5 flex flex-col xl:flex-row ' >
          <div id='home_main_profile' className='flex flex-col items-center xl:flex-row'>
          <Image 
            id='home_main_profile_img'
            src={pfp} 
            alt='profile' 
            className='w-[200px] h-[200px] md:w-[280px] md:h-[280px] xl:w-[250px] xl:h-[250px] rounded-full'
            priority
          />
          <div id='home_main_profile_text' className='mx-7'>
            <h1 id='home_main_profile_title' className='text-pink-200 text-4xl xl:text-5xl text-shadow-[0_2px_12px_#eec3d6] font-porkys text-center my-2 '>
              ❤︎ h a r m o n y ❤︎
            </h1>
            <h2 id='home_main_profile_desc' className='text-pink-200 text-shadow-[0_2px_8px_#fbcfe8] w-[350px] md:w-[400px] mx-2 my-3 text-center font-rainyhearts text-lg/6 md:text-xl/6 '>
              21y/o based in LA  ☆ self taught web dev <br></br> So if on advanced addition absolute received replying throwing he. Delighted consisted newspaper of unfeeling as neglected so. Tell size come hard mrs and four fond a
            </h2>
          </div>
        </div>
        <div id='home_main_spotify' className='my-3 xl:my-0'>
          <div id='home_main_spotify_top' className=' rounded-lg border border-pink-200  w-[280px] flex flex-col  items-center pt-2 pb-2 shadow-[0_0_2px_#fbcfe8,inset_0_0_2px_#fbcfe8,0_0_5px_#fbcfe8,0_0_15px_#fbcfe8,0_0_1px_#fbcfe8] '>
            <p id='home_main_spotify_title' className='text-pink-200 text-shadow-[0_2px_8px_#fbcfe8] '>
            ♫ ₊˚. currently listening .˚₊ ♫
            </p>
            <div id='home_main_spotify_img' className='w-20 mt-2 mb-2'>
              {data?.isPlaying ? (
                <img
                  className='rounded-md'
                  src={data?.albumImageUrl}
                  alt={data?.album}
                />
              ) : (
                <SiSpotify size={64} color={'#fbcfe8'}  className='m-auto'/>
              )}
            </div>
            <div id='home_main_spotify_bottom'>
              <p id='home_main_spotify_title' className='text-pink-200 text-shadow-[0_2px_8px_#fbcfe8] text-center'>
                {data?.isPlaying ? data.title : 'Not Listening'}
              </p>
              <p id='home_main_spotify_artist' className='text-pink-200 text-shadow-[0_2px_8px_#fbcfe8] text-center'>
                {data?.isPlaying ? data.artist : 'Spotify'}
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