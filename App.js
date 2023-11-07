import {View, Text, StyleSheet} from 'react-native';

function box(text, style)
{
  return (
    <View
    style = {style}>
      <Text>
        {text}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create
(
  {
    container: 
    {
      flex: 1,
      backgroundColor: 'cyan',
      padding: 60
    },

    // lightbluebox:
    // {
    //   backgroundColor: 'lightblue',
    //   width: 100,
    //   height: 100,
    //   padding: 10
    // },

    // lightgreenbox:
    // {
    //   backgroundColor: 'lightgreen',
    //   width: 100,
    //   height: 100,
    //   padding: 10
    // }

    // Consolidating Styles
    box:
    {
      width: 100,
      height: 100,
      padding: 10,
      backgroundColor: 'pink'
    },

    lightbluebox:
    {
      backgroundColor: 'lightblue',
    },

    lightgreenbox:
    {
      backgroundColor: 'lightgreen',
    }
  }
);

function App()
{
  return (
    <View
    style = {styles.container}
    >
    
    {/* {box('Light Blue Box', styles.lightbluebox)}
    {box('Light Green Box', styles.lightgreenbox)} */}

    {/* Use Array for Multiple Styles
        - last style takes precedence */}
    {box('Light Blue Box w/ Box Style First', [styles.box, styles.lightbluebox])}
    {box('Light Blue Box w/ Box Style Last', [styles.lightbluebox, styles.box])}
    {box('Light Green Box', [styles.box, styles.lightgreenbox])}

    </View>
  );
}

export default App;