---
title: Branching in Git 
sidebar_position: 3
---
![branching-img](/static/img/branch.png)
# Branching in Git 

Branching allows for non linear development in Git and it allows developers to experiment, develop new features, fix bugs, or make any changes without affecting the main branch or any other branches within the same repo. This also allows other team members working on the same project to contribute and make changes by working on their own branch.

## Key Concepts

- **Branch**: A branch in Git represents an independent line of development with its own commit history.

- **`git branch`**: List all branches on the repository, and indicate currently checked out branch.
- **`git checkout`**: Switch between branches or checkout files or older commits.
- **`git merge`**: Merges branches together, effectively combining the commit histories of the branches. Git creates a new snapshot that results from this merge and automatically creates a new commit that points to it.
- **`HEAD`**: The `HEAD` pointer in Git points to the latest commit of the branch that is checked out in the repository. When you switch branches, the `HEAD` pointer moves to point at the tip (latest commit) of the new branch, effectively changing your working environment to reflect the state of that branch. 
- **`Detached HEAD State`**: Normally, `HEAD` points to the tip of a branch. However, if you checkout a specific commit that isn't the tip of a branch, `HEAD` will point directly to that commit rather than to a branch. This is known as a "detached `HEAD`" state, where changes you make will be from that specific commit’s history, and not attached to any branch. Creating a new commit in this state will leave the `HEAD` detached unless you create a new branch from it.

Branches are particularly useful for isolating work on a feature or a bug from the main working codebase.


