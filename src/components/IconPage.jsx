import React from 'react';

const IconPage = () => {
  const Links = [
    {
      id: 1,
      link: 'https://t.me/tokumei_dev',
      name: 'telegram',
      src: require('../../src/assets/icons/icons8-telegram-app.gif'),
      class: 'icon_size',
    },
    {
      id: 2,
      link: 'https://github.com/Subhoniddin',
      name: 'github',
      src: require('../../src/assets/icons/icons8-github.gif'),
      class: 'icon_size icon',
    },
    {
      id: 3,
      link: 'https://twitter.com/1tokume',
      name: 'twitter',
      src: require('../../src/assets/icons/icons8-twitter.gif'),
      class: 'icon_size icon',
    },
    {
      id: 4,
      link: 'https://www.linkedin.com/in/subhoniddin-odinaev-209968222/',
      name: 'linkenIn',
      src: require('../../src/assets/icons/icons8-linkedin-48.png'),
      class: 'icon',
    },
    {
      id: 5,
      link: 'https://vk.com/id712658952',
      name: 'wk ',
      src: require('../../src/assets/icons/icons8-vk-com-48.png'),
      class: 'icon',
    },
    {
      id: 5,
      link: '#',
      name: 'facebook',
      src: require('../../src/assets/icons/icons8-facebook-circled.gif'),
      class: 'icon_size icon',
    },
  ];
  return (
    <div className="icon mx-auto md:pl-10  relative pl-1 pr-2">
      <ul className="flex md:w-[500px]  icon-wrapper  justify-between icon-wrapper">
        {Links.map((link) => (
          <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7 ng ">
            <a href={link.link}>
              <img src={link.src} alt="icons " className={link.class} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IconPage;
