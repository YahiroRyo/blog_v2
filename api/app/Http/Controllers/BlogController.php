<?php

namespace App\Http\Controllers;

use App\Http\Requests\BlogCreateRequest;
use App\Http\Requests\BlogEditRequest;
use App\Models\Blog;

class BlogController extends ArticleController
{
    protected $model = Blog::class;

    public function create(BlogCreateRequest $request) {
        parent::_create($request);
    }
    public function edit(BlogEditRequest $request) {
        $article = $this->model::where("id", $request->id)->first();
        $article->fill($request->get_article_data());
        $article->save();
        return response([], 200);
    }
}
