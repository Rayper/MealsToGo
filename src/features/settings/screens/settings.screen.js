import React, { useContext } from 'react'
import { List, Avatar } from 'react-native-paper'   
import styled from 'styled-components'
import { AuthenticationContext } from '../../../services/authentication/authentication.context'
import { SafeArea } from "../../../components/utility/safe-area.component";
import { Text } from '../../../components/typography/text.component';
import { Spacer } from '../../../components/spacer/spacer.component';
import { Title } from '../../account/components/account.styles';

const SettingsItem = styled(List.Item)`
    padding: ${(props) => props.theme.space[3]};
`;

const AvatarContainer = styled.View`
    align-items: center;
`;

export const SettingsScreen = ({ navigation }) => {
    // ambil user untuk tampilin data-nya
    const { onLogout, user } = useContext(AuthenticationContext);

    return (
        <SafeArea>
            <AvatarContainer>
                <Title>User Settings Page</Title>
                <Avatar.Icon size={160} icon="account" backgroundColor="#7cce23" />
                <Spacer position="top" size="large">
                    <Text variant="label">{user.email}</Text>
                </Spacer>
            </AvatarContainer>

            <List.Section>
                <SettingsItem
                    title="Favourites"
                    description="View your favourites restaurants"
                    left={(props) => <List.Icon {...props} color="#7cce23" icon="heart" />}
                    onPress={() => navigation.navigate("Favourites")}
                />

                <SettingsItem
                    title="Logout"
                    left={(props) => <List.Icon {...props} color="#7cce23" icon="exit-to-app" />}
                    onPress={onLogout}
                />
            </List.Section>
        </SafeArea>
    )
};