<?php

namespace Utils;

use Illuminate\Support\Facades\Storage;
use InterventionImage;

class PutFile
{
    public static function put_image($image): string
    {
        if (!$image) return "";
        $file_name = md5(uniqid(strval(rand()), true)).'.jpeg';
        InterventionImage::make($image)
                ->encode('jpeg')
                ->save("/tmp/".$file_name, 80);
        $path = Storage::disk('s3')->putFile('/images', "/tmp/".$file_name);
        $url = Storage::disk('s3')->url($path);
        logs()->info($url);
        return $url;
    }
}
