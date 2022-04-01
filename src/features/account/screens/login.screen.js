import React, { useState, useContext } from "react";

import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { AccountBackground, AccountCover, AccountContainer, AuthButton, AuthInput } from "../components/account.styles";

import { AuthenticationContext } from "../../../services/authentication/authentication.context";

export const LoginScreen = () => {
    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const { onLogin, error } = useContext(AuthenticationContext);

    return (
        <AccountBackground>
            <AccountCover />
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
                        secure
                        // setPasswordnya disini
                        onChangeText={(p) => setPassword(p)}
                    />
                </Spacer>
                {/* jika error ada, maka render  */}
                {error && (
                    <Spacer size="large">
                        <Text variant="error">{error}</Text>
                    </Spacer>
                )}
                <Spacer size="large">
                    <AuthButton
                        icon="lock-open-outline"
                        mode="contained"
                        // onLogin dari const di atas
                        onPress={() => onLogin(email, password)}
                    >
                        Login
                    </AuthButton>
                </Spacer>
            </AccountContainer>
        </AccountBackground>
    )
};