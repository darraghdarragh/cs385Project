# cs385Project
Group Project


To pull a repository from GitHub and push code to it using Visual Studio Code (VSCode), you'll need to follow these steps:

**Prerequisites:**
1. Install Visual Studio Code: If you haven't already, download and install Visual Studio Code from the official website: https://code.visualstudio.com/

2. Install Git: Make sure Git is installed on your computer. You can download it from https://git-scm.com/ and follow the installation instructions for your specific operating system.

3. GitHub Account: You need a GitHub account and a repository on GitHub where you want to push your code.

**Pulling a Repository from GitHub:**

1. Open VSCode: Launch Visual Studio Code.

2. Open the Command Palette: You can do this by pressing `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (macOS).

3. Type "Git: Clone" and select it from the dropdown list.

4. Enter the Repository URL: You'll be prompted to enter the URL of the GitHub repository you want to clone. This URL should be in the format: `https://github.com/username/repository-name.git`

5. Choose a Directory: Select a local directory where you want to clone the repository. VSCode will create a folder with the repository name in the selected directory.

6. Authenticate (if required): If the repository is private and requires authentication, you will be prompted to enter your GitHub username and password or use a personal access token.

7. Open the Repository: Once the repository is cloned, it will automatically open in VSCode.

**Pushing Code to the Repository:**

1. Make Changes: Edit or add files in the repository as needed.

2. Stage Changes: In the Source Control tab (Ctrl+Shift+G), you'll see a list of changes you've made. Click the "+" icon next to the files you want to stage for the commit.

3. Commit Changes: Enter a commit message in the text field at the top of the Source Control tab and click the checkmark icon to commit your changes.

4. Push Changes: After committing, click the three dots (ellipsis) icon (`...`) in the Source Control tab and select "Push" to push your changes to the GitHub repository.

5. Authenticate (if required): If prompted, enter your GitHub credentials or use a personal access token to push changes.

Your code changes should now be pushed to the GitHub repository.

Remember to configure your Git username and email in VSCode if you haven't already using the following commands in the integrated terminal:

```bash
git config --global user.name "Your Name"
git config --global user.email "youremail@example.com"
```

Replace "Your Name" and "youremail@example.com" with your actual name and email address. This information is used for your Git commits.
