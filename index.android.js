/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';
import english_german from './english_german.json';

export default class dictionary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      output: ''
    };
  }

  showMeaning() {
    // Use the ternary operator to check if the word
    // exists in the dictionary.
    var meaning = this.state.input in english_german ?
                    english_german[this.state.input] :
                    "Not Found";
    console.log(this.state.input);
    console.log(meaning);
    // Update the state
    this.setState({
         output: meaning
    });
  }

  render() {
    return (
      <View style={styles.parent}>
        <Text>
            Type something in English:
        </Text>

        <TextInput style={{width: 300}} value={this.state.input} onChangeText={(text) => this.setState({input: text})} onSubmitEditing={() => this.showMeaning()} />

        <Text style = { styles.germanLabel } >
            Its German equivalent is:
        </Text>

        <Text style = { styles.germanWord } >
          {this.state.output}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  // For the container View
   parent: {
       padding: 16
   },

   // For the Text label
   germanLabel: {
       marginTop: 20,
       fontWeight: 'bold'
   },

   // For the Text meaning
   germanWord: {
       marginTop: 15,
       fontSize: 30,
       fontStyle: 'italic'
   }
});

AppRegistry.registerComponent('dictionary', () => dictionary);
