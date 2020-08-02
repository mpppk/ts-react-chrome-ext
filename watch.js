const chokidar = require('chokidar');
const { build } = require('esbuild')
const shell = require('shelljs');

chokidar.watch('src').on('all', (event, path) => {
  if (['add', 'change'].includes(event)) {
    console.log('build', path);
    build({
      entryPoints: [path],
      outdir: 'dist/src',
      minify: false,
      bundle: true,
    }).catch(() => process.exit(1));
    shell.touch('dist/reload');
  }
});