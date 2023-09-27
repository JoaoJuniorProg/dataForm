import { View, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const CustomPicker = ({ label, selectedValue, onValueChange, options }: any) => {
    return (
        <View style={styles.container}>
            <View style={styles.pickerLabel}>
                <Text style={styles.labelText}>{label}</Text>
            </View>
            <View style={styles.pickerLabel}>
            <Picker
                selectedValue={selectedValue}
                onValueChange={(itemValue) => {
                    onValueChange(itemValue);
                }}
                style={styles.picker}
                mode="dropdown"
            >
                {options.map((option: any) => (
                    <Picker.Item key={option.id} label={option.name} value={option.name} />
                ))}
            </Picker>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
    },
    pickerLabel: {
 
    },
    labelText: {
        color: 'green',
        fontWeight: 'bold',
    },
    selectedText: {
        flex: 1,
        marginTop: 10,
    },
    picker: {
        borderBottomWidth: 1,
        borderColor: 'gray',
    },
});

export default CustomPicker;
