<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
use Illuminate\Http\Request;

Route::get('/', function () {
    return view('welcome');
});
Route::get('/users',function(){
  return \App\User::all();

});
Route::post('/users',function(Request $request){
  $user = \App\User::where('username',$request->get('username'))
                    ->where('password',$request->get('password'))->first();
  if($user)
  return ['message'=> true,'user'=>$user];
  else return ["error"=>"username not Found"];
});
