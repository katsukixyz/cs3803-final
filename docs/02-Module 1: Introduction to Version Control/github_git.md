---
title: How does GitHub differ from Git?
sidebar_position: 5
---

# How does GitHub differ from Git?

In the previous lessons, we talked about Git and how it addresses common use cases of version control – enabling the reversion of the codebase, effective, technical collaboration within software development teams, and diagnosing issues quicker. Now, we look to how projects using Git manifest in the current state of software engineering.

### What is GitHub?

You may have heard of GitHub before, perhaps even before you heard of Git. While GitHub contains a mountain of features relating to automation, project management, and collaborative environments, as we'll delve into later, its most central, core feature can be described as a _hub_, or manager, of Git repositories. What does this mean? 

![GitHub logo](https://github.blog/wp-content/uploads/2022/12/1200x640-1.png?fit=1200%2C640)

Git projects on their own are subdirectories inside of directories that keep track of the changes in the files on each individual system. In other words, they exist independently of one another. But what happens when we want to let others see our work or when we want to collaborate on our code with others? We cannot have the initialized Git repositories live entirely locally, otherwise no one would be able to see them.

Therein lies the fundamental purpose of GitHub, to act as a place to store projects that use Git for version control. GitHub allows users to have **remote** repositories (which we will discuss in later modules), which are repositories that are stored on the cloud. This remotely hosted repository acts as a source-of-truth for all developers working on a single project, making it possible for everyone to reference the remote repository as their North Star, instead of having to compare local Git repositories between each member of the team.

### The big picture

GitHub is not the only _hub_ for Git repositories! There are multiple other providers for hosting Git repositories on the cloud, like BitBucket, GitLab, and so on. Since a Git repository means the existence of a `/.git` directory, you could even make your own service for hosting the files, as long as the service allows you to see the contents of the `/.git` directory! This means that using and learning Git is highly valuable as the skill is transferable between many different services.

