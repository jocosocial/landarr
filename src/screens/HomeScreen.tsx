import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import hero from '../assets/hero.jpg';
import {twitarrPrimary} from '../theme';
import {useScreenFocus} from '../useScreenFocus';

const secondaryButtonSx = {
  bgcolor: 'white',
  color: twitarrPrimary,
  '&:hover': {bgcolor: 'rgb(221, 227, 234)'},
};

export const HomeScreen = () => {
  const headingRef = useScreenFocus();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
        px: 2,
        py: 8,
        textAlign: 'center',
        color: 'white',
        backgroundColor: twitarrPrimary,
        backgroundImage: `linear-gradient(rgba(6, 57, 83, 0.72), rgba(6, 57, 83, 0.72)), url(${hero})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}>
      <Typography
        ref={headingRef}
        tabIndex={-1}
        variant="h1"
        sx={{fontSize: {xs: '2.75rem', sm: '4.5rem'}, fontWeight: 700, outline: 'none'}}>
        Welcome to Twitarr
      </Typography>
      <Typography sx={{fontSize: {xs: '1.25rem', sm: '1.5rem'}, maxWidth: 640, mt: 3, mb: 5, textWrap: 'balance'}}>
        The unofficial onboard social media platform of the JoCo Cruise
      </Typography>
      <Button
        href="#/choose"
        variant="contained"
        sx={{
          backgroundImage: 'linear-gradient(to bottom right, #ff7f00, #f05238)',
          color: 'white',
          '&:hover': {backgroundImage: 'none', bgcolor: '#ff7f00'},
          fontSize: {xs: '1.5rem', sm: '1.75rem'},
          fontWeight: 500,
          borderRadius: 2,
          px: {xs: 5, sm: 8},
          py: 1.5,
        }}>
        Get Started
      </Button>
      <Stack direction="row" useFlexGap spacing={2} sx={{flexWrap: 'wrap', justifyContent: 'center', mt: 3}}>
        <Button href="#/actions" variant="contained" sx={secondaryButtonSx}>
          What can I do?
        </Button>
        <Button href="#/onboard" variant="contained" sx={secondaryButtonSx}>
          Seeing this on-board?
        </Button>
      </Stack>
    </Box>
  );
};
