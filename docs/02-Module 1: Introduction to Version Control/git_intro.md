---
title: Introduction to Git
sidebar_position: 4
---

# Introduction to Git

In the previous section, we laid out the foundation for version control software by talking about the central concepts of _commits_, _branching_, and _merging_. In this lesson, we will go over how Git implements these concepts as a precursor to learning the commands that will back these actions. In addition, we will also discuss how Git is set up in software development projects as well as the basics of how it works to give you enough background to propel your understanding. Let's get started.

### A brief history of Git

![Git logo](https://git-scm.com/images/logo@2x.png)

Git was developed in 2005 by Linus Torvalds, a name you may be familiar with if you have dabbled in the Linux ecosystem. He is responsible for creating the Linux kernel and has made significant contributions to the open-source software community. Git was developed to address three major issues in source-control management at the time of its creation:

1. Efficient scalability
2. Support for distributed workflows
3. Protect against malicious or unintended corruption

Version control software at the time struggled to meet these three criteria, leading to the development of Git.

### How Git works

To explain how Git works at a high level, let us first explain the concept of a repository. In order for Git to operate, it must be _initialized_ in a Git repository, which is the folder `/.git` that holds relevant metadata about the project and its version changes. This `/.git` directory holds subdirectories such as `objects`, `refs/heads`, `refs/tags`, which are important for tracking how your code changes over time. As long as a project you are working in has a `/.git` directory already initialized, you can use Git to manage its versions!

Setting up a new repository, if not initialized already, is as simple as running `git init` in the command line. This will initialize an empty Git repository for you to start using Git. Let us dive deeper into how Git implements the concepts we discussed in the previous lesson.

Making commits, branching, and merging are all core parts of the Git workflows in software engineering. Git keeps a record of the changes you make via commits, and any branches and merges that come as a result are properly stored in the `/.git` directory, without you having to do any additional work to keep that data stored. We should note that Git is primarily a tool interfaced via the command line. As a side note, running `git --help` will provide you with a list of commands that Git supports, and you can also reference the official [documentation](https://git-scm.com/docs) to get a better understanding of its wide feature set. Commands like `git commit`, `git checkout`, etc. all serve to modify the Git repository (the `/.git` directory) on your behalf without requiring any manual intervention. Essentially, the commands serve as a consistent interface for you to interact with the version control software. This makes it easy for us to describe our operations in terms of commands instead of the exact changes that occur under-the-hood of Git.

As such, we will be referencing Git commands throughout the next modules to describe exactly how to use Git in your upcoming and existing technical projects to facilitate software development. Recap the learning from this lesson by watching the informative video below:

<iframe width="560" height="315" src="https://www.youtube.com/embed/hwP7WQkmECE?si=MbV-xhQI4AkrJwJ8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Now, you should understand at a high level how Git keeps track of your changes and how you can interact with Git through the command line. We'll delve deeper in Module 2 about specific Git commands that will help support you in your various use cases. Our next lesson in this module will discuss the difference between Git and GitHub.
