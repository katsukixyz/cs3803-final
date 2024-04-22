---
title: Git Repository Structure and the Three Trees
sidebar_position: 1
---

# Git Repository Structure
![branching-img](/static/img/commit.png)

## Overview of Git Repository Structure

A Git repository encompasses several components that work together to track the history of your project. Understanding this structure is crucial for mastering Git operations:

- **.git directory**: The `.git` is a hidden directory that contains all the necessary metadata and objects that Git uses to track changes. It includes configuration files, branches, hooks, and objects like blobs (files), trees (directories), and commits.

- **Working Directory**: This is your current workspace. It's a checkout of one version of the project and represents the state of all the files in the checked out version and their current content, which you edit.

- **Staging Index**: Serves as an intermediate area where commits are prepared. The index compares the files in the working directory with the files in the commit history, allowing you to stage changes for the next commit. The staging index acts as a buffer between the working directory and the commit history.

- **Commit History**: A chronological list of commits, which are snapshots of your repository at specific points in time. Each commit is linked back to its parent commit(s), forming the history of your project.

### How Git Tracks Changes

Git tracks changes by storing the state of a project at various points in time. When you commit, Git calculates the differences from the last commit and stores a snapshot of the current state of the index. If files have not changed, Git simply links to the existing data.

## Relevant Commands

Understanding how to use Git commands effectively is key to managing your repository:

- **`git add`**: This command adds changes from the working directory to the staging area. It's used to select exactly what you want to commit without committing all changes made in the working directory.

- **`git commit`**: This command commits the changes in the staging index to the repository's history. It creates a new commit containing the current contents of the staging index and a commit message from the user that describes the changes.

- **`git status`**: This command displays the state of the working directory and the staging index. It lets you see which changes have been staged, which haven't, and which files aren't being tracked by Git.

- **`git log`**: This command shows the commit history on the currently checked out branch. This enables you to see the sequence of commits including their messages, authors, dates, and checksums/hashes.





