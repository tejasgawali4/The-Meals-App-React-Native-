import React from  'react';
import { CATEGORIES  } from '../data/dummy-data';
import MealList from '../components/MealList';
import { useSelector } from 'react-redux';

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

    return (
        <MealList 
            listData={displayedMeals} 
            navigation={props.navigation}/>
    );
};

export default CategoryMealScreen;