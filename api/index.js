const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({ origin: 'http://leejiwon-study-web.s3-website.ap-northeast-2.amazonaws.com' }));

app.get('/api/hello', (req, res) => {
  res.json({ message: 'hello from EC2' });
});

app.listen(3000, () => console.log('listening on 3000'));
