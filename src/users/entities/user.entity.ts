import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', unique: true })
  email: string;

  @Column({ type: 'text' })
  password: string;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'text' })
  lastname: string;

  @Column({ type: 'text' })
  identification: string;

  @Column({ type: 'text', nullable: true })
  picture: string;

  @Column({ type: 'varchar', nullable: true })
  phone: string;

  @Column({ type: 'text', nullable: true })
  gender: string;

  @Column({ type: 'text', nullable: true })
  birthday: string;

  @Column({ type: 'text', nullable: true })
  country: string;

  @Column({ type: 'text', nullable: true })
  state: string;

  @Column({ type: 'text', nullable: true })
  city: string;

  @Column({ type: 'text', nullable: true })
  address: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Column('boolean', { default: true })
  active: boolean;

  @DeleteDateColumn()
  deleted_at: Date;
}
