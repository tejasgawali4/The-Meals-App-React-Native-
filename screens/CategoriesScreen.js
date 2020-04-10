import React from  'react';
import { StyleSheet , FlatList, View } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTiles from '../components/CategoryGridTiles';
import HeaderButton from '../components/HeaderButton';

const CategoriesScreen = props => {


    //Setting Navigation Title
    React.useLayoutEffect(() => {
        props.navigation.setOptions({
            headerTitle: 'Categories',
            headerLeft: () => (
                <HeaderButton 
                    onPress={() => {
                            props.navigation.openDrawer();
                        }} 
                    iconName='ios-menu'
                    size={25}/>
              )
        });
    }, [props.navigation, 'Categories']);

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
        <View style={styles.list}>
            <FlatList  
                data={CATEGORIES} 
                renderItem={renderGridItem} 
                numColumns={2}/>
        </View>
    );
};

const styles = StyleSheet.create({
    screen : {
        flex : 1 ,
        justifyContent : 'center',
        alignItems : 'center'
    },
    list : {
        paddingTop : 0
    }
});


export default CategoriesScreen;