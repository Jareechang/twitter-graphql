const config = require('@common-web/esbuild');
const esbuild = require('esbuild');
const path = require('path');
const copyFiles = require('../scripts/copy-files');
const packageJson = require('../package.json');

module.exports = function buildClient() {
  return esbuild.build(config.getBaseConfig({
    entryPoints: ['./src/client/index.tsx'],
    tsconfig: './src/client/tsconfig.json',
    bundle: true,
    platform: 'browser',
    format: 'iife',
    /*
     * Modern browser versions
     *
     * ⚠️ experimental build setup
     * **/
    target: ['chrome80', 'firefox80', 'edge90', 'safari14'],
    outfile: './dist/public/js/index.js',
    override: {
      loader: {
        '.graphql': 'text'
      }
    }
  }))
  .then(() => {
    console.log('Client Build finished');
  });
}
