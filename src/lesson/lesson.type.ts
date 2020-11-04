import { Field, ObjectType } from '@nestjs/graphql';
import { StudentType } from '../student/student.type';

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
  @Field(() => [StudentType])
  students: number[];
}
