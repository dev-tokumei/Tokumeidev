import React, { useState } from "react";
import { Box, Divider, IconButton } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../../assets/img/userImg.jpg";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";

const Mobile = () => {
  const [state, setState] = useState({
    left: false,
    top: false,
    right: false,
    bottom: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 230,
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List disablePadding={true}>
        <ListItem>
          <ListItemButton>
            <a
              href="#home"
              className="font-bold flex items-center hover:text-[#147efb] duration-300"
            >
              Главный
            </a>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <a
              href="#about"
              className="font-bold hover:text-[#147efb] duration-300"
            >
              Обо мне
            </a>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <a
              href="#project"
              className="font-bold hover:text-[#147efb] duration-300"
            >
              Проекты
            </a>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <a
              href="#contact"
              className="font-bold hover:text-[#147efb] duration-300"
            >
              Контакт
            </a>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div className="menuNavbar">
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <IconButton
            onClick={toggleDrawer(anchor, true)}
            className="iconMenuNavbar"
          >
            <MenuIcon sx={{ fontSize: 35 }} />
          </IconButton>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            <Box>
              <a href="#home">
                <div className="font-bold my-5 text-black cursor-pointer flex items-center justify-between font-[Poppins]">
                  <div className=" block_logo_drawer flex justify-center items-center img_shadow">
                    <img
                      className=" w-[43px] h-[43px] rounded-full"
                      src={logo}
                      alt="logo"
                    />
                  </div>
                  <span className="w-[45%] hover:text-[#147efb] duration-300 text-start">
                    Tokumei
                  </span>
                  <IconButton
                    sx={{ mr: 1 }}
                    onClick={toggleDrawer(anchor, false)}
                  >
                    <CancelOutlinedIcon
                      className="hover:text-[#147efb] duration-300"
                      fontSize="large"
                    />
                  </IconButton>
                </div>
              </a>
              <Divider sx={{ pt: 0.5 }} />
            </Box>
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Mobile;
