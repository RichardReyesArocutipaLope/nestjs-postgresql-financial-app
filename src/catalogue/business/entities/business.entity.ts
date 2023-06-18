import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

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
        default: true
    })
    have_property_documents:boolean;

    @Column({
        type:'boolean',
        default: true
    })
    have_vouchers:boolean;

    @Column({
        type:'varchar',
        length:200,
    })
    observation:string;

    //! FK


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
