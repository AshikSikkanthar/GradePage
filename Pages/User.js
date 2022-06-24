


import React from 'react';

import {
  
 SafeAreaView,
 View,
 Text,
 Image
 
} from 'react-native';
import user from '../Assets/user.png';
import FrontIcon from '../Assets/FrontIcon.png';

import BackIcon from '../Assets/BackIcon.png';


const App = () => {
  

  return (
    < SafeAreaView  style={{}} >

        <View style={{}}>
          
            <View>


          
     
       <View style={{marginTop:60,backgroundColor:"lightgray",height:200,width:900}}> 
    <View style={{flexDirection:"row",marginTop:22,}}>
        <Image 
           style={{width:40,height:40,marginLeft:38,marginTop:40 }}
        source ={BackIcon}/>


         <Image 
          
          style={{width:160,height:160,marginLeft:205}}
         source={user}/>

         <Text  rounded style={{color: 'black', fontsize: 30,fontWeight: 'bold',marginTop:50}}>
            Susan Rogers

         </Text>
         <Text  style={{color: 'black', fontsize: 30,fontWeight: 'bold',marginTop:70,marginLeft:-85}}> 
            (Susan)
         </Text>

        < Image 

          style={{width:40,height:40,marginLeft:220,marginTop:40}}
        
        source ={FrontIcon}  />
    </View>
    </View>
    </View>
    </View>
    </SafeAreaView>
  );
};



export default App;