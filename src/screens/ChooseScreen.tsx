import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import {useState} from 'react';

import kraken from '../assets/kraken.png';
import tricordarr from '../assets/tricordarr.jpg';
import website from '../assets/website.png';
import {helpEmail} from '../links';
import {Page} from './Page';

interface ChoiceCardProps {
  href: string;
  image: string;
  title: string;
  description: string;
}

const ChoiceCard = ({href, image, title, description}: ChoiceCardProps) => (
  <Card variant="outlined">
    <CardActionArea href={href} sx={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: 2, p: 2}}>
      <Box
        component="img"
        src={image}
        alt=""
        sx={{width: 72, height: 72, flexShrink: 0, borderRadius: 2, objectFit: 'contain'}}
      />
      <Box>
        <Typography variant="h2" sx={{fontSize: '1.375rem', fontWeight: 600}}>
          {title}
        </Typography>
        <Typography color="text.secondary">{description}</Typography>
      </Box>
    </CardActionArea>
  </Card>
);

export const ChooseScreen = () => {
  const [whyAppOpen, setWhyAppOpen] = useState(false);

  return (
    <Page title="How do you want to sign up?" backHref="#/">
      <Stack spacing={2}>
        <Alert severity="info">
          You'll need your six-character registration code from The Home Office. Everyone gets their own code. Didn't
          get one? Email <Link href={`mailto:${helpEmail}`}>{helpEmail}</Link>.
        </Alert>
        <ChoiceCard
          href="#/web"
          image={website}
          title="Website"
          description="Use any web browser. Nothing to install."
        />
        <ChoiceCard
          href="#/tricordarr"
          image={tricordarr}
          title="Tricordarr app"
          description="For iPhone and Android."
        />
        <ChoiceCard
          href="#/kraken"
          image={kraken}
          title="The Kraken app"
          description="For iPhone. You can't sign up with it, but it's worth downloading."
        />
        <Button onClick={() => setWhyAppOpen(true)}>Why should I use an app?</Button>
        <Alert severity="warning">
          Accounts are new every year, so sign up again even if you've cruised before. You'll get a recovery key when
          you sign up. Write it down or take a screenshot. It's the only way to reset a lost password, and you'll only
          see it once.
        </Alert>
      </Stack>
      <Dialog open={whyAppOpen} onClose={() => setWhyAppOpen(false)} aria-labelledby="why-app-title">
        <DialogTitle id="why-app-title">Why should I use an app?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            You don't have to. Nearly everything works on the website. An app adds extra features and works better when
            the ship's network is crowded.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setWhyAppOpen(false)}>Got it</Button>
        </DialogActions>
      </Dialog>
    </Page>
  );
};
