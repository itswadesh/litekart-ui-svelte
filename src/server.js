import sirv from 'sirv';
import polka from 'polka';
import compression from 'compression';
import * as sapper from '@sapper/server';
import { apiUrl } from './config'
const dotenv = require('dotenv');
dotenv.config({ path: '.env' });
const { PORT, NODE_ENV, API_URL } = process.env;
const proxy = require('http-proxy-middleware');
const apiProxy = proxy('/api', { target: API_URL || apiUrl, changeOrigin: true });

const dev = NODE_ENV === 'development';
const app = polka()
  .use(
    compression({ threshold: 0 }),
    sirv('static', { dev }),
    apiProxy,
    sapper.middleware()
  )
app.listen(PORT, err => {
  if (err) console.log('error', err);
})

export default app.handler