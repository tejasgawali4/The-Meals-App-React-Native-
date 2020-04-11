import React from  'react';
import { View , Text , ScrollView,Image, StyleSheet , Button, Platform} from 'react-native';
import { MEALS } from '../data/dummy-data';
import HeaderButton from '../components/HeaderButton';
import DefaultText from '../components/DefaultText';


const MealsDetailScreen = props => {

    //Getting Params From The Route
    const  mealid = props.route.params?.mealId;
    const SelectedMeal  = MEALS.find(meal => meal.id === mealid);
    
    const ListItem = props => {
        return (
        <View style={styles.listItem}>
            <DefaultText value={props.children}/>
        </View>);
    };
    
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
        <ScrollView>
            <Image source={{uri : SelectedMeal.imgUrl}}
            style={styles.image}/>
            <View style={styles.details}>
                <DefaultText value={SelectedMeal.duration}/>
                <DefaultText value={SelectedMeal.complexity.toUpperCase()}/>
                <DefaultText value={SelectedMeal.affordability.toUpperCase()}/>
            </View>
            <Text style={styles.title}>Ingredients</Text>
            {SelectedMeal.ingredients.map(ingredient => (
            <ListItem key={ingredient}>{ingredient}</ListItem>
            ))}
            <Text style={styles.title}>Steps</Text>
            {SelectedMeal.steps.map(step => (
            <ListItem key={step}>{step}</ListItem>
            ))}
            {/* <View style={styles.screen}>
                <Text>{SelectedMeal.title}</Text>
                <Button title="Go Home ! " onPress={()=> {
                    props.navigation.popToTop();
                }}/>
            </View> */}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        textAlign: 'center'
      },
    image: {
        width: '100%',
        height: 200
    },
    details: {
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'space-around'
    },
    listItem: {
        marginVertical: 10,
        marginHorizontal: 20,
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 10
    }
});

export default MealsDetailScreen;