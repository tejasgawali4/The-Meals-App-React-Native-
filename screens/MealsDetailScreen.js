import React from  'react';
import { View , Text , Item, StyleSheet , Button, Platform} from 'react-native';
import { MEALS } from '../data/dummy-data';
import HeaderButton from '../components/HeaderButton';

const MealsDetailScreen = props => {

    //Getting Params From The Route
    const  mealid = props.route.params?.mealId;
    const SelectedMeal  = MEALS.find(meal => meal.id === mealid);
      
    //Setting Navigation Title
    React.useLayoutEffect(() => {
        props.navigation.setOptions({
            headerTitle: SelectedMeal.title,
            headerRight: () => (
                <HeaderButton 
                    onPress={() => {
                            console.log('Mark as Fav..')
                        }} 
                    iconName='ios-star'
                    size={26}/>
              )
        });
    }, [props.navigation, SelectedMeal.title]);

    return (
        <View style={styles.screen}>
            <Text>{SelectedMeal.title}</Text>
            <Button title="Go Home ! " onPress={()=> {
                props.navigation.popToTop();
            }}/>
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

export default MealsDetailScreen;