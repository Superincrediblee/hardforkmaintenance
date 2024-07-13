import {
  Box,
  Divider,
  Grid,
  Typography,
  List,
  ListItem,
  ListSubheader,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import Image from 'next/image';
import { GiOilPump } from 'react-icons/gi';
import { GiChainsaw } from 'react-icons/gi';
import { BsBricks } from 'react-icons/bs';
import { MdPlumbing } from 'react-icons/md';
import { TbWindElectricity } from 'react-icons/tb';
export default function Services() {
  return (
    <Box>
      <Grid container>
        <Grid item xs={12} md={12} sx={{ mt: 3 }}>
          <Box
            sx={{
              position: 'relative',
              width: '100%',
              maxWidth: '100vw',
              aspectRatio: 120 / 45,
            }}
          >
            <Image
              src={'/image/hf4.PNG'}
              alt={''}
              fill
              sizes="(max-width:768px 100vw,800px)"
            />
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography
                variant="h1"
                sx={{
                  color: 'white',
                  fontFamily: 'Fauna One',
                  fontSize: { xs: '1.7rem', md: '4rem' },
                  fontWeight: 900,
                  textTransform: 'capitalize',
                  lineHeight: '1.1em',
                  textShadow: '1px 1px black',
                }}
              >
                Our Services
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: 'grid',
              placeItems: { xs: 'center', md: 'left' },
              p: 1,
            }}
          >
            <Box>
              <GiChainsaw
                style={{
                  minHeight: 70,
                  minWidth: 70,
                }}
              />
            </Box>
            <Box sx={{ mb: 2 }}>
              <Typography
                variant="h5"
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
            <Box
              sx={{
                width: '40px',
                height: '3px',
                bgcolor: '#ffc400',
                margin: '0 auto',
              }}
            >
              <Divider />
            </Box>
            <Box sx={{ mt: 2 }}>
              <Typography
                variant="body1"
                sx={{
                  fontFamily: 'Raleway',
                  mb: 1,
                }}
              >
                Our skilled carpenters handle all types of woodwork to maintain
                and enhance your commercial building.
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
              <ListSubheader
                component="div"
                id="nested-list-subheader"
                sx={{
                  color: '#ffc400',
                  /*   bgcolor: 'skyb', // Alternate background color */
                }}
              >
                <Typography
                  variant="body1"
                  fontWeight={800}
                  component="span"
                  fontFamily={'Orbitron'}
                >
                  Services Include
                </Typography>
              </ListSubheader>
            }
          >
            <ListItem>
              <ListItemIcon>
                <FiberManualRecordIcon
                  sx={{ color: '#ffc400', width: 12, height: 8 }}
                />
              </ListItemIcon>
              <ListItemText
                primary="Repairing and installing doors and frames"
                sx={{ marginTop: 0, marginBottom: 0 }}
                primaryTypographyProps={{
                  variant: 'body1',
                  fontSize: { xs: 14, sm: 16, md: 18, lg: 20 },
                }}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <FiberManualRecordIcon
                  sx={{ color: '#ffc400', width: 12, height: 8 }}
                />
              </ListItemIcon>
              <ListItemText
                primary="Building and repairing wooden furniture and fixtures"
                sx={{ marginTop: 0, marginBottom: 0 }}
                primaryTypographyProps={{
                  variant: '#ffc400',
                  fontSize: { xs: 14, sm: 16, md: 18, lg: 20 },
                }}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <FiberManualRecordIcon
                  sx={{ color: '#ffc400', width: 12, height: 8 }}
                />
              </ListItemIcon>
              <ListItemText
                primary="Constructing and installing shelving and storage units"
                sx={{ marginTop: 0, marginBottom: 0 }}
                primaryTypographyProps={{
                  variant: 'body1',
                  fontSize: { xs: 14, sm: 16, md: 18, lg: 20 },
                }}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <FiberManualRecordIcon
                  sx={{ color: '#ffc400', width: 12, height: 8 }}
                />
              </ListItemIcon>
              <ListItemText
                primary=" Repairing and replacing baseboards and moldings"
                sx={{ marginTop: 0, marginBottom: 0 }}
                primaryTypographyProps={{
                  variant: 'body1',
                  fontSize: { xs: 14, sm: 16, md: 18, lg: 20 },
                }}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <FiberManualRecordIcon
                  sx={{ color: '#ffc400', width: 12, height: 8 }}
                />
              </ListItemIcon>
              <ListItemText
                primary="Assembling and installing cabinetry"
                sx={{ marginTop: 0, marginBottom: 0 }}
                primaryTypographyProps={{
                  variant: 'body1',
                  fontSize: { xs: 14, sm: 16, md: 18, lg: 20 },
                }}
              />
            </ListItem>
          </List>
        </Grid>
        <Divider />
        {/* List 2 */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: 'grid',
              placeItems: { xs: 'center', md: 'left' },
              p: 1,
            }}
          >
            <Box>
              <BsBricks
                style={{
                  minHeight: 70,
                  minWidth: 70,
                }}
              />
            </Box>
            <Box sx={{ mb: 2 }}>
              <Typography
                variant="h5"
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
            <Box
              sx={{
                width: '40px',
                height: '3px',
                bgcolor: '#ffc400',
                margin: '0 auto',
              }}
            >
              <Divider />
            </Box>
            <Box sx={{ mt: 2 }}>
              <Typography
                variant="body1"
                sx={{
                  fontFamily: 'Raleway',
                  mb: 1,
                }}
              >
                Our masonry services ensure your building&#39; structure and
                aesthetic appeal are maintained with precision.
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
              <ListSubheader
                component="div"
                id="nested-list-subheader"
                sx={{
                  color: '#ffc400',
                  /*   bgcolor: 'skyb', // Alternate background color */
                }}
              >
                <Typography
                  variant="body1"
                  fontWeight={800}
                  component="span"
                  fontFamily={'Orbitron'}
                >
                  Services Include
                </Typography>
              </ListSubheader>
            }
          >
            <ListItem>
              <ListItemIcon>
                <FiberManualRecordIcon
                  sx={{ color: '#ffc400', width: 12, height: 8 }}
                />
              </ListItemIcon>
              <ListItemText
                primary="Repairing and restoring brick and stone walls"
                sx={{ marginTop: 0, marginBottom: 0 }}
                primaryTypographyProps={{
                  variant: 'body1',
                  fontSize: { xs: 14, sm: 16, md: 18, lg: 20 },
                }}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <FiberManualRecordIcon
                  sx={{ color: '#ffc400', width: 12, height: 8 }}
                />
              </ListItemIcon>
              <ListItemText
                primary="Installing and repairing stone walkways and pathways"
                sx={{ marginTop: 0, marginBottom: 0 }}
                primaryTypographyProps={{
                  variant: '#ffc400',
                  fontSize: { xs: 14, sm: 16, md: 18, lg: 20 },
                }}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <FiberManualRecordIcon
                  sx={{ color: '#ffc400', width: 12, height: 8 }}
                />
              </ListItemIcon>
              <ListItemText
                primary="Constructing retaining walls "
                sx={{ marginTop: 0, marginBottom: 0 }}
                primaryTypographyProps={{
                  variant: 'body1',
                  fontSize: { xs: 14, sm: 16, md: 18, lg: 20 },
                }}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <FiberManualRecordIcon
                  sx={{ color: '#ffc400', width: 12, height: 8 }}
                />
              </ListItemIcon>
              <ListItemText
                primary="Fixing cracks and damages in concrete surfaces"
                sx={{ marginTop: 0, marginBottom: 0 }}
                primaryTypographyProps={{
                  variant: 'body1',
                  fontSize: { xs: 14, sm: 16, md: 18, lg: 20 },
                }}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <FiberManualRecordIcon
                  sx={{ color: '#ffc400', width: 12, height: 8 }}
                />
              </ListItemIcon>
              <ListItemText
                primary="Repointing brickwork"
                sx={{ marginTop: 0, marginBottom: 0 }}
                primaryTypographyProps={{
                  variant: 'body1',
                  fontSize: { xs: 14, sm: 16, md: 18, lg: 20 },
                }}
              />
            </ListItem>
          </List>
        </Grid>
        <Divider />
        {/* List 3 */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: 'grid',
              placeItems: { xs: 'center', md: 'left' },
              p: 1,
            }}
          >
            <Box>
              <MdPlumbing
                style={{
                  minHeight: 80,
                  minWidth: 80,
                }}
              />
            </Box>
            <Box sx={{ mb: 2 }}>
              <Typography
                variant="h5"
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
            <Box
              sx={{
                width: '40px',
                height: '3px',
                bgcolor: '#ffc400',
                margin: '0 auto',
              }}
            >
              <Divider />
            </Box>
            <Box sx={{ mt: 2 }}>
              <Typography
                variant="body1"
                sx={{
                  fontFamily: 'Raleway',
                  mb: 1,
                }}
              >
                We handle minor plumbling issue to keep your building&#39; water
                systems functioning smoothly.
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
              <ListSubheader
                component="div"
                id="nested-list-subheader"
                sx={{
                  color: '#ffc400',
                  /*   bgcolor: 'skyb', // Alternate background color */
                }}
              >
                <Typography
                  variant="body1"
                  fontWeight={800}
                  component="span"
                  fontFamily={'Orbitron'}
                >
                  Services Include
                </Typography>
              </ListSubheader>
            }
          >
            <ListItem>
              <ListItemIcon>
                <FiberManualRecordIcon
                  sx={{ color: '#ffc400', width: 12, height: 8 }}
                />
              </ListItemIcon>
              <ListItemText
                primary="Fixing leaking faucets and pipes"
                sx={{ marginTop: 0, marginBottom: 0 }}
                primaryTypographyProps={{
                  variant: 'body1',
                  fontSize: { xs: 14, sm: 16, md: 18, lg: 20 },
                }}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <FiberManualRecordIcon
                  sx={{ color: '#ffc400', width: 12, height: 8 }}
                />
              </ListItemIcon>
              <ListItemText
                primary="Unclogging drains and toilets"
                sx={{ marginTop: 0, marginBottom: 0 }}
                primaryTypographyProps={{
                  variant: '#ffc400',
                  fontSize: { xs: 14, sm: 16, md: 18, lg: 20 },
                }}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <FiberManualRecordIcon
                  sx={{ color: '#ffc400', width: 12, height: 8 }}
                />
              </ListItemIcon>
              <ListItemText
                primary="Installing and repairing sinks and fixtures"
                sx={{ marginTop: 0, marginBottom: 0 }}
                primaryTypographyProps={{
                  variant: 'body1',
                  fontSize: { xs: 14, sm: 16, md: 18, lg: 20 },
                }}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <FiberManualRecordIcon
                  sx={{ color: '#ffc400', width: 12, height: 8 }}
                />
              </ListItemIcon>
              <ListItemText
                primary="Replacing worn-out washers and seals"
                sx={{ marginTop: 0, marginBottom: 0 }}
                primaryTypographyProps={{
                  variant: 'body1',
                  fontSize: { xs: 14, sm: 16, md: 18, lg: 20 },
                }}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <FiberManualRecordIcon
                  sx={{ color: '#ffc400', width: 12, height: 8 }}
                />
              </ListItemIcon>
              <ListItemText
                primary="Performing routine maintenance on water heaters"
                sx={{ marginTop: 0, marginBottom: 0 }}
                primaryTypographyProps={{
                  variant: 'body1',
                  fontSize: { xs: 14, sm: 16, md: 18, lg: 20 },
                }}
              />
            </ListItem>
          </List>
        </Grid>
        {/* List 4 */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: 'grid',
              placeItems: { xs: 'center', md: 'left' },
              p: 1,
            }}
          >
            <Box>
              <GiOilPump
                style={{
                  minHeight: 80,
                  minWidth: 80,
                }}
              />
            </Box>
            <Box sx={{ mb: 2 }}>
              <Typography
                variant="h5"
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
            <Box
              sx={{
                width: '40px',
                height: '3px',
                bgcolor: '#ffc400',
                margin: '0 auto',
              }}
            >
              <Divider />
            </Box>
            <Box sx={{ mt: 2 }}>
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
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
              <ListSubheader
                component="div"
                id="nested-list-subheader"
                sx={{
                  color: '#ffc400',
                  /*   bgcolor: 'skyb', // Alternate background color */
                }}
              >
                <Typography
                  variant="body1"
                  fontWeight={800}
                  component="span"
                  fontFamily={'Orbitron'}
                >
                  Services Include
                </Typography>
              </ListSubheader>
            }
          >
            <ListItem>
              <ListItemIcon>
                <FiberManualRecordIcon
                  sx={{ color: '#ffc400', width: 12, height: 8 }}
                />
              </ListItemIcon>
              <ListItemText
                primary="Replacing light fixtures and bulbs"
                sx={{ marginTop: 0, marginBottom: 0 }}
                primaryTypographyProps={{
                  variant: 'body1',
                  fontSize: { xs: 14, sm: 16, md: 18, lg: 20 },
                }}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <FiberManualRecordIcon
                  sx={{ color: '#ffc400', width: 12, height: 8 }}
                />
              </ListItemIcon>
              <ListItemText
                primary="Installing and repairing electrical outlets and switches"
                sx={{ marginTop: 0, marginBottom: 0 }}
                primaryTypographyProps={{
                  variant: '#ffc400',
                  fontSize: { xs: 14, sm: 16, md: 18, lg: 20 },
                }}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <FiberManualRecordIcon
                  sx={{ color: '#ffc400', width: 12, height: 8 }}
                />
              </ListItemIcon>
              <ListItemText
                primary="Installing and repairing sinks and fixtures"
                sx={{ marginTop: 0, marginBottom: 0 }}
                primaryTypographyProps={{
                  variant: 'body1',
                  fontSize: { xs: 14, sm: 16, md: 18, lg: 20 },
                }}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <FiberManualRecordIcon
                  sx={{ color: '#ffc400', width: 12, height: 8 }}
                />
              </ListItemIcon>
              <ListItemText
                primary="Troubleshooting minor electrical issues"
                sx={{ marginTop: 0, marginBottom: 0 }}
                primaryTypographyProps={{
                  variant: 'body1',
                  fontSize: { xs: 14, sm: 16, md: 18, lg: 20 },
                }}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <FiberManualRecordIcon
                  sx={{ color: '#ffc400', width: 12, height: 8 }}
                />
              </ListItemIcon>
              <ListItemText
                primary="Installing ceiling fans"
                sx={{ marginTop: 0, marginBottom: 0 }}
                primaryTypographyProps={{
                  variant: 'body1',
                  fontSize: { xs: 14, sm: 16, md: 18, lg: 20 },
                }}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <FiberManualRecordIcon
                  sx={{ color: '#ffc400', width: 12, height: 8 }}
                />
              </ListItemIcon>
              <ListItemText
                primary="Updating and maintaining breaker panels"
                sx={{ marginTop: 0, marginBottom: 0 }}
                primaryTypographyProps={{
                  variant: 'body1',
                  fontSize: { xs: 14, sm: 16, md: 18, lg: 20 },
                }}
              />
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: 'grid',
              placeItems: { xs: 'center', md: 'left' },
              p: 1,
            }}
          >
            <Box>
              <TbWindElectricity
                style={{
                  minHeight: 80,
                  minWidth: 80,
                }}
              />
            </Box>
            <Box sx={{ mb: 2 }}>
              <Typography
                variant="h5"
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
            <Box
              sx={{
                width: '40px',
                height: '3px',
                bgcolor: '#ffc400',
                margin: '0 auto',
              }}
            >
              <Divider />
            </Box>
            <Box sx={{ mt: 2 }}>
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
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
              <ListSubheader
                component="div"
                id="nested-list-subheader"
                sx={{
                  color: '#ffc400',
                  /*   bgcolor: 'skyb', // Alternate background color */
                }}
              >
                <Typography
                  variant="body1"
                  fontWeight={800}
                  component="span"
                  fontFamily={'Orbitron'}
                >
                  Services Include
                </Typography>
              </ListSubheader>
            }
          >
            <ListItem>
              <ListItemIcon>
                <FiberManualRecordIcon
                  sx={{ color: '#ffc400', width: 12, height: 8 }}
                />
              </ListItemIcon>
              <ListItemText
                primary="Installing and maintaining indoor and outdoor lighting"
                sx={{ marginTop: 0, marginBottom: 0 }}
                primaryTypographyProps={{
                  variant: 'body1',
                  fontSize: { xs: 14, sm: 16, md: 18, lg: 20 },
                }}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <FiberManualRecordIcon
                  sx={{ color: '#ffc400', width: 12, height: 8 }}
                />
              </ListItemIcon>
              <ListItemText
                primary="Upgrading to energy-efficient LED lighting"
                sx={{ marginTop: 0, marginBottom: 0 }}
                primaryTypographyProps={{
                  variant: '#ffc400',
                  fontSize: { xs: 14, sm: 16, md: 18, lg: 20 },
                }}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <FiberManualRecordIcon
                  sx={{ color: '#ffc400', width: 12, height: 8 }}
                />
              </ListItemIcon>
              <ListItemText
                primary="Repairing flickering or non-functional lights"
                sx={{ marginTop: 0, marginBottom: 0 }}
                primaryTypographyProps={{
                  variant: 'body1',
                  fontSize: { xs: 14, sm: 16, md: 18, lg: 20 },
                }}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <FiberManualRecordIcon
                  sx={{ color: '#ffc400', width: 12, height: 8 }}
                />
              </ListItemIcon>
              <ListItemText
                primary="Designing and implementing customized lighting plans"
                sx={{ marginTop: 0, marginBottom: 0 }}
                primaryTypographyProps={{
                  variant: 'body1',
                  fontSize: { xs: 14, sm: 16, md: 18, lg: 20 },
                }}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <FiberManualRecordIcon
                  sx={{ color: '#ffc400', width: 12, height: 8 }}
                />
              </ListItemIcon>
              <ListItemText
                primary="Installing emergency and exit lighting systems"
                sx={{ marginTop: 0, marginBottom: 0 }}
                primaryTypographyProps={{
                  variant: 'body1',
                  fontSize: { xs: 14, sm: 16, md: 18, lg: 20 },
                }}
              />
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </Box>
  );
}
