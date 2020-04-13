import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';

export default function App() {

  const [text, setText] = React.useState('');
  const [items, setItems] = React.useState([]);

  const add = () => {
    setItems([...items, {key: text}]);
    setText('');
  }

  const clear = () => {
    setItems([]);
  }
 

  return (
    <View style={styles.container}>

      <TextInput
        style={styles.textinput}
        onChangeText={text => setText(text)}
        value={text}
      />  

      <View style={styles.buttons}>
        <Button style={styles.button} onPress={() => add()} title="ADD" />
        <Button style={styles.button} onPress={() =>clear()} title="CLEAR" />
      </View>

      <Text style={styles.title}>Shopping List</Text>

      <FlatList
        data={items}
        renderItem={({item}) =>
        <Text>{item.key}</Text>}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }, 
  textinput: {
    width: 200, 
    borderColor: 'gray', 
    borderWidth: 1,
    marginBottom:5,
    fontSize:18,
  },
  buttons: {
    flexDirection:'row',
  
  },
  button: {

  }, 
  title: {
    fontSize:18,
    marginTop:40,
    marginBottom:10,
    color:'blue',
    fontWeight:'bold',
  },
  text: {
    fontSize:18,
    marginTop:40,
    marginBottom:10,
  },
});
