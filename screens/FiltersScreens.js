import React from  'react';
import { View , Text , StyleSheet } from 'react-native';


const FilterScreens = props => {
    return (
        <View style={styles.screen}>
            <Text>Filter Screens !</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    screen : {
        flex : 1 ,
        justifyContent : 'center',
        alignItems : 'center'
    }
});

export default FilterScreens;