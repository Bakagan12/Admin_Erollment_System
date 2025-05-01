import db from "../../../config/db";

export class reportsRepo {
    static async getReports(term_id: number | null, role_id: number | null, status_id: number | null){
        const getData = db('gen_users')
            .leftJoin('persons', 'persons.id', 'gen_users.person_id')
            .leftJoin('gen_user_roles', 'gen_user_roles.gen_user_id', 'gen_users.id')
            .leftJoin('user_roles', 'user_roles.id', 'gen_user_roles.user_role_id')
            .leftJoin('students', 'students.person_id', 'persons.id')
            .leftJoin('term', 'term.id', 'students.term_id')
            .select('persons.*', 'term.term_name', 'user_roles.role_name');
        if(term_id){
            getData.where('term.id', term_id)
        }
        if(role_id){
            getData.where('gen_user_roles.user_role_id', role_id)
        }
        if(status_id){
            getData.where('gen_users.status_id', status_id)
        }
        return await getData;
    }
}