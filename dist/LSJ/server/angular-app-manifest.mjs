
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/Home",
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-VGd_sXf0.js"
    ],
    "route": "/Home"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Dh2AXm7l.js"
    ],
    "route": "/OfertaAcademica"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DqPMUwl9.js"
    ],
    "route": "/Galeria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-1gdn0-Q-.js"
    ],
    "route": "/Contacto"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 8235, hash: 'f922101f4266f744ad4ec6ece5f69c279faf8a6cda7c811f66d6bca9ab79fb7d', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1049, hash: '1fed9483746cedb2ea50a1782ea8ac7a35b5e0a90aa462aa0ee4246ac7f8f359', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'Galeria/index.html': {size: 27610, hash: 'e14264691622ba472f6cfbd28651bb77450f2d90b1a0d83f28a11ec6f03f9638', text: () => import('./assets-chunks/Galeria_index_html.mjs').then(m => m.default)},
    'Home/index.html': {size: 36024, hash: 'e943848bb8b7638264f652fba86b88766ffa4d54709d40285ebd4c0364820ba5', text: () => import('./assets-chunks/Home_index_html.mjs').then(m => m.default)},
    'Contacto/index.html': {size: 29885, hash: '268df81871c7e6790135d57794c6cfecc330c52675ae153363b4db3fd5c99140', text: () => import('./assets-chunks/Contacto_index_html.mjs').then(m => m.default)},
    'OfertaAcademica/index.html': {size: 30317, hash: '7e0d34993cfc3d43787158cd73e61e6f1dde75c5c9370eacee4c560ccf6a825e', text: () => import('./assets-chunks/OfertaAcademica_index_html.mjs').then(m => m.default)},
    'styles-NJ4IHL3G.css': {size: 28810, hash: '8lLWr4teMSs', text: () => import('./assets-chunks/styles-NJ4IHL3G_css.mjs').then(m => m.default)}
  },
};
