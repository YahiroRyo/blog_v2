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
        parent::_create($request);
    }
}
