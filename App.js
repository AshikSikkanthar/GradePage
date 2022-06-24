import React from 'react';

import {SafeAreaView, View} from 'react-native';

import User from './Pages/User';
import DropList from './Pages/DropList';
import GradePage from './Pages/GradePage';

const App = () => {
  return (
    <SafeAreaView style={{flex: 3}}>
      <View style={{flex:0.5}}>
        <User/>
      </View>
      <View style={{

        //backgroundColor:"pink"
        }}>
       
        <DropList />
      </View>
      <View style={{flex:1.5,backgroundColor:'white'}}>
       
        <GradePage />
      </View>
    </SafeAreaView>
  );
};

export default App;
