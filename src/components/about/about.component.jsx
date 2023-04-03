import React from 'react';
import { Container } from '@mui/material';
import note from '../../assets/img/nout.webp';
import mac from '../../assets/img/mac.png';
import './about.css'

const About = () => {
  return (
    <Container>
      <div
        id='about'
        className='w-full flex flex-col h-screen snap-center justify-center items-center'
      >
        <div className='w-full flex justify-evenly items-center'>
          <div className='w-[410px] h-[350px] relative'>
            <img
              className='w-full h-full  rounded-3xl'
              src={note}
              alt='notebook'
            />
            <div className='flex justify-center loader items-center w-[180px] h-[180px] bg-red-500 rounded-full bottom-[-50px] right-[-47px] absolute'>
              <img className='w-[60px] h-[60px]' src={mac} alt='mac' />
            </div>
          </div>
          <div className='w-[480px]'>
            <div>
              <p className='text-[#147efb] font-bold text-lg mb-4'>ABOUT ME</p>
              {/* <h1 className='text-[#2d2e32] text-3xl font-bold mb-4'>
                A dedicated Front-end Developer based in Dushanbe, Tajikistan
              </h1> */}
            </div>
            <p className='text-[#767676] font-medium text-[17px]'>
              Являясь мидл фронтенд-разработчиком, я обладаю внушительным
              арсеналом навыков в HTML, CSS, Tailwind, JavaScript, React, Redux,
              и Typescript. Я преуспеваю в разработке и поддержке адаптивных
              веб-сайтов, которые обеспечивают удобство работы пользователей.
              Мой опыт заключается в создании динамичных, привлекательных
              интерфейсов путем написания чистого и оптимизированного кода и
              использования передовых инструментов и методов разработки. Я также
              являюсь командным игроком, который преуспевает в сотрудничестве с
              кросс-функциональными командами для создания выдающихся
              веб-приложений.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default About;
