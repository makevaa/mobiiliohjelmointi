import React from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput, Image, FlatList} from 'react-native';

    
export default function App() {
  const [value1, setValue1] = React.useState(0);
  const [value2, setValue2] = React.useState(0);
  const [result, setResult] = React.useState(0);
  const [history, setHistory] = React.useState([]);

  const calc = (operation) => {
    let result;
    if (operation === '+') {
      result = parseInt(value1) + parseInt(value2);
    } else {
      result = parseInt(value1) - parseInt(value2);
    }
    setResult(result);

    let historyItem = value1 + " " + operation + " " + value2 + " = " + result;
    setHistory([...history, {key: historyItem}]);
  }
 
  return (

    <View style={styles.container}>
      <Text style={styles.text} >Result: {result}</Text>

      <TextInput
        style={styles.textinput} keyboardType='numeric'
        onChangeText={value1 => setValue1(value1)}
      />  

      <TextInput
        style={styles.textinput} keyboardType='numeric'
        onChangeText={value2 => setValue2(value2)}
      />

      <View style={styles.buttons}>
        <Button style={styles.button} onPress={() => calc('+')} title="+" />
        <Button style={styles.button} onPress={() =>calc('-')} title="-" />
      </View>

      <Text style={styles.text} >History</Text>
      <FlatList
        data={history}
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
  text: {
    fontSize:18,
    marginTop:40,
    marginBottom:10,
  },
  alerttext: {
    fontSize:18,
    color:'red',
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

  }
  
});

