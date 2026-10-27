const express = require('express');
const app = express();

app.get('/api/hello', (req, res) => {
  res.json({ message: 'hello from EC2' });
});

app.listen(3000, () => console.log('listening on 3000'));
