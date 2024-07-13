'use client';
import {
  Grid,
  Box,
  Typography,
  Divider,
  Container,
  Card,
  CardContent,
  CardHeader,
} from '@mui/material';
import Heroslide from '@/component/Heroslide';
import What from '@/component/What';
import { LiaCertificateSolid } from 'react-icons/lia';
import { useEffect, useState } from 'react';
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@mui/material/styles';
import Image from 'next/image';
import SwipeableTextMobileStepper from '@/component/Carousel';
let theme = createTheme();
theme = responsiveFontSizes(theme);
export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Grid container>
          <Grid container item>
            <Heroslide />
          </Grid>
          {/*      <Hero /> */}
          {/* Services */}
          <Grid item xs={12}>
            <Box
              sx={{
                display: 'grid',
                placeItems: 'center',
                mt: 3,
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  color: '#ffc400',
                  fontFamily: 'Raleway',
                  fontWeight: 700,
                  mb: 2,
                }}
              >
                Services
              </Typography>
              <Box
                sx={{
                  width: '50px',
                  height: '3px',
                  bgcolor: 'black',
                  margin: '0 auto',
                }}
              >
                <Divider />
              </Box>
              <Box
                sx={{
                  display: 'grid',
                  placeItems: 'center',
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    color: 'black',
                    p: 1,
                    fontFamily: 'Open Sans',
                    fontSize: { xs: '13px', sm: '17px', md: '25px' },
                  }}
                >
                  Excellence in Commercial Building Maintenance
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={8}>
            <Box sx={{ mb: 4, m: 2 }}>
              <Box>
                <Typography
                  variant="h2"
                  sx={{
                    fontFamily: 'Raleway',
                    fontWeight: 800,
                    fontSize: { xs: '30px', md: '60px', mb: 1 },
                    color: '#ffc400',
                  }}
                >
                  Carpentry
                </Typography>
              </Box>
              <Box>
                <Typography
                  variant="body1"
                  sx={{
                    fontFamily: 'Raleway',
                    mb: 1,
                  }}
                >
                  Our skilled carpenters handle all types of woodwork to
                  maintain and enhance your commercial building.
                </Typography>
              </Box>
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  maxWidth: 1000,
                  aspectRatio: 100 / 45,
                  border: '5px solid #ffc400',
                }}
              >
                <Image
                  src={'/image/hf2.PNG'}
                  alt={''}
                  fill
                  sizes="(max-width:768px 100vw,800px)"
                />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={8}>
            <Box sx={{ mb: 15, m: 2 }}>
              <Box>
                <Typography
                  variant="h2"
                  sx={{
                    fontFamily: 'Raleway',
                    fontWeight: 800,
                    fontSize: { xs: '30px', md: '60px', mb: 1 },
                    color: '#ffc400',
                  }}
                >
                  Masonry
                </Typography>
              </Box>
              <Box>
                <Typography
                  variant="body1"
                  sx={{
                    fontFamily: 'Raleway',
                    mb: 1,
                  }}
                >
                  Our masonry services ensure your building&#39;s structure and
                  aesthetic appeal are maintained with precision.
                </Typography>
              </Box>
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  maxWidth: 1000,
                  aspectRatio: 100 / 45,
                  border: '5px solid #ffc400',
                }}
              >
                <Image
                  src={'/image/hf3.PNG'}
                  alt={''}
                  fill
                  sizes="(max-width:768px 100vw,800px)"
                />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={8}>
            <Box sx={{ mb: 15, m: 2 }}>
              <Box>
                <Typography
                  variant="h2"
                  sx={{
                    fontFamily: 'Raleway',
                    fontWeight: 800,
                    fontSize: { xs: '30px', md: '60px', mb: 1 },
                    color: '#ffc400',
                  }}
                >
                  Light Plumbling
                </Typography>
              </Box>
              <Box>
                <Typography
                  variant="body1"
                  sx={{
                    fontFamily: 'Raleway',
                    mb: 1,
                  }}
                >
                  We handle minor plumbling issue to keep your building&#39;s
                  water systems functioning smoothly.
                </Typography>
              </Box>
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  maxWidth: 1000,
                  aspectRatio: 100 / 45,
                  border: '5px solid #ffc400',
                }}
              >
                <Image
                  src={'/image/hf4.PNG'}
                  alt={''}
                  fill
                  sizes="(max-width:768px 100vw,800px)"
                />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={8}>
            <Box sx={{ mb: 15, m: 2 }}>
              <Box>
                <Typography
                  variant="h2"
                  sx={{
                    fontFamily: 'Raleway',
                    fontWeight: 800,
                    fontSize: { xs: '30px', md: '60px', mb: 1 },
                    color: '#ffc400',
                  }}
                >
                  Light electrical
                </Typography>
              </Box>
              <Box>
                <Typography
                  variant="body1"
                  sx={{
                    fontFamily: 'Raleway',
                    mb: 1,
                  }}
                >
                  Our light electrical services cover essential repairs and
                  installations to keep your building&#39;s electrical systems
                  safe and efficient.
                </Typography>
              </Box>
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  maxWidth: 1000,
                  aspectRatio: 100 / 45,
                  border: '5px solid #ffc400',
                }}
              >
                <Image
                  src={'/image/hf5.PNG'}
                  alt={''}
                  fill
                  sizes="(max-width:768px 100vw,800px)"
                />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={8}>
            <Box sx={{ mb: 15, m: 2 }}>
              <Box>
                <Typography
                  variant="h2"
                  sx={{
                    fontFamily: 'Raleway',
                    fontWeight: 800,
                    fontSize: { xs: '30px', md: '60px', mb: 1 },
                    color: '#ffc400',
                  }}
                >
                  Lighting services
                </Typography>
              </Box>
              <Box>
                <Typography
                  variant="body1"
                  sx={{
                    fontFamily: 'Raleway',
                    mb: 1,
                  }}
                >
                  We provide comprehensive lighting solutions to enhance
                  visibility and ambiance in your commercial space.
                </Typography>
              </Box>
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  maxWidth: 1000,
                  aspectRatio: 100 / 45,
                  border: '5px solid #ffc400',
                }}
              >
                <Image
                  src={'/image/hf6.PNG'}
                  alt={''}
                  fill
                  sizes="(max-width:768px 100vw,800px)"
                />
              </Box>
            </Box>
          </Grid>
          {/* card */}
          <Container maxWidth="xl" sx={{ mb: 4, mt: 4 }}>
            <What />
          </Container>
        </Grid>
        <Box>
          <SwipeableTextMobileStepper />
        </Box>
        <Box sx={{ mt: 2, mb: 5 }}>
          <Container maxWidth="xl">
            <Grid
              container
              sx={{
                justifyContent: 'center',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Grid>
                <Card
                  sx={{
                    maxWidth: 900,
                    borderImage:
                      'linear-gradient(90deg, #ffc400 19%, #000000 72%) 1',
                    borderWidth: '15px',
                    borderStyle: 'solid',
                  }}
                >
                  <CardHeader
                    sx={{ textAlign: 'center', p: 2, mt: 2 }}
                    action={
                      <LiaCertificateSolid
                        style={{
                          color: '#ffc400',
                          width: { xs: 40, md: 50 },
                          height: { xs: 40, md: 50 },
                        }}
                      />
                    }
                    title="HARD FORK MAINTENANCE INC"
                  />
                  <CardContent
                    sx={{ p: { xs: 2, md: 5 }, mb: { xs: 5, md: 7 } }}
                  >
                    <Typography variant="h6" color="text.secondary">
                      Hardfork Maintenance Inc. provides top-tier commercial
                      building maintenance services, including carpentry,
                      masonry, light plumbing, and electrical work. Serving
                      North and South Carolina, we ensure prompt, professional,
                      and reliable solutions for all your maintenance needs.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
