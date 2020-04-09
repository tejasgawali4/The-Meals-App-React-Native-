import React  from 'react';
import { StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../constants/Colors';

const HeaderButton = props => {
    
    return (<Ionicons {...props} 
        style={styles.icon}
        name={props.iconName} 
        size={props.size} 
        color={Platform.OS === 'android' ? 'white' : '#4a148c'}
        />);
};

export default HeaderButton;

styles = StyleSheet.create({
    icon: {
        flex : 1,
        padding: 10,
    }
});