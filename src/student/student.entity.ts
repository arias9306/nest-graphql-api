import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Student')
export class Student {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'first_name', nullable: false })
  firstName: string;

  @Column({ name: 'last_name', nullable: false })
  lastName: string;
}
