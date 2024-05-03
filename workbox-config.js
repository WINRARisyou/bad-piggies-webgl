module.exports = {
	maximumFileSizeToCacheInBytes: 5000000000,
	globDirectory: 'bad-piggies-webgl/',
	globPatterns: [
		'**/*.{js,unityweb,json,html,unity3d,ico,old,png,css}'
	],
	swDest: 'bad-piggies-webgl/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};