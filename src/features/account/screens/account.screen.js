import React from "react";
import { Button } from "react-native-paper";
import { AccountBackground, AccountCover, AccountContainer, AuthButton, Title } from "../components/account.styles";
import { Spacer } from "../../../components/spacer/spacer.component";

export const AccountScreen = ({ navigation }) => {
    return ( 
        <AccountBackground>
            <AccountCover />
            <Title>Meals To Go</Title>
            <AccountContainer>
                <AuthButton 
                    icon="account-circle"
                    mode="contained"
                    onPress={() => navigation.navigate("Login")} 
                >
                Login
                </AuthButton>
                
                <Spacer size="large">
                    <AuthButton 
                        icon="email"
                        mode="contained"
                        onPress={() => navigation.navigate("Register")} 
                    >
                    Register
                    </AuthButton>
                </Spacer>
            </AccountContainer>
        </AccountBackground>
    )
};