import React from 'react';
import instagram from '../../src/assets/icons/icons8-instagram.gif';
import telegram from '../../src/assets/icons/icons8-telegram-app.gif';
import github from '../../src/assets/icons/icons8-github.gif';
import twitter from '../../src/assets/icons/icons8-twitter.gif';
import linkedin from '../../src/assets/icons/icons8-linkedin-48.png';
import wk from '../../src/assets/icons/icons8-vk-com-48.png';
import facebook from '../../src/assets/icons/icons8-facebook-circled.gif';

const IconPage = () => {
  return (
    <div className="icon-wrapper mx-auto pl-20">
      <a href="/">
        <img className="facebook-line icon icon_size " src={facebook} alt="" />
      </a>
      <a href="https://instagram.com/_anonimous_8_/">
        <img className="facebook-line icon icon_size " src={instagram} alt="" />
      </a>
      <a href="https://t.me/anonimous_8/">
        <img className="telegram-line icon icon_size " src={telegram} alt="" />
      </a>
      <a href="https://github.com/Subhoniddin">
        <img className="github-line icon icon_size " src={github} alt="" />
      </a>
      <a href="https://twitter.com/Subhoniddin8">
        <img className="twitter-line icon icon_size " src={twitter} alt="" />
      </a>
      <a href="https://instagram.com/_anonimous_8_/">
        <img className="limkedin-line icon " src={linkedin} alt="" />
      </a>
      <a href="https://vk.com/id712658952">
        <img className="vk-line icon  " src={wk} alt="" />
      </a>
    </div>
  );
};

export default IconPage;
