<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
         // \App\Models\User::factory(10)->create();
        $this->call(RoleSeeder::class);
       
        $user = User::create([
            'nama' => 'Megawaty',
            'username' => 'Mega',
            'nomor_identitas' => '12345',
            'alamat' => 'palu',
            'foto' => 'palu',
            // 'email' => 'megawaty@gmail.com',
            'password' => Hash::make('admin')
        ]);
        $user->assignRole('admin');
    }
}
