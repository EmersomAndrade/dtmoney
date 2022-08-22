import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';
import { App } from './App';
import React from 'react';


createServer({

  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freelance de website',
          type: 'deposit',
          category: 'Dev',
          amount: 2000,
          createdAt: new Date('2021-02-12 09:00:00'),
        },
        {
          id: 2,
          title: 'Aluguel',
          type: 'withdraw',
          category: 'Despesas',
          amount: 500,
          createdAt: new Date('2021-02-06 19:00:00'),
        },
        {
          id: 3,
          title: 'Feira',
          type: 'withdraw',
          category: 'Despesas',
          amount: 600,
          createdAt: new Date('2021-03-26 08:30:00'),
        },
      ]
    })
  },

  routes(){
    this.namespace = 'api';

    this.get('transaction', () => {
      return this.schema.all('transaction');
    })

    this.post('/transaction', (schema, request) => {
      const data = JSON.parse(request.requestBody)
      return schema.create('transaction', data);
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);