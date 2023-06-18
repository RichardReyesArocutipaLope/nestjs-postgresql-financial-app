import { Customer } from "src/catalogue/customers/entities/customer.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

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

    //! FK
    @OneToMany(
        ()=>Customer,
        (customer)=>customer.fk_civil_status,
        { cascade: false }
    )
    customer:Customer

    // auditoria
    
    @Column({
        type:'varchar',
        length:50,
        nullable: true,
    })
    user_create:string;

    @Column({
        type:'varchar',
        length:50,
        nullable: true,
    })
    user_update:string;

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
