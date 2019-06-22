- json 格式是标准的数据交换
- 前后端开发。 /api json 格式来交流
- 全栈 fullstack

- 设计良好的URL
    /posts
    /post/:id
    /comments
    /comments/:id
    /posts/1/comments

- restful 一切皆资源
    暴露资源
Http 动词
GET 查询
加一条评论 增加一个资源
POST 新增提交表单 /comments
DELETE动词 /posts/2
修改 PUT/PATCH  /comments/2  body 最美
PUT 把全新的所有内容，去替换掉suoyou旧的内容
PATCH 只要传递更新的字段，只要传递局部


-RESTFUL 考点
认为一切皆资源， URL是唯一定位资源的符号
它有一定的设计原则
HTTP动词是web资源的状态转换动词


操作     SQL方法     HTTP动词
CREATE   INSERT      POST
PEAD     SELECT      GET
UPDATE   UPDATE      PUT/PATCH
DELECT   DELECT      DELECT
 localhost:3000/posts
[
        {
            "id": 1,
            "title": "今天下雨了",
            "author": "typicode"
        }
    ],

    localhost:3000/posts/1
    {
            "id": 1,
            "title": "今天下雨了",
            "author": "typicode"
        }