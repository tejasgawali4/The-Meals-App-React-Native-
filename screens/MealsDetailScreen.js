import React from  'react';
import { View , Text , StyleSheet , Button} from 'react-native';


const MealsDetailScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>The Categories Screen !</Text>
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