import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import {type ReactNode} from 'react';

import {useScreenFocus} from '../useScreenFocus';

interface PageProps {
  title: string;
  backHref: string;
  children: ReactNode;
}

export const Page = ({title, backHref, children}: PageProps) => {
  const headingRef = useScreenFocus();

  return (
    <Container maxWidth="sm" sx={{py: {xs: 3, sm: 6}}}>
      <Button href={backHref} startIcon={<ArrowBackIcon />} sx={{ml: -1, px: 1}}>
        Back
      </Button>
      <Typography
        ref={headingRef}
        tabIndex={-1}
        variant="h1"
        sx={{fontSize: {xs: '2rem', sm: '2.75rem'}, fontWeight: 700, mt: 2, mb: 3, outline: 'none'}}>
        {title}
      </Typography>
      {children}
    </Container>
  );
};
