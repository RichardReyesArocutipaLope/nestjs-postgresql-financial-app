import { Customer } from "src/catalogue/customers/entities/customer.entity";
import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Business {
    @PrimaryGeneratedColumn()
    id:number;

    @Column({
        type:'varchar',
        length:200,
    })
    business_description:string;

    @Column({
        type:'varchar',
        length:100,
    })
    address:string;

    @Column({
        type:'varchar',
        length:100,
        nullable: true,
    })
    address_reference:string;

    @Column({
        type:'numeric',
        precision:10,
        scale:2
    })
    daily_gain:number;

    @Column({
        type:'numeric',
        precision:10,
        scale:2
    })
    maximum_daily_gain:number;

    @Column({
        type:'numeric',
        precision:10,
        scale:2
    })
    minimum_daily_gain:number;

    @Column({
        type:'numeric',
        precision:10,
        scale:2
    })
    inventory_value:number;


    @Column({
        type:'boolean',
        default: false
    })
    have_property_documents:boolean;

    @Column({
        type:'boolean',
        default: false
    })
    have_vouchers:boolean;

    @Column({
        type:'varchar',
        length:200,
        nullable: true,
    })
    observation:string;

    //! FK
    @OneToOne(() => Customer, customer => customer.business)
    customer: Customer;

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
