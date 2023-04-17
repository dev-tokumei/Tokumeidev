import React from 'react';
import { Container } from '@mui/material';
import note from '../../assets/img/nout.webp';
import mac from '../../assets/img/mac.png';
import textimg from '../../assets/img/textimg.svg';
import './about.css';

const About = () => {
  return (
    <Container>
      <div
        id='about'
        className='w-ful about_container flex flex-col h-screen snap-center justify-center items-center'
      >
        <div className='w-full flex justify-between items-center about_block '>
          <div className='w-[410px] main_img h-[350px] relative '>
            <img
              className='w-full h-full rounded-3xl'
              src={note}
              alt='notebook'
            />
            <div className='flex justify-center spiner_block items-center w-[180px] h-[180px] bg-white rounded-full bottom-[-50px] right-[-47px] absolute'>
              <img className='w-[60px] h-[60px]' src={mac} alt='mac' />
              <span className='w-full loader h-full absolute z-10'>
                <img className='w-[180px] h-[180px]' src={textimg} alt='' />
              </span>
            </div>
          </div>
          <div className='w-[480px] text_block'>
            <div>
              <p className='text-[#147efb] font-bold text-lg mb-4'>ОБО МНЕ</p>
            </div>
            <div className='about_text_block'>
              <p className='text-[#767676] about_text font-medium text-[17px]'>
                являюсь мидл фронтенд-разработчиком, я обладаю внушительным
                арсеналом навыков в HTML, CSS, Tailwind, JavaScript, React,
                Redux, и Typescript. Я преуспеваю в разработке и поддержке
                адаптивных веб-сайтов, которые обеспечивают удобство работы
                пользователей. Мой опыт заключается в создании динамичных,
                привлекательных интерфейсов путем написания чистого и
                оптимизированного кода и использования передовых инструментов и
                методов разработки. Я также являюсь командным игроком, который
                преуспевает в сотрудничестве с кросс-функциональными командами
                для создания выдающихся веб-приложений.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default About;
