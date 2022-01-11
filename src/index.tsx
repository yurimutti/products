import React from 'react';
import ReactDOM from 'react-dom';
import { createServer } from 'miragejs'
import { App } from './App';
import productImg from './assets/product.png'

createServer({
  routes(){
    this.namespace = 'api';

    this.get('/products', () => {
      return [
        {
          id: 1,
          name: "Monitor LED 27'' Gamer Curvo Samsung  1920 x 1080 FHD 240 Hz HDMI, DP, Gsync Série CRG50",
          originalPrice: 281399,
          bestPrice: 259900,
          imageUrl: productImg,
        },
        {
          id: 2,
          name: "Monitor LG 34' IPS, Ultra Wide, Full HD, HDMI, HDR 10, 95% sRGB, FreeSync, Ajuste de Altura, Preto - 34WP550",
          originalPrice: 314967,
          bestPrice: 245690,
          imageUrl: productImg,
        },
        {
          id: 1,
          name: "Monitor LED 27'' Gamer Curvo Samsung  1920 x 1080 FHD 240 Hz HDMI, DP, Gsync Série CRG50",
          originalPrice: 281399,
          bestPrice: 259900,
          imageUrl: productImg,
        },
        {
          id: 2,
          name: "Monitor LG 34' IPS, Ultra Wide, Full HD, HDMI, HDR 10, 95% sRGB, FreeSync, Ajuste de Altura, Preto - 34WP550",
          originalPrice: 314967,
          bestPrice: 245690,
          imageUrl: productImg,
        },
        {
          id: 1,
          name: "Monitor LED 27'' Gamer Curvo Samsung  1920 x 1080 FHD 240 Hz HDMI, DP, Gsync Série CRG50",
          originalPrice: 281399,
          bestPrice: 259900,
          imageUrl: productImg,
        },
        {
          id: 2,
          name: "Monitor LG 34' IPS, Ultra Wide, Full HD, HDMI, HDR 10, 95% sRGB, FreeSync, Ajuste de Altura, Preto - 34WP550",
          originalPrice: 314967,
          bestPrice: 245690,
          imageUrl: productImg,
        },
        {
          id: 1,
          name: "Monitor LED 27'' Gamer Curvo Samsung  1920 x 1080 FHD 240 Hz HDMI, DP, Gsync Série CRG50",
          originalPrice: 281399,
          bestPrice: 259900,
          imageUrl: productImg,
        },
        {
          id: 2,
          name: "Monitor LG 34' IPS, Ultra Wide, Full HD, HDMI, HDR 10, 95% sRGB, FreeSync, Ajuste de Altura, Preto - 34WP550",
          originalPrice: 314967,
          bestPrice: 245690,
          imageUrl: productImg,
        },
      ]
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
