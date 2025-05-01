import db from "../../../config/db";
const bcrypt = require('bcryptjs');

export class Suffix{
    static async get_all_suffix() {
        return db('suffix')
        .select('id', 'suffix_name');
    }
}