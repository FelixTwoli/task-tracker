<?php

namespace Database\Factories;

use App\Models\UserTask;
use Illuminate\Database\Eloquent\Factories\Factory;

class UserTaskFactory extends Factory
{
    protected $model = UserTask::class;

    public function definition()
    {
        return [
            'user_id' => $this->faker->numberBetween(1, 10),
            'task_id' => $this->faker->numberBetween(1, 10),
        ];
    }
}


