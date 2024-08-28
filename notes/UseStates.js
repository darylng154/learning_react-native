/* !!!Note: 
Breaking Rules of Hooks 
Functions whose names start with use are called Hooks in React.

Don’t call Hooks inside loops, conditions, or nested functions. Instead, always use Hooks at the top level of your React function, before any early returns. You can only call Hooks while React is rendering a function component:

✅ Call them at the top level in the body of a function component.
✅ Call them at the top level in the body of a custom Hook.


It’s not supported to call Hooks (functions starting with use) in any other cases, for example:

🔴 Do not call Hooks inside conditions or loops.
🔴 Do not call Hooks after a conditional return statement.
🔴 Do not call Hooks in event handlers.
🔴 Do not call Hooks in class components.
🔴 Do not call Hooks inside functions passed to useMemo, useReducer, or useEffect.
*/


// this file is an incorrect way to implement since its inside a function
// But this is for saving code purposes => copy to index.tsx
import React, { useState } from 'react';
import {View, Text} from 'react-native';
import {Greet} from '@notes/index';

export default function UseStates()
{
  // const [state, setState] = useState();

  const [name, setName] = useState("Mao Mao");

  return (
    <View>
      <Text>
        Hello, { name }
      </Text>
    </View>
  );
};