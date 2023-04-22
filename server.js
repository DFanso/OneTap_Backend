const express = require("express");
const connectDB = require("./db");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const userRouter = require("./routes/userRouter");
const staffRouter = require("./routes/staffRouter");
const timeTableRouter = require("./routes/timeTableRouter");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");
const paypalRouter = require('./routes/paypalRouter');
const cors = require('cors');

dotenv.config();
connectDB()

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); //To parse JSON Data
app.use(cors({
    origin: 'http://192.168.1.5:3000' // Replace this with the origin you want to allow
  }));
  

app.get("/", (req, res) => {
    res.send('API is running');
});

// PayPal Code Start
app.get('/create-payment', (req, res) => {
  // Replace with your PayPal client ID and secret
  const CLIENT_ID = 'AR2Ev6o6_rH-r1xKXRYG4ohg2NIWq397YGDT6_AFknjm8B3tUDsJdDS-OF-UjizxHPSDasg_opp0Z8Cq';
  const SECRET = 'EKPKUdRSHjSTUqFcjEu_6LTXTzGopB8b46Ej4E7GxUH6iMFLpNK1BjX2xSfyZH2vnysqOmwcnT4Dx89Y';
  const PAYPAL_API = 'https://api-m.sandbox.paypal.com';

  const auth = Buffer.from(`${CLIENT_ID}:${SECRET}`).toString('base64');

  const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Basic ${auth}`
  };

  const body = {
      intent: 'CAPTURE',
      purchase_units: [{
          amount: {
              currency_code: 'USD',
              value: '10.00'
          }
      }],
      application_context: {
          return_url: 'http://localhost:19006/success',
          cancel_url: 'http://localhost:19006/cancel'
      }
  };

  fetch(`${PAYPAL_API}/v2/checkout/orders`, {
      method: 'POST',
      headers,
      body: JSON.stringify(body)
  })
      .then(response => {
          if (!response.ok) {
              return response.text().then(text => {
                  throw new Error(`PayPal API error: ${text}`);
              });
          }
          return response.json();
      })
      .then(data => {
          const { id, links } = data;
          const approvalLink = links.find(link => link.rel === 'approve');
          res.json({ id, approvalLink: approvalLink.href });
      })
      .catch(err => {
          console.error(err);
          res.status(500).json({ error: err.message });
      });
});
// PayPal Code End

app.use('/api/user', userRouter)
app.use('/api/staff', staffRouter)
app.use('/api/time', timeTableRouter)



// Error
app.use(notFound)
app.use(errorHandler)

// Set the listening port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
