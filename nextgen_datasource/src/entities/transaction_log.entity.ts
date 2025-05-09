import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TransactionLog')
export class TransactionLog {
  @PrimaryColumn()
  Id: string;

  @Column({ type: 'text', nullable: true })
  ModifiedDateTime: string;

  @Column({ type: 'text', nullable: true })
  Name: string;

  @Column({ type: 'text', nullable: true })
  ErrorMessage: string;

  @Column({ type: 'text', nullable: true })
  Success: string;

  @Column({ type: 'text', nullable: true })
  Direction: string;

  @Column({ type: 'text', nullable: true })
  LogType: string;

  @Column({ type: 'text', nullable: true })
  Owner: string;

  @Column({ type: 'text', nullable: true })
  ProcessCompletionTime: string;
}
