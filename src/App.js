import './App.css';
import Customer from './components/Customer';
import React, { Component } from 'react';

const customers = [
{
  'id': 1,
  'image': 'https://placeimg.com/64/64/1',
  'name': 'name',
  'day': '890914',
  'gender': 'man',
  'job': 'progrem'
},
{
  'id': 2,
  'image': 'https://placeimg.com/64/64/2',
  'name': 'name1',
  'day': '860808',
  'gender': 'man',
  'job': 'not'
},
{
  'id': 3,
  'image': 'https://placeimg.com/64/64/3',
  'name': 'name2',
  'day': '091212',
  'gender': 'man',
  'job': 'student'
}
]

function App() {
  return (
    <div>
      {
        customers.map(c => {
          return (
          <Customer
          key={c.id}
          id={c.id}
          image={c.image}
          name={c.name}
          day={c.day}
          gender={c.gender}
          job={c.job}
          />
          );
        })
      }
    </div>
  );
}

export default App;
