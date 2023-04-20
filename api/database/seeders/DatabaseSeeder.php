<?php
namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\Task;
use App\Models\Status;
use App\Models\UserTask;

class DatabaseSeeder extends Seeder
{
    public function run()
    {
        User::factory(10)->create();

        Status::create(['name' => 'New']);
        Status::create(['name' => 'In Progress']);
        Status::create(['name' => 'On Hold']);
        Status::create(['name' => 'Completed']);

        Task::factory(50)->create();

        UserTask::factory(100)->create();
    }
}

