import express from 'express';
import sendEmail from './server/sendEmail.js';

const app = express();

app.use(express.static('dist'));

app.post('/contact', async (req, res) => {
  const sent = await sendEmail(req.body);
  if (send.messageId) {
    res.sendStatus(200);
  } else {
    res.sendStatus(500);
  }
})

app.listen(3000, () => {
  console.log('Listening on PORT 3000');
});