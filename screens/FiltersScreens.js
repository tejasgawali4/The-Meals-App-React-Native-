import React,{useState, useEffect, useCallback} from  'react';
import { View , Text , StyleSheet , Switch, Platform, Button } from 'react-native';
import HeaderButton from '../components/HeaderButton';
import Colors from '../constants/Colors';


 const FilterSwitch = props => {
     return (<View style={styles.filterContainer}>
        <Text>{props.label}</Text>
        <Switch 
            trackColor={{ true : Colors.PrimaryColor}}
            thumbColor={Platform.OS === 'android' ? Colors.PrimaryColor : Colors.White}
            value={props.state}
            onValueChange={props.onChange}
        />
    </View>);
 };


const FilterScreens = props => {

    const [isGlutenFree, setIsGlutenFree] = useState(false);
    const [isLactoseFree, setIsLactoseFree] = useState(false);
    const [isVegan, setIsVegan] = useState(false);
    const [isVegetarian, setIsVegetarian] = useState(false);

    //Setting Navigation Title
    React.useLayoutEffect(() => {
        props.navigation.setOptions({
            headerTitle: 'Filters',
            headerLeft: () => (
                <HeaderButton 
                    onPress={() => {
                            props.navigation.openDrawer();
                        }} 
                    iconName='ios-menu'
                    size={25}/>
                ),
            headerRight : () => (
                <HeaderButton 
                    onPress={() => {
                            props.navigation.openDrawer();
                        }} 
                    iconName='ios-save'
                    style={{alignItems: 'center'}}
                    size={25}/>
                ) 
        });
    }, [props.navigation, 'Filters']);

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Available Filters / Restrictions</Text>
            <FilterSwitch 
                state={isGlutenFree} 
                onChange={newValue => setIsGlutenFree(newValue)} 
                label='Gluten Free'/>
            <FilterSwitch 
                state={isVegetarian} 
                onChange={newValue => setIsVegetarian(newValue)} 
                label='Vegetarian'/>
            <FilterSwitch 
                state={isLactoseFree} 
                onChange={newValue => setIsLactoseFree(newValue)} 
                label='Lactose Free'/>
            <FilterSwitch 
                state={isVegan} 
                onChange={newValue => setIsVegan(newValue)} 
                label='Vegan'/>    
        </View>
    );
};

const styles = StyleSheet.create({
    screen : {
        flex : 1 ,
        alignItems : 'center'
    },
    title : {
        fontFamily : 'open-sans-bold',
        fontSize : 22,
        margin : 20,
        textAlign : 'center'
    },
    filterContainer : {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '80%',
        marginVertical: 15
    }
});

export default FilterScreens;