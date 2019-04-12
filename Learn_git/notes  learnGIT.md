- git命令
 git init    git接管项目           创建隐藏目录保存不同版本的项目
 git add 文件名.文件格式        添加文件进入暂存区（版本控制系统）
 git commit -m "为做了的修改写备注"         （-m的意思是为这次修改添加理由）   确认版本修改并添加
 git status 查看暂存区里面的文件状态
 git diff HEAD -- 文件名.文件格式                显示比较文件修改的不同
 git log                                显示版本修改的简介
 git log --pretty=oneline               单行显示版本修改情况   
 git reset --hard id前5位数字           可前往不同的版本
 git reset --HEAD^                      HEAD指向当前版本
                                         返回上一次修改状态
 git flog                               显示所有的提交记录
 git checkout -- 文件.文件格式           （没有上传至暂存区）撤销在暂存区前的版本  回退一个版本
 git reset HEAD 文件名.文件格式          （已经提交到暂存区）将当前文件返回在没有提交到暂存区前的版本  再用chectout命令
 git rm 文件名.文件类型                删除文件
- stage 暂存区

- master