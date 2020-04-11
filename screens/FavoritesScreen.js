import React from  'react';
import { StyleSheet ,View } from 'react-native';
import MealList from '../components/MealList';
import { useSelector } from 'react-redux';
import DefaultText from '../components/DefaultText';

const FavoritesScreen = props => {

    const favMeals = useSelector(state => state.meals.favMeals);    

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

    if (favMeals.length === 0 || !favMeals) {
        return (
          <View style={styles.content}>
            <DefaultText value={'No favorite meals found. Start adding some!'}/>
          </View>
        );
    }

    return <MealList 
        listData={favMeals} 
        navigation={props.navigation}/>;
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }
});

export default FavoritesScreen;