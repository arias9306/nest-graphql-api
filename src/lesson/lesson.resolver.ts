import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { LessonType } from './lesson.type';
import { LessonService } from './lesson.service';

@Resolver(LessonType)
export class LessonResolver {
  constructor(private readonly lessonService: LessonService) {}
  @Query(() => LessonType)
  lesson() {
    return {
      id: '123456',
      name: 'Andres',
      startDate: new Date().toISOString(),
      endDate: new Date().toISOString(),
    };
  }

  @Mutation(() => LessonType)
  createLesson(
    @Args('name') name: string,
    @Args('startDate') startDate: string,
    @Args('endDate') endDate: string,
  ) {
    return this.lessonService.createLessson(name, startDate, endDate);
  }
}
