<?php

namespace App\Http\Controllers;

use App\Models\UserTask;
use Illuminate\Http\Request;

class UserTaskController extends Controller
{
    public function index()
    {
        return UserTask::all();
    }

    public function show(UserTask $userTask)
    {
        return $userTask;
    }

    public function store(Request $request)
    {
        $userTask = UserTask::create($request->all());

        return response()->json($userTask, 201);
    }

    public function update(Request $request, UserTask $userTask)
    {
        $userTask->update($request->all());

        return response()->json($userTask, 200);
    }

    public function destroy(UserTask $userTask)
    {
        $userTask->delete();

        return response()->json(null, 204);
    }
}
