import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { METRICS } from '../design/metrics/metrics';
import { THEME } from '../design/themes/theme';

const CustomButton = ({ onPress }: any) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>Entrar</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: METRICS.width - 50,
    padding: METRICS.PADDING,
    backgroundColor: THEME.COLORS.POSITIVE[400],
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CustomButton;
