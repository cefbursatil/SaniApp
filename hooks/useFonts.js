import * as Font from 'expo-font';

export default useFonts = async () =>
  await Font.loadAsync({
    "GothamBold": require('../assets/fonts/GothamBold.ttf'),
    "GothamBook": require('../assets/fonts/GothamBook.ttf'),
  });