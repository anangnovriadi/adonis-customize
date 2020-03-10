'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

// Route.on('/').render('welcome')
// Route.get('/a', async ({response}) => {
//     response.send({
//         'name': 'joss'
//     })
// })
Route.on('/').render('welcome');
Route.post('/joss/joss', 'App/Controllers/Http/ExampleController.index');
Route.post('/joss/email', 'App/Controllers/Http/UserController.send');

Route.group(() => {
    Route.get('/', async ({ response }) => {
      return response.send({ message: 'Welcome to Adonis' })
    })

    Route.post('/joss/joss', 'App/Controllers/Http/ExampleController.index');

    Route.get('/hello/joss', async ({ response }) => {
        return response.send({ message: 'Welcome to Adonis Joss' })
      })
}).prefix('api')
