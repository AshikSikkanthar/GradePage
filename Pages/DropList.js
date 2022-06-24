

 import React,{useState} from 'react';

 import {
   
  SafeAreaView,
  StyleSheet,
  View,
  Text
  
 } from 'react-native';
 import { Dropdown } from 'react-native-element-dropdown';
 
 const unitData = [
   
    { label: 'Tamil', value: '90' },
    { label: 'English', value: '80' },
    { label: 'Maths', value: '95' },
    { label: 'CS', value: '86' }
  ];
  const subUnitData = [
    
    { label: 'Chemistry', value: '90' },
    { label: 'English', value: '80' },
    { label: 'Maths', value: '95' },
    { label: 'CS', value: '86' }
  ];
  const StandardData = [
    
    { label: 'K.L1', value: '1' },
    { label: 'K.L2', value: '2' },
    { label: 'K.L3', value: '3' },
    { label: 'K.L4', value: '4' }
  ];
 
 const App = () => {
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);
    const [sub, setSub] = useState(null);
    const [onFocus, setonFocus] = useState(false);
    const [std, setStd] = useState(null);
    const [Focus, setFocus] = useState(false);


 
   return (
     < SafeAreaView style={styles.container}>

     <View style={{flexDirection:"row",marginTop:30,marginLeft:35,marginBottom:1}}>
      
      <Text style={{fontWeight: 'bold',
    fontSize: 20,
    
    color: 'black',flex:0.3}} > 
          Unit
          <Text style={{padding:2,color:"red"}} >
            *
          </Text>
      </Text>
      <Text style={{fontWeight: 'bold',
    fontSize: 20,
    color: 'black',flex:0.3,marginLeft:30}}>
        Sub Unit
        <Text style={{padding:2,color:"red"}} >
            *
          </Text>
      </Text>
       
      <Text style={{fontWeight: 'bold',
    fontSize: 20,
    color: 'black',flex:0.3,marginLeft:22}}>
        Standard
        <Text style={{padding:2,color:"red"}} >
            *
          </Text>
      </Text>

      </View> 
      <View style={{flexDirection:"row",marginTop:20,marginLeft:30,}}>
     
      <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={unitData}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? 'Select item' : '...'}
        searchPlaceholder="Search..."
        onFocus={() => setIsFocus(true)}
        value={value}
        onChange={item => {
          setValue(item.value);
          setIsFocus(false);
        }}
       
        
      />

<Dropdown
       style={[styles.dropdown,styles.drop]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={subUnitData}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!onFocus ? 'Select item' : '...'}
        searchPlaceholder="Search..."
        onFocus={() => setonFocus(true)}
        value={sub}
        onChange={item => {
          setSub(item.value);
          setonFocus(false);
        }}
       
        
      /> 

<Dropdown
        style={[styles.dropdown,styles.dropView]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={StandardData}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!Focus ? 'Select item' : '...'}
        searchPlaceholder="Search..."
        onFocus={() => setIsFocus(true)}
        value={std}
        onChange={item => {
          setStd(item.value);
          setFocus(false);
        }}
       
        
      />



</View>
        

     </SafeAreaView>
   );
 };
 
 const styles = StyleSheet.create({
    container: {

      //flex: 1,
      


        
    },
    drop:{
     
      flex:0.3,
      marginLeft:30

    },
    dropView:{
     flex:0.3,
     marginRight:8,
     marginLeft:25
    },
    dropdown: 
    {
        //margin: 16,
       
        height: 50,
        flex:0.3,
        backgroundColor: 'white',
        borderRadius: 8,
        borderWidth:0.9,
        padding: 12,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        placeholderStyle: {
            fontSize: 16,
          },
          selectedTextStyle: {
            fontSize: 16,
          },
          inputSearchStyle: {
            height: 40,
            fontSize: 16,
          },
    }
   
  });
 
 export default App;