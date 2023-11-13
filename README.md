<<<<<<< HEAD
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


To include branching from a repository and pushing code from a branch to the `main` branch (or another target branch), you can follow these extended steps:

**Pulling a Repository from GitHub:**

1. Follow the same initial steps as mentioned earlier to clone the repository from GitHub to your local machine.

**Creating a New Branch:**

1. Open VSCode and navigate to the cloned repository.

2. Open the Source Control tab (Ctrl+Shift+G).

3. Click on the "Branches" button (the icon with a branch symbol).

4. Click the "Create new branch" button.

5. Enter a branch name (e.g., `my-feature-branch`) and press Enter. This creates a new branch based on the current state of the `main` branch.

**Switching to the New Branch:**

1. In the Source Control tab, click on the branch name at the bottom of the window.

2. Select the branch you just created (`my-feature-branch`).

3. VSCode will automatically switch your workspace to the new branch.

**Making and Committing Changes on the Branch:**

1. Make changes to your code as needed.

2. Stage and commit the changes using the Source Control tab as mentioned in the previous answer.

**Pushing Changes to GitHub:**

1. After committing your changes on the feature branch, you can push them to GitHub using the following steps:

   a. In the Source Control tab, click the three dots (ellipsis) icon (`...`) and select "Push" to push your changes to the remote repository.

   b. If prompted, authenticate with your GitHub credentials or personal access token.

**Creating a Pull Request (PR):**

1. Go to your GitHub repository in a web browser.

2. You should see a notification indicating that you recently pushed a branch (`my-feature-branch`). Click on it.

3. Click the "Compare & pull request" button next to your branch.

4. Review the changes and provide a title and description for your pull request.

5. Click the "Create pull request" button.

**Review and Merge the PR:**

1. Someone with the necessary permissions (possibly you if you own the repository) will need to review and merge the pull request on GitHub.

2. Once the PR is reviewed and approved, click the "Merge pull request" button.

3. Optionally, you can choose to delete the branch after merging.

**Updating the `main` Branch Locally:**

1. After the PR is merged on GitHub, switch back to the `main` branch locally in VSCode.

2. Pull the latest changes from the remote `main` branch by clicking the "Pull" button in the Source Control tab.

Now, your changes from the feature branch are merged into the `main` branch on GitHub and updated locally in your workspace. This workflow allows you to work on feature branches, collaborate with others, and integrate your changes into the main branch when they are ready.
=======
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
>>>>>>> DarraghsBranch
