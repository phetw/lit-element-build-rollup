import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';

export default {
	input: ['src/index.js'],
	output: {
		file: 'build/index.js',
		format: 'es',
	},
	plugins: [
		resolve(),
		babel({
			presets: [
				[
					'@babel/preset-env',
					{
						targets: {
							browsers: 'IE 11',
						},
					}
				]
			],
			plugins: [
				'@babel/plugin-proposal-class-properties',
				['@babel/proposal-decorators', { decoratorsBeforeExport: true }],
			]
		})
	]
};
