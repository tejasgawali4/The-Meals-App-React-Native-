import React from  'react';
import MealList from '../components/MealList';
import { useSelector } from 'react-redux';

const FavoritesScreen = props => {

    const favMeals = useSelector(state => state.meals.favMeals);    

    console.log(favMeals);

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