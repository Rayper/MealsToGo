import styled from 'styled-components/native'
import { Card } from "react-native-paper";

export const Icon = styled.Image`
    width: 20px;
    height: 20px;
`;

export const Info = styled.View`
    padding: ${(props) => props.theme.space[3]};
`;

// justify-content: flex-end; akan push ke samping
export const SectionEnd = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: flex-end;
`;

export const Section = styled.View`
    flex-direction: row;
    align-items: center;
`;

// flex-direction-row supaya horizontal
export const Rating = styled.View`
    flex-direction: row;
    padding-top:${props => props.theme.space[2]};
    padding-bottom:${props => props.theme.space[2]};
`;

export const Address = styled.Text`
    font-size: ${(props) => props.theme.fontSizes.caption}
    font-family: ${(props) => props.theme.fonts.heading}
    color: ${(props) => props.theme.colors.ui.success}
`;

export const RestaurantCard = styled(Card)`
    backgroundColor: ${(props) => props.theme.colors.bg.primary};
    margin-bottom: ${(props) => props.theme.space[3]}
`;

export const RestaurantCardCover = styled(Card.Cover)`
    padding: ${(props) => props.theme.space[3]};
    backgroundColor: ${(props) => props.theme.colors.bg.primary};
`;
