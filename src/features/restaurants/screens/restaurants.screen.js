import { FlatList } from 'react-native';
import { Searchbar } from 'react-native-paper'
import styled from "styled-components/native";

import { RestaurantInfoCard } from '../components/restaurant-info.component';
import { Spacer } from "../../../components/spacer/spacer.component";
import { SafeArea } from "../../../components/utility/safe-area.component"

// ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
// untuk ngatasin ios karena tidak support syntax ini margin-top: ${StatusBar.currentHeight}px;
// syntax ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`}; ngecek
// jika statusBar.currenHeight memiliki value, maka add marginTop
// padding: ${(props) => props.theme.space[3]}; sama aja kyak padding: 16 karena di setting space ambil array ke 3
// const SafeArea = styled(SafeAreaView)`
//     flex: 1;
//     ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
// `;

const SearchContainer = styled.View`
    padding: ${(props) => props.theme.space[3]};
    backgroundColor: ${(props) => props.theme.colors.bg.restaurant};
`;

// attrs adalah function attributes yang memungkinkan kita mengakses spesifik props untuk default FlatList
const RestaurantList = styled(FlatList).attrs({
    contentContainerStyle: {
    padding: 16,
    backgroundColor: "#6cb221"
    },
})``;

// contentContainerStyle => apply styling supaya bisa discroll
export const RestaurantScreen = () => (
    <SafeArea>
        <SearchContainer >
            <Searchbar />
        </SearchContainer>
        <RestaurantList 
            data={[
                { name: 1},
                { name: 2 },
                { name: 3 },
                { name: 4 },
                { name: 5 },
                { name: 6 },
                { name: 7 },
                { name: 8 },
                { name: 9 },
                { name: 10 },
            ]}
            renderItem={() => 
                <Spacer position="bottom" size="small">
                    <RestaurantInfoCard />
                </Spacer> 
            }
            keyExtractor={(item) => item.name}
        />
    </SafeArea>
);