# mozjpeg-bin ![GitHub Actions Status](https://github.com/imagemin/mozjpeg-bin/workflows/test/badge.svg?branch=master)

> [mozjpeg](https://github.com/mozilla/mozjpeg) is a production-quality JPEG encoder that improves compression while maintaining compatibility with the vast majority of deployed decoders

You probably want [`imagemin-mozjpeg`](https://github.com/imagemin/imagemin-mozjpeg) instead.


## Install

```
$ npm install mozjpeg
```

### Downloading From a Custom Source
By default, this package will download mozjpeg from GitHub. To use a custom source, set the npm config property `imagemin_local_url`. The downloader will append `/<name>/<version>/vendor/<dist>`.

```
$ npm install mozjpeg --imagemin_local_url=https://mymirror.local/path
```

Or add property into your `.npmrc` file([https://docs.npmjs.com/files/npmrc](https://docs.npmjs.com/files/npmrc))

```
imagemin_local_url=https://mymirror.local/path
```

Another option is to use the environment variable `IMAGEMIN_LOCAL_URL`.

```
$ IMAGEMIN_LOCAL_URL=https://mymirror.local/path npm install mozjpeg
```


## Usage

```js
const {execFile} = require('child_process');
const mozjpeg = require('mozjpeg');

execFile(mozjpeg, ['-outfile', 'output.jpg', 'input.jpg'], err => {
	console.log('Image minified!');
});
```


## CLI

```
$ npm install --global mozjpeg
```

```
$ mozjpeg --help
```


## License

MIT © [Imagemin](https://github.com/imagemin)
