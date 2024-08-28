import { Text, View, Button, StyleSheet } from "react-native";
import { Buttons, CustomComponents, Images, MultipleStyles, Pressables, ScrollViews, Texts, UseStates, Views } from '@notes/index';
// import Buttons from '@notes/Buttons';

// export default function Index() {
//   return (
    
//     // Buttons()
//     // CustomComponents()
//     // Images()
//     // MultipleStyles()
//     // Pressables()
//     // ScrollViews()
//     // Texts()
//     // UseStates()
//     // Views()
// );
// }

import React, { useState } from 'react';

export default function Index() {
  const [name, setName] = useState("Mao Mao");

  // Setting a Person Object w/ "{}" inside of useState
  // props: name, age
  const [person, setPerson] = useState({name: "Mao Mao", age: 1});

  const changeNameHandler = () =>
  {
    setName("Big Mac")
    console.log("Name Updated")
  }

  const changePersonNameHandler = () =>
  {
    setPerson({name: "Rivas", age: 29})
  }

  return (
      // <View 
      //   style = {styles.textView}>
      //   <Text>
      //     Hello, { name }
      //   </Text>

      //   <View
      //     style = {styles.buttonView}>
          
      //     <Button 
      //     title = "Press Here"
      //     onPress = {() => console.log("Button Pressed")}
      //     color = "midnightblue"
      //     disabled  // makes button unclickable
      //     />
      //   </View>

      // </View>

    // Necessary bc React Native needs 1 parent View before having multiple views (nesting children)
    <View>

      <View 
        style = {styles.textView}>
        <Text
          style = {styles.textStyle}>
          Hello, { name }
        </Text>
      </View>

      <View
          style = {styles.buttonView}>
            
          <Button 
          title = "Update Name"
          onPress = {changeNameHandler}
          color = "midnightblue"
          />
        </View>


        {/* [Person Object] */}
        <View 
        style = {styles.textView}>
        <Text
          style = {styles.textStyle}>
          Hello, { person.name }. Your age is {person.age}
        </Text>
      </View>

      <View
          style = {styles.buttonView}>
            
          <Button 
          title = "Update Name"
          onPress = {changePersonNameHandler}
          color = "midnightblue"
          />
        </View>

    </View>
);
}

const styles = StyleSheet.create
({
  textView:
  {
    paddingVertical: 60  /* does not adding spacing btw button bc the button is 
                            inside the view and not "below it"
                            Fix: move ButtonView outside of TextView*/
  },

  textStyle:
  {
    textAlign: "center"
  },

  buttonView: 
  {
    alignItems: "center",
    backgroundColor: 'cyan',
    paddingVertical: 20,
    paddingHorizontal: 20
  }

});