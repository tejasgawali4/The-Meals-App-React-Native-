import React from  'react';
import { View , Text , StyleSheet } from 'react-native';
import HeaderButton from '../components/HeaderButton';

const FilterScreens = props => {

        //Setting Navigation Title
        React.useLayoutEffect(() => {
            props.navigation.setOptions({
                headerTitle: 'Filters',
                headerLeft: () => (
                    <HeaderButton 
                        onPress={() => {
                                props.navigation.openDrawer();
                            }} 
                        iconName='ios-menu'
                        size={25}/>
                  )
            });
        }, [props.navigation, 'Filters']);

    return (
        <View style={styles.screen}>
            <Text>Filter Screens !</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    screen : {
        flex : 1 ,
        justifyContent : 'center',
        alignItems : 'center'
    }
});

export default FilterScreens;