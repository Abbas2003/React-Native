import { ThemedButton } from "@/components/ThemedButton";
import { ThemedText } from "@/components/ThemedText";
import { router } from "expo-router";
import { SafeAreaView, View } from "react-native";


export default function LoginScreen(){
    return(
        <View style={{ flex: 1, justifyContent: "center" }}>
            <ThemedText type="title" align="center">
                Login to Continue
            </ThemedText>

            <ThemedButton 
                txt="Go to Home Page" 
                my={10}  
                onPress={() => router.push("./(tabs)")}
                bgColor="#c1e1c9"
                txtColor="#194d33"
            />
        </View>
    )
}