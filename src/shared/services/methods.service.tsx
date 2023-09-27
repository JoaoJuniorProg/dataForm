import axios from 'axios';
import { setDefaultToken } from '../clients/axios';

const BASE_URL = 'https://job.minhafazenda.ag/mobile/machine';

// Função para obter recursos
export const getResources = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/resources`);
    return response.data.resources;
  } catch (error) {
    console.error('Erro ao obter recursos:', error);
    throw error;
  }
};


//salvar uma parada
export const saveStopData = async (data: any, token: any) => {
  try {
    const headers = {
      Authorization: `Bearer ${token}`,
      
    };
    console.log("TOKEN", token);
    const response = await axios.post(BASE_URL + '/stop-register/registry', data, { headers });
    return response.data;
  } catch (error) {
    console.error('Erro ao obter recursos:', error);
    throw error;
  }
};

