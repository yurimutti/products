import React from 'react';
import ReactDOM from 'react-dom';
import { createServer } from 'miragejs'
import { App } from './App';

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
          imageUrl: "/static/media/product.39eeabcd8904e7821eb1.png",
        },
        {
          id: 2,
          name: "Monitor LED 27'' Gamer Curvo Samsung  1920 x 1080 FHD 240 Hz HDMI, DP, Gsync Série CRG50",
          originalPrice: 281399,
          bestPrice: 259900,
          imageUrl: "/static/media/product.39eeabcd8904e7821eb1.png",
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
