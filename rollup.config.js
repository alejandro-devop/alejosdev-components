import typescript from 'rollup-plugin-typescript2'
import pkg from './package.json' assert { type: 'json' }
import postcss from 'rollup-plugin-postcss'

export default {
    input: 'src/index.ts',
    output: [
        {
            file: pkg.main,
            format: 'es',
            sourcemap: true,
            strict: true
        }
    ],
    plugins: [
        typescript({
            tsconfigOverride: {
                exclude: ['**/__test__/', '**/*.test.ts']
            }
        }),
        postcss({
            extract: false,
            modules: true,
            use: ['sass']
        })
    ],
    external: [
        'react',
        'react-dom',
        'lodash',
        'moment',
        'classnames',
        '@fortawesome/fontawesome-svg-core',
        '@fortawesome/free-solid-svg-icons',
        '@fortawesome/react-fontawesome',
        '@fortawesome/react-fontawesome',
        'react-select',
        'react-datepicker',
        'react-datepicker/dist/react-datepicker.css'
    ]
}
