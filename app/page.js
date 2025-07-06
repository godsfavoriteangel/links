"use client";


import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import pfp from '../public/pfp.png';
import useSWR from 'swr';
import { SiSpotify } from 'react-icons/si';
import Nav from './components/Nav';
import Link from 'next/link';
import Sparkles from './components/Sparkles';


const fetcher = (url) => fetch(url).then((r) => r.json());


const Home = () => {
  const { data } = useSWR('/api/spotify', fetcher);
  return (
    <div> 
      <Nav />
      <div id='home_main' className='w-[375px] md:w-[768px] xl:w-[1100px] xl:border-2 xl:rounded-xl xl:border-pink-200 xl:shadow-[0_0_2px_#fbcfe8,inset_0_0_2px_#fbcfe8,0_0_5px_#fbcfe8,0_0_15px_#fbcfe8,0_0_30px_#fbcfe8] mx-auto xl:mt-10 xl:mb-10 justify-center items-center px-6 xl:py-5 flex flex-col xl:flex-row' >
          <div id='home_main_profile' className='flex flex-col items-center xl:flex-row'>
          <Image 
            id='home_main_profile_img'
            src={pfp} 
            alt='profile' 
            className='w-[200px] h-[200px] md:w-[280px] md:h-[280px] xl:w-[250px] xl:h-[250px] rounded-full'
            priority
          />
          <div id='home_main_profile_text' className='mx-7'>
            <h1 id='home_main_profile_title' className='text-pink-200 text-4xl xl:text-5xl text-shadow-[0_2px_8px_#fbcfe8] font-porkys text-center my-2'>
              ❤︎ h a r m o n y ❤︎
            </h1>
            <h2 id='home_main_profile_desc' className='text-pink-200 text-shadow-[0_2px_8px_#fbcfe8] w-[350px] md:w-[400px] mx-2 my-3 text-center font-rainyhearts text-lg/6 md:text-xl/6 '>
              22y/o based in LA ☆ self taught web dev <br></br> powered by adderall and nicotine <br></br> cultivating my soul online and attempting to make meaningful connections <br></br> media i enjoy: ff7, evangelion, kh, csgo
            </h2>
          </div>
        </div>
        <div id='home_main_spotify' className='my-3 xl:my-0' onClick={() => {
          location.href = 'https://open.spotify.com/user/harmonykloes';
        }}>
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
        <ul id='socials' className='flex flex-col justify-center items-center my-3 xl:grid xl:grid-cols-2 xl:gap-3 xl:justify-center xl:items-center xl:max-w-[1000px] xl:mx-auto'>
          <li className='py-2 mx-auto'>
            <Link href="https://www.instagram.com/harmonyevaa/" className='text-pink-200 text-shadow-[0_2px_8px_#fbcfe8] font-porkys text-3xl xl:text-4xl custom-cursor'>
            <Sparkles>
            ✧ i n s t a g r a m ✧
            </Sparkles>
            </Link>
          </li>
          <li className='py-2 mx-auto'>
            <Link href="https://x.com/harmonyevaa" className='text-pink-200 text-shadow-[0_2px_8px_#fbcfe8] font-porkys text-3xl xl:text-4xl custom-cursor'>
            <Sparkles>
            ✧ t w i t t e r ✧
            </Sparkles>
            </Link>
          </li>
          <li className='py-2 mx-auto'>
            <Link href="https://www.twitch.tv/harmony" className='text-pink-200 text-shadow-[0_2px_8px_#fbcfe8] font-porkys text-3xl xl:text-4xl custom-cursor'> 
            <Sparkles>
            ✧ t w i t c h ✧
            </Sparkles>
            </Link>
          </li>
          <li className='py-2 mx-auto'>
            <Link href="https://www.tiktok.com/@harmonyevaa" className='text-pink-200 text-shadow-[0_2px_8px_#fbcfe8] font-porkys text-3xl xl:text-4xl custom-cursor'>
            <Sparkles>
            ✧ t i k t o k ✧
            </Sparkles>
            </Link>
          </li>
          <li className='py-2 mx-auto'>
            <Link href="https://onlyfans.com/harmonyeva" className='text-pink-200 text-shadow-[0_2px_8px_#fbcfe8] font-porkys text-3xl xl:text-4xl custom-cursor '>
            <Sparkles>
            ✧ o n l y f a n s ✧
            </Sparkles>
            </Link>
          </li>
          <li className='py-2 mx-auto'>
            <Link href="https://discord.gg/BJvCdJNQZD" className='text-pink-200 text-shadow-[0_2px_8px_#fbcfe8] font-porkys text-3xl xl:text-4xl custom-cursor '>
            <Sparkles>
            ✧ d i s c o r d ✧
            </Sparkles>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;