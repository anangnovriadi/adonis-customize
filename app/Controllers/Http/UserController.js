'use strict'

const Mail = use('Mail')

class UserController {
    async send({ request, response }) {
        const data = {
            'email': request.body.email,
            'username': 'nangning'
        }

        Mail.send('mail.email', data, (message) => {
            message.to(request.body.email)
            .from('nangning123z@gmail.com')
            .subject('Joss Adonis')
        })
        
        return response.json({
            'message': 'Successfully send'
        })
    }
}

module.exports = UserController
