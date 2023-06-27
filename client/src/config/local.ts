import { Configuration } from './model';


export const config: Configuration = {
  apiUrl: 'http://192.168.0.105:8080',
  authUrl: 'http://192.168.0.105:8081',
  clientId: 'test',
  clientSecret: 'test',
  carausel: [
    {
      title: 'Title',
      text: 'Text',
      imageUrl: './assets/Acer.jpg'
    },
    {
      title: 'Title',
      text: 'Text',
      imageUrl: 'https://res.cloudinary.com/keyist/image/upload/v1603226536/slider2_fmrxrd.jpg'
    },
    {
      title: 'Title',
      text: 'Text',
      imageUrl: 'https://res.cloudinary.com/keyist/image/upload/v1603226528/slider3_raakre.jpg'
    }
  ],
  bannerUrl: 'https://res.cloudinary.com/keyist/image/upload/v1603226633/hompage_banner-min_mjxymi.png'
};
