import React,{useCallback} from  'react';
import { View , Text , ScrollView,Image, StyleSheet , Platform } from 'react-native';
import HeaderButton from '../components/HeaderButton';
import DefaultText from '../components/DefaultText';
import { useSelector,useDispatch } from 'react-redux';
import { toggleFavorite } from '../store/actions/meals';

const MealsDetailScreen = props => {

    //Getting Params From The Route
    const  mealid = props.route.params?.mealId;

    const availableMeals = useSelector(state => state.meals.meals);
    const SelectedMeal  = availableMeals.find(meal => meal.id === mealid);
    const currentMealIsFavorite = useSelector(state =>
        state.meals.favMeals.some(meal => meal.id === mealid)
    );

    const dispatch = useDispatch();

    const toggleFavHandler = useCallback(() => {
        dispatch(toggleFavorite(mealid));
    },[dispatch, SelectedMeal]);

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
                    onPress={() => {toggleFavHandler()}} 
                    iconName= {currentMealIsFavorite ? 'ios-star' : 'ios-star-outline'}
                    size={26}/>
              )
        });
    }, [props.navigation, SelectedMeal.title , currentMealIsFavorite]);

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