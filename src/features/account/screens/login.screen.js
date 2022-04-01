import React, { useState, useContext } from "react";
import { ActivityIndicator, Colors } from 'react-native-paper'

import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { AccountBackground, AccountCover, AccountContainer, AuthButton, AuthInput, Title, ErrorContainer } from "../components/account.styles";

import { AuthenticationContext } from "../../../services/authentication/authentication.context";

export const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { onLogin, isLoading, error } = useContext(AuthenticationContext);

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
                {/* jika error ada, maka render  */}
                {error && (
                    <ErrorContainer size="large">
                        <Text variant="error">{error}</Text>
                    </ErrorContainer>
                )}
                <Spacer size="large">
                    { !isLoading ? ( 
                    <AuthButton
                        icon="lock-open-outline"
                        mode="contained"
                        // onLogin dari const di atas
                        onPress={() => onLogin(email, password)}
                    >
                        Login
                    </AuthButton> ) : (
                        <ActivityIndicator animating={true} color="#7cce23" />
                    )}
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