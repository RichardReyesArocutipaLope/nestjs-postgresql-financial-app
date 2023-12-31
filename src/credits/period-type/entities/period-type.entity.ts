import { Credit } from "src/credits/credit/entities/credit.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class PeriodType {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'varchar',
        length: 50,
    })
    name: string;

    @Column({
        type: 'boolean',
        default: true
    })
    is_active: boolean;

    // FK
    @OneToMany(
        () => Credit,
        (credit) => credit.fk_period_type,
        { cascade: false }
    )
    credit: Credit

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
