import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class CivilStatus {
    @PrimaryGeneratedColumn()
    id:number;

    @Column({
        type:'varchar',
        length:50,
    })
    name:string;
    
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
