import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Lesson } from './lesson.entity';
import { CreateLessonInput } from './lesson.input';
import { StudentService } from '../student/student.service';
import { Student } from '../student/student.entity';

@Injectable()
export class LessonService {
  constructor(
    @InjectRepository(Lesson)
    private readonly lessonRepository: Repository<Lesson>,
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>,
  ) {}

  async createLessson(createLessonInput: CreateLessonInput): Promise<Lesson> {
    const { name, startDate, endDate } = createLessonInput;
    const lesson = this.lessonRepository.create({
      name,
      startDate,
      endDate,
    });

    return this.lessonRepository.save(lesson);
  }

  async getLesson(id: string): Promise<Lesson> {
    return this.lessonRepository.findOne(id, {
      relations: ['students'],
    });
  }

  async getLessons(): Promise<Lesson[]> {
    return this.lessonRepository.find({
      relations: ['students'],
    });
  }

  async assignStudentsToLesson(
    lessonId: string,
    studentsIds: number[],
  ): Promise<Lesson> {
    const lesson = await this.lessonRepository.findOne({ id: lessonId });
    const students = await this.studentRepository.findByIds(studentsIds);
    lesson.students = students;
    return this.lessonRepository.save(lesson);
  }
}
