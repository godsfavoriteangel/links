"use client";
import Nav from '../components/Nav';
import Image from 'next/image';
import Link from 'next/link';


const Projects = () => {
    return (
      <div>
        <Nav />
        <div className='mx-10 mt-8 mb-2 flex flex-col items-center  '>
          <p id='typewriter' className='text-pink-200 text-shadow-[0_2px_8px_#fbcfe8] text-left font-rainyhearts text-lg/6 md:text-xl/6 md:w-[800px]'>
            i found my passion for coding in 2023, beginning my journey with python and html/css. since then i have been completely obsessed with creating and designing websites<br></br>here you will find a collection of my coding projects ♡ <br></br>i am always working on new projects so check back frequently!
          </p>
        </div>
        <div id='projects_container' className='md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 lg:justify-center lg:max-w-[1600px] lg:mx-auto '> 
          <div id='projects_card' className='w-[350px] border-2 rounded-xl border-pink-200 shadow-[0_0_2px_#fbcfe8,inset_0_0_2px_#fbcfe8,0_0_5px_#fbcfe8,0_0_15px_#fbcfe8,0_0_30px_#fbcfe8] flex flex-col px-5 py-3 mx-auto my-12'>
            <h1 id='projects_card_title' className='text-pink-200 text-shadow-[0_2px_ 8px_#fbcfe8] font-rainyhearts text-3xl'>Pokedex</h1>
            <p id='projects_card_desc' className='text-pink-200 text-shadow-[0_2px_8px_#fbcfe8] font-rainyhearts text-lg/4'>using the pokeapi, this pokedex displays all the first 150 pokemon</p>
            <Image 
              src='/project3.png' 
              alt='project 3' 
              className='w-[300px] h-[300px] object-cover rounded-xl my-5' 
              width={2572}
              height={1361}
            />
            <div id='projects_card_links' className='flex flex-row items-center justify-center'>
              <Link target="_blank" href='https://harmonyeva.github.io/pokedex/' className='text-pink-200 text-shadow-[0_2px_8px_#fbcfe8] font-rainyhearts text-lg px-2 custom-cursor'> 
                Live Site
              </Link>
              <p className='text-pink-200 text-shadow-[0_2px_8px_#fbcfe8] font-rainyhearts text-lg px-2'>❤︎</p>
              <Link target="_blank" href='https://github.com/harmonyeva/pokedex' className='text-pink-200 text-shadow-[0_2px_8px_#fbcfe8] font-rainyhearts text-lg px-2 custom-cursor'> 
                Source Code
              </Link>
            </div>
          </div>
          <div id='projects_card' className='w-[350px] border-2 rounded-xl border-pink-200 shadow-[0_0_2px_#fbcfe8,inset_0_0_2px_#fbcfe8,0_0_5px_#fbcfe8,0_0_15px_#fbcfe8,0_0_30px_#fbcfe8] flex flex-col px-5 py-3 mx-auto my-12'>
            <h1 id='projects_card_title' className='text-pink-200 text-shadow-[0_2px_ 8px_#fbcfe8] font-rainyhearts text-3xl'>Tic Tac Toe</h1>
            <p id='projects_card_desc' className='text-pink-200 text-shadow-[0_2px_8px_#fbcfe8] font-rainyhearts text-lg/4'>basic (but cute) tic tac toe game made with html, css, and javascript</p>
            <Image 
              src='/project2.png' 
              alt='project 2' 
              className='w-[300px] h-[300px] object-cover rounded-xl my-5' 
              width={2572}
              height={1361}
            />
            <div id='projects_card_links' className='flex flex-row items-center justify-center'>
              <Link target="_blank" href='https://harmonyeva.github.io/sanriotictactoe/' className='text-pink-200 text-shadow-[0_2px_8px_#fbcfe8] font-rainyhearts text-lg px-2 custom-cursor'> 
                Live Site
              </Link>
              <p className='text-pink-200 text-shadow-[0_2px_8px_#fbcfe8] font-rainyhearts text-lg px-2'>❤︎</p>
              <Link target="_blank" href='https://github.com/harmonyeva/sanriotictactoe' className='text-pink-200 text-shadow-[0_2px_8px_#fbcfe8] font-rainyhearts text-lg px-2 custom-cursor'> 
                Source Code
              </Link>
            </div>
          </div>
          <div id='projects_card' className='w-[350px] border-2 rounded-xl border-pink-200 shadow-[0_0_2px_#fbcfe8,inset_0_0_2px_#fbcfe8,0_0_5px_#fbcfe8,0_0_15px_#fbcfe8,0_0_30px_#fbcfe8] flex flex-col px-5 py-3 mx-auto my-12'>
            <h1 id='projects_card_title' className='text-pink-200 text-shadow-[0_2px_ 8px_#fbcfe8] font-rainyhearts text-3xl'>Cheatsheet</h1>
            <p id='projects_card_desc' className='text-pink-200 text-shadow-[0_2px_8px_#fbcfe8] font-rainyhearts text-lg/4'>basic html & css cheatsheet for quick reference</p>
            <Image 
              src='/project1.png' 
              alt='project 1' 
              className='w-[300px] h-[300px] object-cover rounded-xl my-5' 
              width={2572}
              height={1361}
            />
            <div id='projects_card_links' className='flex flex-row items-center justify-center'>
              <Link target="_blank" href='https://harmonyeva.github.io/cheatsheet/' className='text-pink-200 text-shadow-[0_2px_8px_#fbcfe8] font-rainyhearts text-lg px-2 custom-cursor'> 
                Live Site
              </Link>
              <p className='text-pink-200 text-shadow-[0_2px_8px_#fbcfe8] font-rainyhearts text-lg px-2'>❤︎</p>
              <Link target="_blank" href='https://github.com/harmonyeva/cheatsheet' className='text-pink-200 text-shadow-[0_2px_8px_#fbcfe8] font-rainyhearts text-lg px-2 custom-cursor'> 
                Source Code
              </Link>
            </div>
          </div>
        </div>
      </div>
          
    );
  };
  
export default Projects;