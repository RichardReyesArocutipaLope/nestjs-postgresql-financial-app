import { Employee } from "src/catalogue/employees/entities/employee.entity";
import { Role } from "src/security/roles/entities/role.entity";
import { BeforeInsert, BeforeUpdate, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class User {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({
        type: 'varchar',
        length: 50,
        unique: true
    })
    full_name: string;

    @Column({
        type: 'text',
        select:false
    })
    password: string;

    @Column({
        type: 'boolean',
        default: true,
    })
    is_active: boolean;

    //! FK
    @ManyToOne(
        () => Employee,
        (employee) => employee.user,
    )
    fk_employee: number

    //! FK
    @ManyToOne(
        () => Role,
        (role) => role.user,
    )
    fk_role: Role | number


    //! auditoria

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

    @BeforeInsert()
    checkFullNameBeforeInsert(){
        this.full_name=this.full_name.toLowerCase().trim();
    }

    @BeforeUpdate()
    checkFullNameBeforeUpdate(){
        this.full_name=this.full_name.toLowerCase().trim();
    }
}
