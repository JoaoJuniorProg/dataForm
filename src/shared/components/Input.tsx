import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { METRICS } from '../design/metrics/metrics';
import { THEME } from '../design/themes/theme';
import { Ionicons } from '@expo/vector-icons';


const InputCustom = ({ label, secureTextEntry, title, value, onChangeText }: any) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{title}</Text>
      <View style={styles.inputContainer}>
        {/* <Text style={styles.label}>{label}</Text> */}
        <TextInput
          style={styles.input}
          secureTextEntry={secureTextEntry && !showPassword}
          autoCapitalize="none"
          textAlign='left'
          value={value}
          onChangeText={onChangeText} 
        />
        {secureTextEntry && (
          <TouchableOpacity onPress={togglePasswordVisibility}>
            <Ionicons
              name={showPassword ? 'eye' : 'eye-off'}
              size={24}
              color="gray"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: METRICS.width,
    padding: METRICS.PADDING *2,
    marginBottom: 20,
    marginTop: - 30,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: THEME.COLORS.POSITIVE[400]
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'gray',
  },
  label: {
    flex: 1,
    fontSize: 16,
    marginRight: 5,
  },
  input: {
    flex: 1,
    padding: 5,
  },
});

export default InputCustom;
