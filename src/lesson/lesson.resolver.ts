import { Query, Resolver } from '@nestjs/graphql';
import { LessonType } from './lesson.type';

@Resolver(LessonType)
export class LessonResolver {
  @Query(() => LessonType)
  lesson() {
    return {
      id: '123456',
      name: 'Andres',
      startDate: new Date().toISOString(),
      endDate: new Date().toISOString(),
    };
  }
}
