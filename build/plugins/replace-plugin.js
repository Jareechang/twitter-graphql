let replacePlugin = {
  name: 'replace-plugin',
  setup(build) {
    let fs = require('fs')
    let path = require('path');

    build.onResolve({ filter: /\@mui/ }, args => {
      if (args.path.match(/@mui\/styled-engine/)) {
        console.log(args);
        return { path: path.join(process.cwd(), 'node_modules', '@mui/styled-engine-sc', 'index.js') };
      }

      //path.join(args.resolveDir, args.path)
      //console.log(path.join(process.cwd(), 'node_modules', args.path, 'index.js'));
      return { path: path.join(process.cwd(), 'node_modules', args.path, 'index.js') };
    })

    //// Load ".txt" files and return an array of words
    //build.onResolve({ filter: /mui$/ }, async (args) => {
      //console.log(args)
      //let text = await fs.promises.readFile(args.path, 'utf8')
      //return {
        //contents: text,
        //loader: 'js',
      //}
    //})
  },
}

module.exports = replacePlugin;
