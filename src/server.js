import sirv from 'sirv';
import polka from 'polka';
import compression from 'compression';
import * as sapper from '@sapper/server';
import { apiUrl } from './config'

const { PORT, NODE_ENV, API_URL } = process.env;

const proxy = require('http-proxy-middleware');
const apiProxy = proxy('/api', { target: API_URL || apiUrl, changeOrigin: true });

const dev = NODE_ENV === 'development';
polka()
  .use(
    compression({ threshold: 0 }),
    sirv('static', { dev }),
    apiProxy,
    sapper.middleware()
  )
  .listen(PORT, err => {
    if (err) console.log('error', err);
  });
