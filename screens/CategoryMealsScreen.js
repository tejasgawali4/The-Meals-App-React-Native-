import React from  'react';
import { View , Text , StyleSheet , Button } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';

const CategoryMealScreen = props => {

    const  catId = props.route.params?.categoryId;
    const selectedCategory  = CATEGORIES.find(cat => cat.id === catId);
    console.log("selectedCategory : - " , selectedCategory.title);

    React.useLayoutEffect(() => {
        props.navigation.setOptions({
          title: selectedCategory.title,
        });
    }, [props.navigation, selectedCategory.title]);

    return (
        <View style={styles.screen}>
            <Text>The Category Meal Screen !</Text>
            <Button title="Go to Meals Details ! " onPress={()=> {
                props.navigation.navigate('MealsDetails');
            }}/>
             <Button title="Go Back ! " onPress={()=> {
                props.navigation.goBack();
            }}/>
        </View>
    )
}

console.log(CategoryMealScreen.navigationOptions)

const styles = StyleSheet.create({
    screen : {
        flex : 1 ,
        justifyContent : 'center',
        alignItems : 'center'
    }
});

export default CategoryMealScreen;