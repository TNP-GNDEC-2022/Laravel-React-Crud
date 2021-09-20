<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;

class postController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        error_log("ran");
        $found_posts = Post::latest()->get();
        return response()->json(["status" => 200, "posts" => $found_posts]);
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // error_log("ran");
        $newPost = Post::create([
            "Title" => $request->Title,
            "Description" => $request->Description,
            "Category" => $request->Category
        ]);
        if($newPost){
            return response()->json(["status" => 200]);
        }
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
        $found_post = Post::find($id);
        return response()->json(["status" => 200, "post" => $found_post]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
        $found_post = Post::find($id);
        $found_post->Title = $request->Title;
        $found_post->Description = $request->Description;
        $found_post->Category = $request->Category;
        if($found_post->save()){
            return response()->json(["status" => 200]);
        }
        return response()->json(["status" => 201]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
        error_log("ran1");
        $found_post = Post::find($id);
        if($found_post->delete()){
            return response()->json(["status" => 200]);
        }
    }
}
