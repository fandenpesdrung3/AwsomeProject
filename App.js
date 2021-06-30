/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import type {Node} from 'react';
 import {SafeAreaView, Text, TextInput , ScrollView} from 'react-native';
 import { Input } from 'react-native-elements/dist/input/Input';
 import { Card, ListItem, Button, Icon } from 'react-native-elements';
 
 import firestore from '@react-native-firebase/firestore';

 const App: () => Node = () => {

  firestore().collection('Users').doc('ABC').get().then((user) => {
    console.log(user)
  });

   return (
     
     <SafeAreaView >
       <ScrollView>
      <Text style = {{fontSize:35}} >MosterJEW</Text>
      <Input placeholder='Hint'/>
     <TextInput
     style= {{backgroundColor:'#DDDDDD'}}
     keyboardType='phone-pad'></TextInput>
    
    <Button
      icon={
        <Icon name="rowing" size={40} color="white"/>
            }
      title="Button with icon component"
    />

    <Card>
    <Card.Title>HELLO WORLD</Card.Title>
    <Card.Divider/>
    <Card.Image source={{uri: 'https://www.img.in.th/images/47ce6e1d3eb1147bf6b25dca58489e29.jpg'}}>
    </Card.Image>
    <Text style={{marginBottom: 10}}>
        The idea with React Native Elements is more about component structure than actual design.
      </Text>
      <Button
        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
        title='BUTTON' />
    </Card>

    <Card>
    <Card.Title>HELLO WORLD</Card.Title>
    <Card.Divider/>
    <Card.Image source={{uri: 'https://www.img.in.th/images/47ce6e1d3eb1147bf6b25dca58489e29.jpg'}}>
    </Card.Image>
    <Text style={{marginBottom: 10}}>
        The idea with React Native Elements is more about component structure than actual design.
      </Text>
      <Button
        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
        title='BUTTON' />
    </Card>
     </ScrollView>
     </SafeAreaView>
   );
 };

 
 export default App;