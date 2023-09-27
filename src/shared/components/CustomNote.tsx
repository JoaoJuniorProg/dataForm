import { FontAwesome5 } from '@expo/vector-icons';
import React from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';

const CustomTextComponent = ({ value, onChangeText, title }: any) => {
    return (
        <>
            <View style={styles.content}>
                <FontAwesome5 name={"edit"} size={16} />
                <Text style={styles.title}>{title}</Text>
            </View>
            <View style={styles.container}>
                <TextInput
                    value={value}
                    onChangeText={onChangeText}
                    multiline={true}
                    numberOfLines={3}
                    style={styles.textInput}
                    placeholder="Digite seu texto aqui..."
                    placeholderTextColor="gray" />
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: 'gray',
        padding: 12,
        borderRadius: 8,
    },
    textInput: {
        flex: 1,
        paddingVertical: 4,
    },
    title: {
        color: 'green',
        fontWeight: 'bold',
        marginLeft: 8,
        textAlign: 'left',
        alignItems: 'center',
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
        textAlign: 'center',
        padding: 8,
    },
});

export default CustomTextComponent;
