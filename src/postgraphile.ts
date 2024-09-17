const { postgraphile } = require('postgraphile');

module.exports = postgraphile(
    "postgres://postgres:avatar007@localhost:5432/",
    "public",
    {
        watchPg: true,
        graphiql: true,
        enhanceGraphiql: true,
        dynamicJson: true,
        // disableDefaultMutations: true,
        appendPlugins: [],
    }
)
