import { Field, InputType, ID } from '@nestjs/graphql';

@InputType()
export class AssignStudentsToLesson {

  @Field(() => [ID])
  studentsIds: number[];

  @Field(() => ID)
  lessonId: string;


}