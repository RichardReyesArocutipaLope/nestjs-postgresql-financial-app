
type ValidPeriodType = 'days' | 'weeks' | 'months' | 'years'
interface SeedPeriodType {
    name: ValidPeriodType;
}

type ValidFinancialInterestRate = 'simple' | 'compuesto'
interface SeedFinancialInterestRate {
    name: ValidFinancialInterestRate;
}

interface SeedEmployees {
    dni: number;
    first_name: string;
    last_name: string;
    phone: string;
    phone2: string;
    email: string;
    address: string;
    address_reference: string;
}

interface seedRoles {
    name: string;
}

type ValidHousingType = 'propia' | 'alquilada' | 'cedida' | 'otra';
interface SeedHousingType {
    name: ValidHousingType
}

type ValidCivilStatus = 'soltero' | 'casado' | 'viudo' | 'divorciado'
interface SeedCivilStatus {
    name: ValidCivilStatus;
}




interface SeedBusiness {
    business_description: string
    address: string
    address_reference: string
    daily_gain: number
    maximum_daily_gain: number
    minimum_daily_gain: number
    inventory_value: number
    have_property_documents: boolean
    observation: string
}
interface SeedAval {
    dni: number;
    first_name: string;
    last_name: string;
    phone: string;
    email: string;
    address: string;
}
interface SeedRef {
    dni: number;
    first_name: string;
    last_name: string;
    phone: string;
    email: string;
    address: string;
    relationship: string;
}
interface SeedCustomers {
    dni: number
    first_name: string
    last_name: string
    phone: string
    phone2: string
    email: string
    address: string
    address_reference: string
    fk_civil_status: number
    fk_housing_type: number
    observation: string
    is_active: boolean
}

interface SeedCredit {
    requested_money: number
    date_of_issue: string
    period: number
    interest_rate: number
    state: string
    fk_employee_cobrador: number
    fk_employee_analista: number
    fk_financial_interest: number
    fk_period_type: number
    aval: SeedAval;
    personalReference: SeedRef
    customer: SeedCustomers;
    business: SeedBusiness;
}

interface SeedUsers {
    full_name: string,
    password: string,
    fk_employee: number,
    fk_role?: number,
}


interface SeedData {
    periodType: SeedPeriodType[],
    financialInterestRate: SeedFinancialInterestRate[],
    housingType: SeedHousingType[],
    civilStatus: SeedCivilStatus[],
    roles: seedRoles[],
    firsEmployee: SeedEmployees,
    firstUser: SeedUsers,
    employees: SeedEmployees[],
    credits: SeedCredit[]
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

    housingType: [
        {
            name: 'propia'
        },
        {
            name: 'alquilada'
        },
        {
            name: 'cedida'
        },
        {
            name: 'otra'
        },
    ],

    civilStatus: [
        {
            name: 'soltero'
        },
        {
            name: 'casado'
        },
        {
            name: 'viudo'
        },
        {
            name: 'divorciado'
        },
    ],
    employees: [
        {
            dni: 71283340,
            first_name: 'Richard Reyes',
            last_name: 'Arocutipa Lope',
            phone: '+51925072688',
            phone2: '+51925033688',
            email: 'richardreyesarocutipalope@gmail.com',
            address: 'La perla MZ 7 LT 21',
            address_reference: 'atras del local comunal los florales',
        },
        {
            dni: 71113340,
            first_name: 'Kheyvin',
            last_name: 'Arucutipa Cama',
            phone: '+51 992 517 309',
            phone2: '+51 882 517 309',
            email: 'kheyvin@gmail.com',
            address: 'unjbg',
            address_reference: 'esis',
        },
        {
            dni: 71223340,
            first_name: 'Rolando',
            last_name: 'Gutierrez Cutipa',
            phone: '+51 937 377 599',
            phone2: '+51 887 377 599',
            email: 'rolando@gmail.com',
            address: 'unjbg',
            address_reference: 'esis',
        },
        {
            dni: 71333340,
            first_name: 'Victor',
            last_name: 'Mireles bernabe',
            phone: '+51 955 014 274',
            phone2: '+51 885 014 274',
            email: 'victor@gmail.com',
            address: 'unjbg',
            address_reference: 'esis',
        },
    ],


