import React from 'react';
import { FlatList , View, StyleSheet } from 'react-native';
import MealItem from  '../components/MealItem';

const MealList = props => {

    const renderMealItem = (itemData) => {
        return (<MealItem 
            title={itemData.item.title} 
            duration = {itemData.item.duration}
            complexity = {itemData.item.complexity}
            affordability = {itemData.item.affordability}
            image = {itemData.item.imgUrl}
            onSelectMeal={() =>{
                props.navigation.navigate('MealsDetails',
                {mealId: itemData.item.id})
            }}/>);
    };

    return (<View style={styles.screen}>
                <FlatList 
                    data={props.listData}
                    renderItem={renderMealItem}
                    style={{width : '100%'}}/>
            </View>);
};

const styles = StyleSheet.create({
    screen : {
        flex : 1 ,
        justifyContent : 'center',
        alignItems : 'center',
        padding : 15
    }
});

export default MealList;
