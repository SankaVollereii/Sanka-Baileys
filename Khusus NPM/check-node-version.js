const requiredNodeVersion = 20;

const currentVersion = process.versions.node.split('.')[0];
if (parseInt(currentVersion) < requiredNodeVersion) {
    console.error(
        `Node.js version ${requiredNodeVersion} or higher is required. ` +
        `You are using Node.js version ${process.versions.node}.`
    );
    process.exit(1);
}
