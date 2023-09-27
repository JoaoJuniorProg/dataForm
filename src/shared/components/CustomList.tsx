import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const CustomList = ({ title, items, selected, onSelect }: any) => {
    return (
        <>
            <View style={styles.content}>
                <Text style={styles.title}>{title}</Text>
            </View>
            <View style={styles.container}>
                {items.map((item: any) => (
                   <TouchableOpacity
                   key={item.id}
                   style={[styles.item, item.id === selected?.id ? styles.selectedItem : null]}
                   onPress={() => onSelect(item)}
               >
                   <View style={styles.iconContainer}>
                       <FontAwesome5 name={item.icon} size={16} color={item.id === selected?.id ? 'green' : 'gray'} />
                   </View>
                   <Text style={styles.itemText}>{item.name}</Text>
               </TouchableOpacity>
                ))}
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 16,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 8,
        padding: 8,
    },
    content: {
        // justifyContent:"flex-start",
        // width: "100%",
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8,
    },
    title: {
        color: 'green',
        fontWeight: 'bold',
        marginBottom: 8,
        textAlign: 'left'
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 4,
    },
    itemText: {
        marginLeft: 8,
    },
    iconContainer: {
        width: 24,
        alignItems: 'center',
    },
    selectedItem: {
        backgroundColor: 'lightgreen',
    },
});

export default CustomList;
