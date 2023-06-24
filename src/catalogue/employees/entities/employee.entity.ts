import { User } from "src/auth/users/entities/user.entity";
import { Credit } from "src/credits/credit/entities/credit.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Employee {
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


    //! FK
    @OneToMany(
        () => Credit,
        (credit) => credit.fk_employee_cobrador,
        { cascade: false }
    )
    credit_cobrador: Credit

    //! FK
    @OneToMany(
        () => Credit,
        (credit) => credit.fk_employee_analista,
        { cascade: false }
    )
    credit_analista: Credit

    //! FK
    @OneToMany(
        () => User,
        (user) => user.fk_employee,
        { cascade: false }
    )
    user: User

    // auditoria

    @Column({
        type: 'varchar',
        length: 50,
        nullable: true,
    })
    user_create: string;

    @Column({
        type: 'varchar',
        length: 50,
        nullable: true,
    })
    user_update: string;

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
