import { Text, TextInput, View } from "react-native"
import { useState } from "react";

export default function FormComponent() {
    const [email, setEmail] = useState("");

    return (
        <View>
            <Text>Email</Text>

            <TextInput
                placeholder="Digite seu email"
                value={email}
                onChangeText={setEmail}
                style={{
                    borderWidth: 1,
                    padding: 10,
                    marginTop: 5
                }}
            />

        </View>
    )

}