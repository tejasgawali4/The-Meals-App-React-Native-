import React from  'react';
import MealList from '../components/MealList';
import HeaderButton from '../components/HeaderButton';
import { useSelector } from 'react-redux';

const FavoritesScreen = props => {

    const favMeals = useSelector(state => state.favMeals);    

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