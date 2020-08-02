const chokidar = require('chokidar');
const { build } = require('esbuild')

chokidar.watch('src').on('all', (event, path) => {
  if (['add', 'change'].includes(event)) {
    console.log('build', path);
    build({
      entryPoints: [path],
      outdir: 'dist/src',
      minify: false,
      bundle: true,
    }).catch(() => process.exit(1))
  }
});