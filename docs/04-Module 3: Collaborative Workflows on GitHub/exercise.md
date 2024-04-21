---
title: GitHub Walkthrough Exercise
sidebar_position: 8
---

# GitHub: Hands-On Exercise

This interactive exercise is for you to practice your skills in working with open-source projects on GitHub. You will fork a repository, clone it, make changes, and finally submit a pull request.

## Step-by-Step Instructions

### Step 1: Fork the Repository

- Go to the following repository: [AaditT/cs3803-example-project](https://github.com/AaditT/cs3803-example-project)
- Click on the "Fork" button in the top right corner. This will create a copy of the repository under your account.

### Step 2: Clone the Forked Repository

- Open your terminal or command prompt.
- Clone the forked repository by running:
```bash
  git clone https://github.com/your-username/cs3803-example-project.git
```

## Step 3: Add Changes

- Open the project in a code editor of your choice. We recommend using [VSCode](https://code.visualstudio.com/).
- Make some changes to the project. This could be any change for the sake of this tutorial (i.e. creating a file or modifying a line in an existing file). This is your contribution to the open-source repository `AaditT/cs3803-example-project`
- Save your changes.

## Step 4: Commit and Push Changes

- Stage your changes for commit:

  ```bash
  git add .
  git commit -m "your commit message"
  git push
  ```

## Step 5: Create a Pull Request

- Go to your forked repository on GitHub
- Click on the "Compare & pull request" button at the top of the page.
- Create your pull request with a meaningful title and description as needed.
- Click "Create pull request"
- Now, wait for your contribution to be reviewed and hopefully approved.

**Congrats!** You are now one step closer to becoming an open-source warrior!

### Video Solution

<video width="100%" height="100%" controls>
  <source src="/img/walkthrough-demo-1.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>