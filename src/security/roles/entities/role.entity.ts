import { User } from "src/auth/users/entities/user.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Role {
    @PrimaryGeneratedColumn()
    id: string;

    @Column({
        type: 'varchar',
        length: 50,
    })
    name: string;

    //! FK
    @OneToMany(
        () => User,
        (user) => user.fk_role,
        { cascade: false }
    )
    user: User

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
