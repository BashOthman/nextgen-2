import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class Territory {
  @PrimaryColumn()
  Id: string;

  @Column({ nullable: true })
  ModifiedDateTime: string;

  @Column({ nullable: true })
  ExternalId: string;

  @Column({ nullable: true })
  ExternalParentId: string;

  @Column({ nullable: true })
  Name: string;
}
