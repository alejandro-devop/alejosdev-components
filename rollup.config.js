import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json' assert { type: 'json' };

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
                exclude: ["**/__test__/", "**/*.test.ts"]
            }
        }),
    ],
    external: [
        'react', 
        'react-dom',
        'lodash',
        'moment'
    ]
};