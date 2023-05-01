import React,{useState} from 'react'
import { TouchableOpacity,View,Text,StyleSheet} from 'react-native';


export const CounterScreen2 = () => {
    const [counter,setCounter] = useState<number>(0)
    
   

  return (
    <View style={styles.container}
      
    >
      <Text style={styles.textTitle}>Nilai Counter:{counter}</Text>
     
       <TouchableOpacity
       onPress={()=>setCounter(counter+1)}
       >
        <View style={styles.styleBackgrnd}>
            <Text style={styles.textCounter}>Add+1</Text>
        </View>
       </TouchableOpacity>
      </View>
  )
}

//declare style sheet dibawah function utama! 

const styles = StyleSheet.create({
   //masing2 propwertu d declare disini utk nantinya di panggil di bagian 
   //functon utama di masing2 tag component
   container :{flex:1,justifyContent:'center'},
   textTitle:{ textAlign:"center",fontWeight:"800",fontSize:30},
   styleBackgrnd :{
    backgroundColor:"blue",
    borderRadius:100
},
   textCounter:{textAlign:"center",fontSize:30,color:"#fff"}

})