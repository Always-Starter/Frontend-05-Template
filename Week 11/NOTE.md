学习笔记

#### css选择器：

##### 简单选择器：
1. *
2. div svg | a
3. .cls
4. #id
5. [attr=value]
6. :hover
7. ::before

##### 复合选择器
1. <简单选择器> <简单选择器> <简单选择器>
2. * 或者 div 必须写在最前面

##### 复杂选择器
1. <复合选择器> <space> <复合选择器>  
2. <复合选择器> ">" <复合选择器>  直接子类选择器
3. <复合选择器> "~" <复合选择器>  兄弟选择器
4. <复合选择器> "+" <复合选择器>  直接兄弟选择器
5. <复合选择器> "||" <复合选择器>  列选择符  https://www.zhangxinxu.com/wordpress/2019/02/css-column-combinator/

##### 伪类选择器
链接/行为
1. :any-link
2. :link :visited (:link will select all unvisited link)
3. :hover
4. :active
5. :focus
6. :target (active HTML anchor)


##### 树结构
1. :empty (matches every element that has no children (including text nodes).)
2. :nth-child()
3. nth-last-child()
4. :first-child :last-child :only-child

##### 伪类
1. 逻辑型
*:not伪类
*:where :has

##### 伪元素
1. ::before 
2. :after
3. ::first-line
4. ::first-letter