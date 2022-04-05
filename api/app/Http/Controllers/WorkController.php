<?php

namespace App\Http\Controllers;

use App\Http\Requests\WorkCreateRequest;
use App\Http\Requests\WorkEditRequest;
use App\Models\Work;

class WorkController extends ArticleController
{
    protected $model = Work::class;

    public function create(WorkCreateRequest $request) {
        parent::_create($request);
    }
    public function edit(WorkEditRequest $request) {
        parent::_create($request);
    }
}
