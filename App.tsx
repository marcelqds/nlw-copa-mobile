import { NativeBaseProvider, StatusBar } from 'native-base';
import { 
  useFonts, 
  Roboto_400Regular, 
  Roboto_500Medium, 
  Roboto_700Bold
} from '@expo-google-fonts/roboto';

import { AuthContextProvider } from './src/contexts/AuthContext';

import { Loading } from './src/components';
import { THEME } from './src/styles/theme';
// import { New, SignIn, Find, Polls } from './src/screens';
import { Routes } from './src/routes';

export default function App() {

  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold
  });

  return (
    <AuthContextProvider>
      <NativeBaseProvider theme={THEME}>
        <StatusBar 
          barStyle="light-content" 
          backgroundColor="transparent"
          translucent
          />

        {
          fontsLoaded ? < Routes /> : < Loading />
        } 
            
      </NativeBaseProvider>
    </AuthContextProvider>
  );

}
