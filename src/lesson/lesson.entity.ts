import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Student } from '../student/student.entity';

@Entity()
export class Lesson {
  @PrimaryGeneratedColumn()
  id: string;
  @Column()
  name: string;
  @Column()
  startDate: string;
  @Column()
  endDate: string;

  @ManyToMany(
    () => Student,
    student => student.lessons,
    {
      cascade: true,
    },
  )
  @JoinTable()
  students: Student[];
}
