import React from 'react';
import { View , Text , StyleSheet , TouchableOpacity , ImageBackground } from 'react-native';

const MealItem = props => {
    return (
    <View style={styles.mealItem}>
    <TouchableOpacity onPress={props.onSelectMeal}>
        <View>
            <View styles={{...styles.mealRow,...styles.mealHeader}}>
                <ImageBackground source={{uri : props.image}}>
                    <Text>{props.title}</Text>
                </ImageBackground>?
            </View>
            <View styles={{...styles.mealRow,...styles.mealDetails}}>
                <Text>{props.duration}</Text>
                <Text>{props.complexity.toUpperCase()}</Text>
                <Text>{props.affordability.toUpperCase()}</Text>
            </View>
        </View>
    </TouchableOpacity>
    </View>);
};

const styles = StyleSheet.create({
    mealItem : {
        height : 200,
        width : '100%',
        backgroundColor : '#ccc'
    },
    mealRow : {
        flexDirection : 'row'
    },
    mealHeader : {
        height : '90%'
    },
    mealDetails : {
        paddingHorizontal : 10,
        justifyContent : 'space-between'
    }
});

export default MealItem;