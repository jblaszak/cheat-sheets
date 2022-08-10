export const pageData = {
  pageTitle: "Git",
  pageInfo: `Git is a version history tool that lets you store/access/revert all changes and work with multiple branches of versions of
  code and merge them together.`,
  cheats: [
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
git push origin main`,
        },
      },
    ],
  ],
}
