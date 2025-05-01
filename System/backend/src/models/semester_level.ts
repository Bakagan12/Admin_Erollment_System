import db from "../config/db";

export class SemesterLevel {
    id?: number;
    semester_level_name: string;
    term_id: number;
    grade_level_id: number;
    is_current: number;
    status_id: number;

    constructor(
        id: number,
        semester_level_name: string,
        term_id: number,
        grade_level_id: number,
        is_current: number,
        status_id: number,
    ){
        this.id = id;
        this.semester_level_name = semester_level_name;
        this.term_id = term_id;
        this.grade_level_id = grade_level_id;
        this.is_current = is_current;
        this.status_id = status_id;
    }
    static async getAll() {
       const result = await db('semester_level')
                    .where({is_current: 1})
                    .where({status_id: 1})
                    .select('*');
        return result.map(row => new SemesterLevel(
            row.id,
            row.semester_level_name,
            row.term_id,
            row.grade_level_id,
            row.is_current,
            row.status_id
        ));
    }
}