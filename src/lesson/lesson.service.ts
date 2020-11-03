import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Lesson } from './lesson.entity';

@Injectable()
export class LessonService {
  constructor(
    @InjectRepository(Lesson)
    private readonly lessonRepository: Repository<Lesson>,
  ) {}

  async createLessson(
    name: string,
    startDate: string,
    endDate: string,
  ): Promise<Lesson> {
    const lesson = this.lessonRepository.create({
      name,
      startDate,
      endDate,
    });

    return this.lessonRepository.save(lesson);
  }
}
