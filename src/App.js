import React,{ Component } from 'react';
import Customer from './conponents/Customer'
import './App.css';

const customers = [
  {
    'id': '1',
    'image': 'https://placeimg.com/64/64/1',
    'name': '최민호',
    'birthday': '19851121',
    'gender': '남자',
    'job': '직장인'
  },
  {
    'id': '2',
    'image': 'https://placeimg.com/64/64/2',
    'name': '홍길동',
    'birthday': '16551121',
    'gender': '남자',
    'job': '서자'
  },
  {
    'id': '3',
    'image': 'https://placeimg.com/64/64/3',
    'name': '이순신',
    'birthday': '15551121',
    'gender': '남자',
    'job': '장군'
  }
]

class App extends Component {
  render(){
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
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}
              />
            )
          })
        }
      </div>
    );
  }
}

export default App;
