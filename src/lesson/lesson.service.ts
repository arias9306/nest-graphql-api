import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Lesson } from './lesson.entity';
import { CreateLessonInput } from './lesson.input';

@Injectable()
export class LessonService {
  constructor(
    @InjectRepository(Lesson)
    private readonly lessonRepository: Repository<Lesson>,
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
    return this.lessonRepository.findOne(id);
  }
}
