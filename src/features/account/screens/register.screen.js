import React, { useState, useContext } from "react";

import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { AccountBackground, AccountCover, AccountContainer, AuthButton, AuthInput, Title, ErrorContainer } from "../components/account.styles";

import { AuthenticationContext } from "../../../services/authentication/authentication.context";

export const RegisterScreen = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatedpassword, setRepeatedPassword] = useState("");

    const { onRegister, error } = useContext(AuthenticationContext);

    return (
        <AccountBackground>
            <AccountCover />
            <Title>Meals To Go</Title>
            <AccountContainer>
                <AuthInput
                label="E-mail"
                value={email}
                textContentType="emailAddress"
                keyboardType="email-address"
                autoCapitalize="none"
                // setEmailnya disini
                onChangeText={(u) => setEmail(u)}
                />

                <Spacer size="large">
                    <AuthInput
                        label="Password"
                        value={password}
                        textContentType="password"
                        // biar jadi bulet2
                        secureTextEntry
                        autoCapitalize="none"
                        // setPasswordnya disini
                        onChangeText={(p) => setPassword(p)}
                    />
                </Spacer>

                <Spacer size="large">
                    <AuthInput
                        label="Repeat Password"
                        value={repeatedpassword}
                        textContentType="repeatedpassword"
                        // biar jadi bulet2
                        secureTextEntry
                        autoCapitalize="none"
                        // setPasswordnya disini
                        onChangeText={(p) => setRepeatedPassword(p)}
                    />
                </Spacer>

                {/* jika error ada, maka render  */}
                {error && (
                    <ErrorContainer size="large">
                        <Text variant="error">{error}</Text>
                    </ErrorContainer>
                )}

                <Spacer size="large">
                    <AuthButton
                        icon="email"
                        mode="contained"
                        // onLogin dari const di atas
                        onPress={() => onRegister(email, password, repeatedpassword)}
                    >
                        Register    
                    </AuthButton>
                </Spacer>

            </AccountContainer>
            <Spacer size="large">
                    <AuthButton icon="keyboard-backspace" mode="contained" onPress={() => navigation.goBack()}>
                    Back
                    </AuthButton>
            </Spacer>
        </AccountBackground>
    )
};