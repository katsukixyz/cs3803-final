---
title: "Video: How to make a Commit"
sidebar_position: 2
---
### Video Tutorial on Making a Commit

Watch this video tutorial to see how to make a commit and use `git status` and `git log` to check your repository's status and history.

[![Git Tutorial Video](http://img.youtube.com/vi/URL/0.jpg)](http://www.youtube.com/watch?v=URL)

### Description of the Video

This video explains:
- The process of making a commit
- How to effectively use `git status` to see changes staged for commit
- How to use `git log` to review your detailed commit history, which helps in understanding how Git tracks changes over time.

### Walkthrough
The following is a step by step walkthrough of the tutorial in the video. Please feel free to follow along for your own understanding.

To make a commit, we need to be inside of a Git repository. We can either clone a repository from GitHub or we can initialize a new one. For this exercise, lets initialize a new repository. First, create a new directory, change into the directory, and then initialize the directory as a git repo usihng the following commands:
```bash
mkdir <directory-name>
cd <directory-name>
git init .
```
You will now get a message from Git that the directory, has been successfully intialized as a Git repository. We can also verify this by listing the contents of the directory and seeing that the `.git` hidden directory is present in the newly initialized repository. 

Now since our repository is empty, let's create a file in the repository so that we can make a commit. We can use the following commands to create a new file and check the status of the repository:
```bash
touch newFile
git status
```
Using the above commands, we created a new file called `newFile` and then checked the status of the git repository. Notice that the output of the `git status` command indicates that `newFile` is untracked. This means that this file is not being tracked by Git. To ensure that the file is being tracked, we need to add it to the staging index. Use the following commands to add the file to the staging index and check the status of the repository again:
```bash
git add newFile
git status
```
Now the output of `git status` indicates that `newFile` is under the "changes to be committed" section. This indicates that the file has been successfully added to the staging index and that it will be added to the next commit. Now we can commit our changes. We have two options to commit our changes:
```bash
git commit
```
Running this command will open a text editor where you must enter a commit message and then save the commit message for the commit to actually occur. 
 ```bash
git commit -m "commit message"
```
This command is a shortcut where you can directly provide a commit message using the `-m` option so that you do not have to go into a text editor. 

Now after you have made a commit using one of the previous options, you can check the commit history using the following command:
```bash
git log
```
The `git log` command will output the full commit history of the repository. Since we only have one commit, you should see that commit along with its commit message and the checksum of the commit. 

Now, let's make some more changes and then commit them. Create a new file called `anotherFile` and then add some text to the `newFile` file. Now, running `git status` shows us that git is aware that `newFile` has been modified and that there is a new untracked file `anotherFile` in the repository. We want to add these two changes to the staging index to be committed. 
Initially we used `git add <file-name>` to add a file to the staging index. We can do this again for both of our files. However, a faster way to add all changes to the staging index is to provide a directory name as an argument to the `git add` command. This will add all changes in the provided directory to the staging index. Since we want to add all changes in the current directory to the staging index we can use the following command:
```bash
git add .
```
Now we can verify that all changes are added to the staging index by using `git status` once again. The output of `git status` now indicates that both of our changes are ready to be committed. Now, we can commit these changes using: 
```bash
git commit -m "commit message"
```
Finally, we can use `git log` to check our commit history. Notice that that the commit we just made is at the top of the list along with its commit message and checksum, succeeding the previous commit. 
