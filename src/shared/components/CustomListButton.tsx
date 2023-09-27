import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const CustomListButton = ({ label, color, onPress }: any) => {
    return (
        <TouchableOpacity
            style={[styles.button, { backgroundColor: color }]}
            onPress={onPress}
        >
            <Text style={styles.buttonText}>{label}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        width: '30%',
        height: 60,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 16,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
    },
});

export default CustomListButton;
