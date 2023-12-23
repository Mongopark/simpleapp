//This Component teaches how to pass in an OBJECT in Typescript
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type SecondProps = {
    petName: {
        firstName: string,
        lastName: string
    },
    type: string
}

const Welcome: React.FC<SecondProps> = ({ petName, type }) => {
    return (
        <View>
            <Text>User {petName.firstName}{petName.lastName} is not logged in</Text>
            <Text>Reason is because {type}.</Text>
        </View>
    );
}

const styles = StyleSheet.create({})

export default Welcome;