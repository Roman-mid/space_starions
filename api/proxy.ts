export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, jfwt');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  const { token, station = '', artifact = '', historic = 'false' } = req.query;

  if (typeof token !== 'string') {
    return res.status(400).json({ error: 'Missing or invalid token' });
  }

  const url = `https://api.jellyfaas.com/spacestation-cvm2ffq9io6g00dj7vpg-1-s?station=${station}&artifact=${artifact}&historic=${historic}`;

  try {
    const response = await fetch(url, {
      headers: { jfwt: token },
    });

    const data = await response.json();
    res.status(response.status).json(data);
    // eslint-disable-next-line
  } catch (err: any) {
    res
      .status(500)
      .json({ error: 'Internal Server Error', message: err.message });
  }
}
