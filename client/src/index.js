import React from 'react';
import ReactDom from 'react-dom';
import marked from 'marked';

let str =
`
## 视频
<embed src='http://player.youku.com/player.php/sid/XMjUzNDIyNjM3Ng==/v.swf' allowFullScreen='true' quality='high' width='480' height='400' align='middle' allowScriptAccess='always' type='application/x-shockwave-flash'></embed>

## 编程题答题说明
点击编程题进入答题页面后，您可以看到导航栏处三个标签，分别为：**题目说明**，**提交作业**，**运行结果**
### 题目说明
题目说明标签内包含：
![All text](https://raw.githubusercontent.com/sialvsic/TwicePic/master/desc1.jpg)
![Alt text](https://raw.githubusercontent.com/sialvsic/TwicePic/master/desc2.jpg)
![Alt text](https://raw.githubusercontent.com/sialvsic/TwicePic/master/desc3.jpg)
NOTE：编程题模板库是便于用户的答题操作，根据题目的难易程度可能提供或者不提供
### 提交作业
提交作业标签内包含：
**编程题模板库地址**，**github仓库地址**，**github仓库分支**
![Alt text](https://raw.githubusercontent.com/sialvsic/TwicePic/master/commit.jpg)

用户在本地做完每道编程题后在此标签内提交编程题的github地址
### 运行结果
- 用户在提交题目后，系统会自行进行处理
![Alt text](https://raw.githubusercontent.com/sialvsic/TwicePic/master/light.jpg)
- 若结果正确，则下一题解锁，用户继续完成下一题目
![Alt text](https://raw.githubusercontent.com/sialvsic/TwicePic/master/success.jpg)
- 若错误，请继续完成本题目，直至正确或答题超时
![Alt text](https://raw.githubusercontent.com/sialvsic/TwicePic/master/fail.jpg)

## 编程题答题注意事项
- 每道题设有答题时间期限，超时后用户将失去答题资格
- 因题目难度不同，**答题流程也不太相同**
- 因题目难度不同，**题目运行结果时间不定**，请耐心等待
- 因题目难度不同，**编程题模板库可能不提供**

---------------------------------------------------
  以下为本题内容

## 题目要求
- 请在开始答题后 7 天内完成

#### 题目描述
根据如下顺序完成题目：
- 请新建一个github账户
- 请初始化一个github仓库
- 请在该库内新建一个名为 readme.md 的文件(注意全部小写)

## 答题流程
1. 请用户仔细阅读题目要求和题目描述
2. 使用以下命令初始化git（如果不会使用git和github，请先学习参考资料的内容）

3. 使用以下命令设置github远程仓库地址 (url代表你自己的新的github地址)
4. 请使用**git提交(commit)**并**上传(push)**，之后将此github仓库地址(用户自建的) eg:（https://github.com/username/repo） 填入到提交地址一栏 

5. 获取分支

6. 提交

7. 等待结果

## 考察要点
- github仓库的使用
- git基础

## 编程题模板库地址
本题不存在编程题模板库地址

## 参考资料
1. [Git for Windows](https://github.com/doggy8088/Learn-Git-in-30-days/blob/master/docs/02%20%E5%9C%A8%20Windows%20%E5%B9%B3%E5%8F%B0%E5%BF%85%E8%A3%9D%E7%9A%84%E4%B8%89%E5%A5%97%20Git%20%E5%B7%A5%E5%85%B7.markdown)
2. [try git](https://try.github.io/levels/1/challenges/1)
3. [Git 参考手册](http://gitref.org/zh/index.html)
4. [github用法](https://guides.github.com/activities/hello-world/);
`;

function mark() {
  return {__html:marked(str)};
}

ReactDom.render(
  <div>
    <div dangerouslySetInnerHTML={mark()}></div>
  </div>,
    document.getElementById('app')
);