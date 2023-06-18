import { Credit } from "src/credits/credit/entities/credit.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class PersonalReference {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'numeric',
        precision: 8,
    })
    dni: number;

    @Column({
        type: 'varchar',
        length: 50,
    })
    first_name: string;

    @Column({
        type: 'varchar',
        length: 50,
    })
    last_name: string;

    @Column({
        type: 'varchar',
        length: 100,
    })
    address: string;

    @Column({
        type: 'varchar',
        length: 30,
    })
    relationship: string;

    @Column({
        type: 'varchar',
        length: 15,
    })
    phone: string;

    @Column({
        type: 'varchar',
        length: 50,
    })
    email: string;


    //! FK
    @ManyToOne(
        () => Credit,
        (credit) => credit.personalReference,
    )
    fk_credit: Credit

    //! auditoria

    @Column({
        type: 'varchar',
        length: 50,
    })
    user_create: string;

    @Column({
        type: 'varchar',
        length: 50,
    })
    user_update: string;

    @Column({
        type: 'timestamp',
    })
    created_at: string;

    @Column({
        type: 'timestamp',
    })
    updated_at: string;
}
