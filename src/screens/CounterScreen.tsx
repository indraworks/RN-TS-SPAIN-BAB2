import React,{useState} from 'react'
import {View,Text,Button} from 'react-native'


//kali ini kita pake button nnti kita nati dgn touchAbleCApactiy
export const CounterScreen = () => {
    const [counter,setCounter] = useState<number>(0)
    
    const PressCounter =()=> {
      setCounter(counter +1)
    }
    const MinCounter =()=> {
      setCounter(counter -1)
    }

  return (
    <View style={{flex:1,justifyContent:'center'}}
      
    >
      <Text style={{ textAlign:"center",fontWeight:"800",fontSize:30}}>Nilai Counter:{counter}</Text>
      <Button
       onPress={PressCounter}
       title="Click ++"
       color="#841584"
       accessibilityLabel="Learn more about this purple button"
/>
      <Button
       onPress={MinCounter}
       title="Click --"
       color="#841584"
       accessibilityLabel="Learn more about this purple button"
/>
      </View>
  )
}

