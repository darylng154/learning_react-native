import {View} from 'react-native';

// similar to main()
export default function Views()
{
  // *NOTE: opening parentheses, '(', needs to be on same line as return or it breaks*
  //        Solution: return function containing Core Components
  // return (
  // //  add style prop to view
  // // - object w/ backgroundColor
  // <View style = 
  //   {
  //     {
  //       flex: 1,
  //       backgroundColor: "plum"
  //     }
  //   }> 
  // </View>
  // );

  return view();
};

function view()
{
  // nesting Views
  let view = 
  <View 
    style = 
    {
      {
        flex: 1,
        backgroundColor: "plum"
      }
    }>

    <View 
      style = 
      {
        {
          width: 200,
          height: 200,
          backgroundColor: "lightblue"
        }
      }>
    </View>

    <View
      style = 
      {
        {
          width: 200,
          height: 200,
          backgroundColor: "lightgreen"
        }
      }>
    </View>
  </View>

  return view;
}