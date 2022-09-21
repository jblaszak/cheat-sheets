export const pageData = {
  pageTitle: "Git",
  pageInfo: `Git is a version history tool that lets you store/access/revert all changes and work with multiple branches of versions of
  code and merge them together.`,
  cheats: [
    [
      { h2: `Term Definitions` },
      {
        definitionList: [
          {
            title: `Commit`,
            definition: `A collection of changes that have been finalized are a ready to be published to the master copy of the repository.`,
          },
          {
            title: `Origin`,
            definition: `The URL of the repository.`,
          },
          {
            title: `Branch`,
            definition: `A branch represents an independent line of development in a repository.  It is a moveable pointer to the common commit 
            where it branched off of another branch, or the first commit if it is the main branch.`,
          },
        ],
      },
    ],
    [
      { h2: `Cloning a Repository` },
      {
        code: {
          language: `bash`,
          code: `git clone https://github.com/<REPOSITORY_USERNAME>/<REPOSITORY_NAME>`,
        },
      },
    ],
    [
      { h2: `Check Origins` },
      { p: `Tells you the repository that git will use to fetch/push.` },
      {
        code: {
          language: `bash`,
          code: `git remote - v`,
        },
      },
    ],
    [
      { h2: `Check Status` },
      {
        p: `Tells you which branch you are on and which files are ready to be committed.  Also tells you if your current branch is 
        ahead or behind of the remote branch.`,
      },
      {
        code: {
          language: `bash`,
          code: `git status`,
        },
      },
    ],
    [
      { h2: `Add/Stage Changes to Commit` },
      {
        p: `Filenames of the files containing changes must be staged for a commit. You are actually staging the changes to the 
        file, not the files themselves.  If you change a file after a previous stage and before and commit, you add the new 
        changes for the commit or they will not be in the commit.`,
      },
      {
        code: {
          language: `bash`,
          code: `git add <FILE_NAME> // adds specific file
git add . // adds all changed files in directory and sub-directories`,
        },
      },
    ],
    [
      { h2: `Remove Files From Staging for Commit` },
      {
        code: {
          language: `bash`,
          code: `git reset HEAD <FILE_NAME>`,
        },
      },
    ],
    [
      { h2: `Make a Commit` },
      {
        p: `When you make a commit you should add a short, descriptive comment describing the changes made in the commit.`,
      },
      {
        code: {
          language: `bash`,
          code: `git commit -m "my descriptive commit comment"`,
        },
      },
    ],
    [
      { h2: `Revert a Previous Commit` },
      {
        code: {
          language: `bash`,
          code: `git reset --soft HEAD~1`,
        },
      },
    ],
    [
      { h2: `Moving Changes From Local to Remote Repository` },
      {
        code: {
          language: `bash`,
          code: `git push`,
        },
      },
    ],
    [
      { h2: `Fetching Changes from Remote` },
      {
        p: `Grabs changes from the remote branch and updates your local branch.`,
      },
      {
        code: {
          language: `bash`,
          code: `git fetch`,
        },
      },
    ],
    [
      { h2: `Merging Changes` },
      {
        p: `Used to take changes from one branch and another branch and integrate them together. Doesn't really do much 
        for just a single branch.`,
      },
      {
        code: {
          language: `bash`,
          code: `git merge`,
        },
      },
    ],
    [
      { h2: `Fetching Changes from Remote and Merging Them` },
      {
        code: {
          language: `bash`,
          code: `git pull`,
        },
      },
    ],
    [
      { h2: `Get All Branches` },
      {
        p: `Shows which branch you are currently on (*), all local branches, and all remote branches.`,
      },
      {
        code: {
          language: `bash`,
          code: `git branch -a`,
        },
      },
    ],
    [
      { h2: `Create New Branch` },
      {
        code: {
          language: `bash`,
          code: `git branch <MY_BRANCH_NAME>`,
        },
      },
    ],
    [
      { h2: `Delete a Branch` },
      {
        code: {
          language: `bash`,
          code: `git branch -d <MY_BRANCH_NAME>`,
        },
      },
    ],
    [
      { h2: `Move to Different Branch` },
      {
        code: {
          language: `bash`,
          code: `git checkout <MY_BRANCH_NAME>`,
        },
      },
    ],
    [
      { h2: `Move to Specific Commit` },
      {
        p: `Makes your local repository look like the repository at a specific commit, uses the commit hash obtained from 
      the git logs.`,
      },
      {
        code: {
          language: `bash`,
          code: `git checkout <COMMIT_HASH>`,
        },
      },
    ],
    [
      { h2: `View Git Logs` },
      {
        p: `Ordered newest to oldest, contains date, author, commit message and commit hash.`,
      },
      {
        code: {
          language: `bash`,
          code: `git log  // gives long form output
git log --oneline // outputs shortform output, can still use the shortform hashes`,
        },
      },
    ],
    [
      { h2: `View Differences` },
      {
        p: `See which lines in which files have been changed.`,
      },
      {
        code: {
          language: `bash`,
          code: `git diff // shows changes not staged for current commit
git diff --cached // shows changes staged for current commit
git diff <COMMIT_HASH> // show cumulative changes since a specific commit`,
        },
      },
    ],
    [
      { h2: `Add Local Repository to Github` },
      {
        p: `First create a new repository on github. DO NOT initialize it with README, license, or gitignore files as this will cause errors!!!
        Then enter the following into a terminal.`,
      },
      {
        code: {
          language: `bash`,
          code: `# Initialize the directory as a git repository
git init -b main

# Add the files in the local repository and stage them for commit.
git add .

# Make the commit
git commit -m "First commit!"

# Set the remote origin (example URL: https://github.com/MY_ACCOUNT/my-repository.git)
git remote add origin <REMOTE_URL>

# Verify the new remote URL
git remote -v

# Push the changes in your local repository to github
git push --set-upstream origin main`,
        },
      },
    ],
  ],
}
