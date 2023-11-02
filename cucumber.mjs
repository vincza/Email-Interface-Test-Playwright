const config = {
    format: [
        "progress-bar",
        "@cucumber/pretty-formatter",
        "html:cucumber-report.html"

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
    dryRun: false
    
};

export default config;