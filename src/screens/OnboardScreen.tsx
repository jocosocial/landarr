import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {type ReactNode} from 'react';

import {Page} from './Page';
import {StepList} from './StepList';

const steps: ReactNode[] = [
  <>
    <strong>Turn on Airplane Mode.</strong> Staying on cellular data at sea can cost you a lot in roaming charges.
  </>,
  <>
    <strong>Connect to the ship's WiFi.</strong> You don't need to pay for an internet package to use Twitarr.
  </>,
  <>
    <strong>Turn off any VPN.</strong> Many VPNs send your traffic off the ship's network, which stops Twitarr from
    working.
  </>,
  <>
    <strong>Turn WiFi off and back on, then reload this page.</strong>
  </>,
];

interface SettingsSectionProps {
  title: string;
  intro: string;
  settings: ReactNode[];
}

const SettingsSection = ({title, intro, settings}: SettingsSectionProps) => (
  <Box sx={{mt: 4}}>
    <Typography variant="h2" sx={{fontSize: '1.375rem', fontWeight: 600, mb: 1}}>
      {title}
    </Typography>
    <Typography>{intro}</Typography>
    <Box component="ul" sx={{m: 0, mt: 1, pl: 3}}>
      {settings.map((setting, index) => (
        <Typography component="li" key={index} sx={{mb: 1}}>
          {setting}
        </Typography>
      ))}
    </Box>
  </Box>
);

export const OnboardScreen = () => (
  <Page title="Seeing this on-board?" backHref="#/">
    <Alert severity="info" sx={{mb: 3}}>
      Your device thinks you're on land. To reach Twitarr on the ship, it needs to use the ship's WiFi.
    </Alert>
    <StepList steps={steps} />
    <SettingsSection
      title="Still not working on iPhone?"
      intro="Open Settings, tap Wi-Fi, then tap the (i) next to the ship's network."
      settings={[
        <>
          <strong>Limit IP Address Tracking:</strong> Turn this off. It sends some traffic through Apple's servers, which
          doesn't work on the ship's WiFi.
        </>,
        <>
          <strong>Private Wi-Fi Address:</strong> Set this to Off or Fixed.
        </>,
      ]}
    />
    <SettingsSection
      title="Still not working on Android?"
      intro="Open Settings, then tap Network & Internet."
      settings={[
        <>
          <strong>Private DNS:</strong> Set this to Off or Automatic. It sends some traffic through other companies'
          servers.
        </>,
        <>
          <strong>Device privacy:</strong> If your WiFi keeps dropping, tap Internet, then the gear next to the ship's
          network, then Privacy. Choose Use device MAC.
        </>,
      ]}
    />
  </Page>
);
