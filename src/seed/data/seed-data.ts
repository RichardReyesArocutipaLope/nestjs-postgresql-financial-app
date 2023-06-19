
type ValidPeriodType = 'days' | 'weeks' | 'months' | 'years'
interface SeedPeriodType {
    name: ValidPeriodType;
    user_create: string;
    created_at: string;
}

type ValidFinancialInterestRate = 'simple' | 'compuesto'
interface SeedFinancialInterestRate {
    name: ValidFinancialInterestRate;
    user_create: string;
    created_at: string;
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
    user_create: string;
    created_at: string;
}

type ValidHousingType = 'propia' | 'alquilada' | 'cedida' | 'otra';
interface SeedHousingType {
    name: ValidHousingType
    user_create: string;
    created_at: string;
}

type ValidCivilStatus = 'soltero' | 'casado' | 'viudo' | 'divorciado'
interface SeedCivilStatus {
    name: ValidCivilStatus;
    user_create: string;
    created_at: string;
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
    user_create: string
    created_at: string
}
interface SeedAval {
    dni: number;
    first_name: string;
    last_name: string;
    phone: string;
    email: string;
    address: string;
    user_create: string;
    created_at: string;
}

interface SeedRef {
    dni: number;
    first_name: string;
    last_name: string;
    phone: string;
    email: string;
    address: string;
    user_create: string;
    created_at: string;
    relationship: string;
}

interface SeedCredit {
    requested_money: number
    date_of_issue: string
    period: number
    interest_rate: number
    state: string
    user_create: string
    created_at: string
    fk_employee_cobrador: number
    fk_employee_analista: number
    fk_financial_interest: number
    fk_period_type: number
    aval: SeedAval;
    personalReference: SeedRef
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
    user_create: string
    created_at: string
    observation: string
    is_active: boolean
    business: SeedBusiness
    credit: SeedCredit
}



interface SeedData {
    periodType: SeedPeriodType[],
    financialInterestRate: SeedFinancialInterestRate[],
    employees: SeedEmployees[],
    housingType: SeedHousingType[],
    civilStatus: SeedCivilStatus[],
    customers: SeedCustomers[]
}