    roles: [
        {
            name: 'administrador',
        },
        {
            name: 'analista',
        },
        {
            name: 'cajero',
        },
        {
            name: 'cobrador',
        },
    ],

    firsEmployee:{
        dni: 78787878,
        first_name: 'super',
        last_name: 'employee',
        phone: '+77777777777',
        phone2: '+77777777777',
        email: 'superemployee@gmail.com',
        address: 'superemployee',
        address_reference: 'superemployee',
    },

    firstUser:{
        full_name: "superusuario",
        password: "Password123",
        fk_employee: 1,
    },

    credits: [
        {
            requested_money: 4500.00,
            date_of_issue: "2023-06-19 10:23:54",
            period: 15,
            interest_rate: 5.56,
            state: "NU",
            fk_employee_cobrador: 2,
            fk_employee_analista: 1,
            fk_financial_interest: 1,
            fk_period_type: 2,
            aval: {
                dni: 11111111,
                first_name: "first_name aval 111",
                last_name: "last_name aval 111",
                phone: "+51 925 072 111",
                email: "aval111@gmail.com",
                address: "address 111",
            },
            personalReference: {
                dni: 11111111,
                first_name: "first_name reference 111",
                last_name: "last_name reference 111",
                phone: "+51 925 072 111",
                email: "reference111@gmail.com",
                address: "address 111",
                relationship: "relationship111",
            },
            customer: {
                dni: 11111111,
                first_name: "customer111 first_name",
                last_name: "customer111 last_name",
                phone: "+51 925 072 111",
                phone2: "+51 925 333 111",
                email: "customer111@gmail.com",
                address: "direccion111",
                address_reference: "referencia direccion 111",
                fk_civil_status: 2,
                fk_housing_type: 3,
                observation: "observacion 111",
                is_active: false,
            },
            business: {
                business_description: "business_description 111",
                address: "address business 111",
                address_reference: "referencia business 111",
                daily_gain: 350.40,
                maximum_daily_gain: 750.34,
                minimum_daily_gain: 150.50,
                inventory_value: 85600.00,
                have_property_documents: true,
                observation: "observation 111",
            },
        },

        {
            requested_money: 4500.00,
            date_of_issue: "2023-06-19 10:23:54",
            period: 15,
            interest_rate: 5.56,
            state: "NU",
            fk_employee_cobrador: 2,
            fk_employee_analista: 1,
            fk_financial_interest: 1,
            fk_period_type: 2,
            aval: {
                dni: 33333333,
                first_name: "first_name aval 333",
                last_name: "last_name aval 333",
                phone: "+51 925 072 333",
                email: "aval333@gmail.com",
                address: "address 333",
            },
            personalReference: {
                dni: 33333333,
                first_name: "first_name reference 333",
                last_name: "last_name reference 333",
                phone: "+51 925 072 333",
                email: "reference333@gmail.com",
                address: "address 333",
                relationship: "relationship333",
            },
            customer: {
                dni: 33333333,
                first_name: "customer333 first_name",
                last_name: "customer333 last_name",
                phone: "+51 925 072 333",
                phone2: "+51 925 333 333",
                email: "customer333@gmail.com",
                address: "direccion333",
                address_reference: "referencia direccion 333",
                fk_civil_status: 2,
                fk_housing_type: 3,
                observation: "observacion 333",
                is_active: false,
            },
            business: {
                business_description: "business_description 333",
                address: "address business 333",
                address_reference: "referencia business 333",
                daily_gain: 350.40,
                maximum_daily_gain: 750.34,
                minimum_daily_gain: 150.50,
                inventory_value: 85600.00,
                have_property_documents: true,
                observation: "observation 333",
            },
        },



        {
            requested_money: 4500.00,
            date_of_issue: "2023-06-19 10:23:54",
            period: 15,
            interest_rate: 5.56,
            state: "NU",
            fk_employee_cobrador: 2,
            fk_employee_analista: 1,
            fk_financial_interest: 1,
            fk_period_type: 2,
            aval: {
                dni: 44444444,
                first_name: "first_name aval 444",
                last_name: "last_name aval 444",
                phone: "+51 925 072 444",
                email: "aval444@gmail.com",
                address: "address 444",
            },
            personalReference: {
                dni: 44444444,
                first_name: "first_name reference 444",
                last_name: "last_name reference 444",
                phone: "+51 925 072 444",
                email: "reference444@gmail.com",
                address: "address 444",
                relationship: "relationship444",
            },
            customer: {
                dni: 44444444,
                first_name: "customer444 first_name",
                last_name: "customer444 last_name",
                phone: "+51 925 072 444",
                phone2: "+51 925 333 444",
                email: "customer444@gmail.com",
                address: "direccion444",
                address_reference: "referencia direccion 444",
                fk_civil_status: 2,
                fk_housing_type: 3,
                observation: "observacion 444",
                is_active: false,
            },
            business: {
                business_description: "business_description 444",
                address: "address business 444",
                address_reference: "referencia business 444",
                daily_gain: 350.40,
                maximum_daily_gain: 750.34,
                minimum_daily_gain: 150.50,
                inventory_value: 85600.00,
                have_property_documents: true,
                observation: "observation 444",
            },
        },



        {
            requested_money: 4500.00,
            date_of_issue: "2023-06-19 10:23:54",
            period: 15,
            interest_rate: 5.56,
            state: "NU",
            fk_employee_cobrador: 2,
            fk_employee_analista: 1,
            fk_financial_interest: 1,
            fk_period_type: 2,
            aval: {
                dni: 55555555,
                first_name: "first_name aval 555",
                last_name: "last_name aval 555",
                phone: "+51 925 072 555",
                email: "aval555@gmail.com",
                address: "address 555",
            },
            personalReference: {
                dni: 55555555,
                first_name: "first_name reference 555",
                last_name: "last_name reference 555",
                phone: "+51 925 072 555",
                email: "reference555@gmail.com",
                address: "address 555",
                relationship: "relationship555",
            },
            customer: {
                dni: 55555555,
                first_name: "customer555 first_name",
                last_name: "customer555 last_name",
                phone: "+51 925 072 555",
                phone2: "+51 925 333 555",
                email: "customer555@gmail.com",
                address: "direccion555",
                address_reference: "referencia direccion 555",
                fk_civil_status: 2,
                fk_housing_type: 3,
                observation: "observacion 555",
                is_active: false,
            },
            business: {
                business_description: "business_description 555",
                address: "address business 555",
                address_reference: "referencia business 555",
                daily_gain: 350.40,
                maximum_daily_gain: 750.34,
                minimum_daily_gain: 150.50,
                inventory_value: 85600.00,
                have_property_documents: true,
                observation: "observation 555",
            },
        },



        {
            requested_money: 4500.00,
            date_of_issue: "2023-06-19 10:23:54",
            period: 15,
            interest_rate: 5.56,
            state: "NU",
            fk_employee_cobrador: 2,
            fk_employee_analista: 1,
            fk_financial_interest: 1,
            fk_period_type: 2,
            aval: {
                dni: 66666666,
                first_name: "first_name aval 666",
                last_name: "last_name aval 666",
                phone: "+51 925 072 666",
                email: "aval666@gmail.com",
                address: "address 666",
            },
            personalReference: {
                dni: 66666666,
                first_name: "first_name reference 666",
                last_name: "last_name reference 666",
                phone: "+51 925 072 666",
                email: "reference666@gmail.com",
                address: "address 666",
                relationship: "relationship666",
            },
            customer: {
                dni: 66666666,
                first_name: "customer666 first_name",
                last_name: "customer666 last_name",
                phone: "+51 925 072 666",
                phone2: "+51 925 333 666",
                email: "customer666@gmail.com",
                address: "direccion666",
                address_reference: "referencia direccion 666",
                fk_civil_status: 2,
                fk_housing_type: 3,
                observation: "observacion 666",
                is_active: false,
            },
            business: {
                business_description: "business_description 666",
                address: "address business 666",
                address_reference: "referencia business 666",
                daily_gain: 350.40,
                maximum_daily_gain: 750.34,
                minimum_daily_gain: 150.50,
                inventory_value: 85600.00,
                have_property_documents: true,
                observation: "observation 666",
            },
        },



        {
            requested_money: 4500.00,
            date_of_issue: "2023-06-19 10:23:54",
            period: 15,
            interest_rate: 5.56,
            state: "NU",
            fk_employee_cobrador: 2,
            fk_employee_analista: 1,
            fk_financial_interest: 1,
            fk_period_type: 2,
            aval: {
                dni: 77777777,
                first_name: "first_name aval 777",
                last_name: "last_name aval 777",
                phone: "+51 925 072 777",
                email: "aval777@gmail.com",
                address: "address 777",
            },
            personalReference: {
                dni: 77777777,
                first_name: "first_name reference 777",
                last_name: "last_name reference 777",
                phone: "+51 925 072 777",
                email: "reference777@gmail.com",
                address: "address 777",
                relationship: "relationship777",
            },
            customer: {
                dni: 77777777,
                first_name: "customer777 first_name",
                last_name: "customer777 last_name",
                phone: "+51 925 072 777",
                phone2: "+51 925 333 777",
                email: "customer777@gmail.com",
                address: "direccion777",
                address_reference: "referencia direccion 777",
                fk_civil_status: 2,
                fk_housing_type: 3,
                observation: "observacion 777",
                is_active: false,
            },
            business: {
                business_description: "business_description 777",
                address: "address business 777",
                address_reference: "referencia business 777",
                daily_gain: 350.40,
                maximum_daily_gain: 750.34,
                minimum_daily_gain: 150.50,
                inventory_value: 85600.00,
                have_property_documents: true,
                observation: "observation 777",
            },
        },


        {
            requested_money: 4500.00,
            date_of_issue: "2023-06-19 10:23:54",
            period: 15,
            interest_rate: 5.56,
            state: "NU",
            fk_employee_cobrador: 2,
            fk_employee_analista: 1,
            fk_financial_interest: 1,
            fk_period_type: 2,
            aval: {
                dni: 88888888,
                first_name: "first_name aval 888",
                last_name: "last_name aval 888",
                phone: "+51 925 072 888",
                email: "aval888@gmail.com",
                address: "address 888",
            },
            personalReference: {
                dni: 88888888,
                first_name: "first_name reference 888",
                last_name: "last_name reference 888",
                phone: "+51 925 072 888",
                email: "reference888@gmail.com",
                address: "address 888",
                relationship: "relationship888",
            },
            customer: {
                dni: 88888888,
                first_name: "customer888 first_name",
                last_name: "customer888 last_name",
                phone: "+51 925 072 888",
                phone2: "+51 925 333 888",
                email: "customer888@gmail.com",
                address: "direccion888",
                address_reference: "referencia direccion 888",
                fk_civil_status: 2,
                fk_housing_type: 3,
                observation: "observacion 888",
                is_active: false,
            },
            business: {
                business_description: "business_description 888",
                address: "address business 888",
                address_reference: "referencia business 888",
                daily_gain: 350.40,
                maximum_daily_gain: 750.34,
                minimum_daily_gain: 150.50,
                inventory_value: 85600.00,
                have_property_documents: true,
                observation: "observation 888",
            },
        },



        {
            requested_money: 4500.00,
            date_of_issue: "2023-06-19 10:23:54",
            period: 15,
            interest_rate: 5.56,
            state: "NU",
            fk_employee_cobrador: 2,
            fk_employee_analista: 1,
            fk_financial_interest: 1,
            fk_period_type: 2,
            aval: {
                dni: 99999999,
                first_name: "first_name aval 999",
                last_name: "last_name aval 999",
                phone: "+51 925 072 999",
                email: "aval999@gmail.com",
                address: "address 999",
            },
            personalReference: {
                dni: 99999999,
                first_name: "first_name reference 999",
                last_name: "last_name reference 999",
                phone: "+51 925 072 999",
                email: "reference999@gmail.com",
                address: "address 999",
                relationship: "relationship999",
            },
            customer: {
                dni: 99999999,
                first_name: "customer999 first_name",
                last_name: "customer999 last_name",
                phone: "+51 925 072 999",
                phone2: "+51 925 333 999",
                email: "customer999@gmail.com",
                address: "direccion999",
                address_reference: "referencia direccion 999",
                fk_civil_status: 2,
                fk_housing_type: 3,
                observation: "observacion 999",
                is_active: false,
            },
            business: {
                business_description: "business_description 999",
                address: "address business 999",
                address_reference: "referencia business 999",
                daily_gain: 350.40,
                maximum_daily_gain: 750.34,
                minimum_daily_gain: 150.50,
                inventory_value: 85600.00,
                have_property_documents: true,
                observation: "observation 999",
            },
        },



        {
            requested_money: 4500.00,
            date_of_issue: "2023-06-19 10:23:54",
            period: 15,
            interest_rate: 5.56,
            state: "NU",
            fk_employee_cobrador: 2,
            fk_employee_analista: 1,
            fk_financial_interest: 1,
            fk_period_type: 2,
            aval: {
                dni: 10101010,
                first_name: "first_name aval 101",
                last_name: "last_name aval 101",
                phone: "+51 925 072 101",
                email: "aval101@gmail.com",
                address: "address 101",
            },
            personalReference: {
                dni: 10101010,
                first_name: "first_name reference 101",
                last_name: "last_name reference 101",
                phone: "+51 925 072 101",
                email: "reference101@gmail.com",
                address: "address 101",
                relationship: "relationship101",
            },
            customer: {
                dni: 10101010,
                first_name: "customer101 first_name",
                last_name: "customer101 last_name",
                phone: "+51 925 072 101",
                phone2: "+51 925 333 101",
                email: "customer101@gmail.com",
                address: "direccion101",
                address_reference: "referencia direccion 101",
                fk_civil_status: 2,
                fk_housing_type: 3,
                observation: "observacion 101",
                is_active: false,
            },
            business: {
                business_description: "business_description 101",
                address: "address business 101",
                address_reference: "referencia business 101",
                daily_gain: 350.40,
                maximum_daily_gain: 750.34,
                minimum_daily_gain: 150.50,
                inventory_value: 85600.00,
                have_property_documents: true,
                observation: "observation 101",
            },
        },



        {
            requested_money: 4500.00,
            date_of_issue: "2023-06-19 10:23:54",
            period: 15,
            interest_rate: 5.56,
            state: "NU",
            fk_employee_cobrador: 2,
            fk_employee_analista: 1,
            fk_financial_interest: 1,
            fk_period_type: 2,
            aval: {
                dni: 11001100,
                first_name: "first_name aval 110",
                last_name: "last_name aval 110",
                phone: "+51 925 072 110",
                email: "aval110@gmail.com",
                address: "address 110",
            },
            personalReference: {
                dni: 11001100,
                first_name: "first_name reference 110",
                last_name: "last_name reference 110",
                phone: "+51 925 072 110",
                email: "reference110@gmail.com",
                address: "address 110",
                relationship: "relationship110",
            },
            customer: {
                dni: 11001100,
                first_name: "customer110 first_name",
                last_name: "customer110 last_name",
                phone: "+51 925 072 110",
                phone2: "+51 925 333 110",
                email: "customer110@gmail.com",
                address: "direccion110",
                address_reference: "referencia direccion 110",
                fk_civil_status: 2,
                fk_housing_type: 3,
                observation: "observacion 110",
                is_active: false,
            },
            business: {
                business_description: "business_description 110",
                address: "address business 110",
                address_reference: "referencia business 110",
                daily_gain: 350.40,
                maximum_daily_gain: 750.34,
                minimum_daily_gain: 150.50,
                inventory_value: 85600.00,
                have_property_documents: true,
                observation: "observation 110",
            },
        },



        {
            requested_money: 4500.00,
            date_of_issue: "2023-06-19 10:23:54",
            period: 15,
            interest_rate: 5.56,
            state: "NU",
            fk_employee_cobrador: 2,
            fk_employee_analista: 1,
            fk_financial_interest: 1,
            fk_period_type: 2,
            aval: {
                dni: 12121212,
                first_name: "first_name aval 121",
                last_name: "last_name aval 121",
                phone: "+51 925 072 121",
                email: "aval121@gmail.com",
                address: "address 121",
            },
            personalReference: {
                dni: 12121212,
                first_name: "first_name reference 121",
                last_name: "last_name reference 121",
                phone: "+51 925 072 121",
                email: "reference121@gmail.com",
                address: "address 121",
                relationship: "relationship121",
            },
            customer: {
                dni: 12121212,
                first_name: "customer121 first_name",
                last_name: "customer121 last_name",
                phone: "+51 925 072 121",
                phone2: "+51 925 333 121",
                email: "customer121@gmail.com",
                address: "direccion121",
                address_reference: "referencia direccion 121",
                fk_civil_status: 2,
                fk_housing_type: 3,
                observation: "observacion 121",
                is_active: false,
            },
            business: {
                business_description: "business_description 121",
                address: "address business 121",
                address_reference: "referencia business 121",
                daily_gain: 350.40,
                maximum_daily_gain: 750.34,
                minimum_daily_gain: 150.50,
                inventory_value: 85600.00,
                have_property_documents: true,
                observation: "observation 121",
            },
        },


        {
            requested_money: 4500.00,
            date_of_issue: "2023-06-19 10:23:54",
            period: 15,
            interest_rate: 5.56,
            state: "NU",
            fk_employee_cobrador: 2,
            fk_employee_analista: 1,
            fk_financial_interest: 1,
            fk_period_type: 2,
            aval: {
                dni: 13131313,
                first_name: "first_name aval 131",
                last_name: "last_name aval 131",
                phone: "+51 925 072 131",
                email: "aval131@gmail.com",
                address: "address 131",
            },
            personalReference: {
                dni: 13131313,
                first_name: "first_name reference 131",
                last_name: "last_name reference 131",
                phone: "+51 925 072 131",
                email: "reference131@gmail.com",
                address: "address 131",
                relationship: "relationship131",
            },
            customer: {
                dni: 13131313,
                first_name: "customer131 first_name",
                last_name: "customer131 last_name",
                phone: "+51 925 072 131",
                phone2: "+51 925 333 131",
                email: "customer131@gmail.com",
                address: "direccion131",
                address_reference: "referencia direccion 131",
                fk_civil_status: 2,
                fk_housing_type: 3,
                observation: "observacion 131",
                is_active: false,
            },
            business: {
                business_description: "business_description 131",
                address: "address business 131",
                address_reference: "referencia business 131",
                daily_gain: 350.40,
                maximum_daily_gain: 750.34,
                minimum_daily_gain: 150.50,
                inventory_value: 85600.00,
                have_property_documents: true,
                observation: "observation 131",
            },
        },


        {
            requested_money: 4500.00,
            date_of_issue: "2023-06-19 10:23:54",
            period: 15,
            interest_rate: 5.56,
            state: "NU",
            fk_employee_cobrador: 2,
            fk_employee_analista: 1,
            fk_financial_interest: 1,
            fk_period_type: 2,
            aval: {
                dni: 14141414,
                first_name: "first_name aval 141",
                last_name: "last_name aval 141",
                phone: "+51 925 072 141",
                email: "aval141@gmail.com",
                address: "address 141",
            },
            personalReference: {
                dni: 14141414,
                first_name: "first_name reference 141",
                last_name: "last_name reference 141",
                phone: "+51 925 072 141",
                email: "reference141@gmail.com",
                address: "address 141",
                relationship: "relationship141",
            },
            customer: {
                dni: 14141414,
                first_name: "customer141 first_name",
                last_name: "customer141 last_name",
                phone: "+51 925 072 141",
                phone2: "+51 925 333 141",
                email: "customer141@gmail.com",
                address: "direccion141",
                address_reference: "referencia direccion 141",
                fk_civil_status: 2,
                fk_housing_type: 3,
                observation: "observacion 141",
                is_active: false,
            },
            business: {
                business_description: "business_description 141",
                address: "address business 141",
                address_reference: "referencia business 141",
                daily_gain: 350.40,
                maximum_daily_gain: 750.34,
                minimum_daily_gain: 150.50,
                inventory_value: 85600.00,
                have_property_documents: true,
                observation: "observation 141",

            },
        },



        {
            requested_money: 4500.00,
            date_of_issue: "2023-06-19 10:23:54",
            period: 15,
            interest_rate: 5.56,
            state: "NU",
            fk_employee_cobrador: 2,
            fk_employee_analista: 1,
            fk_financial_interest: 1,
            fk_period_type: 2,
            aval: {
                dni: 15151515,
                first_name: "first_name aval 151",
                last_name: "last_name aval 151",
                phone: "+51 925 072 151",
                email: "aval151@gmail.com",
                address: "address 151",
            },
            personalReference: {
                dni: 15151515,
                first_name: "first_name reference 151",
                last_name: "last_name reference 151",
                phone: "+51 925 072 151",
                email: "reference151@gmail.com",
                address: "address 151",
                relationship: "relationship151",
            },
            customer: {
                dni: 15151515,
                first_name: "customer151 first_name",
                last_name: "customer151 last_name",
                phone: "+51 925 072 151",
                phone2: "+51 925 333 151",
                email: "customer151@gmail.com",
                address: "direccion151",
                address_reference: "referencia direccion 151",
                fk_civil_status: 2,
                fk_housing_type: 3,
                observation: "observacion 151",
                is_active: false,
            },
            business: {
                business_description: "business_description 151",
                address: "address business 151",
                address_reference: "referencia business 151",
                daily_gain: 350.40,
                maximum_daily_gain: 750.34,
                minimum_daily_gain: 150.50,
                inventory_value: 85600.00,
                have_property_documents: true,
                observation: "observation 151",
            },
        },



        {
            requested_money: 4500.00,
            date_of_issue: "2023-06-19 10:23:54",
            period: 15,
            interest_rate: 5.56,
            state: "NU",
            fk_employee_cobrador: 2,
            fk_employee_analista: 1,
            fk_financial_interest: 1,
            fk_period_type: 2,
            aval: {
                dni: 16161616,
                first_name: "first_name aval 161",
                last_name: "last_name aval 161",
                phone: "+51 925 072 161",
                email: "aval161@gmail.com",
                address: "address 161",
            },
            personalReference: {
                dni: 16161616,
                first_name: "first_name reference 161",
                last_name: "last_name reference 161",
                phone: "+51 925 072 161",
                email: "reference161@gmail.com",
                address: "address 161",
                relationship: "relationship161",
            },
            customer: {
                dni: 16161616,
                first_name: "customer161 first_name",
                last_name: "customer161 last_name",
                phone: "+51 925 072 161",
                phone2: "+51 925 333 161",
                email: "customer161@gmail.com",
                address: "direccion161",
                address_reference: "referencia direccion 161",
                fk_civil_status: 2,
                fk_housing_type: 3,
                observation: "observacion 161",
                is_active: false,
            },
            business: {
                business_description: "business_description 161",
                address: "address business 161",
                address_reference: "referencia business 161",
                daily_gain: 350.40,
                maximum_daily_gain: 750.34,
                minimum_daily_gain: 150.50,
                inventory_value: 85600.00,
                have_property_documents: true,
                observation: "observation 161",
            },
        },


        {
            requested_money: 4500.00,
            date_of_issue: "2023-06-19 10:23:54",
            period: 15,
            interest_rate: 5.56,
            state: "NU",
            fk_employee_cobrador: 2,
            fk_employee_analista: 1,
            fk_financial_interest: 1,
            fk_period_type: 2,
            aval: {
                dni: 17171717,
                first_name: "first_name aval 171",
                last_name: "last_name aval 171",
                phone: "+51 925 072 171",
                email: "aval171@gmail.com",
                address: "address 171",
            },
            personalReference: {
                dni: 17171717,
                first_name: "first_name reference 171",
                last_name: "last_name reference 171",
                phone: "+51 925 072 171",
                email: "reference171@gmail.com",
                address: "address 171",
                relationship: "relationship171",
            },
            customer: {
                dni: 17171717,
                first_name: "customer171 first_name",
                last_name: "customer171 last_name",
                phone: "+51 925 072 171",
                phone2: "+51 925 333 171",
                email: "customer171@gmail.com",
                address: "direccion171",
                address_reference: "referencia direccion 171",
                fk_civil_status: 2,
                fk_housing_type: 3,
                observation: "observacion 171",
                is_active: false,
            },
            business: {
                business_description: "business_description 171",
                address: "address business 171",
                address_reference: "referencia business 171",
                daily_gain: 350.40,
                maximum_daily_gain: 750.34,
                minimum_daily_gain: 150.50,
                inventory_value: 85600.00,
                have_property_documents: true,
                observation: "observation 171",
            },
        },



        {
            requested_money: 4500.00,
            date_of_issue: "2023-06-19 10:23:54",
            period: 15,
            interest_rate: 5.56,
            state: "NU",
            fk_employee_cobrador: 2,
            fk_employee_analista: 1,
            fk_financial_interest: 1,
            fk_period_type: 2,
            aval: {
                dni: 18181818,
                first_name: "first_name aval 181",
                last_name: "last_name aval 181",
                phone: "+51 925 072 181",
                email: "aval181@gmail.com",
                address: "address 181",
            },
            personalReference: {
                dni: 18181818,
                first_name: "first_name reference 181",
                last_name: "last_name reference 181",
                phone: "+51 925 072 181",
                email: "reference181@gmail.com",
                address: "address 181",
                relationship: "relationship181",
            },
            customer: {
                dni: 18181818,
                first_name: "customer181 first_name",
                last_name: "customer181 last_name",
                phone: "+51 925 072 181",
                phone2: "+51 925 333 181",
                email: "customer181@gmail.com",
                address: "direccion181",
                address_reference: "referencia direccion 181",
                fk_civil_status: 2,
                fk_housing_type: 3,
                observation: "observacion 181",
                is_active: false,
            },
            business: {
                business_description: "business_description 181",
                address: "address business 181",
                address_reference: "referencia business 181",
                daily_gain: 350.40,
                maximum_daily_gain: 750.34,
                minimum_daily_gain: 150.50,
                inventory_value: 85600.00,
                have_property_documents: true,
                observation: "observation 181",
            },
        },
    ]



}