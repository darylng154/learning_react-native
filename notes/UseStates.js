/* !!!Note: 
Breaking Rules of Hooks 
Functions whose names start with use are called Hooks in React.

Don’t call Hooks inside loops, conditions, or nested functions. Instead, always use Hooks at the top 
level of your React function, before any early returns. You can only call Hooks while React is rendering a function component:

✅ Call them at the top level in the body of a function component.
✅ Call them at the top level in the body of a custom Hook.


It’s not supported to call Hooks (functions starting with use) in any other cases, for example:

🔴 Do not call Hooks inside conditions or loops.
🔴 Do not call Hooks after a conditional return statement.
🔴 Do not call Hooks in event handlers.
🔴 Do not call Hooks in class components.
🔴 Do not call Hooks inside functions passed to useMemo, useReducer, or useEffect.
*/


import { Text, View, Button, StyleSheet } from "react-native";
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