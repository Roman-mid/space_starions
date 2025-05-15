export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, jfwt');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  const { station = '', artifact = '', historic = 'false' } = req.query;

  // const token = req.headers.jfwt;
  const token =
    'Yryr7KWg92Ms1B4Goqeuf-5R-dKBK4F3Obbb-fYSGTRTU6gLdLzG9rFjhE1BZNs7nHufxtjFcwXCUhtMbFgca0WReloJ1DZHj_hZigYtcF7x-SuZwUuvHIvqQMDgrG6JQ6NxCILAChdR_G6fy1Z9RzL_JcQoBDchXM9Cs5bAADq2Fjl--O4K0_4w4g-gPAPbwmHRHWDpUWwR7Ah0UdpCFiRkF3ssrhXI7k_C60kVU3IHXLWZ5EXAuS3MzHyE0ULV8tebADxH8qv6ni-rjAsiu2xt9T8w2lHtq2b_Px-U9_eEw4DoQGhMkO5IQAiMlVYnumwawDphfEp5yL5WgC8G88OHCM68AHEatCIZzcxTs6ffRGPa_yAXLMgs2CJYdERX2yX1Ut2CB7Q72yz8kHoMfoilZ90ECFPacUY4-j66I1nHnGBf4y39Yyg2swAG.Yryr7KWg92Ms1B4Goqeufw==';

  if (!token) {
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
