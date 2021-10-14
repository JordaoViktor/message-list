import axios from "axios";
import { Platform } from 'react-native';

const host = Platform.OS === 'ios' ? 'localhost' :  '10.0.2.2';

const api = axios.create({
  baseURL: `http://${host}:3333`
});

export { api };