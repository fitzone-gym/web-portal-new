import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8081/')
      .then(res => {
        setData(res.data);
      })
      .catch(err => {
        console.log('Error:', err);
      });
  }, []);

  return (
    <div>
      <h1>Trainers Data:</h1>
      <ul>
        {data.map(trainer => (
          <li key={trainer.id}>{trainer.name}</li>
        ))}
      </ul>
    </div>
  );
};
