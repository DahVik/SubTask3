const { Octokit } = require("@octokit/rest");

async function run() {
  try {
    const octokit = new Octokit();
    console.log(octokit);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

run();

