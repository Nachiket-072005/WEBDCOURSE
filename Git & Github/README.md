## Github Commands

### Configuring Git

    - git config --global user.name "My Name"
    - git config --global user.email "someone@gmail.com"
    - git config --list

1. `git init` -> Powers your folder to be managed by git, and initialises a new empty repository. It also creates a .git folder that has all the relevant logic to manage version of your project.

2.  `Working Area` -> There can be a bunch of files that are not currently handled by git. It means that changes or to be done in those files are not managed by git yet. A file which is in working area is considered to be not in thwe staging area. When we do `git status` and we see a bunch if `untracked files` then these are actully called to be in the working area.

3.  `Staging Area` -> What all files are going to be part  of the next version that we will create. This staging
area is the place where git knows what changes will be done from the last version to the next version.

4.  `Repository Area` -> This area actully contains the details of all you previous registered version. And the files in this area, git already manages them and knows their version history.

5.  `git add <files>` -> moves file from working area to staging area.

6.  `git rm --cached <files>` -> moves file back from staging area to working area.

7.  `commit` -> Commits is a particular version of the project. It captures a snapshot of the project's staged chages and creates a version out of it.

8.  `git commit -m "some message"` -> registers staging changes to a commit.

9.  `git log` -> list downs all the commits of the repository. If you want to exit out of git log prompt press `q`.

10. `git restore <files>` -> It removes all files changes from the staging area to be commited. This can be useful, if we did some dirty peace of code and now no more want it. Instead of deleting every change line by line, we can restore it or you can say restore last clean version of the file.

10. `git restore <files>` -> It removes all files changes from the staging area to be commited. This can be useful, if we did some dirty peace of code and now no more want it. Instead of deleting every change line by line, we can restore it or you can say restore last clean version of the file.

11. `git restore --staged <file>` -> it removes file from changes from staging area to the working area.
this only works if changes are in your staging area

12. Diff between git rm and git restore
ans: if you want to move the whole file back to the untracked state, then we do git rm, otherwise if we 
just want the changes to be moved in working area or staging area then we git restore.

13. `git diff commit1 commit2` -> gives the difference of all file changes between two commits.

14 `git commit -m "<your commit message>"` -> If we want to avoid opening a text editor like vim/nano to 
add commit message we can use this following command.

15. `git remote` -> list down all the remote connection names.

16. Remote connection -> It helps you to link two git repositories for uploading and downloading changes
from each otherwise.

17. `git remote add <name of remote> <link of the remote>` : this command helps us to add a new link to the
remote repo and give a name to it.

18.  `git remote rm <name of remote>` : this command deletes a remote connection.

19.  `git remote rename <oldname> <newname>` : this command remanes the remote connection.

**Note: The name of the remote connection is always used to establish communication between the repos.**

20. `git add <file1> <file2> <file3>`: this command will add multiple file changes together in the
staging area.

21. `git add .`: this command will add all files from working repo to staging area.

22. `git pull <remote name> <branch name>` : downloads latest changes from the branch of the mentioned remote in your local repo.

### Recommended practice to do

    - make changes
    - git add <file>
    - git commit 
    - git pull
    - git push 

23. `git clone <-some link->` : Cloning a repository on our local machine.

24. `git status` : display the state of the code.

25. `git push origin main` : Upload local repository content to remote repository.

26. `git remote -v` : To verify remote.

27. `git branch` : To checkout branch.

28. `git branch -M <-name of branch->` : To rename branch.

29. `git checkout <-branch name->` : To Navigate the other branch.

30. `git checkout -b <-branch name->` : To create new branch.

31.  `git branch -d <-branch name->` : To delete branch.

32. `git push --set-upstream origin feature` : Connect to origin branch.

33. `git diff <-branch name->` : To compare commits,branches,files & more.

34. `git merge <-branch name->` : To merge 2 branches.

35. Merge conflicts are a very common scenario merge conflicts can occur if multiple people try to make changes to the same file, and then collaborate.

### Fixing Mistakes

Case 1 : Staged Changes

1. `git reset <-file name->`: Only in one file.
2.  `git reset` : Multiple files.

Case 2 : Commited Changes(for one commit)

1. `git reset HEAD~1`

Case 3 : Commited Changes(for many commits)

1. `git reset <-commit hash->`: To show content after that commits.
2. `git reset --hard <-commit hash->`: Nothing to show content after that commits.

### What is forking?

- > A fork is a new repository that shares code and visibility settings with the oringinal **upstream** repository.
- > Fork is a rough copy of repository.