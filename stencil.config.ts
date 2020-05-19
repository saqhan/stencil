import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'wibbitz',
  globalStyle: 'src/global/wibbitz.css',
  taskQueue: 'async',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ]
};
