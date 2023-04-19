const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const CLIENT_ID = 'AR2Ev6o6_rH-r1xKXRYG4ohg2NIWq397YGDT6_AFknjm8B3tUDsJdDS-OF-UjizxHPSDasg_opp0Z8Cq';
const SECRET = 'EKPKUdRSHjSTUqFcjEu_6LTXTzGopB8b46Ej4E7GxUH6iMFLpNK1BjX2xSfyZH2vnysqOmwcnT4Dx89Y';
const PAYPAL_API = 'https://api-m.sandbox.paypal.com';

const createPayment = (req, res) => {
  if (req.method === 'GET') {
    res.send('Payment endpoint');
  } else if (req.method === 'POST') {
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
  }
};

module.exports = {
  createPayment
};
