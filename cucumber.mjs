const config = {
    format: [
        "@cucumber/pretty-formatter"
    ],
    paths: [
        "src/tests/features"
    ],
    require: [
        "src/tests/steps/*.ts",
        "src/tests/global.ts"
    ],
    requireModule: [
        "ts-node/register"
    ],
    dryRun: true
    
};

export default config;