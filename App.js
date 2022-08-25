
import React,{useState}from 'react';
import {StyleSheet, View, Text, Button, FlatList,SafeAreaView,TextInput} from 'react-native';

import { getAllContacts, addContact, deleteAllContact} from './realm'

function App(){

  const [contacts, setContacts] = useState(getAllContacts);
  const [counter, setCounter] = useState(contacts.length + 1);
  const [text,setText] = useState(getAllContacts)
  const [data,setData] = useState(getAllContacts)
  const [value,setValue] = useState(getAllContacts)
  const renderItem = ({item}) =>(
    <View style={styles.itemViewStyle}>
      <Text>{item.recordID}</Text>
      <Text>{item.givenName}</Text>
      <Text>{item.familyName}</Text>
      <Text>{item.phoneNumber}</Text>
    </View>
  )
  return(
   <SafeAreaView style={{padding: 3}}>
    <View style={styles.inputView}>
     <TextInput placeholder ="Enter a name" 
  
     onChangeText={ text => setText(text)}
        defaultValue={text}
     />
    </View>
    <View style={styles.inputView}>
     <TextInput placeholder ="Enter a Adress" 
  
     onChangeText={ value => setValue(value)}
        defaultValue={value}
     />
    </View>
    <View style={styles.inputView}>
     <TextInput placeholder ="Enter a Number" 
  
     onChangeText={ data => setData(data)}
        defaultValue={data}
     />
    </View>
     <View style={styles.button}>
       <Button title='Add' 
         onPress={() =>{
         addContact(counter,text,value, data);
         setContacts(getAllContacts);
         setCounter(counter + 1);
       }}/>
     </View>
     {/* <View style={styles.button}>
       <Button title='Get'/>
     </View> */}
     <View style={styles.button}>
       <Button title='Delete'
         onPress={() => {
           deleteAllContact();
           setContacts(getAllContacts);
           setCounter(1);
         }}
       />
     </View>
     <View>
       <Text style={styles.textHeader}>Contacts</Text>
       <FlatList 
       data = {contacts}
       keyExtractor={item => item.recordID}
       renderItem={renderItem}/>
     </View>
   </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center'
  },
  button: {
    margin: 20,
    width: 250
  },
  textHeader:{
    marginTop: 10,
    fontSize: 25,
    fontWeight:'bold'
  },
  itemViewStyle:{
    flexDirection:'row',
    justifyContent:'space-between'
  },
  inputView:{
     width:"75%",
     height:45,
     marginLeft:56,
   
     

  }
})
export default App;