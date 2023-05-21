const { Octokit } = require("@octokit/rest");

async function run() {
  try {
    const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

    const issueNumber = process.env.GITHUB_EVENT.issue.number;
    const commentBody = "Here's the meme image: ![Image](https://raw.githubusercontent.com/DahVik/SubTask3/main/$.\SubTask3\meme1.jpg)";

    await octokit.issues.createComment({
      owner: process.env.GITHUB_REPOSITORY_OWNER,
      repo: process.env.GITHUB_REPOSITORY,
      issue_number: issueNumber,
      body: commentBody,
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

run();
