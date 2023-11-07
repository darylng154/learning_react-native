import {View, Text} from 'react-native';

export default function App()
{
  return (
    <View
      style = 
      {
        {
          flex: 1,
          backgroundColor: "cyan",
          paddingHorizontal: 60,
          paddingVertical: 100
        }
      }>
      <Text
        style = 
        {
          {
            color: "white"
          }
        }>
        Hello World
      </Text>
    </View>
  );
};