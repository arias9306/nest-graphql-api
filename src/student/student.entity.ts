import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Lesson } from '../lesson/lesson.entity';

@Entity('Student')
export class Student {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'first_name', nullable: false })
  firstName: string;

  @Column({ name: 'last_name', nullable: false })
  lastName: string;

  @ManyToMany(
    () => Lesson,
    lesson => lesson.students,
  )
  lessons: Lesson[];
}
