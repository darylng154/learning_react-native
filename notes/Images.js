import {View, Text, Image, ImageBackground} from 'react-native';

// local disk
// Note: camera roll is different
const logoLink = require("@assets/images/adaptive-icon.png");

const logoImg = 
  <Image
    source = {logoLink}
    style = 
    {
      {
        width: 300,
        height: 300
      }
    }
  />;

// network
const netLink = "https://i.ytimg.com/vi/xXmXM0qRMbo/maxresdefault.jpg";

const netImg = 
  <Image
  // need to convert image string into object for source
    source = {{uri: netLink}}
    style = 
    {
      {
        width: 300,
        height: 300,
        paddingTop: 100
      }
    }
  />;

// image background w/ text
const imgBckgnd = 
    <ImageBackground
      source = {logoLink}
      // make image take up avaiable space
      style = 
      {
        {
          flex: 1
        }
      }>
        <Text
          style = 
          {
            {
              color: "white",
              textAlign: "center"
            }
          }>
        Image Text
        </Text>
    </ImageBackground>

export default function Images()
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
      
      {/* can store components inside variable*/}
      {/*logoImg*/}
      {/*netImg*/}
      {imgBckgnd}
  
    </View>
  );
};