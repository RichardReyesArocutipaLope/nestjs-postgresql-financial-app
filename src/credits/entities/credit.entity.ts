import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { FinancialInterestRate, PeriodType } from "./";

@Entity()
export class Credit {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'int',
    })
    credit_number: number;

    @Column({
        type: 'numeric',
        precision: 10,
        scale: 2
    })
    requested_money: number;

    @Column({
        type: 'numeric',
        precision: 10,
        scale: 2
    })
    approved_money: number;

    @Column({
        type: 'timestamp',
    })
    date_of_issue: string;

    @Column({
        type: 'timestamp',
        nullable: true,
    })
    disbursement_date: string;


    @Column({
        type: 'int',
    })
    period: number;


    @Column({
        type: 'numeric',
        precision: 10,
        scale: 2
    })
    interest_rate: number;


    @Column({
        type: 'varchar',
        length: 2,
    })
    state: string;


    @Column({
        type: 'boolean',
        default: true
    })
    is_active: boolean;

    @Column({
        type: 'varchar',
        length: 300,
    })
    observation: string;

    //! FK
    @ManyToOne(
        () => FinancialInterestRate,
        (financialInterestRate) => financialInterestRate.credit,
    )
    fk_financial_interest: FinancialInterestRate

    //! FK
    @ManyToOne(
        () => PeriodType,
        (periodType) => periodType.credit,
    )
    fk_period_type: PeriodType


    //! auditoria

    @Column({
        type: 'varchar',
        length: 50,
    })
    user_create: string;

    @Column({
        type: 'varchar',
        length: 50,
    })
    user_update: string;

    @Column({
        type: 'timestamp',
    })
    created_at: string;

    @Column({
        type: 'timestamp',
    })
    updated_at: string;

}
