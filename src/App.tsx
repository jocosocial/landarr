import Box from '@mui/material/Box';

import {Header} from './Header';
import {ActionsScreen} from './screens/ActionsScreen';
import {ChooseScreen} from './screens/ChooseScreen';
import {HomeScreen} from './screens/HomeScreen';
import {KrakenScreen} from './screens/KrakenScreen';
import {OnboardScreen} from './screens/OnboardScreen';
import {TricordarrScreen} from './screens/TricordarrScreen';
import {WebScreen} from './screens/WebScreen';
import {useHashRoute} from './useHashRoute';

const screens = {
  home: HomeScreen,
  choose: ChooseScreen,
  tricordarr: TricordarrScreen,
  web: WebScreen,
  kraken: KrakenScreen,
  onboard: OnboardScreen,
  actions: ActionsScreen,
};

export const App = () => {
  const route = useHashRoute();
  const Screen = screens[route];

  return (
    <Box sx={{display: 'flex', flexDirection: 'column', minHeight: '100svh'}}>
      <Header />
      <Box component="main" sx={{display: 'flex', flexDirection: 'column', flexGrow: 1}}>
        <Screen key={route} />
      </Box>
    </Box>
  );
};
