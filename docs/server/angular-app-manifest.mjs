
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/sign-vocab-test/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/sign-vocab-test"
  }
],
  assets: {
    'index.csr.html': {size: 526, hash: '9298527dc11c6d2240be0a103d6f8bc7f0425806a242c5b8aee2061c93734b47', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1039, hash: 'dbad3ecf617b1832f7da9d12e877632a95bfc894d164bd7f86f1fe1a31df6689', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 2575, hash: '245bb2972685ed29d9a4b4ad1ff66e9df76a6ddc435df4b90ca2e22d5c72324f', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
