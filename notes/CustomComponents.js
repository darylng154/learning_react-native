import  {View, StyleSheet} from 'react-native';

// import Custom Component Greet
import Greet from './Greet'

function inlineStyle(greet1, greet2)
{
  return (
    <View
    // inline styling
    style = 
    {
      {
        flex: 1,
        backgroundColor: "cyan",
        padding: 60
      }
    }>
  
      {greet1}
      {greet2}
  
    </View>
  );
}

function styleSheet(greet1, greet2)
{
  return (
    <View
    // Style Sheet
    style = {styles.container}>
  
      {greet1}
      {greet2}
  
    </View>
  );
}

// StyleSheet w/ 2 styles
// - this can only be used within this file
//    => use Global StyleSheet w/ 'export const styles ...'
const styles = StyleSheet.create
(
  // object w/ key value pair
  // value = style object
  {
    container: 
    {
      flex: 1,
      backgroundColor: "lightblue",
      padding: 60
    },

    title: {}
  }
);

const greet1 =
  <Greet
  style = {styles.title}
  name = "Bruce Wayne">
  </Greet>

const greet2 =
  <Greet
  name = "Clark Kent">
  </Greet>

export default function CustomComponents()
{
  return (
    // inlineStyle(greet1, greet2)
    styleSheet(greet1, greet2)
  );
}