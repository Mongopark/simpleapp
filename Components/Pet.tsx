import { Text, View } from "react-native";
//This Component teaches how to pass in an OBJECT in Typescript
type PetProps = {
    petName: {
        firstName: string,
        lastName: string
    },
    type: string
}

const Pet = (props: PetProps) => {
    const { firstName, lastName } = props.petName;

    return (
        <View>
            <Text>You own a pet name {firstName} {lastName}.</Text>
            <Text>The pet is a {props.type}.</Text>
        </View>
    )
}

export default Pet; // Exporting Pet component as default