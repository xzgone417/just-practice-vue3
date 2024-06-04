# 心理FM接口API全

<https://www.jianshu.com/p/c0f368fd0388>

App可参照心理FM

# 心理FM接口

## 1-启动封面图

[http://yiapi.xinli001.com/fm/initial-cover.json?key=046b6a2a43dc6ff6e770255f57328f89](https://link.jianshu.com/?t=http://yiapi.xinli001.com/fm/initial-cover.json?key=046b6a2a43dc6ff6e770255f57328f89)

##### `Response`:



![img](https://upload-images.jianshu.io/upload_images/1334681-455a9cca25d18184.png?imageMogr2/auto-orient/strip|imageView2/2/w/617/format/webp)

cover.png

------

## 2-首页

[http://yiapi.xinli001.com/fm/home-list.json?key=046b6a2a43dc6ff6e770255f57328f89](https://link.jianshu.com/?t=http://yiapi.xinli001.com/fm/home-list.json?key=046b6a2a43dc6ff6e770255f57328f89)

##### `Response`:



![img](https://upload-images.jianshu.io/upload_images/1334681-119de2a271e95f73.png?imageMogr2/auto-orient/strip|imageView2/2/w/250/format/webp)

home.png

------

### 2-首页-tuijian-列表

[http://bapi.xinli001.com/fm2/broadcast_list.json/?offset=0&speaker_id=0&tag=%E6%8A%91%E9%83%81%E7%97%87%E6%98%AF%E6%9D%A1%E9%BB%91%E7%8B%97&rows=10&key=046b6a2a43dc6ff6e770255f57328f89](https://link.jianshu.com/?t=http://bapi.xinli001.com/fm2/broadcast_list.json/?offset=0&speaker_id=0&tag=%E6%8A%91%E9%83%81%E7%97%87%E6%98%AF%E6%9D%A1%E9%BB%91%E7%8B%97&rows=10&key=046b6a2a43dc6ff6e770255f57328f89)

##### `Request`:

```undefined
offset  0
speaker_id  0
tag 抑郁症是条黑狗
rows    10
key 046b6a2a43dc6ff6e770255f57328f89
```

##### `Response`:



![img](https://upload-images.jianshu.io/upload_images/1334681-12cfca4f95415b1f.png?imageMogr2/auto-orient/strip|imageView2/2/w/601/format/webp)

home-tuijian-detail.png

------

### 2-首页-更多心理课

[http://yiapi.xinli001.com/fm/newlesson-list.json?offset=0&limit=10&key=046b6a2a43dc6ff6e770255f57328f89](https://www.jianshu.com/p/c0f368fd0388)

##### `Request`:

```bash
offset 0
limit   10
key 046b6a2a43dc6ff6e770255f57328f89
```

##### `Response`:



![img](https://upload-images.jianshu.io/upload_images/1334681-f12d9009519b8763.png?imageMogr2/auto-orient/strip|imageView2/2/w/764/format/webp)

更多心理课

------

### 2-首页-更多FM

[http://yiapi.xinli001.com/fm/newfm-list.json?offset=0&limit=10&key=046b6a2a43dc6ff6e770255f57328f89](https://www.jianshu.com/p/c0f368fd0388)

##### `Request`:

```bash
offset 0
limit   10
key 046b6a2a43dc6ff6e770255f57328f89
```

##### `Response`:



![img](https://upload-images.jianshu.io/upload_images/1334681-5f10b642ee99e826.png?imageMogr2/auto-orient/strip|imageView2/2/w/747/format/webp)

更多FM

------

### 2-首页-更多电台

[http://yiapi.xinli001.com/fm/diantai-page.json?key=046b6a2a43dc6ff6e770255f57328f89](https://www.jianshu.com/p/c0f368fd0388)

##### `Request`:

```undefined
key 046b6a2a43dc6ff6e770255f57328f89
```

##### `Response`:



![img](https://upload-images.jianshu.io/upload_images/1334681-650648bc6fb8ae60.png?imageMogr2/auto-orient/strip|imageView2/2/w/819/format/webp)

更多电台

------

### 2-首页-更多电台-更多主播

[http://yiapi.xinli001.com/fm/diantai-new-list.json?offset=0&limit=10&key=046b6a2a43dc6ff6e770255f57328f89](https://www.jianshu.com/p/c0f368fd0388)

##### `Request`:

```bash
offset 0
limit   10
key 046b6a2a43dc6ff6e770255f57328f89
```

##### `Response`:



![img](https://upload-images.jianshu.io/upload_images/1334681-20ad5e806a99ff56.png?imageMogr2/auto-orient/strip|imageView2/2/w/690/format/webp)

更多电台

------

### 2-首页-category-详情

[http://yiapi.xinli001.com/fm/category-jiemu-list.json?category_id=1&offset=0&limit=10&key=046b6a2a43dc6ff6e770255f57328f89](https://link.jianshu.com/?t=http://yiapi.xinli001.com/fm/category-jiemu-list.json?category_id=1&offset=0&limit=10&key=046b6a2a43dc6ff6e770255f57328f89)

##### `Request`:

GET

```bash
category_id 1 //分类id - 情绪管理等
offset  0
limit   10
key 046b6a2a43dc6ff6e770255f57328f89
```

##### `Response`:



![img](https://upload-images.jianshu.io/upload_images/1334681-83ba129ed24b86e8.png?imageMogr2/auto-orient/strip|imageView2/2/w/758/format/webp)

home-category-detail.png

------

### 3-FM播放

[http://yiapi.xinli001.com/fm/broadcast-detail.json?id=99389004&key=046b6a2a43dc6ff6e770255f57328f89](https://link.jianshu.com/?t=http://yiapi.xinli001.com/fm/broadcast-detail.json?id=99389004&key=046b6a2a43dc6ff6e770255f57328f89)

##### `Request`:

```objectivec
id  99389004
key 046b6a2a43dc6ff6e770255f57328f89
```

##### `Response`:



![img](https://upload-images.jianshu.io/upload_images/1334681-b15660a0b06aaca3.png?imageMogr2/auto-orient/strip|imageView2/2/w/635/format/webp)

fm_play.png

------

### 3-FM播放-点赞 - POST

```
http://bapi.xinli001.com/fm2/toggle_fav.json/
```

##### `Request`:

```undefined
fmid    99389004
key 046b6a2a43dc6ff6e770255f57328f89
token   b845588abcf58804c99d289584cd6068
```

##### `Response`:

```json
{
    "code": 1
}
```

------

### 3-FM播放-取消点赞 - POST

```
http://bapi.xinli001.com/fm2/toggle_fav.json/
```

##### `Request`:

```undefined
fmid    99389004
key 046b6a2a43dc6ff6e770255f57328f89
token   b845588abcf58804c99d289584cd6068
```

##### `Response`:

```json
{
    "code": 2
}
```

------

### 3-FM播放-阅读原文

[http://bapi.xinli001.com/fm2/article.json/?pk=99389004&key=046b6a2a43dc6ff6e770255f57328f89](https://link.jianshu.com/?t=http://bapi.xinli001.com/fm2/article.json/?pk=99389004&key=046b6a2a43dc6ff6e770255f57328f89)

##### `Request`:

```undefined
pk  99389004
key 046b6a2a43dc6ff6e770255f57328f89
```

##### `Response`:

```json
{
    "data": "HTML文本",
    "code": 0
}
```

------

### 3-FM播放-评论列表

[http://yiapi.xinli001.com/fm/comment-latest-list.json?offset=0&broadcast_id=99389004&limit=10&key=046b6a2a43dc6ff6e770255f57328f89](https://link.jianshu.com/?t=http://yiapi.xinli001.com/fm/comment-latest-list.json?offset=0&broadcast_id=99389004&limit=10&key=046b6a2a43dc6ff6e770255f57328f89)

##### `Request`:

```bash
offset  0
broadcast_id    99389004
limit   10
key 046b6a2a43dc6ff6e770255f57328f89
```

##### `Response`:



![img](https://upload-images.jianshu.io/upload_images/1334681-063d5d6396e55e2e.png?imageMogr2/auto-orient/strip|imageView2/2/w/217/format/webp)

fm-play-comlist.png

------

### 3-FM播放-评论列表-评论FM - POST

```
http://yiapi.xinli001.com/fm/post-comment.json
```

##### `Request`:

```undefined
broadcast_id    99389004
reply_object_id 0
key 046b6a2a43dc6ff6e770255f57328f89
content 哈喽？
token   b845588abcf58804c99d289584cd6068
```

##### `Response`:

```json
{
    "code": 0,
    "data": {
        "id": "3028874",
        "user_id": "1004261911",
        "content": "哈喽？",
        "created": "刚刚",
        "created_str": "2016-07-17 14:10:14",
        "zannum": 0,
        "replynum": 0,
        "role": 0,
        "role_id": 0,
        "user": {
            "id": "1004261911",
            "nickname": "菲拉兔",
            "avatar": "http://ossimg.xinli001.com/20160329/9fe4842afb2c58c2200a1b9ae7a68ca9.png!80"
        },
        "replyuser": null,
        "replyobject": null,
        "is_comment": 1,
        "is_host_speaker": 0,
        "reply_user": null
    },
    "message": "发表成功，成功获得10金币",
    "num": "10"
}
```

------

### 3-FM播放-评论列表-点赞某人评论 - POST

同`与主播详情-评论列表-点赞某人评论`

------

### 3-FM播放-评论列表-回复某人 - POST

`[http://yiapi.xinli001.com/fm/post-comment.json](https://link.jianshu.com/?t=http://yiapi.xinli001.com/fm/post-comment.json)

##### `Request`:

```undefined
broadcast_id    99389004
reply_object_id 3028874
key 046b6a2a43dc6ff6e770255f57328f89
content 哈喽
token   b845588abcf58804c99d289584cd6068
```

##### `Response`:

```json
{
    "code": 0,
    "data": {
        "id": "3028876",
        "user_id": "1004261911",
        "content": "哈喽",
        "created": "刚刚",
        "created_str": "2016-07-17 14:13:17",
        "zannum": 0,
        "replynum": 0,
        "role": 0,
        "role_id": 0,
        "user": {
            "id": "1004261911",
            "nickname": "菲拉兔",
            "avatar": "http://ossimg.xinli001.com/20160329/9fe4842afb2c58c2200a1b9ae7a68ca9.png!80"
        },
        "replyuser": null,
        "replyobject": {
            "id": "3028874",
            "user_id": "1004261911",
            "content": "哈喽？",
            "created": "3分钟前",
            "created_str": "2016-07-17 14:10:14",
            "zannum": 0,
            "replynum": 0,
            "role": 0,
            "role_id": 0,
            "user": {
                "id": "1004261911",
                "username": "18810706793",
                "nickname": "菲拉兔",
                "avatar": "http://ossimg.xinli001.com/20160329/9fe4842afb2c58c2200a1b9ae7a68ca9.png!80"
            },
            "replyuser": null,
            "replyobject": null,
            "is_comment": 1,
            "is_host_speaker": 0
        },
        "is_comment": 1,
        "is_host_speaker": 0,
        "reply_user": null
    },
    "message": "发表成功，成功获得10金币",
    "num": "10"
}
```

------

### 3-FM播放-主播详情

[http://yiapi.xinli001.com/fm/diantai-detai.json?id=921&key=046b6a2a43dc6ff6e770255f57328f89](https://link.jianshu.com/?t=http://yiapi.xinli001.com/fm/diantai-detai.json?id=921&key=046b6a2a43dc6ff6e770255f57328f89)

##### `Request`:

```objectivec
id  921
key 046b6a2a43dc6ff6e770255f57328f89
```

##### `Response`:



![img](https://upload-images.jianshu.io/upload_images/1334681-b7d1583787de810e.png?imageMogr2/auto-orient/strip|imageView2/2/w/807/format/webp)

fm-play-diantai-detail.png

------

### 3-FM播放-主播详情-是否关注

[http://yiapi.xinli001.com/fm/diantai-check-guanzhu.json?diantai_id=921&key=046b6a2a43dc6ff6e770255f57328f89&token=b845588abcf58804c99d289584cd6068](https://link.jianshu.com/?t=http://yiapi.xinli001.com/fm/diantai-check-guanzhu.json?diantai_id=921&key=046b6a2a43dc6ff6e770255f57328f89&token=b845588abcf58804c99d289584cd60689)

##### `Request`:

```undefined
diantai_id  921
key 046b6a2a43dc6ff6e770255f57328f89
token   b845588abcf58804c99d289584cd6068
```

##### `Response`:

```json
{
    "code": 0,
    "data": false
}
```

------

### 3-FM播放-主播详情-加关注

[http://yiapi.xinli001.com/fm/diantai-toggle-guanzhu.json?diantai_id=921&key=046b6a2a43dc6ff6e770255f57328f89&token=b845588abcf58804c99d289584cd6068](https://link.jianshu.com/?t=http://yiapi.xinli001.com/fm/diantai-toggle-guanzhu.json?diantai_id=921&key=046b6a2a43dc6ff6e770255f57328f89&token=b845588abcf58804c99d289584cd6068)

##### `Request`:

```undefined
diantai_id  921
key 046b6a2a43dc6ff6e770255f57328f89
token   b845588abcf58804c99d289584cd6068
```

##### `Response`:

```json
{
    "code": 0,
    "data": true,
    "message": "关注成功"/"取消关注"
}
```

------

### 3-FM播放-主播详情-节目列表

[http://yiapi.xinli001.com/fm/diantai-jiemu-list.json?offset=0&limit=10&diantai_id=921&key=046b6a2a43dc6ff6e770255f57328f89](https://link.jianshu.com/?t=http://yiapi.xinli001.com/fm/diantai-jiemu-list.json?offset=0&limit=10&diantai_id=921&key=046b6a2a43dc6ff6e770255f57328f89)

##### `Request`:

```bash
offset  0
limit   10
diantai_id  921
key 046b6a2a43dc6ff6e770255f57328f89
```

##### `Response`:



![img](https://upload-images.jianshu.io/upload_images/1334681-d5e7c9ce5c3f4d35.png?imageMogr2/auto-orient/strip|imageView2/2/w/658/format/webp)

fm_play_diantai_detail_jiemulist.png

------

### 3-FM播放-主播详情-私信

[http://yiapi.xinli001.com/fm/diantai-jiemu-list.json?offset=0&limit=10&diantai_id=921&key=046b6a2a43dc6ff6e770255f57328f89](https://link.jianshu.com/?t=http://yiapi.xinli001.com/fm/diantai-jiemu-list.json?offset=0&limit=10&diantai_id=921&key=046b6a2a43dc6ff6e770255f57328f89)

##### `Request`:

```undefined
offset  0
other_id    775853
rows    10
key 046b6a2a43dc6ff6e770255f57328f89
token   b845588abcf58804c99d289584cd6068
```

##### `Response`:

```json
{
    "count": 0,
    "data": [],
    "code": 0
}
```

------

### 3-FM播放-主播详情-留言列表

[http://yiapi.xinli001.com/fm/diantai-comment-list.json?offset=0&limit=10&diantai_id=921&key=046b6a2a43dc6ff6e770255f57328f89](https://link.jianshu.com/?t=http://yiapi.xinli001.com/fm/diantai-comment-list.json?offset=0&limit=10&diantai_id=921&key=046b6a2a43dc6ff6e770255f57328f89)

##### `Request`:

```bash
offset  0
limit   10
diantai_id  921
key 046b6a2a43dc6ff6e770255f57328f89
```

##### `Response`:



![img](https://upload-images.jianshu.io/upload_images/1334681-dc4a21fb4479837c.png?imageMogr2/auto-orient/strip|imageView2/2/w/433/format/webp)

fm-play-diantai-detail-comlist.png

------

### 3-FM播放-主播详情-评论电台 - POST

```
http://yiapi.xinli001.com/fm/diantai-comment.json
```

##### `Request`:

```undefined
diantai_id  921
reply_object_id 0
key 046b6a2a43dc6ff6e770255f57328f89
content 哈喽？
token   b845588abcf58804c99d289584cd6068
```

##### `Response`:

```json
{
    "code": 0,
    "data": {
        "id": "3028867",
        "user_id": "1004261911",
        "content": "哈喽？",
        "created": "刚刚",
        "created_str": "2016-07-17 13:56:21",
        "zannum": 0,
        "replynum": 0,
        "role": 0,
        "role_id": 0,
        "user": {
            "id": "1004261911",
            "username": "18810706793",
            "nickname": "菲拉兔",
            "avatar": "http://ossimg.xinli001.com/20160329/9fe4842afb2c58c2200a1b9ae7a68ca9.png!80"
        },
        "replyuser": null,
        "replyobject": null,
        "is_comment": 1,
        "is_host_speaker": 0
    },
    "message": "发表成功"
}
```

------

### 3-FM播放-主播详情-点赞某人评论 - POST

```
http://yiapi.xinli001.com/fm/post-comment-like.json
```

##### `Request`:

```undefined
comment_id  3009990
key 046b6a2a43dc6ff6e770255f57328f89
token   b845588abcf58804c99d289584cd6068
```

##### `Response`:

```json
{
    "code": 0,
    "data": null,
    "message": "点赞成功"
}
```

------

### 3-FM播放-主播详情-回复某人评论 - POST

```
http://yiapi.xinli001.com/fm/diantai-comment.json
```

##### `Request`:

```undefined
diantai_id  921
reply_object_id 3009990
key 046b6a2a43dc6ff6e770255f57328f89
content 好
token   b845588abcf58804c99d289584cd6068
```

##### `Response`:

```json
{
    "code": 0,
    "data": {
        "id": "3028871",
        "user_id": "1004261911",
        "content": "好",
        "created": "刚刚",
        "created_str": "2016-07-17 14:02:29",
        "zannum": 0,
        "replynum": 0,
        "role": 0,
        "role_id": 0,
        "user": {
            "id": "1004261911",
            "username": "18810706793",
            "nickname": "菲拉兔",
            "avatar": "http://ossimg.xinli001.com/20160329/9fe4842afb2c58c2200a1b9ae7a68ca9.png!80"
        },
        "replyuser": null,
        "replyobject": {
            "id": "3009990",
            "user_id": "1000632085",
            "content": "喜欢😍",
            "created": "4周前",
            "created_str": "2016-06-17 17:51:08",
            "zannum": 0,
            "replynum": 0,
            "role": 0,
            "role_id": 0,
            "user": {
                "id": "1000632085",
                "username": "xinli_14453245065348",
                "nickname": "暮雪晨星",
                "avatar": "http://ossimg.xinli001.com/20160329/9fe4842afb2c58c2200a1b9ae7a68ca9.png!80"
            },
            "replyuser": null,
            "replyobject": null,
            "is_comment": 1,
            "is_host_speaker": 0
        },
        "is_comment": 1,
        "is_host_speaker": 0
    },
    "message": "发表成功"
}
```

------

## 4社区-发起讨论 - POST

```
http://yiapi.xinli001.com/fm/post-forum-thread.json
```

##### `Request`:

```cpp
flag    0
title   "hello"
key 046b6a2a43dc6ff6e770255f57328f89
content "hello"
token   b845588abcf58804c99d289584cd6068
images[] application/octet-stream
images[] application/octet-stream
images[] application/octet-stream //最多6张
```

##### `Response`:

```json
{
    "code": 0,
    "data": {
        "id": "27740",
        "user_id": "1004261911",
        "title": "有人吗",
        "content": "嗯",
        "created": "刚刚",
        "updated": "刚刚",
        "jin": "0",
        "commentnum": "0",
        "user": {
            "id": "1004261911",
            "nickname": "菲拉兔",
            "avatar": "http://ossimg.xinli001.com/20160329/9fe4842afb2c58c2200a1b9ae7a68ca9.png!80"
        },
        "absolute_url": "http://yiapi.xinli001.com/fm/forum-share-page/27740",
        "images": [
            "http://ossimg.xinli001.com/20160717/82daa9a7e41de3b77e9118eae3ef3f01.jpg",
            "http://ossimg.xinli001.com/20160717/04d27cd71f02f1694e0193d9d866a7b1.jpg",
            "http://ossimg.xinli001.com/20160717/31fc4d7c6c555cc08adefb717b6169bf.jpg",
            "http://ossimg.xinli001.com/20160717/8062a899e40f382d89ee05ab139d6ea5.jpg",
            "http://ossimg.xinli001.com/20160717/238565837f61122aadb71332a206a91c.jpg",
            "http://ossimg.xinli001.com/20160717/cf5a1a523219bb262c4e5a3d36a92f3b.jpg"
        ]
    },
    "message": "发布成功"
}
```

------

## 4社区列表-精华/最新

[http://yiapi.xinli001.com/fm/forum-thread-list.json?flag=0&offset=0&limit=10&type=1&key=046b6a2a43dc6ff6e770255f57328f89](https://link.jianshu.com/?t=http://yiapi.xinli001.com/fm/forum-thread-list.json?flag=0&offset=0&limit=10&type=1&key=046b6a2a43dc6ff6e770255f57328f89)

##### `Request`:

```bash
flag    0-精华 1-热门
offset  10
limit   10
type    1
key 046b6a2a43dc6ff6e770255f57328f89
```

##### `Response`:

![img](https://www.jianshu.com/p/forumlist.png)

------

## 4社区列表-详情-评论列表

[http://yiapi.xinli001.com/fm/forum-comment-list.json?post_id=697&offset=0&limit=10&key=046b6a2a43dc6ff6e770255f57328f89](https://link.jianshu.com/?t=http://yiapi.xinli001.com/fm/forum-comment-list.json?post_id=697&offset=0&limit=10&key=046b6a2a43dc6ff6e770255f57328f89)

##### `Request`:

```bash
post_id 697
offset  0
limit   10
key 046b6a2a43dc6ff6e770255f57328f89
```

##### `Response`:



![img](https://upload-images.jianshu.io/upload_images/1334681-e08e577264cc3acf.png?imageMogr2/auto-orient/strip|imageView2/2/w/569/format/webp)

forum-detail-comlist.png

------

## 4社区列表-详情-发布评论 - POST

```
http://yiapi.xinli001.com/fm/post-forum-comment.json
```

##### `Request`:

```undefined
flag    0
post_id 697
reply_user_id   0
key 046b6a2a43dc6ff6e770255f57328f89
content 不错
token   b845588abcf58804c99d289584cd6068
```

##### `Response`:

```json
{
    "code": 0,
    "data": {
        "id": "3028883",
        "user_id": "1004261911",
        "content": "不错",
        "created": "刚刚",
        "created_str": "2016-07-17 14:31:50",
        "zannum": "0",
        "replynum": "0",
        "role": "0",
        "role_id": "0",
        "user": {
            "id": "1004261911",
            "username": "18810706793",
            "nickname": "菲拉兔",
            "avatar": "http://ossimg.xinli001.com/20160329/9fe4842afb2c58c2200a1b9ae7a68ca9.png!80"
        },
        "replyuser": null,
        "reply": [],
        "floor": 281
    },
    "message": "评论成功"
}
```

------

## 4社区列表-详情-回复别人评论 - POST

```
http://yiapi.xinli001.com/fm/post-forum-comment.json
```

##### `Request`:

```undefined
flag    0
post_id 697
reply_user_id   不为0
key 046b6a2a43dc6ff6e770255f57328f89
content 不错
token   b845588abcf58804c99d289584cd6068
```

##### `Response`:

```json
{
    "code": 0,
    "data": {
        "id": "3028885",
        "user_id": "1004261911",
        "content": "真的",
        "created": "刚刚",
        "created_str": "2016-07-17 14:35:25",
        "zannum": "0",
        "replynum": "0",
        "role": "0",
        "role_id": "0",
        "user": {
            "id": "1004261911",
            "username": "18810706793",
            "nickname": "菲拉兔",
            "avatar": "http://ossimg.xinli001.com/20160329/9fe4842afb2c58c2200a1b9ae7a68ca9.png!80"
        },
        "replyuser": null,
        "reply": [],
        "floor": 282
    },
    "message": "评论成功"
}
```

------

## 5发现-幻灯

[http://bapi.xinli001.com/fm2/hot_tag_list.json/?flag=4&offset=0&rows=10&key=046b6a2a43dc6ff6e770255f57328f89](https://link.jianshu.com/?t=http://bapi.xinli001.com/fm2/hot_tag_list.json/?flag=4&offset=0&rows=10&key=046b6a2a43dc6ff6e770255f57328f89)

##### `Request`:

```undefined
flag    4
offset  0
rows    10
key 046b6a2a43dc6ff6e770255f57328f89
```

##### `Response`:



![img](https://upload-images.jianshu.io/upload_images/1334681-91651ae0614f5f06.png?imageMogr2/auto-orient/strip|imageView2/2/w/193/format/webp)

find-top5-slide.png

------

## 5发现-Alarmtext

[http://bapi.xinli001.com/fm2/alarmtext_list.json/?key=046b6a2a43dc6ff6e770255f57328f89](https://link.jianshu.com/?t=http://bapi.xinli001.com/fm2/alarmtext_list.json/?key=046b6a2a43dc6ff6e770255f57328f89)

##### `Response`:



![img](https://upload-images.jianshu.io/upload_images/1334681-1fdc2e8be51b8e4d.png?imageMogr2/auto-orient/strip|imageView2/2/w/614/format/webp)

find-alarmtext.png

------

## 5发现-tag-搜索

[http://bapi.xinli001.com/fm2/broadcast_list.json/?offset=0&speaker_id=0&tag=%E5%BF%AB%E4%B9%90&rows=10&key=046b6a2a43dc6ff6e770255f57328f89](https://link.jianshu.com/?t=http://bapi.xinli001.com/fm2/broadcast_list.json/?offset=0&speaker_id=0&tag=%E5%BF%AB%E4%B9%90&rows=10&key=046b6a2a43dc6ff6e770255f57328f89)

##### `Request`:

```undefined
offset  0
speaker_id  0
tag 快乐/悲伤...无聊等18个
rows    10
key 046b6a2a43dc6ff6e770255f57328f89
```

##### `Response`:



![img](https://upload-images.jianshu.io/upload_images/1334681-5df6a8c10a061012.png?imageMogr2/auto-orient/strip|imageView2/2/w/601/format/webp)

find-search-resultlist.png

------

## 5发现-搜索-热门搜索tags

[http://bapi.xinli001.com/fm2/hot_tag_list.json/?flag=1&offset=0&rows=100&key=046b6a2a43dc6ff6e770255f57328f89](https://link.jianshu.com/?t=http://bapi.xinli001.com/fm2/hot_tag_list.json/?flag=1&offset=0&rows=100&key=046b6a2a43dc6ff6e770255f57328f89)

##### `Request`:

```undefined
flag    1
offset  0
rows    100
key 046b6a2a43dc6ff6e770255f57328f89
```

##### `Response`:



![img](https://upload-images.jianshu.io/upload_images/1334681-0183dff0a987a22d.png?imageMogr2/auto-orient/strip|imageView2/2/w/219/format/webp)

find-hot-search-taglist.png

------

## 5发现-搜索-关键词搜索

[http://bapi.xinli001.com/fm2/broadcast_list.json/?q=%E5%A4%B1%E6%81%8B&is_teacher=&offset=0&speaker_id=0&rows=10&key=046b6a2a43dc6ff6e770255f57328f89](https://link.jianshu.com/?t=http://bapi.xinli001.com/fm2/broadcast_list.json/?q=%E5%A4%B1%E6%81%8B&is_teacher=&offset=0&speaker_id=0&rows=10&key=046b6a2a43dc6ff6e770255f57328f89)

##### `Request`:

```undefined
q   音乐/tag.name
is_teacher  
offset  0
speaker_id  0
rows    10
key 046b6a2a43dc6ff6e770255f57328f89
```

##### `Response`:



![img](https://upload-images.jianshu.io/upload_images/1334681-ad0a6ba3f52e7f17.png?imageMogr2/auto-orient/strip|imageView2/2/w/601/format/webp)

find-search-resultlist.png

------

## 5发现-主播

[http://bapi.xinli001.com/fm2/hot_tag_list.json/?flag=4&offset=0&rows=10&key=046b6a2a43dc6ff6e770255f57328f89](https://link.jianshu.com/?t=http://bapi.xinli001.com/fm2/hot_tag_list.json/?flag=4&offset=0&rows=10&key=046b6a2a43dc6ff6e770255f57328f89)

##### `Request`:

```bash
offset  0
limit   6
key 046b6a2a43dc6ff6e770255f57328f89
```

##### `Response`:



![img](https://upload-images.jianshu.io/upload_images/1334681-a609e8015d8ab30e.png?imageMogr2/auto-orient/strip|imageView2/2/w/671/format/webp)

find-diantailist-6.png

------

## 6我的-签到

[http://bapi.xinli001.com/fm2/qiandao.json/?key=046b6a2a43dc6ff6e770255f57328f89&token=b845588abcf58804c99d289584cd6068](https://link.jianshu.com/?t=http://bapi.xinli001.com/fm2/qiandao.json/?key=046b6a2a43dc6ff6e770255f57328f89&token=b845588abcf58804c99d289584cd6068)

##### `Request`:

```undefined
key 046b6a2a43dc6ff6e770255f57328f89
token b845588abcf58804c99d289584cd6068
```

##### `Response`:

```json
{
    "num": "50",
    "code": 0,
    "msg": "恭喜你获得50个金币"
}
```

------

## 6我的-关注电台

[http://yiapi.xinli001.com/fm/diantai-myguanzhu-list.json?offset=0&limit=10&key=046b6a2a43dc6ff6e770255f57328f89&token=b845588abcf58804c99d289584cd6068](https://link.jianshu.com/?t=http://yiapi.xinli001.com/fm/diantai-myguanzhu-list.json?offset=0&limit=10&key=046b6a2a43dc6ff6e770255f57328f89&token=b845588abcf58804c99d289584cd6068)

##### `Request`:

```bash
offset  0
limit   10
key 046b6a2a43dc6ff6e770255f57328f89
token   b845588abcf58804c99d289584cd6068
```

##### `Response`:

```json
{
    "code": 0,
    "data": []
}
// 没有数据的话 展示推荐关注列表
```



![img](https://upload-images.jianshu.io/upload_images/1334681-50c3839e6c958aaa.png?imageMogr2/auto-orient/strip|imageView2/2/w/763/format/webp)

mine-guanzhudiantai-list.png

------

## 6我的-关注电台-推荐关注

[http://yiapi.xinli001.com/fm/diantai-myguanzhu-list.json?offset=0&limit=10&key=046b6a2a43dc6ff6e770255f57328f89&token=b845588abcf58804c99d289584cd6068](https://link.jianshu.com/?t=http://yiapi.xinli001.com/fm/diantai-myguanzhu-list.json?offset=0&limit=10&key=046b6a2a43dc6ff6e770255f57328f89&token=b845588abcf58804c99d289584cd6068)

##### `Request`:

```bash
offset  0
limit   10
key 046b6a2a43dc6ff6e770255f57328f89
token   b845588abcf58804c99d289584cd6068
```

##### `Response`:



![img](https://upload-images.jianshu.io/upload_images/1334681-50c3839e6c958aaa.png?imageMogr2/auto-orient/strip|imageView2/2/w/763/format/webp)

mine-guanzhudiantai-list.png

------

## 6我的-赞过的电台

[http://bapi.xinli001.com/fm2/favorite_list.json/?offset=0&user_id=1004261911&rows=10&key=046b6a2a43dc6ff6e770255f57328f89](https://link.jianshu.com/?t=http://bapi.xinli001.com/fm2/favorite_list.json/?offset=0&user_id=1004261911&rows=10&key=046b6a2a43dc6ff6e770255f57328f89)

##### `Request`:

```undefined
offset  0
user_id 1004261911
rows    10
key 046b6a2a43dc6ff6e770255f57328f89
```

##### `Response`:



![img](https://upload-images.jianshu.io/upload_images/1334681-c426d21c4dbd194f.png?imageMogr2/auto-orient/strip|imageView2/2/w/265/format/webp)

mine-favdiantail-list.png

------

## 6我的-我的话题-发表的

[hhttp://yiapi.xinli001.com/fm/user-forum-thread-list.json?offset=0&limit=10&key=046b6a2a43dc6ff6e770255f57328f89&token=b845588abcf58804c99d289584cd6068](https://link.jianshu.com/?t=http://yiapi.xinli001.com/fm/user-forum-thread-list.json?offset=0&limit=10&key=046b6a2a43dc6ff6e770255f57328f89&token=b845588abcf58804c99d289584cd6068)

##### `Request`:

```bash
offset  0
limit   10
key 046b6a2a43dc6ff6e770255f57328f89
token   b845588abcf58804c99d289584cd6068
```

##### `Response`:



![img](https://upload-images.jianshu.io/upload_images/1334681-d432b37081cd0d7c.png?imageMogr2/auto-orient/strip|imageView2/2/w/626/format/webp)

mine-forum-sendlist.png

------

## 6我的-我的话题-回复的

[http://yiapi.xinli001.com/fm/user-forum-comment-list.json?offset=0&limit=10&key=046b6a2a43dc6ff6e770255f57328f89&token=b845588abcf58804c99d289584cd6068](https://link.jianshu.com/?t=http://yiapi.xinli001.com/fm/user-forum-comment-list.json?offset=0&limit=10&key=046b6a2a43dc6ff6e770255f57328f89&token=b845588abcf58804c99d289584cd6068)

##### `Request`:

```bash
offset  0
limit   10
key 046b6a2a43dc6ff6e770255f57328f89
token   b845588abcf58804c99d289584cd6068
```

##### `Response`:



![img](https://upload-images.jianshu.io/upload_images/1334681-e6f0b45a42e7a3c8.png?imageMogr2/auto-orient/strip|imageView2/2/w/408/format/webp)

mine-forum-replylist.png

------

## 6我的-通知

[http://bapi.xinli001.com/fm2/notice_list.json/?offset=0&rows=10&key=046b6a2a43dc6ff6e770255f57328f89&token=b845588abcf58804c99d289584cd6068](https://link.jianshu.com/?t=http://bapi.xinli001.com/fm2/notice_list.json/?offset=0&rows=10&key=046b6a2a43dc6ff6e770255f57328f89&token=b845588abcf58804c99d289584cd6068)

##### `Request`:

```bash
offset  0
limit   10
key 046b6a2a43dc6ff6e770255f57328f89
token   b845588abcf58804c99d289584cd6068
```

##### `Response`:

```json
{
    "data": [],
    "code": 0
}
```

------

## 6我的-私信

[http://bapi.xinli001.com/users/messages.json/?offset=0&rows=10&key=046b6a2a43dc6ff6e770255f57328f89&token=b845588abcf58804c99d289584cd6068](https://link.jianshu.com/?t=http://bapi.xinli001.com/users/messages.json/?offset=0&rows=10&key=046b6a2a43dc6ff6e770255f57328f89&token=b845588abcf58804c99d289584cd6068)

##### `Request`:

```bash
offset  0
limit   10
key 046b6a2a43dc6ff6e770255f57328f89
token   b845588abcf58804c99d289584cd6068
```

##### `Response`:



![img](https://upload-images.jianshu.io/upload_images/1334681-991e36207150a333.png?imageMogr2/auto-orient/strip|imageView2/2/w/650/format/webp)

mine-messages.png

------

## 6我的-私信-详情

```
同发送私信接口
```

------

## 7手机号注册-验证码

[http://bapi.xinli001.com/users/register_validcode.json/?phone=18810706793&key=046b6a2a43dc6ff6e770255f57328f89](https://link.jianshu.com/?t=http://bapi.xinli001.com/users/register_validcode.json/?phone=18810706794&key=046b6a2a43dc6ff6e770255f57328f89)

##### `Request`:

```undefined
phone   18810706793
key 046b6a2a43dc6ff6e770255f57328f89
```

##### `Response`:

```json
{
    "data": "发送成功",
    "code": 0
}
```

------

## 7手机号注册-确认注册 - POST

```
http://bapi.xinli001.com/users/register2.json/
```

##### `Request`:

```undefined
validcode   123456
nickname    哈哈
password2   132465
password1   132465
key 046b6a2a43dc6ff6e770255f57328f89
username    18810706794
```

##### `Response`:

```bash
{
    {
    "errors": {
        "validcode": [
            "注册验证码不正确"
        ]
    },
    "data": [
        "validcode:注册验证码不正确"
    ],
    "code": -1,
    "msg": "注册验证码不正确"
}
```

------

## 8忘记密码-验证码

[http://bapi.xinli001.com/users/find_pwd.json/?key=046b6a2a43dc6ff6e770255f57328f89&username=18810706793](https://link.jianshu.com/?t=http://bapi.xinli001.com/users/find_pwd.json/?key=046b6a2a43dc6ff6e770255f57328f89&username=18810706793)

##### `Request`:

```undefined
key 046b6a2a43dc6ff6e770255f57328f89
username    18810706794
```

##### `Response`:

```bash
{
    "data": "该手机号码没有注册",
    "code": -5
}
OR
{
    "data": "发送成功",
    "code": 0
}
```

------

## 8忘记密码-重置 - POST

```
http://bapi.xinli001.com/users/reset_pwd.json/
```

##### `Request`:

```undefined
password    123456
validcode   271662
key 046b6a2a43dc6ff6e770255f57328f89
username    18810706793
```

##### `Response`:

```json
{
    "data": "密码修改成功",
    "code": 0
}
```

------

## 9登录 - POST

```
http://bapi.xinli001.com/users/get_token.json/
```

##### `Request`:

```undefined
password    gggg
key 046b6a2a43dc6ff6e770255f57328f89
username    18810706793
```

##### `Response`:

```bash
{
    "data": "username or password error",
    "post": {
        "password": "gggg",
        "key": "046b6a2a43dc6ff6e770255f57328f89",
        "username": "18810706793"
    },
    "code": -1,
    "msg": "邮箱或密码不正确"
}
OR
{
    "data": {
        "qq_openid": "",
        "introduce": "?哈哈?",
        "id": 1004261911,
        "renren_openid": "",
        "nickname": "菲拉兔",
        "avatar": "http://image.xinli001.com/images/avatar.jpg",
        "sina_openid": ""
    },
    "token": "b845588abcf58804c99d289584cd6068",
    "code": 0,
    "expire": "1471280139"
}
```

------

##### `myuserinfo`:

[http://bapi.xinli001.com/fm2/myuserinfo.json/?key=046b6a2a43dc6ff6e770255f57328f89&token=b845588abcf58804c99d289584cd6068](https://link.jianshu.com/?t=http://bapi.xinli001.com/fm2/myuserinfo.json/?key=046b6a2a43dc6ff6e770255f57328f89&token=b845588abcf58804c99d289584cd6068)

##### `Request`:

```undefined
key 046b6a2a43dc6ff6e770255f57328f89
token   b845588abcf58804c99d289584cd6068
```

##### `Response`:

```json
{
    "data": {
        "msgnum": 0,
        "qiandao": true,
        "noticenum": 0,
        "introduce": "?哈哈?",
        "id": 1004261911,
        "nickname": "菲拉兔",
        "avatar": "http://image.xinli001.com/images/avatar.jpg",
        "bitcoin": 70
    },
    "code": 0
}
```