import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert} from 'react-native';

export default function App() {

  const [text, setText] = React.useState('Guess a number between 1-100');
  const [guess, setGuess] = React.useState(0);
  const [guessCount, setGuessCount] = React.useState(0);
  const [answer, setAnswer] = React.useState(Math.floor(Math.random() * 100) + 1);

  const makeGuess = () => {
    let text;
    if(guess > answer) {
      text = 'Your guess ' + guess + ' is too high';
    } else if(guess < answer) {
      text = 'Your guess ' + guess + ' is too low';
    } else if(guess == answer) {
      text = 'You guessed the number in ' + guessCount + ' guesses';
      Alert.alert(text);
      return;
    }
      setGuessCount(guessCount + 1);
      setText(text);
  }
 

  return (
    <View style={styles.container}>

      <Text style={styles.text}>{text}</Text>

      <TextInput
       style={styles.textinput} keyboardType='numeric'
       onChangeText={guess => setGuess(guess)}
      />  

      <Button style={styles.button} onPress={() => makeGuess()} title="MAKE GUESS" />

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
    marginBottom:20,
  },
  textinput: {
    width: 100, 
    borderColor: 'gray', 
    borderWidth: 1,
    marginBottom:25,
    fontSize:18,
  },
});
