# Fast Forward and Merge  

A linear path of changes from branches means that each new branch is checked out from the previous one, had changes made to it, and is then checked out into a new branch.    
When you have a linear path of changes from the current branch to the target branch, it may seem like you need to merge the changes of each branch to its previous branch in turn. However, with fast forward merge, you can simplify this entire process by merging all the changes just once.
&nbsp;

## What is Fast Forward Merging?
Fast Forward Merging lets you condense multiple branch merges into just one, as long as no other changes have been made in between (linear path of changes). This can let you speed up your workflow and prevent your merge history from being cluttered with commits that do not reflect merging different features into the same branch.  
![alt text](/img/normalMerge.png)![alt text](/img/ffMerge.png)  
<small>Source: bogotobogo</small>  
To find out how to fast forward merge, watch the video ahead.
