# Squash Merging

We've already talked about how to merge your changed code and files to a repository, but this can often complicte the commit tree and make it difficult to understand the changes to your file. 

Each time you commit code, you add a piece of information to the repository explaining what you built and how each piece of it was made. However, once you're done working on a particular feature or update, the Git history of the repository will still be filled with now-outdated minor commit information. Wouldn't it be great if you could combine your commits to clean up your merge history? Squashing can help with this!
&nbsp;  

## What is Squashing?  

When you Squash and Merge, you condense (or squash!) the entire commit history of the source branch into a single commit. This prevents cluttering of the main branch's commit history with small details about each commit in each branch. Usually, the source branch is deleted after squashing to make it clear that the feature is done being developed.  

![Squash and Merge Branch diagram.](/img/squash.png)  
<small>Source: Microsoft</small>
&nbsp; &nbsp;   
This lets your default branch retain a simple, clear, and linear commit history even as you create more features.