import { Credit } from "src/credits/credit/entities/credit.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Aval {
    @PrimaryGeneratedColumn()
    id:number;

    @Column({
        type:'numeric',
        precision: 8,
        unique: true,
    })
    dni:number;
    
    @Column({
        type:'varchar',
        length:50,
    })
    first_name:string;

    @Column({
        type:'varchar',
        length:50,
    })
    last_name:string;

    @Column({
        type:'varchar',
        length:15,
    })
    phone:string;

    @Column({
        type:'varchar',
        length:50,
        nullable: true,
    })
    email:string;

    @Column({
        type:'varchar',
        length:100,
    })
    address:string;

    //! FK
    @ManyToOne(
        () => Credit,
        (credit) => credit.aval,
    )
    fk_credit: Credit | number

    //! auditoria
    
    @Column({
        type: 'text',
        array: true,
        default: []
    })
    user_create: string[];

    @Column({
        type: 'text',
        array: true,
        default: []
    })
    user_update: string[];

    @Column({
        type:'timestamp',
        nullable: true,
    })
    created_at:string;

    @Column({
        type:'timestamp',
        nullable: true,
    })
    updated_at:string;
 
}
