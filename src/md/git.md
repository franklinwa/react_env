# git分支查看及切换
##  1. 查看远程分支
### git branch -a

#### 带有“*”号的表示当前分支 
## 2. 查看本地分支
### git branch

## 3. 切换分支命令

### git checkout -b v1 origin/v1
## 切换回master
### git checkout master


# Git fetch和git pull的区别:
都可以从远程获取最新版本到本地
1.Git fetch:只是从远程获取最新版本到本地,不会merge(合并)
$:git fetch origin master   //从远程的origin的master主分支上获取最新版本到origin/master分支上
$:git log -p master..origin/master //比较本地的master分支和origin/master分支的区别
$:git merge origin/master          //合并
1
2
3
2.Git pull:从远程获取最新版本并merge(合并)到本地
$:git pull origin master  //相当于进行了 git fetch 和 git merge两部操作
1
实际工作中,可能git fetch更好一些, 因为在merge前,可以根据实际情况决定是否merge
再说导致报错:error: You have not concluded your merge (MERGE_HEAD exists).的原因可能是在以前pull下来的代码自动合并失败
解决办法一:保留本地的更改,中止合并->重新合并->重新拉取
$:git merge --abort
$:git reset --merge
$:git pull
1
2
3
解决办法二:舍弃本地代码,远端版本覆盖本地版本(慎重)
$:git fetch --all
$:git reset --hard origin/master
$:git fetch