'use client';
import { useState } from 'react';
import {
  AppBar,
  Box,
  Drawer,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  Slide,
} from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { CiMenuBurger } from 'react-icons/ci';
import { IoCloseOutline } from 'react-icons/io5';
import { PiPhoneCall } from 'react-icons/pi';
import { PiAddressBookLight } from 'react-icons/pi';
const navItems = [
  { text: 'Home', Link: '' },
  { text: 'About Us', Link: 'about' },
  { text: 'Services', Link: 'services' },
  { text: 'Contact Us', Link: 'contact' },
];

export default function Navbar() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideIn, setSlideIn] = useState(false);
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const handleClick = (index) => {
    setActiveIndex(index);
    const link = navItems[index].Link;
    router.push(`/${link}`);
  };
  const handleDrawerOpen = () => {
    setOpen(true);
    setSlideIn(true);
  };

  const handleDrawerClose = () => {
    setSlideIn(false);
    setTimeout(() => {
      setOpen(false);
    }, 300); // Adjust this to the closing transition duration
  };
  const drawer = (
    <Box sx={{ width: '100vw' }}>
      <Box
        sx={{ display: 'flex', justifyContent: 'space-between', p: 1, mt: 1 }}
      >
        <Typography
          sx={{
            fontSize: '17px',
            fontFamily: 'Orbitron',
            fontWeight: 800,
            mt: 1.5,
          }}
        >
          Hard Fork Maintaince inc
        </Typography>
        <Box>
          <IconButton size="large" onClick={() => setOpen(false)}>
            <IoCloseOutline />
          </IconButton>
        </Box>
      </Box>
      <Box onClick={handleDrawerClose}>
        <List>
          {navItems.map((item) => (
            <ListItem
              sx={{
                display: 'block',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              key={item}
            >
              <Link
                href={`/${item.Link}`}
                style={{
                  textDecoration: 'none',
                  color: 'black',
                }}
              >
                <ListItemButton
                  sx={{
                    width: '100%',
                    fontFamily: 'Arial, sans-serif', // Change font family here
                    '&:hover': {
                      backgroundColor: '#ffc400', // Hover effect
                    },
                    '&.Mui-selected': {
                      backgroundColor: '#ffc400', // Click effect
                    },
                  }}
                >
                  <Grid>
                    <ListItemText
                      primaryTypographyProps={{
                        fontFamily: 'Orbitron',
                        display: 'grid',
                        placeItems: 'center',
                      }}
                      primary={item.text}
                    />
                  </Grid>
                </ListItemButton>
              </Link>
            </ListItem>
          ))}
        </List>
      </Box>
      <Grid
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <IconButton href="tel:+1984-203-1778">
          <PiPhoneCall />
        </IconButton>
        <IconButton href="mailto:fieldsupport@hardforkmaintenance.com">
          <PiAddressBookLight />
        </IconButton>
      </Grid>
    </Box>
  );
  return (
    <AppBar position="static" sx={{ bgcolor: 'white' }} elevation={0}>
      <Toolbar disableGutters>
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          {/*    <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="inherit"
          > */}
          <Image
            src="/hardforknew1.png"
            alt=""
            width={200}
            height={100}
            style={{ objectFit: 'contain' }}
          />
          {/*         </IconButton> */}
        </Box>
        {/* For Mobile */}
        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <Image
            src="/hardforknew1.png"
            alt=""
            width={90}
            height={70}
            style={{ objectFit: 'contain' }}
          />
        </Box>
        <Box
          sx={{
            margin: 'auto',
            gap: 4,
            display: { xs: 'none', md: 'flex' },
          }}
        >
          {navItems.map((item, index) => (
            <Link
              key={item.text}
              href={`/${item.Link}`}
              style={{
                textDecoration: 'none',
                color: 'inherit',
                '&:hover': {
                  textDecoration: 'none',
                },
              }}
            >
              <Typography
                sx={{
                  fontSize: '30px',
                  fontFamily: 'Orbitron',

                  borderRadius: 5,
                  color: activeIndex === index ? '#ffc400' : 'black', // Active color
                  transition: 'all 0.2s ease-in-out', // Smooth transition
                  '&:hover': {
                    // Hover style for non-active buttons
                    color: activeIndex === index ? '#ffc400' : 'black',
                  },
                }}
                onClick={() => handleClick(index)}
              >
                {item.text}
              </Typography>
            </Link>
          ))}
        </Box>

        <Box sx={{ display: { xs: 'flex', md: 'none' }, ml: 'auto' }}>
          <IconButton
            /* onClick={() => setOpen(true)} */ onClick={handleDrawerOpen}
          >
            <CiMenuBurger />
          </IconButton>
        </Box>
      </Toolbar>
      <div>
        <Drawer
          open={open}
          variant="temporary"
          /*  onClose={() => setOpen(false)} */
          onClose={handleDrawerClose}
          PaperProps={{
            sx: {
              bgcolor: 'rgba(255, 255, 255, 0.5)', // Semi-transparent background
              backdropFilter: 'blur(5px)', // Optional: adds blur effect behind the drawer
            },
          }}
        >
          <Slide
            direction="right"
            in={slideIn}
            timeout={{ enter: 1500, exit: 300 }} // Adjust transition durations here
            mountOnEnter
            unmountOnExit
          >
            <Box>{drawer}</Box>
          </Slide>
        </Drawer>
      </div>
    </AppBar>
  );
}
