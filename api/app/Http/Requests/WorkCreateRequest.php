<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class WorkCreateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    public function get_article_data() {
        return $this->only(
            "title",
            "description",
            "contents"
        );
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            "title" => ["required", "max:100"],
            "description" => ["required", "max:1000"],
            "contents" => ["required", "max:15000"],
        ];
    }
}
