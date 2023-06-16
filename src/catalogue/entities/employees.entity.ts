import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Employees {
    @PrimaryGeneratedColumn()
    id:number;

    @Column({
        type:'numeric',
        precision: 8,
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
        length:15,
    })
    phone2:string;

    @Column({
        type:'varchar',
        length:50,
    })
    email:string;

    @Column({
        type:'varchar',
        length:100,
    })
    address:string;

    @Column({
        type:'varchar',
        length:100,
    })
    address_reference:string;

    @Column({
        type:'boolean',
        default: true
    })
    is_active:boolean;


    // FK

    // auditoria
    
    @Column({
        type:'varchar',
        length:50,
    })
    user_create:string;

    @Column({
        type:'varchar',
        length:50,
    })
    user_update:string;

    @Column({
        type:'timestamp',
    })
    created_at:string;

    @Column({
        type:'timestamp',
    })
    updated_at:string;

}
