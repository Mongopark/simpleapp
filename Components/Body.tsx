// This is the Recomended Component where First, Second, and Third Screens are imported here
import React, { useState } from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity } from 'react-native';
import First from './First'
import Second from './Second'
import Third from './Third';

const Body = () => {

  const [modalVisible, setModalVisible] = useState(false);

 const petName = {
        firstName: 'Easy',
        lastName: 'Money',
    };
    const type = 'his password is incorrect';


  const contacts = [
    {
      name: 'Ademide',
      number: '07053005600',
      location: 'scary as a mother who caught her child eating her secret stash of chocolate',
      gender: false,
    },
    {
      name: 'Okesola',
      number: '09021564138',
      location: 'scary as a mother who caught her child eating her secret stash of chocolate',
      gender: true,
    },
    {
      name: 'Mary',
      number: '09021564138',
      location: 'scary as a mother who caught her child eating her secret stash of chocolate',
      gender: false,
    },
    {
      name: 'Samson',
      number: '09021564138',
      location: 'scary as a mother who caught her child eating her secret stash of chocolate',
      gender: true,
    },
  ]


  return (
    <View style={styles.container}>
      <First title={"How to get a woman 101"} number={37} host={'emma'} />


      <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.modalbtn}>
        <Text style={styles.text}>Open Modal</Text>
      </TouchableOpacity>
      <Modal animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}><View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>This is a Modal</Text>
<Second petName={petName} type={type} />
            <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.closebtn}>
              <Text style={styles.closeButton}>Close</Text>
            </TouchableOpacity></View></View></Modal>




      <Text style={styles.title}>Welcome to My App</Text>
      <Text style={styles.paragraph}>
        This is the Body component. It contains some text to make it look nice and appealing.
        You can add more content here as needed.
      </Text>



      <Third contacts={contacts}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#333',
  },
  paragraph: {
    fontSize: 16,
    textAlign: 'center',
    color: '#555',
  },


  modalbtn: {
    zIndex: 1999,
    backgroundColor: 'blue',
    padding: 10,
    position: 'absolute',
    top: 70,
    left: '35%',
    borderRadius: 50,
  },  
  closebtn: {
    backgroundColor: 'pink',
    padding: 10,
    borderRadius: 50,
  },  
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  closeButton: {
    marginTop: 10,
    color: 'blue',
  },
});

export default Body;
