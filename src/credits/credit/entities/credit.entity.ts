import { Aval } from "src/catalogue/avales/entities/aval.entity";
import { FinancialInterestRate } from "src/credits/financial-interest-rate/entities/financial-interest-rate.entity";
import { PeriodType } from "src/credits/period-type/entities/period-type.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { PersonalReference } from '../../../catalogue/personal-reference/entities/personal-reference.entity';
import { Customer } from "src/catalogue/customers/entities/customer.entity";
import { Employee } from "src/catalogue/employees/entities/employee.entity";


@Entity()
export class Credit {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'int',
        nullable: true,
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
        scale: 2,
        nullable: true,
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
        nullable: true,
    })
    state: string;


    @Column({
        type: 'boolean',
        default: true,
        nullable: true,
    })
    is_active: boolean;

    @Column({
        type: 'varchar',
        length: 300,
        nullable: true,
    })
    observation: string;

    //! FK
    @ManyToOne(
        () => Customer,
        (customer) => customer.credit,
        { eager: true }
    )
    fk_customer: Customer

    //! FK
    @ManyToOne(
        () => Employee,
        (employee) => employee.credit_cobrador,
        { eager: true }
    )
    fk_employee_cobrador: number

    //! FK
    @ManyToOne(
        () => Employee,
        (employee) => employee.credit_analista,
        { eager: true }
    )
    fk_employee_analista: number

    //! FK
    @ManyToOne(
        () => FinancialInterestRate,
        (financialInterestRate) => financialInterestRate.credit,
        { eager: true }
    )
    fk_financial_interest: number

    //! FK
    @ManyToOne(
        () => PeriodType,
        (periodType) => periodType.credit,
        { eager: true }
    )
    fk_period_type: number


    @OneToMany(
        () => Aval,
        (aval) => aval.fk_credit,
        { cascade: false, eager: true }
    )
    aval: Aval

    @OneToMany(
        () => PersonalReference,
        (personalReference) => personalReference.fk_credit,
        { cascade: false, eager: true }
    )
    personalReference: PersonalReference

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
