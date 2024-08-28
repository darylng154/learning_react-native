import {View, Text, StyleSheet} from 'react-native';

function box(text, viewStyle, textStyle)
{
  return (
    <View
    style = {viewStyle}>
      <Text
      style = {textStyle}>
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

    boxPercent:
    {
      width: '50%',
      height: '20%',
      paddingVertical: '10%',
      paddingHorizontal: '5%',
      margin: 10,
      backgroundColor: 'pink'
    },

    border:
    {
      borderWidth: 2,
      borderColor: 'purple',
    },

    lightbluebox:
    {
      backgroundColor: 'lightblue',
    },

    lightgreenbox:
    {
      backgroundColor: 'lightgreen',
    },

    textBorder:
    {
      borderRadius: 5,
      backgroundColor: 'white',
      paddingHorizontal: 5,
      alignContent: 'center'
    }
  }
);

export default function MultipleStyles()
{
  return (
    <View
    style = {styles.container}
    >
    
    {/* {box('Light Blue Box', styles.lightbluebox)}
    {box('Light Green Box', styles.lightgreenbox)} */}

    {/* Use Array for Multiple Styles
        - last style takes precedence */}
    {/* {box('Light Blue Box w/ Box Style First', [styles.box, styles.lightbluebox])}
    {box('Light Blue Box w/ Box Style Last', [styles.lightbluebox, styles.box])}
    {box('Light Green Box', [styles.box, styles.lightgreenbox])} */}

    {box('Light Blue Box w/ Box Style First', [styles.border, styles.boxPercent, styles.lightbluebox], styles.textBorder)}
    {box('Light Blue Box w/ Box Style Last', [styles.lightbluebox, styles.boxPercent], styles.textBorder)}
    {box('Light Green Box', [styles.boxPercent, styles.lightgreenbox], styles.textBorder)}

    </View>
  );
}