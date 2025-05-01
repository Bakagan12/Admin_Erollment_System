import { Request, Response } from "express";
import personsRepo from "./persons.repo";

// 🔍 GET Persons
export async function get(req: Request, res: Response) {
  try {
    const query = req.query;
    const persons = await personsRepo.find(query);
    return res.status(200).json(persons);
  } catch (error) {
    console.error("Error fetching persons:", error);
    res.status(500).json({ message: "Failed to fetch persons", error });
  }
}

// ➕ INSERT Person
export async function insert(req: Request, res: Response) {
  const {
    first_name,
    last_name,
    middle_name,
    suffix_id,
    age,
    date_of_birth,
    place_of_birth,
    gender,
    citizenship,
    address,
    email,
    contact_no,
    student_guardian_id,
  } = req.body;

  try {
    const newPerson = await personsRepo.insert({
      first_name,
      last_name,
      middle_name,
      suffix_id,
      age,
      date_of_birth,
      place_of_birth,
      gender,
      citizenship,
      address,
      email,
      contact_no,
      student_guardian_id,
    });

    res.status(201).json({
      message: "Person created successfully",
      data: req.body,
    });
  } catch (error) {
    console.error("Error creating person:", error);
    res.status(500).json({ message: "Failed to create person", error });
  }
}

// ✏️ UPDATE Person
export async function update(req: Request, res: Response) {
  const id = req.params.id;

  const {
    first_name,
    last_name,
    middle_name,
    suffix_id,
    age,
    date_of_birth,
    place_of_birth,
    gender,
    citizenship,
    address,
    email,
    contact_no,
    student_guardian_id,
  } = req.body;

  try {
    const updatedPerson = await personsRepo.update(id, {
      first_name,
      last_name,
      middle_name,
      suffix_id,
      age,
      date_of_birth,
      place_of_birth,
      gender,
      citizenship,
      address,
      email,
      contact_no,
      student_guardian_id
    });

    res.status(200).json({
      message: "Person updated successfully",
      data: req.body,
    });
  } catch (error) {
    console.error("Error updating person:", error);
    res.status(500).json({ message: "Failed to update person", error });
  }
}
