import React from  'react';
import { CATEGORIES  } from '../data/dummy-data';
import MealList from '../components/MealList';
import { useSelector } from 'react-redux';
import { View, StyleSheet } from 'react-native';
import DefaultText from '../components/DefaultText';

const CategoryMealScreen = props => {

    //Getting Params From The Route
    const  catId = props.route.params?.categoryId;
    const selectedCategory  = CATEGORIES.find(cat => cat.id === catId);
 
    //Glabal State Veriable
    const availableMeals = useSelector(state => state.meals.filteredMeals);

    //Setting Navigation Title
    React.useLayoutEffect(() => {
        props.navigation.setOptions({
          title: selectedCategory.title,
        });
    }, [props.navigation, selectedCategory.title]);
    
    const displayedMeals = availableMeals.filter(meal => meal.categoryIds.indexOf(catId) >= 0 );

    if(displayedMeals.length <= 0){
        return (<View style={styles.content}>
            <DefaultText value={'No meals found, maybe check your filters?'}/>
        </View>);
    };

    return (
        <MealList 
            listData={displayedMeals} 
            navigation={props.navigation}/>
    );
};

const styles = StyleSheet.create({
    content: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }
});

export default CategoryMealScreen;