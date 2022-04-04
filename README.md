# ブログサイトリメイク
前回のブログサイトはめっちゃ機能もりもりだったのでシンプルなものにする

## 技術
### Docker
ローカルを汚したくないので
### Next.js
ちゃんと使ってみたかった
### Laravel
シュッとAPI生やせるよね
### MySQL
脳死(よくない)
### AWS
#### Lambda(Front, Back)
Lambdaｻｲｷｮｳ!!!
#### EC2(MySQL)
あんま金かけたくないからとりえあずEC2

## ページ一覧
### /works/page/{page_number}
実績一覧を閲覧できます
### /works/{id}
実績の内容を閲覧できます
### /blogs/page/{page_number}
ブログ一覧を閲覧できます
### /blogs/{id}
ブログの内容を閲覧できます

## API一覧
### /api/works/page/{page_number}
#### 説明
実績を返します
#### リクエスト
```json
{}
```
#### レスポンス
```json
{
    "current_page": "int",
    "first_page_url": "string",
    "from": "int",
    "last_page": "int",
    "last_page_url": "string",
    "links": "array",
    "next_page_url": "string",
    "path": "string",
    "per_page": "int",
    "prev_page_url": "string",
    "to": "int",
    "total": "int",
    "data": [
        {
            "id": "string",
            "title": "string",
            "description": "string",
            "created_at": "string",
        }
    ]
}
```
### /api/works/{id}
#### 説明
実績の内容を返します
#### リクエスト
```json
{}
```
#### レスポンス
```json
{
    "title": "string",
    "description": "string",
    "created_at": "string",
    "contents": "string(Markdown)",
}
```

### /api/blogs/page/{page_number}
#### 説明
ブログを返します
#### リクエスト
```json
{}
```
#### レスポンス
```json
{
    "current_page": "int",
    "first_page_url": "string",
    "from": "int",
    "last_page": "int",
    "last_page_url": "string",
    "links": "array",
    "next_page_url": "string",
    "path": "string",
    "per_page": "int",
    "prev_page_url": "string",
    "to": "int",
    "total": "int",
    "data": [
        {
            "id": "string",
            "title": "string",
            "description": "string",
            "created_at": "string",
        }
    ]
}
```

### /api/blogs/{id}
#### 説明
ブログの内容を返します
#### リクエスト
```json
{}
```
#### レスポンス
```json
{
    "title": "string",
    "description": "string",
    "created_at": "string",
    "contents": "string(Markdown)",
}
```

### /api/admin/blogs/create
#### 説明
ブログを作成します
#### リクエスト
```json
{
    "title": "string",
    "description": "string",
    "contents": "string(Markdown)",
}
```
#### レスポンス
```json
{}
```
### /api/admin/blogs/edit
#### 説明
ブログを編集します
#### リクエスト
```json
{
    "id": "string",
    "title": "string",
    "description": "string",
    "contents": "string(Markdown)",
}
```
#### レスポンス
```json
{}
```
### /api/admin/blogs/delete
#### 説明
ブログを削除します
#### リクエスト
```json
{
    "id": "string",
}
```
#### レスポンス
```json
{}
```

### /api/admin/works/create
#### 説明
ブログを作成します
#### リクエスト
```json
{
    "title": "string",
    "description": "string",
    "contents": "string(Markdown)",
}
```
#### レスポンス
```json
{}
```
### /api/admin/works/edit
#### 説明
ブログを編集します
#### リクエスト
```json
{
    "id": "string",
    "title": "string",
    "description": "string",
    "contents": "string(Markdown)",
}
```
#### レスポンス
```json
{}
```
### /api/admin/works/delete
#### 説明
ブログを削除します
#### リクエスト
```json
{
    "id": "string",
}
```
#### レスポンス
```json
{}
```