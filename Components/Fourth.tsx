//This Component teaches how to pass in an ARRAY in Typescript
import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';



// THIS OR...
// type list = any;
// type FourthProps = {
//   list: list[];
// };


//...THIS
  type FourthProps = {
    list: any[];
  };

const Fourth: React.FC<FourthProps> = ({ list }) => {


  return (
    <View>
      <Text>Normal List</Text>
      <FlatList
        data={list}
        renderItem={({ item, index }) => (
          <Text style={styles.text}>
            <Text style={styles.flex}>{index} {item}</Text>
          </Text>
        )}
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

export default Fourth;