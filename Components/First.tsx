//This Component teaches how to pass in a STRING, NUMBER and BOOLEAN in Typescript
import { Text, View, StyleSheet } from "react-native";


type FirstProps = {
    title: string,
    host: string,
    number: number,
}



const Welcome: React.FC<FirstProps> = ({ title, host, number, }) => {
    return (
        <View style={styles.cont}>
            <Text>HEADER</Text>
            <Text>title: {title}.</Text>
            <Text>This group is hosted by {host}, and has {number} members.</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    cont: {
      backgroundColor: 'pink',
      paddingTop: 10,
      position: 'absolute',
      top: 0,
      left: 0,
      width: '110%',
      zIndex: 999,
      alignItems: 'center',

    },
  });
  

export default Welcome;