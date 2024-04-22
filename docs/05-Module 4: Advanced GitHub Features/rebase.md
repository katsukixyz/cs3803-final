# Rebasing 

There are times when you may want to merge, but experience a merge conflict and need to work independently to decide which changes to accept. Or other times when you want to import changes from another branch into your branch, but include your own changes. For these times, you can use Git rebase!
&nbsp;

## What is Rebasing?

A git rebase updates your branch with the contents of another branch. Rebasing can help determine that changes in your branch won't conflict with changes in the branch you want to merge to (usually your project's master branch).

&nbsp;Follow the video on the next page to learn how to rebase!

## How does Rebasing work?

Rebasing brings commits from your target branch into your working branch. It then applies all commits from after the working branch was created ***after*** first importing commits from the target branch. The image below provides a visualization of this process.

![Branch structure when rebasing](/img/rebase.png)
<small>Source: GitLab</small>

## Warning: Don't mess up your branch history!

Rebasing is extrmely powerful. Please note that rebasing rewrites the commit history of your branch by importing commits from the target branch. If there are significant differences between the two, it can leave your branch in an hard to resolve merge conflict.  
Consider if you truly need to rebase. If not, simply pull your target branch, which prevents you from making another person's work on your branch unusable.