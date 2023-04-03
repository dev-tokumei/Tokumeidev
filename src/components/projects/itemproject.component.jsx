import React from 'react';
import doodge from '../../assets/project/doodge.avif';
import './project.css';

const ItemProject = ({ src, link, stack, name, title }) => {
  return (
    <>
      <div className='w-full shadow-2xl rounded-3xl bg-white p-5  project_item_block items-center mt-16 mb-16'>
        <div className='w-[530px] h-[360px] rounded-3xl'>
          <img className='rounded-3xl w-full h-full' src={src} alt='img' />
        </div>
        <div className='w-[300px] h-[360px] flex flex-col items-center'>
          <h1 className='text-[#2d2e32] text-xl font-bold'>{name}</h1>
          <p className='text-[#767676] text-xl text-center'>{title}</p>
          <div className=' w-full flex gap-10 justify-center pt-10'>
            <div className='shadow_tech cursor-pointer p-3 pt-3 font-bold h-[50px] text-center flex items-center justify-center'>
              {stack.vue}
            </div>
            <div className='shadow_tech cursor-pointer p-3 pt-3 font-bold h-[50px] text-center flex items-center justify-center'>
              {stack.tw}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemProject;
