import axios from 'axios'
// import Constants from "expo-constants";

// const { manifest } = Constants;

// console.log(manifest)

const instance = axios.create({
    //baseURL: 'http://192.168.15.19:3333/api/',
    baseURL: 'https://doceencanto.blanes.dev.br/api/',
    timeout: 1000
});

export default instance