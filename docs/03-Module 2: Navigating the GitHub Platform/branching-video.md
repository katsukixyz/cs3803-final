---
title: "Video: Checking out and Branching" 
sidebar_position: 4
---
### Video Tutorial on Branching and Merging

This section includes a video tutorial on how to effectively manage branches and merge them, which are crucial practices for collaborative development.

[![Branching and Merging Video](http://img.youtube.com/vi/oiuQdv_ekaU/0.jpg)](https://youtu.be/oiuQdv_ekaU)

Click to play the video.

### Description of the Video

The video explains:
- How to check out previous commits using a commit checksum.
- How to create branches, switch between them, and manage different lines of development.
- Techniques for merging branches together.


### Walkthrough
The following is a step by step walkthrough of the tutorial in the video. Please feel free to follow along for your own understanding.

First, let's walkthrough how we can check the state of our repository in previous commits. Before we check out an older commit, let's look at the current state of the repository using `git log`. The output shows that we have two commits in our commit history. We are resuming in the same state of the repository as we left it at the end of the previous video about making a commit. The `HEAD` pointer is on the commit at the top of the log and it is pointing to the main branch. This indicates that this commit is the latest commit on the main branch and that it is the commit that is currently checked out. 

If we list the contents of the repository using `ls` we can see that there are two files in the repository in our current commit. If we check the contents of the files, we can see that `anotherFile` is empty and `newFile` has text inside of it. Now let's check out an older commit using:
```bash
git checkout <commit-checksum>
```
The `git checkout` command allows us to checkout an older commit by providing the checksum of the commit that we want to go to. The checksum is listed next to the respective commit in the output of `git log`. We now get a message from Git that we switched to the commit that was specified. We can verify this using:
```bash
git branch
```
The `git branch` command tells us what branch we have checked out currently. Notice that the branch `main` is not highlighed and that the checksum of the commit that we checked out is highlighed instead. This indicates we succesfully checked out the commit and we essentially turned back time to the point where the repository was when this commit was made. 

The output also indicates that the `HEAD` pointer is detached and that we are in a detached head state. Normally `HEAD` points to a branch, but when `HEAD` points to an older commit, we say that it is in a detached head state because it does not belong to any branch and it is "detached" from all branches. This also means that any changes or commits made here are not retained since `HEAD` is detached and changes made in this state do not belong to any branch. This can again be verified by by running `git log`. The output shows that the `HEAD` pointer is on the older commit we have checked out, however `HEAD` is not referencing any branch.

Now let's check the contents of the repository in this commit. If we list the contents of the directory we see that there is only one file `newFile`. This file is also empty with no text inside of it. This was the state of the repository in this commit. Now let's get back to our `main` branch using:
```bash
git checkout main
```
We can verify we are on the `main` branch by running `git branch`. The output indicates that we are indeed back on the main branch. Additinally, running `git log` shows us that `HEAD` is on the latest commit checked out while also referencing the `main` branch.

Now, let's say we want to experiment with a new feature without interfering with the contents of the `main` branch. We can do this by using:
```bash
git checkout -b newFeature
```
When using the `-b` option with the `git checkout` command we are creating a new branch called `newFeature` and then checking it out. We can verify this by running `git branch`. The output shows that we are on a branch called `newFeature`. Now lets check the commit history on this branch using `git log`. Notice that the commit history on this branch is the same as the history on the `main` branch. The branch references for the `newFeature` branch and the `main` branch are on the same commit, and the `HEAD` pointer is  pointing to the `newFeature` branch reference. This indicates the latest commit on the `newFeature` and `main` branches it he same and that we currently have the `newFeature` branch checked out since this is the reference that the `HEAD` pointer is pointing to.

Now, lets make some changes on the `newFeature` branch. We will open the `anotherFile` file and add some text to it. Now let's save this change and then run `git status`. The output indicates that `anotherFile` has been modified and that it needs to be staged. We can stage and commit this file using a shortcut command:
```bash
git commit -am "commit message"
```
This command will add and commit the changes using one command. Now if we check the commit history using `git log`, we can see that there is a new commit with the branch reference for `newFeature` on it. Additinally, the `HEAD` pointer is pointing to the `newFeature` reference. Notice how the branch reference for `main` stayed on the previous commit. This indicates that the changes we made on this branch did not affect the `main` branch and remained isolated to the `newFeature` branch. We can verify this by going back to the main branch using:
```bash
git checkout main
```
If we run `git log` we can see that the `HEAD` pointer is pointing back at the `main` branch. `git branch` also indicates that we are back on the `main` branch. Now if we check the contents of the `anotherFile` file, it is empty just like how it was before. This is as expected since our commits on other branches do not affect the `main` branch. Now let's say we are satisfied with the changes on the `newFeature` branch and we want to merge the changes onto main. We can do this using the following command:
```bash
git merge newFeature
```
This command will move the branch reference for the `main` branch to the same commit as the `newFeature` branch which means that the changes we made in then `newFeature` branch are now integrated onto the `main` branch. We can verify this by checking the contents of `anotherFile`. Notice the text we added on the `newFeature` branch is no in this file. Let's also check the output of `git log`. We can see that the `HEAD` reference sill points to main which indicates we are currently still on the `main` branch. However, the branch reference for `main` and `newFeature` are now on the same commit. This indicates that the `main` branch and the `newFeature` branch are in sync with each other and are on the same commit. 