export const initialData: SeedData = {

    periodType: [
        {
            name: 'days',
            user_create: 'richard',
            created_at: '2023-06-19 10:23:54'
        },
        {
            name: 'weeks',
            user_create: 'richard',
            created_at: '2023-06-19 10:23:54'
        },
        {
            name: 'months',
            user_create: 'richard',
            created_at: '2023-06-19 10:23:54'
        },
        {
            name: 'years',
            user_create: 'richard',
            created_at: '2023-06-19 10:23:54'
        },
    ],

    financialInterestRate: [
        {
            name: 'simple',
            user_create: 'richard',
            created_at: '2023-06-19 10:23:54'
        },
        {
            name: 'compuesto',
            user_create: 'richard',
            created_at: '2023-06-19 10:23:54'
        },
    ],

    housingType: [
        {
            name: 'propia',
            user_create: 'richard',
            created_at: '2023-06-19 10:23:54'
        },
        {
            name: 'alquilada',
            user_create: 'richard',
            created_at: '2023-06-19 10:23:54'
        },
        {
            name: 'cedida',
            user_create: 'richard',
            created_at: '2023-06-19 10:23:54'
        },
        {
            name: 'otra',
            user_create: 'richard',
            created_at: '2023-06-19 10:23:54'
        },
    ],

    civilStatus: [
        {
            name: 'soltero',
            user_create: 'richard',
            created_at: '2023-06-19 10:23:54'
        },
        {
            name: 'casado',
            user_create: 'richard',
            created_at: '2023-06-19 10:23:54'
        },
        {
            name: 'viudo',
            user_create: 'richard',
            created_at: '2023-06-19 10:23:54'
        },
        {
            name: 'divorciado',
            user_create: 'richard',
            created_at: '2023-06-19 10:23:54'
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
            user_create: 'richard',
            created_at: '2023-06-19 10:23:54'
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
            user_create: 'richard',
            created_at: '2023-06-19 10:23:54'
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
            user_create: 'richard',
            created_at: '2023-06-19 10:23:54'
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
            user_create: 'richard',
            created_at: '2023-06-19 10:23:54'
        },
    ],

    customers: [
        {
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
            user_create: "richard",
            created_at: "2023-06-19 10:23:54",
            observation: "observacion 111",
            is_active: false,
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
                user_create: "richard",
                created_at: "2023-06-19 10:23:54"
            },
            credit: {
                requested_money: 4500.00,
                date_of_issue: "2023-06-19 10:23:54",
                period: 15,
                interest_rate: 5.56,
                state: "NU",
                user_create: "richard",
                created_at: "2023-06-19 10:23:54",
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
                    user_create: "richard",
                    created_at: "2023-06-19 10:23:54"
                },
                personalReference: {
                    dni: 11111111,
                    first_name: "first_name reference 111",
                    last_name: "last_name reference 111",
                    phone: "+51 925 072 111",
                    email: "reference111@gmail.com",
                    address: "address 111",
                    relationship: "relationship111",
                    user_create: "richard",
                    created_at: "2023-06-19 10:23:54"
                }
            }
        },

        {
            dni: 22222222,
            first_name: "customer222 first_name",
            last_name: "customer222 last_name",
            phone: "+51 925 072 222",
            phone2: "+51 925 333 222",
            email: "customer222@gmail.com",
            address: "direccion222",
            address_reference: "referencia direccion 222",
            fk_civil_status: 2,
            fk_housing_type: 3,
            user_create: "richard",
            created_at: "2023-06-19 10:23:54",
            observation: "observacion 222",
            is_active: false,
            business: {
                business_description: "business_description 222",
                address: "address business 222",
                address_reference: "referencia business 222",
                daily_gain: 350.40,
                maximum_daily_gain: 750.34,
                minimum_daily_gain: 150.50,
                inventory_value: 85600.00,
                have_property_documents: true,
                observation: "observation 222",
                user_create: "richard",
                created_at: "2023-06-19 10:23:54"
            },
            credit: {
                requested_money: 4500.00,
                date_of_issue: "2023-06-19 10:23:54",
                period: 15,
                interest_rate: 5.56,
                state: "NU",
                user_create: "richard",
                created_at: "2023-06-19 10:23:54",
                fk_employee_cobrador: 2,
                fk_employee_analista: 1,
                fk_financial_interest: 1,
                fk_period_type: 2,
                aval: {
                    dni: 22222222,
                    first_name: "first_name aval 222",
                    last_name: "last_name aval 222",
                    phone: "+51 925 072 222",
                    email: "aval222@gmail.com",
                    address: "address 222",
                    user_create: "richard",
                    created_at: "2023-06-19 10:23:54"
                },
                personalReference: {
                    dni: 22222222,
                    first_name: "first_name reference 222",
                    last_name: "last_name reference 222",
                    phone: "+51 925 072 222",
                    email: "reference222@gmail.com",
                    address: "address 222",
                    relationship: "relationship222",
                    user_create: "richard",
                    created_at: "2023-06-19 10:23:54"
                }
            }
        },

        {
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
            user_create: "richard",
            created_at: "2023-06-19 10:23:54",
            observation: "observacion 333",
            is_active: false,
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
                user_create: "richard",
                created_at: "2023-06-19 10:23:54"
            },
            credit: {
                requested_money: 4500.00,
                date_of_issue: "2023-06-19 10:23:54",
                period: 15,
                interest_rate: 5.56,
                state: "NU",
                user_create: "richard",
                created_at: "2023-06-19 10:23:54",
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
                    user_create: "richard",
                    created_at: "2023-06-19 10:23:54"
                },
                personalReference: {
                    dni: 33333333,
                    first_name: "first_name reference 333",
                    last_name: "last_name reference 333",
                    phone: "+51 925 072 333",
                    email: "reference333@gmail.com",
                    address: "address 333",
                    relationship: "relationship333",
                    user_create: "richard",
                    created_at: "2023-06-19 10:23:54"
                }
            }
        },


        {
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
            user_create: "richard",
            created_at: "2023-06-19 10:23:54",
            observation: "observacion 444",
            is_active: false,
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
                user_create: "richard",
                created_at: "2023-06-19 10:23:54"
            },
            credit: {
                requested_money: 4500.00,
                date_of_issue: "2023-06-19 10:23:54",
                period: 15,
                interest_rate: 5.56,
                state: "NU",
                user_create: "richard",
                created_at: "2023-06-19 10:23:54",
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
                    user_create: "richard",
                    created_at: "2023-06-19 10:23:54"
                },
                personalReference: {
                    dni: 44444444,
                    first_name: "first_name reference 444",
                    last_name: "last_name reference 444",
                    phone: "+51 925 072 444",
                    email: "reference444@gmail.com",
                    address: "address 444",
                    relationship: "relationship444",
                    user_create: "richard",
                    created_at: "2023-06-19 10:23:54"
                }
            }
        },

        {
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
            user_create: "richard",
            created_at: "2023-06-19 10:23:54",
            observation: "observacion 555",
            is_active: false,
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
                user_create: "richard",
                created_at: "2023-06-19 10:23:54"
            },
            credit: {
                requested_money: 4500.00,
                date_of_issue: "2023-06-19 10:23:54",
                period: 15,
                interest_rate: 5.56,
                state: "NU",
                user_create: "richard",
                created_at: "2023-06-19 10:23:54",
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
                    user_create: "richard",
                    created_at: "2023-06-19 10:23:54"
                },
                personalReference: {
                    dni: 55555555,
                    first_name: "first_name reference 555",
                    last_name: "last_name reference 555",
                    phone: "+51 925 072 555",
                    email: "reference555@gmail.com",
                    address: "address 555",
                    relationship: "relationship555",
                    user_create: "richard",
                    created_at: "2023-06-19 10:23:54"
                }
            }
        },



        {
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
            user_create: "richard",
            created_at: "2023-06-19 10:23:54",
            observation: "observacion 666",
            is_active: false,
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
                user_create: "richard",
                created_at: "2023-06-19 10:23:54"
            },
            credit: {
                requested_money: 4500.00,
                date_of_issue: "2023-06-19 10:23:54",
                period: 15,
                interest_rate: 5.56,
                state: "NU",
                user_create: "richard",
                created_at: "2023-06-19 10:23:54",
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
                    user_create: "richard",
                    created_at: "2023-06-19 10:23:54"
                },
                personalReference: {
                    dni: 66666666,
                    first_name: "first_name reference 666",
                    last_name: "last_name reference 666",
                    phone: "+51 925 072 666",
                    email: "reference666@gmail.com",
                    address: "address 666",
                    relationship: "relationship666",
                    user_create: "richard",
                    created_at: "2023-06-19 10:23:54"
                }
            }
        },



        {
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
            user_create: "richard",
            created_at: "2023-06-19 10:23:54",
            observation: "observacion 777",
            is_active: false,
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
                user_create: "richard",
                created_at: "2023-06-19 10:23:54"
            },
            credit: {
                requested_money: 4500.00,
                date_of_issue: "2023-06-19 10:23:54",
                period: 15,
                interest_rate: 5.56,
                state: "NU",
                user_create: "richard",
                created_at: "2023-06-19 10:23:54",
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
                    user_create: "richard",
                    created_at: "2023-06-19 10:23:54"
                },
                personalReference: {
                    dni: 77777777,
                    first_name: "first_name reference 777",
                    last_name: "last_name reference 777",
                    phone: "+51 925 072 777",
                    email: "reference777@gmail.com",
                    address: "address 777",
                    relationship: "relationship777",
                    user_create: "richard",
                    created_at: "2023-06-19 10:23:54"
                }
            }
        },


        {
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
            user_create: "richard",
            created_at: "2023-06-19 10:23:54",
            observation: "observacion 888",
            is_active: false,
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
                user_create: "richard",
                created_at: "2023-06-19 10:23:54"
            },
            credit: {
                requested_money: 4500.00,
                date_of_issue: "2023-06-19 10:23:54",
                period: 15,
                interest_rate: 5.56,
                state: "NU",
                user_create: "richard",
                created_at: "2023-06-19 10:23:54",
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
                    user_create: "richard",
                    created_at: "2023-06-19 10:23:54"
                },
                personalReference: {
                    dni: 88888888,
                    first_name: "first_name reference 888",
                    last_name: "last_name reference 888",
                    phone: "+51 925 072 888",
                    email: "reference888@gmail.com",
                    address: "address 888",
                    relationship: "relationship888",
                    user_create: "richard",
                    created_at: "2023-06-19 10:23:54"
                }
            }
        },



        {
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
            user_create: "richard",
            created_at: "2023-06-19 10:23:54",
            observation: "observacion 999",
            is_active: false,
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
                user_create: "richard",
                created_at: "2023-06-19 10:23:54"
            },
            credit: {
                requested_money: 4500.00,
                date_of_issue: "2023-06-19 10:23:54",
                period: 15,
                interest_rate: 5.56,
                state: "NU",
                user_create: "richard",
                created_at: "2023-06-19 10:23:54",
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
                    user_create: "richard",
                    created_at: "2023-06-19 10:23:54"
                },
                personalReference: {
                    dni: 99999999,
                    first_name: "first_name reference 999",
                    last_name: "last_name reference 999",
                    phone: "+51 925 072 999",
                    email: "reference999@gmail.com",
                    address: "address 999",
                    relationship: "relationship999",
                    user_create: "richard",
                    created_at: "2023-06-19 10:23:54"
                }
            }
        },

        {
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
            user_create: "richard",
            created_at: "2023-06-19 10:23:54",
            observation: "observacion 101",
            is_active: false,
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
                user_create: "richard",
                created_at: "2023-06-19 10:23:54"
            },
            credit: {
                requested_money: 4500.00,
                date_of_issue: "2023-06-19 10:23:54",
                period: 15,
                interest_rate: 5.56,
                state: "NU",
                user_create: "richard",
                created_at: "2023-06-19 10:23:54",
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
                    user_create: "richard",
                    created_at: "2023-06-19 10:23:54"
                },
                personalReference: {
                    dni: 10101010,
                    first_name: "first_name reference 101",
                    last_name: "last_name reference 101",
                    phone: "+51 925 072 101",
                    email: "reference101@gmail.com",
                    address: "address 101",
                    relationship: "relationship101",
                    user_create: "richard",
                    created_at: "2023-06-19 10:23:54"
                }
            }
        },



        {
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
            user_create: "richard",
            created_at: "2023-06-19 10:23:54",
            observation: "observacion 110",
            is_active: false,
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
                user_create: "richard",
                created_at: "2023-06-19 10:23:54"
            },
            credit: {
                requested_money: 4500.00,
                date_of_issue: "2023-06-19 10:23:54",
                period: 15,
                interest_rate: 5.56,
                state: "NU",
                user_create: "richard",
                created_at: "2023-06-19 10:23:54",
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
                    user_create: "richard",
                    created_at: "2023-06-19 10:23:54"
                },
                personalReference: {
                    dni: 11001100,
                    first_name: "first_name reference 110",
                    last_name: "last_name reference 110",
                    phone: "+51 925 072 110",
                    email: "reference110@gmail.com",
                    address: "address 110",
                    relationship: "relationship110",
                    user_create: "richard",
                    created_at: "2023-06-19 10:23:54"
                }
            }
        },


        {
            dni: 12001200,
            first_name: "customer120 first_name",
            last_name: "customer120 last_name",
            phone: "+51 925 072 120",
            phone2: "+51 925 333 120",
            email: "customer120@gmail.com",
            address: "direccion120",
            address_reference: "referencia direccion 120",
            fk_civil_status: 2,
            fk_housing_type: 3,
            user_create: "richard",
            created_at: "2023-06-19 10:23:54",
            observation: "observacion 120",
            is_active: false,
            business: {
                business_description: "business_description 120",
                address: "address business 120",
                address_reference: "referencia business 120",
                daily_gain: 350.40,
                maximum_daily_gain: 750.34,
                minimum_daily_gain: 150.50,
                inventory_value: 85600.00,
                have_property_documents: true,
                observation: "observation 120",
                user_create: "richard",
                created_at: "2023-06-19 10:23:54"
            },
            credit: {
                requested_money: 4500.00,
                date_of_issue: "2023-06-19 10:23:54",
                period: 15,
                interest_rate: 5.56,
                state: "NU",
                user_create: "richard",
                created_at: "2023-06-19 10:23:54",
                fk_employee_cobrador: 2,
                fk_employee_analista: 1,
                fk_financial_interest: 1,
                fk_period_type: 2,
                aval: {
                    dni: 12001200,
                    first_name: "first_name aval 120",
                    last_name: "last_name aval 120",
                    phone: "+51 925 072 120",
                    email: "aval120@gmail.com",
                    address: "address 120",
                    user_create: "richard",
                    created_at: "2023-06-19 10:23:54"
                },
                personalReference: {
                    dni: 12001200,
                    first_name: "first_name reference 120",
                    last_name: "last_name reference 120",
                    phone: "+51 925 072 120",
                    email: "reference120@gmail.com",
                    address: "address 120",
                    relationship: "relationship120",
                    user_create: "richard",
                    created_at: "2023-06-19 10:23:54"
                }
            }
        },

    ]

}