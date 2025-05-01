import db from "../../../../config/db";
import { Request } from "../../../../models/request";

// repository/request.ts
export class Requesting {
    static async PostRequest(req: Request): Promise<any> {
        const [id] = await db("request").insert({
            gen_user_id: req.gen_user_id,
            user_role_id: req.user_role_id,
            request_to: req.request_to,
            request_name: req.request_name,
            description: req.description,
            quantity: req.quantity,
            unit: req.unit,
            restock_needed: req.restock_needed,
            is_deleted: 0,
        });

        return await db("request").where("id", id).first();
    }

    static async GetRequests() {
        const data = await db("request")
          .leftJoin('students', 'students.id', 'request.student_id')
          .leftJoin('persons', 'persons.id', 'students.person_id')
          .leftJoin('suffix', 'suffix.id', 'persons.suffix_id')
          .select(
            "request.*", 
            "persons.first_name", 
            'persons.middle_name', 
            'persons.last_name', 
            'suffix.suffix_name'
          )
          .where("request.is_deleted", 0);
      return data; 
    }

    static async UpdateRequest(id: number, updatedData: Partial<Request>) {
        await db("request").where("id", id).update(updatedData);
        return await db("request").where("id", id).first();
    }

    static async DeleteRequest(id: number) {
        await db("request").where("id", id).update({ is_deleted: 1 });
        return { message: "Deleted successfully" };
    }

    static async FindRequest(id: number) {
        return await db("request").where({ id, is_deleted: 0 }).first();
    }
}

