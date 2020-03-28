const connection = require('../database/connection');

module.exports = {
    async create(request, response){
        const { email } = request.body;

        const ong = await connection('ongs')
        .where('email', email)
        .select('id', 'name')
        .first();
    if(!ong) {
        return response.status(400).json( {error: 'No ONG found with thiw ID'});
    }
        return response.json(ong);
    }
}