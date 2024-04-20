---
title: GitHub Projects Exercise
sidebar_position: 8
---

# GitHub: Hands-On Exercise

This interactive exercise is designed to help you practice and enhance your skills in managing and contributing to open-source projects on GitHub. You will go through the process of forking a repository, cloning it, making changes, and submitting a pull request.

## What You'll Need

Before you start, ensure you have the following:
- A GitHub account.
- Git installed on your computer.
- Basic familiarity with Git commands.

### Exercise Overview

This exercise will involve the following steps:
1. Forking a repository.
2. Cloning the forked repository to your local machine.
3. Making changes to the repository.
4. Committing and pushing the changes.
5. Creating a pull request.

## Step-by-Step Instructions

### Step 1: Fork the Repository

- Go to the repository that we will be using for this exercise: [Sample Repository](https://github.com/sample/repo)
- Click on the "Fork" button in the top right corner of the page. This will create a copy of the repository in your own GitHub account.

### Step 2: Clone the Forked Repository

- Open your terminal or command prompt.
- Clone the forked repository by running:
```bash
  git clone https://github.com/your-username/repo.git
```

## Step 3: Make Changes

- Open the project in your code editor.
- Make some changes to the project. For example, add a new file or modify an existing one.
- Save your changes.

## Step 4: Commit and Push the Changes

- Stage your changes for commit:

  ```bash
  git add .
  git commit -m "Add my changes"
  git push origin master
  ```

## Step 5: Create a Pull Request

- Go to your fork on GitHub
- You'll often see "Compare & pull request" button. Click on it.
- Add a title and description for your pull request.
- Click "Create pull request"

### Video Solution

<video width="100%" height="100%" controls>
  <source src="/img/walkthrough-demo-1.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>