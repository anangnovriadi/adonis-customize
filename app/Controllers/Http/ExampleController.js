'use strict'

const Database = use('Database');

class ExampleController {
    async index ({ request, response }) {
        const data = await Database.table('users').select('*');
        // return response.status(200).json({
        //     'name': request.name,
        //     'age': 12
        // })

        return response.json({
            name: 'FOUND',
            data: data
        })
    }
}

module.exports = ExampleController
