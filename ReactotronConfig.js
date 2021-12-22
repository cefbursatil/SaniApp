
import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';

export default Reactotron
  .configure({ host: '127.0.0.1' })
  .useReactNative()
  .use(reactotronRedux())
  .connect();