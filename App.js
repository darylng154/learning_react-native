import {View, Button, Text, Modal} from 'react-native';

// controls Modal's visability w/ State variable
import { useState } from 'react';

// different rendering for iOS & Android
// - use custom buttons to match styles
// - modal has weird padding interaction (View padding ~ 2x Modal padding)

// *Note: need to pass state variable to Modal*
// const modal =
function modal(visability, setVisability)
{
  return (
    <Modal
    visible = {visability}
    onRequestClose = { () => setVisability(false)} // when back is pressed
    animationType= 'slide'
    // animationType= 'fade'

    // only affects iOS & not Android
    // presentationStyle='fullScreen'
    // presentationStyle='formSheet'
    presentationStyle='pageSheet'
    style = 
    {
      {
        margin: 0,
        padding: 0
      }
    }
    >
      <View
      style = 
      {
        {
          flex: 1,
          backgroundColor: "plum",
          paddingVertical: 60,
          paddingHorizontal: 60
        }
      }>
        <Text>
          Modal Mode
        </Text>

        <Button
          title = "Disable Modal"
          color = "lightblue"
          onPress = {() => setVisability(false)}
        />
      </View>
    </Modal>
  );
}

function button(setVisability)
{
  return (
    <Button 
    title = "Enable Modal"
    onPress = {() => setVisability(true)}
    color = "midnightblue"
    // disabled  // makes button unclickable
    />
  );
}

function App()
{
  const [isModalVisible, setIsModalVisable] = useState(false);  // default value = false

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
    
    {button(setIsModalVisable)}

    {modal(isModalVisible, setIsModalVisable)}
      
    </View>
  );
}


export default App;