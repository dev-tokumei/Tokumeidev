import React from 'react';
import { Container } from '@mui/material';
import ItemProject from './itemproject.component';
import ssb from '../../assets/project/ssb.png';
import gravity from '../../assets/project/gravity.png';

const projects = [
  {
    name: 'SSB.TJ',
    title:
      'Банк который предлагает государственная гарантия, доступные процентные ставки, предложение кредита в национальной валюте.',
    stack: { vue: 'Vue JS', tw: 'Tailwind css' },
    src: ssb,
    link: 'https://www.ssb.tj/',
  },
  {
    name: 'Gravity.Studio',
    title:
      'Является IT студией Таджикистана которое создаёт продающие, имиджевые сайты и предлагает нестандартные решения. ',
    stack: { vue: 'React', tw: 'Tailwind css' },
    src: gravity,
    link: 'https://gravity-ruby.vercel.app/',
  },
];

const Project = () => {
  return (
    <div className='w-full bg-[#f9f9f9] pt-20'>
      <Container>
        <div className='w-full justify-center snap-center py-20'>
          <div className='block_text_project'>
            <h1 className='text-[#147efb] font-bold text-lg mb-4'>PORTFOLIO</h1>
            <p className='text-[#2d2e32] font-bold text-3xl'>
              Каждый проект — это уникальная разработка 🧩
            </p>
          </div>
          <div className='pt-10 w-full'>
            {projects.map((item, idx) => (
              <ItemProject key={idx} {...item} />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Project;
