# Rebasing 

There are times when you may want to merge, but experience a merge conflict and need to work independently to decide which changes to accept. Or other times when you want to import changes from another branch into your branch, but include your own changes. For these times, you can use Git rebase!
&nbsp;

## What is Rebasing?

A git rebase updates your branch with the contents of another branch. Rebasing can help determine that changes in your branch won't conflict with changes in the branch you want to merge to (usually your project's master branch).

&nbsp;

## How does Rebasing work?

Rebasing brings commits from your target branch into your working branch. It then applies all commits from after the working branch was created ***after*** first importing commits from the target branch. In other words, it replays all your commits, but with the starting point being the branch you are rebasing onto. The image below provides a visualization of this process.

![Branch structure when rebasing](/img/rebase.png)
<small>Source: GitLab</small>

## Exercise

Let's take a look at a procedure for rebasing! Create a repository using what you know from earlier modules. Then, checkout a branch called experiment.

```
$ git checkout experiment
$ git rebase master
First, rewinding head to replay your work on top of it...
Applying: added staged command
```

Doing this will reset the master branch to the same commit you are on and then apply each change from experiment in turn on top of it.  

Since these two branches are now consistent, you can merge experiment into master as usual. 

```
$ git checkout master
$ git merge experiment
```

Now we've merged the two branches together without any merge conflicts!

## Warning: Don't mess up your branch history!

Rebasing is extrmely powerful. Please note that rebasing rewrites the commit history of your branch by importing commits from the target branch. If there are significant differences between the two, it can leave your branch in an hard to resolve merge conflict.  
Consider if you truly need to rebase. If not, simply pull your target branch, which prevents you from making another person's work on your branch unusable.