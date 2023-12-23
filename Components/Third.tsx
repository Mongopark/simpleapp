//This Component teaches how to pass in an ARRAY OF OBJECTS in Typescript
import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';


//THIS OR...
// type Contact = {
//   name: string;
//   number: number;
//   location: string;
//   gender: boolean;
// };
// type ThirdProps = {
//   contacts: Contact[];
// };


//...THIS
  type ThirdProps = {
    contacts: {
        name: string;
        number: number;
        location: string;
        gender: boolean;
      }[];
  };

const Third: React.FC<ThirdProps> = ({ contacts }) => {
  return (
    <View>
      <Text>Contact List</Text>
      <FlatList
        data={contacts}
        renderItem={({ item, index }) => {
          if (index === 0) {
            return (
              <Text style={styles.text}>
                <Text style={styles.flex}>
               <Text style={styles.contactname}>{item.name}</Text>{'    '}{item.gender ? 'Male' : 'Female'}{'    '}<Text style={styles.contactnumber}>{item.number}</Text> </Text>
               <Text style={styles.location}>located:</Text> {item.location}
                
              </Text>
            );
          } else {
            return (
              <Text style={styles.text}>
                {item.name}, {item.number}, {item.location}, and is still{' '}
                {item.gender ? 'Male' : 'Female'} years old.
              </Text>
            );
          }
        }}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  cont: {
    padding: 5,
    zIndex: 1,
  },
  flex: {
    display: 'flex',
  },
  text: {
    paddingTop: 40,
    padding: 10,
  },
  contactname: {
    fontSize: 20,
    fontWeight: '700',
  },
  contactgender: {
    fontSize: 10,
    fontWeight: '400',
  },
  contactnumber: {
    fontSize: 20,
    fontWeight: '200',
  },
  location: {
    fontSize: 20,
    fontWeight: '200',
  },
});

export default Third;