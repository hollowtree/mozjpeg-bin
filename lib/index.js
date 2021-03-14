'use strict';
const path = require('path');
const BinWrapper = require('bin-wrapper');
const pkg = require('../package.json');

const url_prefix = process.env.RAW_GITHUBUSERCONTENT_LOCAL_URL ||
	process.env.npm_config_imagemin_local_url ||
	process.env.IMAGEMIN_LOCAL_URL ||
	'https://raw.githubusercontent.com/imagemin';

const url = `${url_prefix}/mozjpeg-bin/v${pkg.version}/vendor/`;

module.exports = new BinWrapper()
	.src(`${url}macos/cjpeg`, 'darwin')
	.src(`${url}linux/cjpeg`, 'linux')
	.src(`${url}win/cjpeg.exe`, 'win32')
	.dest(path.join(__dirname, '../vendor'))
	.use(process.platform === 'win32' ? 'cjpeg.exe' : 'cjpeg');
