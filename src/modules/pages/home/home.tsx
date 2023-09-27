import React, { useEffect, useState } from 'react';
import { FontAwesome5, MaterialIcons, Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';

import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Button,
    StyleSheet,
    ScrollView,
} from 'react-native';
import CustomListButton from '../../../shared/components/CustomListButton';
import CustomPicker from '../../../shared/components/CustomPicker';
import CustomList from '../../../shared/components/CustomList';
import CustomTextComponent from '../../../shared/components/CustomNote';
import { getResources, saveStopData } from '../../../shared/services/methods.service';
import { useAuth } from '../../../shared/providers/AuthToken';

const HomeScreen: React.FC = () => {
    const route = useRoute<any>();
    const { authToken } = route.params;
    const navigation = useNavigation();
    const [machineName, setMachineName] = useState('');
    const [doing, setDoing] = useState('');
    const [field, setField] = useState('');
    const [reason, setReason] = useState('');
    const [note, setNote] = useState('');
    const [minutes, setMinutes] = useState(0); // Tempo total da parada
    const [reasonSelected, setReasonSelected] = useState(false);
    const [selectedEquipment, setSelectedEquipment] = useState<any>(null);
    const [selectedItemList, setSelectedItemList] = useState<any>(null);
    const [selectedFarm, setSelectedFarm] = useState<any>(null);
    const [selectedField, setSelectedField] = useState<any>(null);
    const [texto, setTexto] = useState<any>(null);

    console.log("chegou token", authToken)

    const add10Minutes = () => {
        setMinutes(minutes + 10);
    };

    const subtract10Minutes = () => {
        if (minutes >= 10) {
            setMinutes(minutes - 10);
        }
    };

    const handleGoBack = async () => {
        navigation.goBack();
    };

    const saveStop = async () => {
        try {
            const stopData = {
                uuid: 'f400bf91-916d-403b-8fe9-29496bf05a07',
                note,
                idFarm: selectedFarm,
                idField: selectedField,
                idReason: selectedItemList?.name,
                idMachinery: selectedEquipment,
                minutes,
                longitude: -55.12,
                latitude: -13.55,
            }
            console.log('body', stopData);
            const response = await saveStopData(stopData, authToken);

            // Lide com a resposta aqui, você pode mostrar uma mensagem de sucesso, por exemplo.
            console.log('Registro de parada salvo com sucesso', response);

            setMachineName('');
            setDoing('');
            setField('');
            setReason('');
            setNote('');
            setMinutes(0);
            setReasonSelected(false);
            setSelectedEquipment(null);
            setSelectedFarm(null);
            setSelectedField(null);
        } catch (error) {
            console.log('Error ao registrar', error);
            throw error;
        }


    };

    const itemList = [
        { id: 1, name: 'Gasolina', icon: 'gas-pump' },
        { id: 2, name: 'Almoço', icon: 'utensils' },
        { id: 3, name: 'Condição Climática', icon: 'cloud-sun' },
        { id: 4, name: 'Manutenção Corretiva', icon: 'tools' },
        { id: 5, name: 'Manutenção Preventiva', icon: 'wrench' },
    ];

    const equipmentOptions = [
        { id: 1, name: 'Equipamento 1' },
        { id: 2, name: 'Equipamento 2' },
        { id: 3, name: 'Equipamento 3' },
    ];

    const farmOptions = [
        { id: 1, name: 'Fazenda 1' },
        { id: 2, name: 'Fazenda 2' },
        { id: 3, name: 'Fazenda 3' },
    ];

    const fieldOptions = [
        { id: 1, name: 'Talhão 1' },
        { id: 2, name: 'Talhão 2' },
        { id: 3, name: 'Talhão 3' },
    ];

    // useEffect(() => {
    //     // Obtenha os recursos ao carregar a tela
    //     const fetchResources = async () => {
    //         try {
    //             const resources = await getResources();
    //             const equipmentOptions = resources.machineries.map((machine: any) => ({
    //                 id: machine.id,
    //                 name: machine.name,
    //             }));
    //             const farmOptions = resources.farms.map((farm: any) => ({
    //                 id: farm.id,
    //                 name: farm.name,
    //             }));
    //             const reasonOptions = resources.reasons.map((reason: any) => ({
    //                 id: reason.id,
    //                 name: reason.name,
    //             }));
    //             setSelectedEquipment(equipmentOptions[0]);
    //             setSelectedFarm(farmOptions[0]);
    //             setSelectedField(farmOptions[0].fields[0]);
    //             setSelectedItemList(reasonOptions[0]);
    //         } catch (error) {
    //             console.error('Erro ao obter recursos:', error);
    //         }
    //     };

    //     fetchResources();
    // }, []);

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <TouchableOpacity onPress={handleGoBack}>
                        <Ionicons name={'arrow-back'} size={24} color="green" />
                    </TouchableOpacity>
                    <Text style={styles.headerText}>Registro de Parada</Text>
                </View>

                <View style={styles.contentPicker}>
                    <CustomPicker
                        label="Equipamento"
                        selectedValue={selectedEquipment}
                        onValueChange={(itemValue: any) => setSelectedEquipment(itemValue)}
                        options={equipmentOptions}
                    />
                </View>

                <View style={styles.doublePickerContainer}>
                    <View style={styles.doublePicker}>
                        <CustomPicker
                            label="Fazenda"
                            selectedValue={selectedFarm}
                            onValueChange={(itemValue: any) => setSelectedFarm(itemValue)}
                            options={farmOptions}
                        />
                    </View>
                    <View style={styles.doublePickerTalhao}>
                        <CustomPicker
                            label="Talhão"
                            selectedValue={selectedField}
                            onValueChange={(itemValue: any) => setSelectedField(itemValue)}
                            options={fieldOptions}
                        />
                    </View>
                </View>

                <View style={styles.contentList}>
                    <CustomList
                        title="Motivo da parada"
                        items={itemList}
                        selected={selectedItemList}
                        onSelect={(item: any) => setSelectedItemList(item)}
                    />
                </View>

                <View style={styles.contentList}>
                    <CustomTextComponent
                        title="Nota de Parada"
                        value={texto}
                        onChangeText={(novoTexto: any) => setTexto(novoTexto)} />
                </View>

                <View style={styles.buttonContainer}>
                    <CustomListButton
                        label="- 10 Min"
                        color="orange"
                        onPress={subtract10Minutes}
                    />
                    <CustomListButton
                        label="+ 10 Min"
                        color="orange"
                        onPress={add10Minutes}
                    />
                    <CustomListButton
                        label="Salvar"
                        color="green"
                        onPress={saveStop}
                    />
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        padding: 8,
        top: 50,
        alignItems: 'center',
        marginBottom: 20
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
        marginRight: 80,
    },
    headerText: {
        marginLeft: 70,
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    greenText: {
        color: 'green',
        fontWeight: 'bold',
        marginRight: 10,
    },
    contentPicker: {
        width: "100%",
        // padding: 8,
    },
    doublePickerContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        gap: 50,
    },
    doublePicker: {
        width: '50%'
    },
    doublePickerTalhao: {
        width: '30%'
    },
    contentList: {
        width: '100%',
        marginBottom: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        gap: 20,
        height: 100,
    },
});

export default HomeScreen;
