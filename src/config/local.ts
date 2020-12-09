import { Configuration } from './model';


export const config: Configuration = {
  apiUrl: 'http://localhost:8080',
  authUrl: 'http://localhost:8081',
  clientId: 'clientId',
  clientSecret: 'clientSecret',
  carausel: [
    {
      title: 'Title',
      text: 'Text',
      imageUrl: '../assets/banner1.jpg'
    },
    {
      title: 'Title',
      text: 'Text',
      imageUrl: '../assets/baner2.jpg'
    }
  ],
  bannerUrl: ''
};
