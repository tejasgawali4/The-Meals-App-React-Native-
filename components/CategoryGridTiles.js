import React from 'react';
import { TouchableOpacity , TouchableNativeFeedback ,View , Text, StyleSheet , Platform } from 'react-native';

const CategoryGridTiles = props => {

    let TouchableCmp = TouchableOpacity;

    if(Platform.OS === 'android' && Platform.Version >= 21 ){
        TouchableCmp = TouchableNativeFeedback;
    }
    
    return (
        <View style={styles.gridItem}>
            <TouchableCmp style={styles.screen} onPress={props.onSelect}>
                <View style={{...styles.container,...{backgroundColor : props.color}}}>
                    <Text style={styles.title} numberOfLines={2}>
                        {props.title}
                    </Text>
                </View>
            </TouchableCmp>
        </View>
    );
};

const styles = StyleSheet.create({
    screen : {
        flex : 1
    },
    gridItem : {
        flex : 1,
        margin : 15,
        height : 150,
        elevation : 5,
        overflow: Platform.OS === 'android' && Platform.Version >= 21
        ? 'hidden' : 'visible',
    },
    container : {
        flex : 1 ,
        borderRadius : 10,
        shadowColor : 'black',
        shadowOpacity : 0.26,
        shadowOffset : { width : 0 , height : 2 },
        shadowRadius : 10 ,
        padding : 15 ,
        justifyContent : 'flex-end',
        alignItems : 'flex-end'
    },
    title : {
        fontFamily : 'open-sans-bold',
        fontSize : 20 ,
        textAlign : 'right'
    }
});

export default CategoryGridTiles;