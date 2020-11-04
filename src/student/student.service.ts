import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Student } from './student.entity';
import { CreateStudentInput } from './create-student.input';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>,
  ) {}

  async create(createStudentInput: CreateStudentInput): Promise<Student> {
    const { firstName, lastName } = createStudentInput;

    const student = this.studentRepository.create({
      firstName,
      lastName,
    });

    return this.studentRepository.save(student);
  }

  async getAll(): Promise<Student[]> {
    return this.studentRepository.find();
  }

  async getById(id: number): Promise<Student> {
    return this.studentRepository.findOne({ id });
  }

  async getManyStudents(ids: number[]): Promise<Student[]> {
    return this.studentRepository.findByIds(ids);
  }
}
