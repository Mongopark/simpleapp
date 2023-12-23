import { Text, View } from "react-native";
//This Component teaches how to pass in a STRING, NUMBER and BOOLEAN in Typescript
type WelcomeProps = {
    name: string,
    age: number,
    gender: boolean
}

// export default function Welcome(props: WelcomeProps) {
//     return (
//         <View>
//             <Text>Hello {props.name}!</Text>
//             <Text>You are {props.age}.</Text>
//             <Text>You are a {props.gender ? "man" : "woman"}.</Text>
//         </View>
//     )
// }


//in the below, the React.FC stands for React Functional Component
const Welcome: React.FC<WelcomeProps> = ({ name, age, gender }) => {
    return (
        <View>
            <Text>Hello {name}!</Text>
            <Text>You are {age}.</Text>
            <Text>You are a {gender ? 'man' : 'woman'}.</Text>
        </View>
    );
}

export default Welcome;