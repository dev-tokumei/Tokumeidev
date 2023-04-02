import React, { useState } from 'react';
import { Box, IconButton } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import MenuIcon from '@mui/icons-material/Menu';


const Mobile = () => {
  const [state, setState] = useState({
    left: false,
  });
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 200 }}
      role='presentation'
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem>
          <ListItemButton>
            <a href='#home' className='font-bold'>
              Главный
            </a>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <a href='#about' className='font-bold'>
              Обо мне
            </a>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <a href='#project' className='font-bold'>
              Проекты
            </a>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <a href='#contact' className='font-bold'>
              Контакт
            </a>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div className='menuNavbar'>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <IconButton
            onClick={toggleDrawer(anchor, true)}
            className='iconMenuNavbar'
          >
            <MenuIcon sx={{ fontSize: 35 }} />
          </IconButton>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Mobile;
