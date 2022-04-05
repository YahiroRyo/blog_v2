<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ArticleController extends Controller
{
    protected $model = null;

    protected function _create($request) {
        $work = new $this->model();
        $work->fill($request->get_article_data());
        $work->save();
        return response([], 200);
    }

    protected function _edit($request) {
        $work = $this->model::where("id", $request->id)->first();
        $work->fill($request->get_article_data());
        $work->save();
        return response([], 200);
    }

    public function page(Request $request) {
        return $this->model::paginate(15);
    }

    public function delete(Request $request) {
        $this->model::where("id", $request->id)->delete();
        return response([], 200);
    }
}
