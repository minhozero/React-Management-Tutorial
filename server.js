const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/api/customers', (req, res) => {
    res.send([
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
    );
});

app.listen(port, () => console.log(`Listening on port ${port}`));