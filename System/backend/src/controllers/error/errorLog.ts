import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity()
export class ErrorLog {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  code!: string;

  @Column()
  detail!: string;

  @Column()
  pointer!: string;

  @Column()
  attribute!: string;

  @CreateDateColumn()
  createdAt!: Date;
}