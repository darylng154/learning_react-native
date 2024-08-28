import {View, Button} from 'react-native';

// different rendering for iOS & Android
// - use custom buttons to match styles

export default function Buttons()
{
  return (
    <View
    style = 
    {
      {
        flex: 1,
        backgroundColor: 'cyan',
        paddingVertical: 60,
        paddingHorizontal: 60
      }
    }>
    
    <Button 
    title = "Press Here"
    onPress = {() => console.log("Button Pressed")}
    color = "midnightblue"
    disabled  // makes button unclickable
    />
      
    </View>
  );
}