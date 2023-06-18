
type ValidPeriodType = 'days' | 'weeks' | 'months' | 'years'
interface SeedPeriodType {
    name: ValidPeriodType;
    user_create:string;
    created_at:string;
}

type ValidFinancialInterestRate = 'simple' | 'compuesto'
interface SeedFinancialInterestRate {
    name: ValidFinancialInterestRate;
    user_create:string;
    created_at:string;
}

interface SeedEmployees {
    dni:number;
    first_name:string;
    last_name:string;
    phone:string;
    phone2:string;
    email:string;
    address:string;
    address_reference:string;
    user_create:string;
    created_at:string;
}

type ValidHousingType='propia'|'alquilada'|'cedida'|'otra';
interface SeedHousingType {
    name:ValidHousingType
    user_create:string;
    created_at:string;
}

type ValidCivilStatus = 'soltero' | 'casado' | 'viudo' | 'divorciado'
interface SeedCivilStatus {
    name: ValidCivilStatus;
    user_create:string;
    created_at:string;
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
            name: 'days',
            user_create:'richard',
            created_at:'2023-06-19 10:23:54'
        },
        {
            name: 'weeks',
            user_create:'richard',
            created_at:'2023-06-19 10:23:54'
        },
        {
            name: 'months',
            user_create:'richard',
            created_at:'2023-06-19 10:23:54'
        },
        {
            name: 'years',
            user_create:'richard',
            created_at:'2023-06-19 10:23:54'
        },
    ],

    financialInterestRate: [
        {
            name: 'simple',
            user_create:'richard',
            created_at:'2023-06-19 10:23:54'
        },
        {
            name: 'compuesto',
            user_create:'richard',
            created_at:'2023-06-19 10:23:54'
        },
    ],

    housingType: [
        {
            name:'propia',
            user_create:'richard',
            created_at:'2023-06-19 10:23:54'
        },
        {
            name:'alquilada',
            user_create:'richard',
            created_at:'2023-06-19 10:23:54'
        },
        {
            name:'cedida',
            user_create:'richard',
            created_at:'2023-06-19 10:23:54'
        },
        {
            name:'otra',
            user_create:'richard',
            created_at:'2023-06-19 10:23:54'
        },
    ],

    civilStatus: [
        {
            name:'soltero',
            user_create:'richard',
            created_at:'2023-06-19 10:23:54'
        },
        {
            name:'casado',
            user_create:'richard',
            created_at:'2023-06-19 10:23:54'
        },
        {
            name:'viudo',
            user_create:'richard',
            created_at:'2023-06-19 10:23:54'
        },
        {
            name:'divorciado',
            user_create:'richard',
            created_at:'2023-06-19 10:23:54'
        },
    ],
    employees: [
        {
            dni:71283340,
            first_name:'Richard Reyes',
            last_name:'Arocutipa Lope',
            phone:'+51925072688',
            phone2:'+51925033688',
            email:'richardreyesarocutipalope@gmail.com',
            address:'La perla MZ 7 LT 21',
            address_reference:'atras del local comunal los florales',
            user_create:'richard',
            created_at:'2023-06-19 10:23:54'
        },
        {
            dni:71113340,
            first_name:'Kheyvin',
            last_name:'Arucutipa Cama',
            phone:'+51 992 517 309',
            phone2:'+51 882 517 309',
            email:'kheyvin@gmail.com',
            address:'unjbg',
            address_reference:'esis',
            user_create:'richard',
            created_at:'2023-06-19 10:23:54'
        },
        {
            dni:71223340,
            first_name:'Rolando',
            last_name:'Gutierrez Cutipa',
            phone:'+51 937 377 599',
            phone2:'+51 887 377 599',
            email:'rolando@gmail.com',
            address:'unjbg',
            address_reference:'esis',
            user_create:'richard',
            created_at:'2023-06-19 10:23:54'
        },
        {
            dni:71333340,
            first_name:'Victor',
            last_name:'Mireles bernabe',
            phone:'+51 955 014 274',
            phone2:'+51 885 014 274',
            email:'victor@gmail.com',
            address:'unjbg',
            address_reference:'esis',
            user_create:'richard',
            created_at:'2023-06-19 10:23:54'
        },
    ],

}