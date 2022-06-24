
import React, {useState} from 'react';

import
 {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  FlatList,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import mick from '../Assets/mick.png';
import pdfFileImage from '../Assets/pdfFileImage.png';
import Delete from '../Assets/Delete.png';



const DATA = [
  {
    id: 0,
    title: 'A',
    color: '#FF53DC',
    color0: '#FF53DC1f',
  },
  {
    id: 1,
    title: 'B',
    color: '#50C1F9',
    color0: '#50C1F91f',
  },
  {
    id: 2,
    title: 'C',
    color: '#E62626',
    color0: '#E626261f',
  },
  {
    id: 3,
    title: 'D',
    color: '#ff6804',
    color0: '#ff68041f',
  },
  {
    title: 'E',
    color: '#02C028',
    color0: '#02c0281f',
  },
  {
    id: 4,
    title: 'F',
    color: '#6900F2',
    color0: '#6900f21f',
  },
  {
    id: 5,
    title: 'U',
    color: '#9f9f9f',
    color0: '#9f9f9f47',
  },
];
const Item = ({item, onPress, backgroundColor, textColor, borderColor}) => (
  <TouchableOpacity
  onPress={onPress}
  style={[styles.item, backgroundColor, borderColor]}>
  <Text style={[styles.title, textColor]}>{item.title}</Text>
</TouchableOpacity>
);

const SchoolDesign = () => {
  //const [sum, setSum] = useState('');
  const [selectedId, setSelectedId] = useState(null);
  //const [value, setValue] = useState(null);

  const renderItem = ({item}) => {
    const backgroundColor = item.id === selectedId ? item.color : item.color0;

    const color = item.id === selectedId ? 'white' : item.color;

    const borderColor = item.id === selectedId ? item.color0 : item.color;

    return (
      <Item
        item={item}
        backgroundColor={{backgroundColor}}
        borderColor={{borderColor}}
        textColor={{color}}
        onPress={() => setSelectedId(item.id)}
      />
    );
  };

  return (
    
    <SafeAreaView style={styles.container}>
     
    
      <View style={{ marginLeft: 8,  }}>
        <Text
          style={{
            color: 'black',
            fontsize: 30,
            marginLeft: 20,
            marginTop:20,
          fontWeight: 'bold',
    
           marginBottom: 25,
          }}>
          Assign Grade
          <Text style={{padding:2,color:"red"}} >
            *
          </Text>
        </Text>
 
 <View style={{flexDirection:"row"}}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          extraData={selectedId}
          horizontal
        />
</View>

      </View>


      <View
        style={{
         
          marginLeft: 10,
          marginTop:40
          //alignItems: 'center',
          // borderWidth: 2,
          // borderColor: 'lightgray',
          // width: 610,
          // marginTop: 24,
          // marginLeft: 30,
          // borderRadius: 3,
        }}>

        <Text
          style={{color: 'black', fontsize: 30,fontWeight: 'bold', marginLeft: 20, }}>
          
          Comment
        </Text>
    

    <View style={{flexDirection:"row"}}>

    
        <TextInput
            multiline={true}
            numberOfLines={2}
            style={{
              flex: 0.9,
             // height: 90,
              marginLeft:20,
            
              //padding: 10,
              paddingLeft:8,
              textAlignVertical: 'top',
              borderWidth: 3,
              borderColor: 'lightgrey',
              margin: 40,
              fontSize: 25,
              borderRadius:8
            }}
          />
        <Image
          resizeMode="cover"
          style={{
           
             height: 75,
             width: 70,
           borderRadius: 4,
           
           marginTop: 46,
          }}
          source={mick}
        />
        </View>

      </View>

      <View style={{ marginLeft:30,marginTop:30}}>
        <Text style={{color: 'black', fontsize: 25,fontWeight: 'bold'}}>
          Attachments
        </Text>
        
        
        <View style={{flexDirection:"row",}}>
        <Text style={{fontsize: 20,fontWeight: 'bold',flex:0.9,marginTop:6}}>
          Max Upload size is 50 Mb
        </Text>

       
        <Text  style={{fontsize: 30,fontWeight: 'bold',color: 'lightblue'}}>
       Atach
        </Text>

      
        

        </View>

        
      </View>
      <View
          style={{
            borderBottomWidth: 3,
            marginTop:80,
          
            borderBottomColor: 'lightgrey',
          }}
        />

        <View >
      <View style={{flexDirection:"row",marginTop:100, }}>
       <Image  style={{
           
           height: 30,
           width: 30,
           marginLeft:40,
           marginRight:5
        }} source={pdfFileImage}/>  

       <Text style={{color: 'black', fontsize: 30,fontWeight: 'bold',paddingTop:7,paddingLeft:4}}>
        Assignments Source.pdf
       </Text>

      
      <Image style={{
           
           height: 30,
           width: 30,
           marginLeft:90
           
       //  borderRadius: 4,
         
        // marginTop: 67,
        }}  source={Delete}  />


<Image  style={{
           
           height: 30,
           width: 30,
          marginLeft:80
          
          
        }} source={pdfFileImage}/>  

       <Text style={{color: 'black',fontsize: 30,fontWeight: 'bold',paddingTop:7,marginLeft:4}}>
        Assignments Data.pdf
       </Text>

      
      <Image style={{
           
           height: 30,
           width: 20,
           marginLeft:90,
           
          
        }}  source={Delete}  />


</View>

        </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
   // flex: 1.2,

    marginTop: StatusBar.currentHeight || 0,
  },
  Assign: {
    marginLeft: 20,
    fontWeight: 'bold',
    fontSize: 25,
    color: 'black',
  },
  item: {
    padding: 18,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 15,
    borderWidth: 1,
  },
  title: {
    fontSize: 32,
  },
 
});

export default SchoolDesign;
