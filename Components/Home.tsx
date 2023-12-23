// The Pet, PetQualities, Welcome and Fourth Screens are imported here
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Welcome from './Welcome';
import Pet from './Pet';
import PetQualities from './PetQualities';
import Fourth from './Fourth';

export default function App() {
  const petName = {
    firstName: "Roger",
    lastName: "Porticous"
  }

  const qualities = [
    {
      qualOne: 'a lizard',
      qualTwo: 'enormous',
      qualThree: 'scary as a mother who caught her child eating her secret stash of chocolate',
      age: 17
    },
    {
      qualOne: 'green',
      qualTwo: 'sometimes yellow',
      qualThree: 'potentially purple',
      age: 17
    }
  ]

  const constMessage = "Are these things actually true? No one really knows.";

  const [finalMessage, setFinalMessage] = useState("But I'm assuming it's true because I think all lizards change colors. But I'm too lazy to do a Google search to find out if this is true.")

  const list = [
    'Black Mamba',
    5,
    'Saltwater Crocodile',
    false,
    'Pufferfish',
    null,
    'African Elephant',
    'Cone Snail',
    'Mosquito',
    'Great White Shark'
  ];

  return (
    <View style={styles.container}>
    <Fourth list={list} />
      <Welcome name={"Jack"} age={37} gender={true} />
      <Pet petName={petName} type="Komodo Dragon" />
      <PetQualities qualities={qualities} />
      <Text>{constMessage}</Text>
      <Text>{finalMessage}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 60
  },
});
