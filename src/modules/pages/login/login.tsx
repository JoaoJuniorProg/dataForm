import React, { useState } from 'react';
import { Image, Text, TextInput, View } from 'react-native';
import axios from 'axios'; // Importe o Axios
import Button from '../../../shared/components/Button';
import Input from '../../../shared/components/Input';
import { styles } from './initial-login.styles';
import { client } from '../../../shared/clients/axios';
import { useNavigation } from '@react-navigation/native';
import InputCustom from '../../../shared/components/Input';
import CustomButton from '../../../shared/components/Button';
import { useAuth } from '../../../shared/providers/AuthToken';

const InitialLogin: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigation = useNavigation<any>();
  const { setAuthToken } = useAuth();

  const handleLogin = async () => {
    setLoading(true);
    setError('');

    try {
      const response = await client.post('https://job.minhafazenda.ag/api/auth/v2', {
        email: email,
        senha: password,
        idPartner: 372
      }, {
        headers: {
          'Content-Type': 'application/json',
          Accept: '*/*',
        },
      });
      setLoading(false);

      if (response.data.data.token) {
        const token = response.data.data.token;
        console.log('Token:', token);
        setAuthToken(token);
        navigation.navigate('HomeScreen', { authToken: token });
      } else {
        setError('Credenciais inválidas');
      }
    } catch (error) {
      setLoading(false);
      setError('Erro ao realizar o login');
      console.error('Erro:', error);
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <Image source={require('../../../../assets/project/assets/logo.png')} style={styles.logo} />
      </View>

      <View style={styles.containerTitle}>
        <Text style={styles.titleLogin}>Login</Text>
        <Text style={styles.subtitle}>Acesse o aplicativo</Text>
      </View>
      <InputCustom title="Email" value={email} onChangeText={setEmail} />
      <InputCustom title="Senha" secureTextEntry value={password} onChangeText={setPassword} />
      <CustomButton onPress={handleLogin} disabled={loading}>
        {loading ? 'Carregando...' : 'Entrar'}
      </CustomButton>
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </View>
  );
};

export { InitialLogin };
