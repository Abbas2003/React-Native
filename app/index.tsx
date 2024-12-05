import { StyleSheet, View } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedButton } from "@/components/ThemedButton";
import { router } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";

export default function WelcomeScreen(){
    return(
        <View style={styles.container}>
            <ThemedText type="title" align="center">Welcome Screen</ThemedText>
            <ThemedButton 
                txt="Login"  
                onPress={() => console.log("Btn pressed")}
                my={10}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
    }
})