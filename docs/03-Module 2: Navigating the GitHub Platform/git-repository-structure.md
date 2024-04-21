---
title: Git Repository Structure and the Three Trees
sidebar_position: 1
---

# Git Repository Structure and the Three Trees

## Overview of Git Repository Structure

A Git repository encompasses several components that work together to track the history of your project. Understanding this structure is crucial for mastering Git operations:

- **.git directory**: At the heart of your project is the `.git` directory. This hidden folder contains all the necessary metadata and objects that Git uses to track changes. It includes configuration files, branches, hooks, and objects like blobs (files), trees (directories), and commits.

- **Working Directory**: This is your current workspace. It's a checkout of one version of the project. Here, you can view and modify files.

- **Staging Area (Index)**: The staging area is where you prepare changes before committing them to your project history. It acts as a buffer between the working directory and the commit history.

- **Commit History**: The commit history is a complete record of all commits in the repository.

## The Three Trees of Git

Understanding the "three trees" of Git will help you grasp how Git manages your data:

1. **Working Directory**: Contains the actual files and their current content, which you edit.

2. **Staging Index**: Serves as an intermediate area where commits are prepared. The index compares the files in the working directory with the files in the commit history, allowing you to stage changes for the next commit.

3. **Commit History**: A chronological list of commits, which are snapshots of your repository at specific points in time. Each commit is linked back to its parent commit(s), forming the history of your project.

### How Git Tracks Changes

Git tracks changes by storing the state of a project at various points in time. When you commit, Git calculates the differences from the last commit and stores a snapshot of the current state of the index. If files have not changed, Git simply links to the existing data.

## Relevant Commands

Understanding how to use Git commands effectively is key to managing your repository:

- **`git add`**: This command adds changes from the working directory to the staging area. It's used to select exactly what you want to commit without committing all changes made in the working directory.

- **`git commit`**: Commits the staged changes to the repository's history. It creates a new commit containing the current contents of the index and a message from the user describing the changes.

- **`git status`**: Displays the state of the working directory and the staging area. It lets you see which changes have been staged, which haven't, and which files aren't being tracked by Git.

- **`git log`**: Shows the committed history, allowing you to see the sequence of commits including their messages, authors, and dates.

### Video Tutorial on Making a Commit

Watch this video tutorial to see how to make a commit and use `git status` and `git log` to check your repository's status and history.

[![Git Tutorial Video](http://img.youtube.com/vi/URL/0.jpg)](http://www.youtube.com/watch?v=URL)

### Description of the Video

This video tutorial will walk you through the process of making a commit, effectively using `git status` to see changes staged for commit, and using `git log` to review your detailed commit history, which helps in understanding how Git tracks changes over time.



