import React from  'react';
import { StyleSheet , FlatList } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTiles from '../components/CategoryGridTiles';

const CategoriesScreen = props => {

    const renderGridItem = (itemData) => {
        return (
            <CategoryGridTiles 
            title={itemData.item.title} 
            color={itemData.item.color}
            onSelect={() => {
                props.navigation.navigate('CategoryMeals',{categoryId: itemData.item.id})
            }}/>
        );
    };

    return (
        <FlatList  
        data={CATEGORIES} 
        renderItem={renderGridItem} 
        numColumns={2}/>
    );
};

const styles = StyleSheet.create({
    screen : {
        flex : 1 ,
        justifyContent : 'center',
        alignItems : 'center'
    }
});


export default CategoriesScreen;