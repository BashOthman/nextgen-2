import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity()
export class Topic {
  @PrimaryColumn()
  Id: string;

  @Column({ nullable: true })
  ModifiedDateTime: string;

  @Column({ nullable: true })
  ExternalId: string;

  @Column({ nullable: true })
  Description: string;

  @Column({ nullable: true })
  Status: string;
}
