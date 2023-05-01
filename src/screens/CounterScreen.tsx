import React,{useState} from 'react'
import {View,Text,Button, TouchableOpacity} from 'react-native'


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
     
       <TouchableOpacity
       onPress={()=>setCounter(counter+1)}
       >
        <View style={{
            backgroundColor:"blue",
            borderRadius:100
        }}>
            <Text style={{textAlign:"center",fontSize:30,color:"#fff"}}>Add+1</Text>
        </View>
       </TouchableOpacity>
      </View>
  )
}

