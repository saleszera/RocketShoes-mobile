import Reactotron from 'reactotron-react-native';

if (process.env.NODE_ENV === 'development') {
  const tron = Reactotron.configure({ host: '192.168.11.199' })
    .useReactNative()
    .connect();

  console.tron = tron;

  tron.clear();
}
