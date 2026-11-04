import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {type ReactNode} from 'react';

interface StepListProps {
  steps: ReactNode[];
}

export const StepList = ({steps}: StepListProps) => (
  <>
    <Typography variant="h2" sx={{fontSize: '1.375rem', fontWeight: 600, mb: 2}}>
      What to do
    </Typography>
    <Box component="ol" sx={{listStyle: 'none', m: 0, p: 0}}>
      {steps.map((step, index) => (
        <Box component="li" key={index} sx={{display: 'flex', gap: 2, mb: 2}}>
          <Avatar
            aria-hidden
            sx={{bgcolor: 'primary.main', color: 'primary.contrastText', width: 32, height: 32, fontSize: '1rem'}}>
            {index + 1}
          </Avatar>
          <Typography sx={{pt: 0.25}}>{step}</Typography>
        </Box>
      ))}
    </Box>
  </>
);
