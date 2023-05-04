import { Platform } from 'react-native';
import { enableScreens } from 'react-native-screens';

if (Platform.OS === 'android') {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const { UIManager } = require('react-native');
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const { GestureHandlerRootView } = require('react-native-gesture-handler');

  if (UIManager.getViewManagerConfig) {
    const viewConfig = UIManager.getViewManagerConfig('GestureHandlerRootView');
    if (!viewConfig) {
      UIManager.registerComponent('GestureHandlerRootView', () => GestureHandlerRootView);
    }
  } else {
    // eslint-disable-next-line no-console
    console.error('UIManager.getViewManagerConfig is not defined');
  }
}

enableScreens();
