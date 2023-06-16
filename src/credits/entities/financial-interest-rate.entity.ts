import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Credit } from "./credit.entity";

@Entity()
export class FinancialInterestRate {
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

    // FK
    @OneToMany(
        ()=>Credit,
        (credit)=>credit.fk_financial_interest,
        { cascade: false }
    )
    credit:Credit

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
