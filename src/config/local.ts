import { Configuration } from './model';


export const config: Configuration = {
  apiUrl: 'http://localhost:8080',
  authUrl: 'http://localhost:8081',
  clientId: 'clientId',
  clientSecret: 'clientSecret',
  carausel: [
    {
      title: 'Compra Online',
      text: 'Pide en GTBuY',
      imageUrl: '../assets/img1.jpg'
    },
    {
      title: 'Proveedores',
      text: 'Productos guatemaltecos',
      imageUrl: '../assets/img2.jpg'
    },
    {
      title: 'Logistica',
      text: 'Nuestra logistica de entrea',
      imageUrl: '../assets/img3.jpg'
    }
  ],
  bannerUrl: ''
};
