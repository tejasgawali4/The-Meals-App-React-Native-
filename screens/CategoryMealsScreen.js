import React from  'react';
import { View , Text , StyleSheet , FlatList } from 'react-native';
import { CATEGORIES , MEALS } from '../data/dummy-data';
import MealItem from '../components/MealItem';

const CategoryMealScreen = props => {

    //Getting Params From The Route
    const  catId = props.route.params?.categoryId;
    const selectedCategory  = CATEGORIES.find(cat => cat.id === catId);

    //Setting Navigation Title
    React.useLayoutEffect(() => {
        props.navigation.setOptions({
          title: selectedCategory.title,
        });
    }, [props.navigation, selectedCategory.title]);

    const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) >= 0 );

    const renderMealItem = itemData => {
        return (<MealItem 
            title={itemData.item.title} 
            duration = {itemData.item.duration}
            complexity = {itemData.item.complexity}
            affordability = {itemData.item.affordability}
            image = {itemData.item.imgUrl}
            onSelectMeal={() =>{}}/>);
    };

    return (
        <View style={styles.screen}>
           <FlatList 
                data={displayedMeals}
                renderItem={renderMealItem}
                style={{width : '100%'}}/>
        </View>
    )
};

const styles = StyleSheet.create({
    screen : {
        flex : 1 ,
        justifyContent : 'center',
        alignItems : 'center',
    }
});

export default CategoryMealScreen;