---
title: What is version control?
sidebar_position: 3
---

# What is version control?

As discussed in the overview of this module, version control refers to the practice of tracking changes in your files and the content of your files. Let us revisit a more pertinent analogy to explain further. Looking at a document editor, like Google Docs or Microsoft Word, it is helpful for us to be able to see our previous changes so that we can revert back to the original state or see when, where, and why we made certain changes.

![Version Control](https://miro.medium.com/v2/resize:fit:1020/1*S5psRAN8Zf16VeSzIibioQ.png)

Similarly, in software development, we want the same benefits as well. It is useful to know which changes occurred at which points to be able to diagnose bugs, investigate security vulnerabilities, and revert code changes if needed. Tracking these changes are especially important when working in large teams in software engineering. This is because with more people working on the same codebase, there are more changes to the code happening all at once. When we need to combine everyone's changes together, it is imperative that everyone knows which changes must stay to make sure the existing functionality does not break, and the new code changes are implemented correctly. In other words, we need a system to establish a consistent structure for documenting our code changes and be deliberate about our code changes.

### Critical concepts in version control

Clearly, there are benefits with tracking chnages using version control software. Recapping what we've discussed, it simplifies working with other developers, it helps us debug issues, identify broken dependencies, etc. But exactly how does version control software accomplish these? There are two central concepts that allow version control software to do so.

#### Commits

![Commit](/img/commit_mod1.png)

In its most basic sense, a commit in version control describes the state of your files and code at a specific point in time. Each commit is marked with a hash (a unique identifier corresponding to the changes you made) and a timestamp of when the commit occurred. Version control software allows you, the user, to determine when these **checkpoints** occur through a manual process. This is a departure from what we have analogized in the past – Google Docs and Microsoft Word's history tracking – as these processes are automatic (auto-saving), whereas version control commits are not. You, the user, are responsible for creating the commits. Commits represent the building block of version control. Computing the differences, or _diffs_, between commits, are used to identify changes that have occurred since a certain point, and we can revert back to certain commits. Essentially, every significant change or update to the code should be linked to a commit so that updates to it can be documented by the version control software.

#### Branching and merging

![Branching](https://www.nobledesktop.com/image/gitresources/git-branches-merge.png)

A branch in version control can be described as a separate, independent _version_ of an existing version of code. Imagine that you are an engineer at Google and are currently looking at the production codebase for the homepage [google.com](http://google.com). Now imagine that you want to make edits to the styling of the homepage without affecting the production codebase – you want to make sure it works correctly on many other machines before everyone in the world sees it. In this scenario, you would want to create another branch, or version, of the production codebase so that it is independent from the production version. This concept is known as branching. Once you have made a separate branch, any and all commits that you make to that branch are completely independent from any other versions. This is a critical feature of version control as it allows every developer to work independently of one another without overriding each other's changes.

The second component to the concept of branching is the notion of **merging**. Merging is when you combing a version, or branch of the codebase with another. In our scenario, imagine that you have successfully tested your new styling changes to the [google.com](google.com) homepage, and you are ready for everyone in the world to be able to see it. Merging your existing branch, which was independent of the production branch, back into the production branch means that your changes would be inherited onto the production branch, effectively update it so that it reflects the changes that you made. In other words, branching is the practice of making development indpendent and self-contained, and merging is the practice of combining new changes to the codebase in a systematic way. Merging is typically used when engineers are done working on their separate features and bring it back into the original codebase so that it is integrated again with everyone else's changes that have occurred since they made their own independent branch.
