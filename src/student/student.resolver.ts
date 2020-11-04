import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { StudentType } from './student.type';
import { StudentService } from './student.service';
import { CreateStudentInput } from './create-student.input';

@Resolver(StudentType)
export class StudentResolver {
  constructor(private readonly studentService: StudentService) {}

  @Query(() => StudentType)
  student(@Args('id') id: number) {
    return this.studentService.getById(id);
  }

  @Query(() => [StudentType])
  students() {
    return this.studentService.getAll();
  }

  @Mutation(() => StudentType)
  createStudent(
    @Args('createStudentInput') createStudentInput: CreateStudentInput,
  ) {
    return this.studentService.create(createStudentInput);
  }
}
