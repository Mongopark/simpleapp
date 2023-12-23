import { View, Text } from "react-native"
//This Component teaches how to pass in an ARRAY OF OBJECTS in Typescript
type PetQualProps = {
    qualities: {
        qualOne: string,
        qualTwo: string,
        qualThree: string,
        age: number
    }[]
}

const PetQualities = (props: PetQualProps) => {
    return (
        <View>
            {props.qualities.map((e, i) => {
                if(i === 0) return <Text>Your pet is {e.qualOne}, {e.qualTwo}, {e.qualThree}, and is {e.age} years old.</Text>;

                return <Text>Also, your pet is {e.qualOne}, {e.qualTwo}, {e.qualThree}, and is still {e.age} years old.</Text>
            })}
        </View>
    )
}

export default PetQualities; // Exporting Pet component as default