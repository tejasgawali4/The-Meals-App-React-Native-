import React from  'react';
import { MEALS } from '../data/dummy-data';
import MealList from '../components/MealList';
import HeaderButton from '../components/HeaderButton';

const FavoritesScreen = props => {

    const favMeals = MEALS.filter(meal => meal.id ===
        'm1' || meal.id === 'm2');

    //Setting Navigation Title
    // React.useLayoutEffect(() => {
    //     props.navigation.setOptions({
    //         headerTitle: 'Favorites',
    //         headerLeft: () => (
    //             <HeaderButton 
    //                 onPress={() => {
    //                         props.navigation.openDrawer();
    //                     }} 
    //                 iconName='ios-menu'
    //                 size={25}/>
    //           )
    //     });
    // }, [props.navigation, 'Favorites']);

    return <MealList 
        listData={favMeals} 
        navigation={props.navigation}/>;
}

export default FavoritesScreen;