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
          originalPrice: 2813,
          bestPrice: 2599,
          imageUrl: productImg,
        },
        {
          id: 2,
          name: "Monitor LG 34' IPS, Ultra Wide, Full HD, HDMI, HDR 10, 95% sRGB, FreeSync, Ajuste de Altura, Preto - 34WP550",
          originalPrice: 3149,
          bestPrice: 2456,
          imageUrl: productImg,
        },
        {
          id: 3,
          name: "Monitor LED 27'' Gamer Curvo Samsung  1920 x 1080 FHD 240 Hz HDMI, DP, Gsync Série CRG50",
          originalPrice: 2813,
          bestPrice: 2599,
          imageUrl: productImg,
        },
        {
          id: 4,
          name: "Monitor LG 34' IPS, Ultra Wide, Full HD, HDMI, HDR 10, 95% sRGB, FreeSync, Ajuste de Altura, Preto - 34WP550",
          originalPrice: 3149,
          bestPrice: 2456,
          imageUrl: productImg,
        },
        {
          id: 5,
          name: "Monitor LED 27'' Gamer Curvo Samsung  1920 x 1080 FHD 240 Hz HDMI, DP, Gsync Série CRG50",
          originalPrice: 2813,
          bestPrice: 2599,
          imageUrl: productImg,
        },
        {
          id: 6,
          name: "Monitor LG 34' IPS, Ultra Wide, Full HD, HDMI, HDR 10, 95% sRGB, FreeSync, Ajuste de Altura, Preto - 34WP550",
          originalPrice: 3149,
          bestPrice: 2456,
          imageUrl: productImg,
        },
        {
          id: 7,
          name: "Monitor LED 27'' Gamer Curvo Samsung  1920 x 1080 FHD 240 Hz HDMI, DP, Gsync Série CRG50",
          originalPrice: 2813,
          bestPrice: 2599,
          imageUrl: productImg,
        },
        {
          id: 8,
          name: "Monitor LG 34' IPS, Ultra Wide, Full HD, HDMI, HDR 10, 95% sRGB, FreeSync, Ajuste de Altura, Preto - 34WP550",
          originalPrice: 3149,
          bestPrice: 2456,
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
