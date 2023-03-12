import React from 'react';
import user1 from '../../src/assets/img/user1.png';
import user2 from '../../src/assets/img/user2.png';
import user3 from '../../src/assets/img/user3.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

const AboutPage = () => {
  return (
    <>
      <div className='flex mx-auto  items-center justify-center pt-10'>
        <div className='w-[230px] main_user_img h-[550px] flex md:flex-col justify-between '>
          <div className='flex userimg1 justify-center items-center w-full h-[230px] shadow-lg shadow-slate-800 rounded-2xl'>
            <img className=' w-[200px] h-[200px]' src={user1} alt='img1' />
          </div>
          <div className='flex userimg2 justify-center items-center w-full h-[230px] shadow-lg shadow-slate-800 rounded-2xl'>
            <img className='w-[200px] h-[200px]' src={user2} alt='img2' />
          </div>
        </div>
        <div className='text-gray-200 shadow-lg  shadow-slate-800 md:w-[420px] border-[15px] rounded-[10px] border-slate-900  pl-4 small'>
          <h1 className='font-bold text-4xl'>About Me</h1>
          <p className='about-text w-[370px] text-[15px]'>
            Hello again everyone! So, you already know that my name is
            Subhoniddin. A little about myself: student, 19 y.o., I love
            creativity since childhood, I live in Dushanbe, Tajikistan. Why
            programming? Everything is middle - I like it, the profession of the
            future, thanks to which I can provide myself and fulfill my dream -
            travel, at the moment I specialize in web design, front-end and
            back-end development, tajik websites. Why should you choose me? I
            approach each order with great responsibility and love, as I want to
            make a name for myself, exclude plagiarism and negligence, fully
            study the project, the client and its target audience, work for
            quality, trying to make an order as quickly and uniquely as
            possible, taking into account all the edits and wishes. By trusting
            me, you will get the maximum return for your project, save your
            nerves and time. If you are interested in me , you want to know
            something more or use my services, then I will provide all my
            contacts below.
          </p>
        </div>
        <div className='flex userimg3 justify-center items-center w-[220px] h-[320px] shadow-lg shadow-slate-800 rounded-2xl'>
          <img className='w-[200px]' src={user3} alt='img3' />
        </div>
      </div>
    </>
  );
};

export default AboutPage;
