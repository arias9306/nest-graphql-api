import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType('Lesson')
export class LessonType {
  @Field()
  id: string;
  @Field()
  name: string;
  @Field()
  startDate: string;
  @Field()
  endDate: string;
}
