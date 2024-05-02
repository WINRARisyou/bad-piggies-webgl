module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{js,unityweb,json,html,unity3d,ico,old,png,css}'
	],
	swDest: './sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};