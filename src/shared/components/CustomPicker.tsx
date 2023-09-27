import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const CustomPicker = ({ label, selectedValue, onValueChange, options }: any) => {
    const [isOpen, setIsOpen] = useState(true);

    const togglePicker = () => {
        setIsOpen(!isOpen);
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={togglePicker}>
                <View style={styles.pickerLabel}>
                    <Text style={styles.labelText}>{label}</Text>
                    <Text style={styles.selectedText}>{selectedValue}</Text>
                </View>
            </TouchableOpacity>
            {isOpen && (
                <Picker
                    selectedValue={selectedValue}
                    onValueChange={(itemValue) => {
                        onValueChange(itemValue);
                        togglePicker();
                    }}
                    style={styles.picker}
                    mode="dropdown"
                >
                    {options.map((option: any) => (
                        <Picker.Item key={option.id} label={option.name} value={option.name} />
                    ))}
                </Picker>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
    },
    pickerLabel: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderColor: 'gray',
        paddingHorizontal: 10,
    },
    labelText: {
        color: 'green',
        fontWeight: 'bold',
    },
    selectedText: {
        flex: 1,
        marginLeft: 10,
    },
    picker: {
        borderBottomWidth: 1,
        borderColor: 'gray',
    },
});

export default CustomPicker;
