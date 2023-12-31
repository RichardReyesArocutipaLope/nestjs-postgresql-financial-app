import { Business } from "src/catalogue/business/entities/business.entity";
import { CivilStatus } from "src/catalogue/civil-status/entities/civil-status.entity";
import { HousingType } from "src/catalogue/housing-type/entities/housing-type.entity";
import { Credit } from "src/credits/credit/entities/credit.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Customer {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'numeric',
        precision: 8,
        unique: true,
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
        length: 15,
    })
    phone: string;

    @Column({
        type: 'varchar',
        length: 15,
        nullable: true,
    })
    phone2: string;

    @Column({
        type: 'varchar',
        length: 50,
        nullable: true,
    })
    email: string;

    @Column({
        type: 'varchar',
        length: 100,
    })
    address: string;

    @Column({
        type: 'varchar',
        length: 100,
        nullable: true,
    })
    address_reference: string;

    @Column({
        type: 'boolean',
        default: true
    })
    is_active: boolean;

    @Column({
        type: 'boolean',
        default: false
    })
    has_electricity_bill: boolean;

    @Column({
        type: 'boolean',
        default: false
    })
    is_over_21: boolean;

    @Column({
        type: 'boolean',
        default: false
    })
    have_valid_dni: boolean;

    @Column({
        type: 'boolean',
        default: false
    })
    have_property_documents: boolean;

    @Column({
        type: 'varchar',
        length: 300,
        nullable: true,
    })
    observation: string;

    //! FK
    @OneToMany(
        () => Credit,
        (credit) => credit.fk_customer,
        { cascade: false }
    )
    credit: Credit

    //! FK
    @ManyToOne(
        () => CivilStatus,
        (civil_status) => civil_status.customer,
        {eager:true}
    )
    fk_civil_status: number

    //! FK
    @ManyToOne(
        () => HousingType,
        (housing_type) => housing_type.customer,
        {eager:true}
    )
    fk_housing_type: number

    @OneToOne(()=>Business, {eager:true})
    @JoinColumn()
    business: Business
    // auditoria

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
        type: 'timestamp',
        nullable: true,
    })
    created_at: string;

    @Column({
        type: 'timestamp',
        nullable: true,
    })
    updated_at: string;

}
