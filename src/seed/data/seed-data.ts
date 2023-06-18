
type ValidPeriodType = 'days' | 'weeks' | 'months' | 'years'
interface SeedPeriodType {
    name: ValidPeriodType;
}

type ValidFinancialInterestRate = 'simple' | 'compuesto'
interface SeedFinancialInterestRate {
    name: ValidFinancialInterestRate;
}

interface SeedEmployees {
    dni:number;
    firs_name:string;
    last_name:string;
    phone:string;
    phone2:string;
    email:string;
    address:string;
    address_reference:string;
}

type ValidHousingType='propia'|'alquilada'|'cedida'|'otra';
interface SeedHousingType {
    name:ValidHousingType
}

type ValidCivilStatus = 'soltero' | 'casado' | 'viudo' | 'divorciado'
interface SeedCivilStatus {
    name: ValidCivilStatus;
}

interface SeedData {
    periodType: SeedPeriodType[],
    financialInterestRate: SeedFinancialInterestRate[],
    employees: SeedEmployees[],
    housingType: SeedHousingType[],
    civilStatus: SeedCivilStatus[],
}



export const initialData: SeedData = {

    periodType: [
        {
            name: 'days'
        },
        {
            name: 'weeks'
        },
        {
            name: 'months'
        },
        {
            name: 'years'
        },
    ],

    financialInterestRate: [
        {
            name: 'simple'
        },
        {
            name: 'compuesto'
        },
    ],

    employees: [
        {
            dni:71283340,
            firs_name:'Richard Reyes',
            last_name:'Arocutipa Lope',
            phone:'+51925072688',
            phone2:'+51925033688',
            email:'richardreyesarocutipalope@gmail.com',
            address:'La perla MZ 7 LT 21',
            address_reference:'atras del local comunal los florales',
        },
        {
            dni:71113340,
            firs_name:'Kheyvin',
            last_name:'Arucutipa Cama',
            phone:'+51 992 517 309',
            phone2:'+51 882 517 309',
            email:'kheyvin@gmail.com',
            address:'unjbg',
            address_reference:'esis',
        },
        {
            dni:71223340,
            firs_name:'Rolando',
            last_name:'Gutierrez Cutipa',
            phone:'+51 937 377 599',
            phone2:'+51 887 377 599',
            email:'rolando@gmail.com',
            address:'unjbg',
            address_reference:'esis',
        },
        {
            dni:71333340,
            firs_name:'Victor',
            last_name:'Mireles bernabe',
            phone:'+51 955 014 274',
            phone2:'+51 885 014 274',
            email:'victor@gmail.com',
            address:'unjbg',
            address_reference:'esis',
        },
    ],

    housingType: [
        {
            name:'propia'
        },
        {
            name:'alquilada'
        },
        {
            name:'cedida'
        },
        {
            name:'otra'
        },
    ],

    civilStatus: [
        {
            name:'soltero'
        },
        {
            name:'casado'
        },
        {
            name:'viudo'
        },
        {
            name:'divorciado'
        },
    ]
}