const presets = [
    [
        '@babel/preset-env',
        {
            modules: 'false',
            targets: {
                browsers: '> 1%, IE 11, not dead',
            },
        }
    ]
]

const plugins = [
    '@babel/plugin-proposal-class-properties',
    ['@babel/proposal-decorators', { decoratorsBeforeExport: true }],
]

module.exports = { presets, plugins }