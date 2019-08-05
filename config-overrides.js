
// const { override, useBabelRc } = require('customize-cra');
const { override, addBabelPlugin } = require('customize-cra');

module.exports = override(
    // useBabelRc(),
    addBabelPlugin(['@babel/plugin-transform-typescript', { allowNamespaces: true }]),
);
// module.exports = (config) => config;

// module.exports = (config) => {
//     const newConfig = override(addBabelPlugin('@babel/plugin-transform-typescript'))(config);
//     // console.log(newConfig.plugins);

//     return newConfig;
// };
