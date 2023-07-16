import * as bcrypt from 'bcrypt'

type ValidPeriodType = 'días' | 'semanas' | 'meses' | 'años'
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
    aval: SeedAval[];
    personalReference: SeedRef[]
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
    users: SeedUsers[],
    employees: SeedEmployees[],
    credits: SeedCredit[]
}



export const initialData: SeedData = {

    periodType: [
        {
            name: 'días'
        },
        {
            name: 'semanas'
        },
        {
            name: 'meses'
        },
        {
            name: 'años'
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
            address: 'Cl. Daniel Marroquín # 63 Hab. 591',
            address_reference: 'Cl. Daniel Marroquín # 63 Hab. 591',
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
        {
            dni: 34237645,
            first_name: 'Jean Carlo',
            last_name: 'Gómez Condori',
            phone: '+51 345 014 274',
            phone2: '+51 765 014 274',
            email: 'jeancarlo@gmail.com',
            address: 'unjbg',
            address_reference: 'esis',
        },
        {
            dni: 87457629,
            first_name: 'Juan Alberto',
            last_name: 'Flores Pari,',
            phone: '+51 655 014 274',
            phone2: '+51 472 014 274',
            email: 'alberto@gmail.com',
            address: 'unjbg',
            address_reference: 'esis',
        },
        {
            dni: 65683674,
            first_name: 'Elio Yasmani',
            last_name: 'Ccama Ccama',
            phone: '+51 955 014 274',
            phone2: '+51 456 014 274',
            email: 'elio@gmail.com',
            address: 'unjbg',
            address_reference: 'esis',
        },
        {
            dni: 72849590,
            first_name: 'Juan Luis',
            last_name: 'Condori Flores',
            phone: '+51 904 483 375',
            phone2: '+51 683 014 567',
            email: 'juan@gmail.com',
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

    firsEmployee: {
        dni: 78787878,
        first_name: 'super',
        last_name: 'employee',
        phone: '+77777777777',
        phone2: '+77777777777',
        email: 'superemployee@gmail.com',
        address: 'superemployee',
        address_reference: 'superemployee',
    },

    firstUser: {
        full_name: "superusuario",
        password: bcrypt.hashSync('Password123', 10),
        fk_employee: 1,
    },

    users: [
        {
            full_name: "administrador",
            password: "Password123",
            fk_employee: 2,
            fk_role: 1
        },
        {
            full_name: "analista",
            password: "Password123",
            fk_employee: 3,
            fk_role: 2
        },
        {
            full_name: "analista2",
            password: "Password123",
            fk_employee: 4,
            fk_role: 2
        },
        {
            full_name: "analista3",
            password: "Password123",
            fk_employee: 5,
            fk_role: 2
        },
        {
            full_name: "cajero",
            password: "Password123",
            fk_employee: 6,
            fk_role: 3
        },
        {
            full_name: "cobrador",
            password: "Password123",
            fk_employee: 7,
            fk_role: 4
        },
        {
            full_name: "cobrador2",
            password: "Password123",
            fk_employee: 8,
            fk_role: 4
        },
        {
            full_name: "cobrador3",
            password: "Password123",
            fk_employee: 9,
            fk_role: 4
        },
    ],


    credits: [
        {
            requested_money: 5070.21,
            date_of_issue: "2020-07-12 00:31:07",
            period: 11,
            interest_rate: 11.05,
            state: "NU",
            fk_employee_cobrador: 7,
            fk_employee_analista: 3,
            fk_financial_interest: 1,
            fk_period_type: 2,
            aval: [{
                dni: 71802615,
                first_name: "Rogelio Salvador",
                last_name: "Torp Cole",
                phone: "+51 304 557 160",
                email: "Rhiannon30@hotmail.com",
                address: "24541 Lauryn Hills Apt. 223"
            },],
            personalReference: [{
                dni: 71838241,
                first_name: "Richard Aaron",
                last_name: "Senger Jenkins",
                phone: "+51 170 380 794",
                email: "Dangelo52@yahoo.com",
                address: "867 Stracke Light Suite 880",
                relationship: "Architect"
            },],
            customer: {
                dni: 71251923,
                first_name: "Ernest Jermaine",
                last_name: "Harris White",
                phone: "+51 800 508 945",
                phone2: "+51 504 967 800",
                email: "Lukas32@gmail.com",
                address: "870 Rath Way Suite 941",
                address_reference: "Abbott Prairie",
                fk_civil_status: 3,
                fk_housing_type: 1,
                observation: "however justly idle boohoo handmade",
                is_active: true
            },
            business: {
                business_description: "indeed instead fondly mmm generally ha mmm given modest lest boohoo if jumbo hopeful oof idle appraise parallel readily psst",
                address: "613 Mante Plain Suite 803",
                address_reference: "Jacobson Route",
                daily_gain: 842.9,
                maximum_daily_gain: 763.03,
                minimum_daily_gain: 4269.85,
                inventory_value: 29058.51,
                have_property_documents: true,
                observation: "listen oh provided whenever yuck"
            }
        },
        {
            requested_money: 4869.92,
            date_of_issue: "2019-01-15 18:59:13",
            period: 12,
            interest_rate: 19.71,
            state: "NU",
            fk_employee_cobrador: 8,
            fk_employee_analista: 4,
            fk_financial_interest: 1,
            fk_period_type: 4,
            aval:[ {
                dni: 71484880,
                first_name: "Brandon Ricardo",
                last_name: "Padberg Price-Paucek",
                phone: "+51 598 354 251",
                email: "Walton9@gmail.com",
                address: "18207 Eric Manors Suite 889"
            }],
            personalReference: [{
                dni: 71684054,
                first_name: "Steve Clay",
                last_name: "Friesen-Brekke Klein",
                phone: "+51 154 641 738",
                email: "Kelsie.Wisoky8@hotmail.com",
                address: "86365 Daryl Villages Suite 426",
                relationship: "Director"
            },],
            customer: {
                dni: 71197301,
                first_name: "Jeff Terry",
                last_name: "Strosin Weimann",
                phone: "+51 300 341 206",
                phone2: "+51 457 688 463",
                email: "Malvina.Stehr47@gmail.com",
                address: "1646 Ross Tunnel Apt. 521",
                address_reference: "Reichert Throughway",
                fk_civil_status: 1,
                fk_housing_type: 2,
                observation: "when hm more coo abaft",
                is_active: true
            },
            business: {
                business_description: "phooey exist frame ha judicious yippee memorable absentmindedly confine whoa rigid infantile inasmuch pish reservation translate zowie fooey creator zowie",
                address: "82037 Bergnaum Rapid Suite 942",
                address_reference: "Tracy Ridge",
                daily_gain: 1114.83,
                maximum_daily_gain: 794.55,
                minimum_daily_gain: 1765.48,
                inventory_value: 58259.2,
                have_property_documents: true,
                observation: "merit cent admire mold crest"
            }
        },
        {
            requested_money: 9122.78,
            date_of_issue: "2021-02-21 03:36:33",
            period: 15,
            interest_rate: 19.8,
            state: "NU",
            fk_employee_cobrador: 9,
            fk_employee_analista: 5,
            fk_financial_interest: 1,
            fk_period_type: 2,
            aval: [{
                dni: 71010176,
                first_name: "Terrance Salvador",
                last_name: "Murphy Okuneva",
                phone: "+51 202 693 195",
                email: "Abbie_Funk19@yahoo.com",
                address: "1061 Boyle Valleys Suite 317"
            },],
            personalReference:[ {
                dni: 71122036,
                first_name: "Mitchell Emanuel",
                last_name: "Mohr Barrows",
                phone: "+51 891 516 011",
                email: "Roel_Reichel45@hotmail.com",
                address: "2084 Marques Forks Suite 887",
                relationship: "Analyst"
            },],
            customer: {
                dni: 71224690,
                first_name: "Pat Leon",
                last_name: "Hauck Paucek",
                phone: "+51 133 943 050",
                phone2: "+51 702 637 819",
                email: "Ola_Larkin@hotmail.com",
                address: "4854 Leannon Flat Apt. 161",
                address_reference: "Osinski Expressway",
                fk_civil_status: 2,
                fk_housing_type: 2,
                observation: "pure ha er loose including",
                is_active: true
            },
            business: {
                business_description: "whoa geez given amidst phew manoeuvre superior cautiously incidentally boohoo alive lasso credenza boo booklet versus very prioritize clump before",
                address: "53897 Turcotte Greens Suite 622",
                address_reference: "Franey Corner",
                daily_gain: 1458.78,
                maximum_daily_gain: 775.82,
                minimum_daily_gain: 1938.04,
                inventory_value: 25819.72,
                have_property_documents: true,
                observation: "ordination offensively unnaturally divider fence"
            }
        },
        {
            requested_money: 9312.9,
            date_of_issue: "2020-05-14 06:11:39",
            period: 11,
            interest_rate: 15.93,
            state: "NU",
            fk_employee_cobrador: 7,
            fk_employee_analista: 4,
            fk_financial_interest: 1,
            fk_period_type: 3,
            aval: [{
                dni: 71060936,
                first_name: "Garrett Irving",
                last_name: "Ruecker Spinka",
                phone: "+51 466 106 593",
                email: "Cora_Emmerich82@hotmail.com",
                address: "714 Wyman Drives Apt. 715"
            },],
            personalReference:[ {
                dni: 71850507,
                first_name: "Jerome Ruben",
                last_name: "Green Schneider",
                phone: "+51 962 177 949",
                email: "Melissa.Waters@gmail.com",
                address: "3957 Lakin Spring Apt. 415",
                relationship: "Supervisor"
            },],
            customer: {
                dni: 71631991,
                first_name: "Clarence Johnathan",
                last_name: "Sawayn Abernathy",
                phone: "+51 928 783 682",
                phone2: "+51 347 585 862",
                email: "Amely39@hotmail.com",
                address: "64419 Ophelia Pine Suite 103",
                address_reference: "Rath Wall",
                fk_civil_status: 3,
                fk_housing_type: 2,
                observation: "that plus ha repeatedly wish",
                is_active: true
            },
            business: {
                business_description: "thick husband snowplough but where towards concerning helplessly buffet foolishly unaware shrilly disruption save jubilant really uh-huh trophy bah extend",
                address: "762 Lang Dam Apt. 996",
                address_reference: "Price Center",
                daily_gain: 686.16,
                maximum_daily_gain: 509.39,
                minimum_daily_gain: 4148.59,
                inventory_value: 56692.69,
                have_property_documents: true,
                observation: "brr quirkily diffract or amongst"
            }
        },
        {
            requested_money: 9829.24,
            date_of_issue: "2022-06-03 03:04:45",
            period: 11,
            interest_rate: 14.15,
            state: "NU",
            fk_employee_cobrador: 8,
            fk_employee_analista: 3,
            fk_financial_interest: 1,
            fk_period_type: 2,
            aval: [{
                dni: 71302926,
                first_name: "Robert Clinton",
                last_name: "Kiehn Corkery",
                phone: "+51 087 977 114",
                email: "Tristian25@yahoo.com",
                address: "8211 Walton Lakes Suite 772"
            },],
            personalReference:[ {
                dni: 71835144,
                first_name: "Malcolm Angelo",
                last_name: "Rau Turner",
                phone: "+51 398 376 919",
                email: "Corbin.Turcotte@yahoo.com",
                address: "9859 Yessenia Extension Suite 694",
                relationship: "Developer"
            },],
            customer: {
                dni: 71121579,
                first_name: "Elbert Elmer",
                last_name: "Runte Botsford",
                phone: "+51 081 809 545",
                phone2: "+51 863 926 666",
                email: "Dane_Hessel84@yahoo.com",
                address: "411 Collins Valleys Apt. 263",
                address_reference: "Effie Locks",
                fk_civil_status: 3,
                fk_housing_type: 1,
                observation: "for yippee ah adore fatally",
                is_active: true
            },
            business: {
                business_description: "which pastel hammock depression over far cheery joggle following carburize yuck linear cowboy confused nervously brr wherever overconfidently silkworm threadbare",
                address: "969 Libbie Plaza Suite 126",
                address_reference: "Willms Mount",
                daily_gain: 1018.98,
                maximum_daily_gain: 886.82,
                minimum_daily_gain: 3534.63,
                inventory_value: 69048.84,
                have_property_documents: true,
                observation: "drat skim trend er or"
            }
        },
        {
            requested_money: 8516.92,
            date_of_issue: "2022-04-19 03:57:33",
            period: 14,
            interest_rate: 17.04,
            state: "NU",
            fk_employee_cobrador: 9,
            fk_employee_analista: 5,
            fk_financial_interest: 1,
            fk_period_type: 3,
            aval: [{
                dni: 71806002,
                first_name: "Andre Luther",
                last_name: "Brown Carter",
                phone: "+51 198 969 348",
                email: "Zackery_Stracke@hotmail.com",
                address: "6600 Koelpin Islands Apt. 683"
            },],
            personalReference:[ {
                dni: 71506388,
                first_name: "Merle Garrett",
                last_name: "Schoen Trantow",
                phone: "+51 341 184 725",
                email: "Michaela.Becker@yahoo.com",
                address: "4149 Lind Circle Suite 580",
                relationship: "Assistant"
            },],
            customer: {
                dni: 71455007,
                first_name: "Emanuel Terence",
                last_name: "Grimes Cronin",
                phone: "+51 794 617 261",
                phone2: "+51 296 522 145",
                email: "Kellie.Mitchell@gmail.com",
                address: "3189 Rodriguez Hills Apt. 852",
                address_reference: "Pierre Harbors",
                fk_civil_status: 4,
                fk_housing_type: 2,
                observation: "sloth furthermore yahoo youthfully volleyball",
                is_active: true
            },
            business: {
                business_description: "yawningly tarragon provided outlast hollow commonly but at neatly cadge blah qua boohoo speedily regard yuck helplessly majestically regularly yum",
                address: "9571 Altenwerth Extension Apt. 699",
                address_reference: "Metz Cove",
                daily_gain: 1476.07,
                maximum_daily_gain: 707.32,
                minimum_daily_gain: 4917.65,
                inventory_value: 12302.22,
                have_property_documents: true,
                observation: "yuck uneven savannah idealistic commonly"
            }
        },
        {
            requested_money: 4298.58,
            date_of_issue: "2019-06-16 05:12:52",
            period: 15,
            interest_rate: 15.89,
            state: "NU",
            fk_employee_cobrador: 7,
            fk_employee_analista: 4,
            fk_financial_interest: 1,
            fk_period_type: 3,
            aval: [{
                dni: 71754701,
                first_name: "Salvatore Nicolas",
                last_name: "Johnston Gerhold",
                phone: "+51 457 944 288",
                email: "Rosalyn.Considine14@gmail.com",
                address: "7222 Bashirian Unions Apt. 779"
            },],
            personalReference:[ {
                dni: 71186366,
                first_name: "Orville Mario",
                last_name: "Terry Parisian",
                phone: "+51 662 989 639",
                email: "Ron.Toy1@gmail.com",
                address: "6035 Schaefer Turnpike Suite 135",
                relationship: "Associate"
            },],
            customer: {
                dni: 71877482,
                first_name: "Duane Daniel",
                last_name: "Torphy Terry",
                phone: "+51 014 131 179",
                phone2: "+51 138 461 299",
                email: "Bret_Reichel76@hotmail.com",
                address: "2808 Funk Fall Suite 992",
                address_reference: "Bailey Wells",
                fk_civil_status: 4,
                fk_housing_type: 1,
                observation: "balaclava promptly testimonial shack athwart",
                is_active: true
            },
            business: {
                business_description: "procure soulful klutzy transcript sturdy elderly worth huzzah tabernacle yawningly and selfishly tax transcribe yuck override but breadfruit when wherever",
                address: "7347 Kemmer Crest Apt. 964",
                address_reference: "Welch Course",
                daily_gain: 565.03,
                maximum_daily_gain: 813.92,
                minimum_daily_gain: 4217.34,
                inventory_value: 48658.26,
                have_property_documents: true,
                observation: "hawk oh nettle shrimp uh-huh"
            }
        },
        {
            requested_money: 1701.22,
            date_of_issue: "2021-02-22 02:44:40",
            period: 11,
            interest_rate: 8.5,
            state: "NU",
            fk_employee_cobrador: 7,
            fk_employee_analista: 3,
            fk_financial_interest: 1,
            fk_period_type: 3,
            aval: [{
                dni: 71649987,
                first_name: "Dale Michael",
                last_name: "Wilderman Gorczany",
                phone: "+51 855 501 460",
                email: "Gertrude.Weissnat-Hamill65@yahoo.com",
                address: "117 Jasen Mountains Apt. 921"
            },],
            personalReference:[ {
                dni: 71448035,
                first_name: "Donald Joshua",
                last_name: "Okuneva Wuckert",
                phone: "+51 183 513 727",
                email: "Bonnie21@hotmail.com",
                address: "52633 Myrna Corners Suite 609",
                relationship: "Representative"
            },],
            customer: {
                dni: 71562128,
                first_name: "Curtis Clinton",
                last_name: "Huels Osinski",
                phone: "+51 448 863 091",
                phone2: "+51 103 299 926",
                email: "Jaylin.Herman@yahoo.com",
                address: "650 Kessler Inlet Apt. 613",
                address_reference: "Kassulke Row",
                fk_civil_status: 2,
                fk_housing_type: 3,
                observation: "graduate pfft over fairly blissfully",
                is_active: true
            },
            business: {
                business_description: "mmm salami at gee gadzooks gullible bandana inasmuch preoccupation sidewalk aw appease pool submissive dial gee overshoot choosing lamb oof",
                address: "559 Ervin Fields Suite 606",
                address_reference: "Cronin Shore",
                daily_gain: 1161.95,
                maximum_daily_gain: 722.56,
                minimum_daily_gain: 2438.58,
                inventory_value: 28714.85,
                have_property_documents: true,
                observation: "upon er than westernize psych"
            }
        },
        {
            requested_money: 3116.15,
            date_of_issue: "2019-01-29 17:47:00",
            period: 13,
            interest_rate: 8.01,
            state: "NU",
            fk_employee_cobrador: 8,
            fk_employee_analista: 4,
            fk_financial_interest: 1,
            fk_period_type: 4,
            aval: [{
                dni: 71325721,
                first_name: "Bradley Roberto",
                last_name: "Rosenbaum Douglas",
                phone: "+51 118 724 852",
                email: "Callie50@yahoo.com",
                address: "972 Maybell Dam Apt. 183"
            },],
            personalReference:[ {
                dni: 71405357,
                first_name: "Marcus Kurt",
                last_name: "Schmitt Schneider",
                phone: "+51 586 515 797",
                email: "Dewayne.Collins10@hotmail.com",
                address: "81742 Zack Tunnel Apt. 907",
                relationship: "Consultant"
            },],
            customer: {
                dni: 71265810,
                first_name: "Levi Javier",
                last_name: "Gottlieb Beatty",
                phone: "+51 834 005 303",
                phone2: "+51 692 040 308",
                email: "Mina3@gmail.com",
                address: "27781 Sonia Pass Apt. 122",
                address_reference: "Sally Corners",
                fk_civil_status: 2,
                fk_housing_type: 4,
                observation: "wetly probe amused snaffle embed",
                is_active: true
            },
            business: {
                business_description: "save superficial likewise how breadfruit out without sophomore joyously quicker consul ick provided breakable alongside overpay cold scarf absentmindedly utterly",
                address: "36899 Mayer Forges Suite 433",
                address_reference: "Reginald Crossing",
                daily_gain: 1139.1,
                maximum_daily_gain: 952.38,
                minimum_daily_gain: 3985.21,
                inventory_value: 47609.61,
                have_property_documents: true,
                observation: "knavishly minus huzzah demo aside"
            }
        },
        {
            requested_money: 5996.63,
            date_of_issue: "2018-08-25 11:32:16",
            period: 15,
            interest_rate: 2.64,
            state: "NU",
            fk_employee_cobrador: 9,
            fk_employee_analista: 5,
            fk_financial_interest: 1,
            fk_period_type: 2,
            aval: [{
                dni: 71482160,
                first_name: "Wesley Ian",
                last_name: "Veum Mohr",
                phone: "+51 557 999 847",
                email: "Humberto_McClure49@yahoo.com",
                address: "8672 Denesik Branch Apt. 202"
            },],
            personalReference:[ {
                dni: 71885238,
                first_name: "Ignacio Nick",
                last_name: "Hamill Quigley",
                phone: "+51 827 323 007",
                email: "Juwan62@hotmail.com",
                address: "89344 Graham Lake Apt. 847",
                relationship: "Coordinator"
            },],
            customer: {
                dni: 71576992,
                first_name: "Melvin Clint",
                last_name: "Block Prosacco",
                phone: "+51 137 085 930",
                phone2: "+51 856 528 467",
                email: "Clare.Tillman95@hotmail.com",
                address: "958 Kaley Trail Apt. 373",
                address_reference: "Elenor Throughway",
                fk_civil_status: 3,
                fk_housing_type: 2,
                observation: "yuck under align ouch gah",
                is_active: true
            },
            business: {
                business_description: "proper forenenst breakable busily gussy twig reproachfully extremely phooey what finally calmly geez promptly eminent impressive vibraphone pitiful clipper upwardly",
                address: "43255 Littel Gardens Apt. 289",
                address_reference: "Muller Ville",
                daily_gain: 720.34,
                maximum_daily_gain: 680.54,
                minimum_daily_gain: 2937.98,
                inventory_value: 37592.03,
                have_property_documents: true,
                observation: "crazy kiss beyond useless to"
            }
        },
        {
            requested_money: 7971.79,
            date_of_issue: "2022-02-19 21:20:42",
            period: 10,
            interest_rate: 12.25,
            state: "NU",
            fk_employee_cobrador: 7,
            fk_employee_analista: 3,
            fk_financial_interest: 1,
            fk_period_type: 3,
            aval: [{
                dni: 71737485,
                first_name: "Samuel Allen",
                last_name: "Reinger Corwin",
                phone: "+51 567 856 425",
                email: "Kevin_Feest@yahoo.com",
                address: "259 Spencer Field Suite 158"
            },],
            personalReference:[ {
                dni: 71185120,
                first_name: "Robert Larry",
                last_name: "Prohaska Jacobs",
                phone: "+51 522 707 763",
                email: "Kailee.Wolf62@yahoo.com",
                address: "61743 Dietrich Flats Suite 643",
                relationship: "Analyst"
            },],
            customer: {
                dni: 71600534,
                first_name: "Jean Steven",
                last_name: "Kemmer Reynolds",
                phone: "+51 806 464 840",
                phone2: "+51 589 978 376",
                email: "Carolyne.Hirthe68@gmail.com",
                address: "80759 Weimann Dale Apt. 419",
                address_reference: "Bartoletti Causeway",
                fk_civil_status: 2,
                fk_housing_type: 4,
                observation: "gaseous standard aha barring phew",
                is_active: true
            },
            business: {
                business_description: "from under eek underexpose like monster frequent gadzooks along interestingly hm handy hastily frown uh-huh because ripe times sleepily kissingly",
                address: "3599 Gorczany Fork Apt. 910",
                address_reference: "Ebert Mountains",
                daily_gain: 1101.76,
                maximum_daily_gain: 710.05,
                minimum_daily_gain: 2799.22,
                inventory_value: 42221.82,
                have_property_documents: true,
                observation: "know-how spit race wrongly noisily"
            }
        },
        {
            requested_money: 2177.28,
            date_of_issue: "2019-07-14 23:24:18",
            period: 10,
            interest_rate: 2.42,
            state: "NU",
            fk_employee_cobrador: 8,
            fk_employee_analista: 4,
            fk_financial_interest: 1,
            fk_period_type: 3,
            aval: [{
                dni: 71772464,
                first_name: "Ken Kevin",
                last_name: "Cassin Davis",
                phone: "+51 543 985 044",
                email: "Brooke_Hauck25@yahoo.com",
                address: "5181 O'Reilly Isle Suite 657"
            },],
            personalReference:[ {
                dni: 71087574,
                first_name: "Jermaine Gene",
                last_name: "Kiehn Price",
                phone: "+51 742 667 549",
                email: "Skylar.Marks10@yahoo.com",
                address: "375 Dashawn Trace Apt. 883",
                relationship: "Executive"
            },],
            customer: {
                dni: 71615163,
                first_name: "Perry Grant",
                last_name: "Tillman O'Hara",
                phone: "+51 314 265 692",
                phone2: "+51 066 987 570",
                email: "Wayne66@gmail.com",
                address: "624 DuBuque Meadow Suite 105",
                address_reference: "Linnie Points",
                fk_civil_status: 4,
                fk_housing_type: 3,
                observation: "unravel declare lopsided through which",
                is_active: true
            },
            business: {
                business_description: "monthly attain equally brr honored reconnect empire inside on kindly purr or lengthen acidly protest an stained rugby thankful plastic",
                address: "128 Carissa Hills Suite 157",
                address_reference: "Reinger Via",
                daily_gain: 1056.93,
                maximum_daily_gain: 934.96,
                minimum_daily_gain: 4443.43,
                inventory_value: 43090.52,
                have_property_documents: true,
                observation: "somewhere idle translation washtub minus"
            }
        },
        {
            requested_money: 9797.25,
            date_of_issue: "2023-05-08 09:13:55",
            period: 12,
            interest_rate: 2.3,
            state: "NU",
            fk_employee_cobrador: 9,
            fk_employee_analista: 5,
            fk_financial_interest: 1,
            fk_period_type: 3,
            aval: [{
                dni: 71210899,
                first_name: "Aubrey Kurt",
                last_name: "Braun Pfeffer",
                phone: "+51 282 680 245",
                email: "Jailyn93@yahoo.com",
                address: "89571 Ada Spurs Apt. 440"
            },],
            personalReference:[ {
                dni: 71142990,
                first_name: "Ronnie Rodney",
                last_name: "Langworth Tillman",
                phone: "+51 499 277 912",
                email: "Jessy.Marks99@yahoo.com",
                address: "54377 Karen Place Suite 133",
                relationship: "Strategist"
            },],
            customer: {
                dni: 71380565,
                first_name: "Van Chris",
                last_name: "Strosin Bailey",
                phone: "+51 804 807 419",
                phone2: "+51 830 015 005",
                email: "Jaeden24@hotmail.com",
                address: "67952 Velma Summit Suite 494",
                address_reference: "Samara Lock",
                fk_civil_status: 4,
                fk_housing_type: 2,
                observation: "aw concerning messy pish barring",
                is_active: true
            },
            business: {
                business_description: "wow hew which outside joyous fooey sigh where download vacantly psst warfare repay busily inasmuch skyjack oof loyally below inasmuch",
                address: "5322 Kovacek Fort Suite 465",
                address_reference: "McDermott Roads",
                daily_gain: 610.93,
                maximum_daily_gain: 998.03,
                minimum_daily_gain: 2026.07,
                inventory_value: 56716.3,
                have_property_documents: true,
                observation: "forenenst whose circa ignorant powerfully"
            }
        },
        {
            requested_money: 6238.18,
            date_of_issue: "2022-03-12 11:40:58",
            period: 11,
            interest_rate: 8.29,
            state: "NU",
            fk_employee_cobrador: 7,
            fk_employee_analista: 3,
            fk_financial_interest: 1,
            fk_period_type: 2,
            aval: [{
                dni: 71358760,
                first_name: "Chad Lionel",
                last_name: "Larkin Beahan",
                phone: "+51 453 516 156",
                email: "Carter99@gmail.com",
                address: "6474 Bethany Route Apt. 609"
            },],
            personalReference:[ {
                dni: 71335573,
                first_name: "Dominick Lionel",
                last_name: "Reichert Hahn",
                phone: "+51 153 842 350",
                email: "Dan_Kuvalis51@gmail.com",
                address: "61178 Nichole Avenue Suite 995",
                relationship: "Executive"
            },],
            customer: {
                dni: 71329209,
                first_name: "Edmond Stanley",
                last_name: "Rogahn Reinger",
                phone: "+51 807 606 966",
                phone2: "+51 553 075 853",
                email: "Hubert0@yahoo.com",
                address: "8084 Tomasa Parkways Apt. 501",
                address_reference: "Michael Mews",
                fk_civil_status: 4,
                fk_housing_type: 4,
                observation: "ugh duh bower around school",
                is_active: true
            },
            business: {
                business_description: "sin regarding phooey boohoo as junior righteously in mask abound bah yum in eek thankfully sure-footed as furthermore maracas chalk",
                address: "878 Lesch Mount Apt. 566",
                address_reference: "Windler Drives",
                daily_gain: 1188.54,
                maximum_daily_gain: 922.59,
                minimum_daily_gain: 3561.1,
                inventory_value: 38717.57,
                have_property_documents: true,
                observation: "decrease boo needle without fruitful"
            }
        },
        {
            requested_money: 7663.1,
            date_of_issue: "2022-01-28 03:41:30",
            period: 14,
            interest_rate: 10.18,
            state: "NU",
            fk_employee_cobrador: 7,
            fk_employee_analista: 4,
            fk_financial_interest: 1,
            fk_period_type: 2,
            aval: [{
                dni: 71780324,
                first_name: "Stewart Danny",
                last_name: "Padberg Renner",
                phone: "+51 562 938 200",
                email: "Ryann_Mayert29@hotmail.com",
                address: "66956 Johns Brook Suite 337"
            },],
            personalReference:[ {
                dni: 71279697,
                first_name: "Johnathan Garry",
                last_name: "Conroy Walsh",
                phone: "+51 591 232 035",
                email: "Brandi0@gmail.com",
                address: "72527 Gerlach Unions Apt. 255",
                relationship: "Representative"
            },],
            customer: {
                dni: 71714979,
                first_name: "Alejandro Abel",
                last_name: "Zulauf Kirlin",
                phone: "+51 711 776 093",
                phone2: "+51 338 436 980",
                email: "Gregory_Frami73@gmail.com",
                address: "6057 Joan River Apt. 777",
                address_reference: "Ziemann Terrace",
                fk_civil_status: 2,
                fk_housing_type: 2,
                observation: "lasting ethical given underachieve ha",
                is_active: true
            },
            business: {
                business_description: "why inasmuch judgementally near stymie gloomy despite neglected sympathetic strictly but scared amidst until libel finalise silently normalise elegantly likewise",
                address: "49764 Smitham Tunnel Suite 747",
                address_reference: "Kole Burgs",
                daily_gain: 737.42,
                maximum_daily_gain: 741.6,
                minimum_daily_gain: 1771.74,
                inventory_value: 49909.91,
                have_property_documents: true,
                observation: "astonishing tortellini mortally gadzooks rapid"
            }
        },
        {
            requested_money: 8444.4,
            date_of_issue: "2019-11-11 17:07:59",
            period: 11,
            interest_rate: 18.88,
            state: "NU",
            fk_employee_cobrador: 9,
            fk_employee_analista: 5,
            fk_financial_interest: 1,
            fk_period_type: 4,
            aval: [{
                dni: 71205067,
                first_name: "Malcolm Gerard",
                last_name: "Kuhn Waters",
                phone: "+51 730 993 660",
                email: "Delfina_Gulgowski-Kunze55@yahoo.com",
                address: "6741 Reilly Manor Suite 520"
            },],
            personalReference:[ {
                dni: 71259097,
                first_name: "Terence Alonzo",
                last_name: "Turner Walker",
                phone: "+51 297 478 543",
                email: "Antonia.Emmerich@hotmail.com",
                address: "800 Tremaine Fork Apt. 175",
                relationship: "Designer"
            },],
            customer: {
                dni: 71771299,
                first_name: "Jeremy Alfonso",
                last_name: "Rohan Howe",
                phone: "+51 118 583 366",
                phone2: "+51 913 718 062",
                email: "Carolanne.Bogisich@yahoo.com",
                address: "971 Skiles Junctions Apt. 535",
                address_reference: "Leone Fort",
                fk_civil_status: 2,
                fk_housing_type: 1,
                observation: "huzzah cohort hm reprocessing because",
                is_active: true
            },
            business: {
                business_description: "excellence far-off yum inasmuch recast yieldingly localise godmother for yowza steel geez flat calcification earnest half eyeglasses optimise discard pulsate",
                address: "96971 Davon Groves Apt. 740",
                address_reference: "Theresa Valleys",
                daily_gain: 779.2,
                maximum_daily_gain: 598.54,
                minimum_daily_gain: 2090.09,
                inventory_value: 59793.88,
                have_property_documents: true,
                observation: "on quit desegregate yowza politely"
            }
        },
        {
            requested_money: 6567.64,
            date_of_issue: "2021-05-05 17:12:27",
            period: 14,
            interest_rate: 5.58,
            state: "NU",
            fk_employee_cobrador: 8,
            fk_employee_analista: 5,
            fk_financial_interest: 1,
            fk_period_type: 3,
            aval: [{
                dni: 71204909,
                first_name: "Danny Ervin",
                last_name: "Herzog Corwin",
                phone: "+51 034 900 384",
                email: "Albert1@hotmail.com",
                address: "127 Gottlieb Inlet Apt. 403"
            },],
            personalReference:[ {
                dni: 71262835,
                first_name: "Troy Kirk",
                last_name: "Heaney Hammes-Hackett",
                phone: "+51 823 321 597",
                email: "Bradly.Davis@yahoo.com",
                address: "15001 Littel Vista Suite 714",
                relationship: "Facilitator"
            },],
            customer: {
                dni: 71379880,
                first_name: "Reginald Steven",
                last_name: "Weimann Heller",
                phone: "+51 661 925 020",
                phone2: "+51 912 926 832",
                email: "Bessie_Daugherty77@hotmail.com",
                address: "42708 Alice Alley Suite 948",
                address_reference: "Eulalia Road",
                fk_civil_status: 4,
                fk_housing_type: 4,
                observation: "meanwhile what behove plug nickel",
                is_active: true
            },
            business: {
                business_description: "boo hard-hat blah more hand-holding mmm on worth woot straight ha hollow qua during bah booking psst foreground kindly plush",
                address: "5912 Loyce Crossing Suite 651",
                address_reference: "Burnice Plains",
                daily_gain: 676.05,
                maximum_daily_gain: 886.45,
                minimum_daily_gain: 1867.94,
                inventory_value: 22919.13,
                have_property_documents: true,
                observation: "music gosh interlink adept moralize"
            }
        },
        {
            requested_money: 6941.98,
            date_of_issue: "2020-04-11 11:43:51",
            period: 12,
            interest_rate: 18.03,
            state: "NU",
            fk_employee_cobrador: 7,
            fk_employee_analista: 4,
            fk_financial_interest: 1,
            fk_period_type: 4,
            aval: [{
                dni: 71322602,
                first_name: "Edward Edward",
                last_name: "Pfeffer Schiller",
                phone: "+51 046 133 418",
                email: "Mossie71@gmail.com",
                address: "7429 Koch Falls Suite 514"
            },],
            personalReference:[ {
                dni: 71816812,
                first_name: "Franklin Ismael",
                last_name: "Jast Lemke",
                phone: "+51 275 281 254",
                email: "Rupert65@gmail.com",
                address: "9766 Schinner Extension Suite 842",
                relationship: "Liaison"
            },],
            customer: {
                dni: 71008929,
                first_name: "Ray Bennie",
                last_name: "Fisher Kunde",
                phone: "+51 449 623 188",
                phone2: "+51 162 246 475",
                email: "Elisha.Greenfelder0@yahoo.com",
                address: "415 Magnolia Extensions Apt. 804",
                address_reference: "Yost Ridge",
                fk_civil_status: 3,
                fk_housing_type: 1,
                observation: "upside-down fervently furthermore golden menu",
                is_active: true
            },
            business: {
                business_description: "movement officially ick aardvark except segue fair duh watchful entertain round now by accommodation meh arrogantly concerning calendar multicolored readily",
                address: "23405 Franey Cliffs Suite 502",
                address_reference: "Gus Corners",
                daily_gain: 1041.05,
                maximum_daily_gain: 854.23,
                minimum_daily_gain: 3587.16,
                inventory_value: 53202.79,
                have_property_documents: true,
                observation: "if bread whether up psychoanalyse"
            }
        },
        {
            requested_money: 4304.62,
            date_of_issue: "2020-09-14 05:56:57",
            period: 15,
            interest_rate: 2.48,
            state: "NU",
            fk_employee_cobrador: 8,
            fk_employee_analista: 4,
            fk_financial_interest: 1,
            fk_period_type: 2,
            aval: [{
                dni: 71667046,
                first_name: "Raymond William",
                last_name: "Bergstrom-Schneider Friesen",
                phone: "+51 893 134 343",
                email: "Waino73@hotmail.com",
                address: "541 Champlin Harbor Suite 934"
            },],
            personalReference:[ {
                dni: 71153891,
                first_name: "Barry Gerald",
                last_name: "McLaughlin Reilly",
                phone: "+51 039 750 816",
                email: "Dedric_Pacocha@gmail.com",
                address: "953 Reilly Trafficway Apt. 197",
                relationship: "Planner"
            },],
            customer: {
                dni: 71253490,
                first_name: "Jackie Doug",
                last_name: "Barrows Carroll",
                phone: "+51 892 783 725",
                phone2: "+51 017 713 553",
                email: "Thelma.Cremin@yahoo.com",
                address: "33368 Gibson Camp Suite 292",
                address_reference: "Ryan Walks",
                fk_civil_status: 2,
                fk_housing_type: 1,
                observation: "organic usefully common dismay shiver",
                is_active: true
            },
            business: {
                business_description: "ransom sauce frantically when phew aboard legitimize rev longingly to without atop gah depression wholesaler whoever sound underneath cabinet cupboard",
                address: "942 Mills Brooks Suite 858",
                address_reference: "Trace Lodge",
                daily_gain: 1392.6,
                maximum_daily_gain: 956.15,
                minimum_daily_gain: 1069.76,
                inventory_value: 55529.87,
                have_property_documents: true,
                observation: "adsorb hedge greatly parallel indeed"
            }
        },
        {
            requested_money: 1988.11,
            date_of_issue: "2022-07-05 10:02:43",
            period: 13,
            interest_rate: 3.75,
            state: "NU",
            fk_employee_cobrador: 9,
            fk_employee_analista: 3,
            fk_financial_interest: 1,
            fk_period_type: 1,
            aval: [{
                dni: 71850959,
                first_name: "Julio Darryl",
                last_name: "Berge-Ledner Klein",
                phone: "+51 745 771 103",
                email: "Mae_Corwin6@yahoo.com",
                address: "8021 Stroman Plaza Suite 375"
            },],
            personalReference:[ {
                dni: 71361002,
                first_name: "Henry Merle",
                last_name: "Prohaska Hansen",
                phone: "+51 396 841 537",
                email: "Rosina_Pfannerstill39@yahoo.com",
                address: "13563 Aniya Track Suite 214",
                relationship: "Developer"
            },],
            customer: {
                dni: 71765979,
                first_name: "Irving Devin",
                last_name: "Huels Schneider",
                phone: "+51 707 863 017",
                phone2: "+51 409 592 187",
                email: "Stacy.Grant85@yahoo.com",
                address: "1942 Blake Trace Apt. 366",
                address_reference: "Schulist Glen",
                fk_civil_status: 3,
                fk_housing_type: 4,
                observation: "craft feminise near past tomorrow",
                is_active: true
            },
            business: {
                business_description: "rudely lest searchingly to trait towards meander ick wisteria until however barring ill-fated unnaturally astride commonly manufacturer coolly urgently scuttle",
                address: "403 Monserrate Trail Suite 208",
                address_reference: "Tremaine Wells",
                daily_gain: 1432.85,
                maximum_daily_gain: 745.27,
                minimum_daily_gain: 4657.7,
                inventory_value: 65640.73,
                have_property_documents: true,
                observation: "inasmuch whoever ack dance posset"
            }
        },
        {
            requested_money: 7590.09,
            date_of_issue: "2021-09-26 12:19:01",
            period: 15,
            interest_rate: 19.16,
            state: "NU",
            fk_employee_cobrador: 9,
            fk_employee_analista: 4,
            fk_financial_interest: 1,
            fk_period_type: 2,
            aval: [{
                dni: 71125795,
                first_name: "Delbert Kyle",
                last_name: "Carter-Tillman Pollich",
                phone: "+51 800 876 241",
                email: "Eli5@yahoo.com",
                address: "335 Kellie Crossroad Suite 567"
            },],
            personalReference:[ {
                dni: 71019501,
                first_name: "Bennie Gary",
                last_name: "Brakus Jacobson",
                phone: "+51 329 484 842",
                email: "Salma.Price59@yahoo.com",
                address: "823 Jadon Unions Apt. 293",
                relationship: "Facilitator"
            },],
            customer: {
                dni: 71790145,
                first_name: "Darin Mike",
                last_name: "Schultz Gleason",
                phone: "+51 189 355 602",
                phone2: "+51 262 692 173",
                email: "Emmalee_Ebert99@gmail.com",
                address: "5231 Emely Key Apt. 156",
                address_reference: "Wilderman Shoal",
                fk_civil_status: 1,
                fk_housing_type: 2,
                observation: "jubilantly incidentally prospect strip blah",
                is_active: true
            },
            business: {
                business_description: "kiddingly boo inbox hastily uh-huh transliterate ack water likewise delicious truly seemingly toward tell illustrious jackknife level threat greedily dollop",
                address: "418 Runolfsdottir Rapid Suite 952",
                address_reference: "Jude Way",
                daily_gain: 660.01,
                maximum_daily_gain: 631.46,
                minimum_daily_gain: 1874.56,
                inventory_value: 10697.52,
                have_property_documents: true,
                observation: "yellowjacket fidget and caring through"
            }
        },
        {
            requested_money: 3468.36,
            date_of_issue: "2020-02-26 10:56:40",
            period: 10,
            interest_rate: 2.14,
            state: "NU",
            fk_employee_cobrador: 7,
            fk_employee_analista: 5,
            fk_financial_interest: 1,
            fk_period_type: 3,
            aval: [{
                dni: 71345520,
                first_name: "Brett Jose",
                last_name: "Konopelski Fahey",
                phone: "+51 579 124 904",
                email: "Mozelle67@yahoo.com",
                address: "99003 Erdman Forges Suite 108"
            },],
            personalReference:[ {
                dni: 71059705,
                first_name: "Toby Benjamin",
                last_name: "O'Kon Stiedemann",
                phone: "+51 367 182 524",
                email: "Thora.Thompson82@yahoo.com",
                address: "5617 Veum Knolls Apt. 677",
                relationship: "Developer"
            },],
            customer: {
                dni: 71144187,
                first_name: "Woodrow Felix",
                last_name: "Ferry Swift",
                phone: "+51 364 078 878",
                phone2: "+51 307 857 078",
                email: "Magdalen_Rau@hotmail.com",
                address: "453 Schiller Overpass Suite 616",
                address_reference: "Neil Bridge",
                fk_civil_status: 2,
                fk_housing_type: 1,
                observation: "suffer brr inasmuch perfect blah",
                is_active: true
            },
            business: {
                business_description: "psst diligently unto sparkle eavesdropper than facilitate secret hmph now yuck unto unabashedly instead watery hoarse promptly at by for",
                address: "3783 Donnelly Way Apt. 274",
                address_reference: "Cremin Underpass",
                daily_gain: 524.77,
                maximum_daily_gain: 921.93,
                minimum_daily_gain: 1481.5,
                inventory_value: 37068.79,
                have_property_documents: true,
                observation: "amongst for tale whoa eek"
            }
        },
        {
            requested_money: 6634.87,
            date_of_issue: "2020-01-15 14:38:08",
            period: 13,
            interest_rate: 14.3,
            state: "NU",
            fk_employee_cobrador: 7,
            fk_employee_analista: 3,
            fk_financial_interest: 1,
            fk_period_type: 4,
            aval: [{
                dni: 71491232,
                first_name: "Tim Elias",
                last_name: "Kirlin Gutmann",
                phone: "+51 163 927 036",
                email: "Hildegard.Braun@hotmail.com",
                address: "781 Towne Mews Apt. 522"
            },],
            personalReference:[ {
                dni: 71545514,
                first_name: "Keith Mathew",
                last_name: "Pfannerstill Rutherford",
                phone: "+51 236 125 695",
                email: "Robbie_Brakus95@gmail.com",
                address: "2183 Hilpert Shore Suite 633",
                relationship: "Technician"
            },],
            customer: {
                dni: 71216511,
                first_name: "Ramiro Jesus",
                last_name: "Hermann McGlynn",
                phone: "+51 072 276 285",
                phone2: "+51 103 970 234",
                email: "Marge_Hyatt85@hotmail.com",
                address: "61192 Molly Shores Apt. 286",
                address_reference: "Declan Port",
                fk_civil_status: 2,
                fk_housing_type: 3,
                observation: "yet span boo revert grandma",
                is_active: true
            },
            business: {
                business_description: "for carrot spec heavily under perfumed considering strident especially centimeter political smoulder veto guilty mini-skirt once midst huzzah near after",
                address: "98328 Jesse Forges Apt. 561",
                address_reference: "Hank Crest",
                daily_gain: 708.88,
                maximum_daily_gain: 573.06,
                minimum_daily_gain: 3130.52,
                inventory_value: 35906.49,
                have_property_documents: true,
                observation: "lovingly eek compound amid cursor"
            }
        },
        {
            requested_money: 7986.23,
            date_of_issue: "2018-10-27 06:19:33",
            period: 11,
            interest_rate: 11.37,
            state: "NU",
            fk_employee_cobrador: 7,
            fk_employee_analista: 3,
            fk_financial_interest: 1,
            fk_period_type: 1,
            aval: [{
                dni: 71525085,
                first_name: "Jimmie Phillip",
                last_name: "Prosacco Flatley",
                phone: "+51 228 158 717",
                email: "Rafaela.Gusikowski8@hotmail.com",
                address: "91386 Winona Crescent Apt. 184"
            },],
            personalReference:[ {
                dni: 71824311,
                first_name: "Geoffrey Pablo",
                last_name: "Abernathy Cronin",
                phone: "+51 848 553 314",
                email: "Hassan98@gmail.com",
                address: "9774 Jennie Road Suite 163",
                relationship: "Administrator"
            },],
            customer: {
                dni: 71219425,
                first_name: "Don Reginald",
                last_name: "Leannon Sipes",
                phone: "+51 144 134 201",
                phone2: "+51 240 172 439",
                email: "Flavie.Hahn52@hotmail.com",
                address: "97417 Hulda Creek Apt. 475",
                address_reference: "Orie Stravenue",
                fk_civil_status: 4,
                fk_housing_type: 1,
                observation: "full if so potentially highly",
                is_active: true
            },
            business: {
                business_description: "per pfft whereas slug yet ah too obnoxiously oh uh-huh doting decipher till whoa afternoon when rigidly barring exchange now",
                address: "305 Nitzsche Avenue Apt. 675",
                address_reference: "Mante Curve",
                daily_gain: 1260.54,
                maximum_daily_gain: 910.33,
                minimum_daily_gain: 2138.04,
                inventory_value: 38391.33,
                have_property_documents: true,
                observation: "blah situation solidly slot crop"
            }
        },
        {
            requested_money: 6418.65,
            date_of_issue: "2019-01-25 22:53:18",
            period: 14,
            interest_rate: 18.74,
            state: "NU",
            fk_employee_cobrador: 8,
            fk_employee_analista: 3,
            fk_financial_interest: 1,
            fk_period_type: 4,
            aval: [{
                dni: 71543101,
                first_name: "Tyrone Donald",
                last_name: "Mraz Labadie",
                phone: "+51 319 885 592",
                email: "Ray_Rath70@gmail.com",
                address: "44916 Sauer Pass Suite 579"
            },],
            personalReference:[ {
                dni: 71768026,
                first_name: "Patrick Devin",
                last_name: "Cronin-Leannon Raynor",
                phone: "+51 152 921 582",
                email: "Lorine.Zulauf79@hotmail.com",
                address: "31075 Haley Canyon Apt. 461",
                relationship: "Engineer"
            },],
            customer: {
                dni: 71322460,
                first_name: "Tomas Eugene",
                last_name: "Spencer Conn",
                phone: "+51 275 447 883",
                phone2: "+51 472 756 477",
                email: "Maida_Bednar@hotmail.com",
                address: "41572 Margarett Camp Apt. 431",
                address_reference: "Khalid Prairie",
                fk_civil_status: 1,
                fk_housing_type: 2,
                observation: "density consonant standardise what imaginative",
                is_active: true
            },
            business: {
                business_description: "stained expectorate pootle huzzah yum utility at steamroller phooey hibernate single capability exchange until throughout flat focused pfft ascend weakly",
                address: "903 Jaime Canyon Suite 480",
                address_reference: "Lowe Place",
                daily_gain: 717.89,
                maximum_daily_gain: 975.28,
                minimum_daily_gain: 4800.19,
                inventory_value: 28980.95,
                have_property_documents: true,
                observation: "whole next exhaust straddle disloyal"
            }
        },
        {
            requested_money: 3280.21,
            date_of_issue: "2022-03-26 20:39:16",
            period: 10,
            interest_rate: 19.45,
            state: "NU",
            fk_employee_cobrador: 8,
            fk_employee_analista: 3,
            fk_financial_interest: 1,
            fk_period_type: 2,
            aval: [{
                dni: 71288922,
                first_name: "Leland Shaun",
                last_name: "Gusikowski Brakus-Morar",
                phone: "+51 689 708 439",
                email: "Roy_Bednar57@gmail.com",
                address: "8577 Lane Common Apt. 405"
            },],
            personalReference:[ {
                dni: 71759336,
                first_name: "Colin Salvatore",
                last_name: "Koch Kassulke",
                phone: "+51 624 270 169",
                email: "Griffin.Gusikowski37@yahoo.com",
                address: "219 Franecki Trail Apt. 659",
                relationship: "Supervisor"
            },],
            customer: {
                dni: 71110471,
                first_name: "Erik Eugene",
                last_name: "Bosco Lakin",
                phone: "+51 332 402 336",
                phone2: "+51 916 900 971",
                email: "Douglas_Romaguera@gmail.com",
                address: "6385 Berge Landing Suite 271",
                address_reference: "Wunsch Squares",
                fk_civil_status: 2,
                fk_housing_type: 2,
                observation: "outside anenst outrun gosh at",
                is_active: true
            },
            business: {
                business_description: "provided bright deliberately knottily blah scarcely honestly ironclad brightly fabric tire actually humming tightly meh razz duh lute kissingly which",
                address: "7204 Valentina Mills Suite 597",
                address_reference: "Kelsi Drive",
                daily_gain: 1471.64,
                maximum_daily_gain: 936.74,
                minimum_daily_gain: 4472.3,
                inventory_value: 5591,
                have_property_documents: true,
                observation: "supposing though asphalt compute accomplishment"
            }
        },
        {
            requested_money: 5897.94,
            date_of_issue: "2021-10-18 04:18:26",
            period: 11,
            interest_rate: 3.33,
            state: "NU",
            fk_employee_cobrador: 9,
            fk_employee_analista: 3,
            fk_financial_interest: 1,
            fk_period_type: 4,
            aval: [{
                dni: 71631281,
                first_name: "Forrest Reginald",
                last_name: "Little McLaughlin",
                phone: "+51 004 226 552",
                email: "Casimer10@hotmail.com",
                address: "79260 David Estate Apt. 430"
            },],
            personalReference:[ {
                dni: 71056433,
                first_name: "Darnell Spencer",
                last_name: "Leuschke Ledner",
                phone: "+51 484 498 851",
                email: "Eda_Kassulke56@hotmail.com",
                address: "993 Quigley Drive Suite 635",
                relationship: "Administrator"
            },],
            customer: {
                dni: 71470653,
                first_name: "Drew Kelly",
                last_name: "Prosacco Greenfelder-Schimmel",
                phone: "+51 759 407 838",
                phone2: "+51 211 217 464",
                email: "Darrel86@gmail.com",
                address: "6936 Stehr Mall Apt. 885",
                address_reference: "Block Field",
                fk_civil_status: 1,
                fk_housing_type: 1,
                observation: "pasta brightly zowie immediate wherever",
                is_active: true
            },
            business: {
                business_description: "reawaken healthy tickle and than yippee round whoa surface ignorant restrict zowie phew ha comptroller with redevelop into rinse madam",
                address: "3629 Abbott Oval Apt. 211",
                address_reference: "Purdy Spring",
                daily_gain: 642.34,
                maximum_daily_gain: 615.52,
                minimum_daily_gain: 3923.12,
                inventory_value: 17429.76,
                have_property_documents: true,
                observation: "apropos cringe once shackle duh"
            }
        },
        {
            requested_money: 3328.35,
            date_of_issue: "2023-03-31 04:10:31",
            period: 13,
            interest_rate: 7.77,
            state: "NU",
            fk_employee_cobrador: 9,
            fk_employee_analista: 3,
            fk_financial_interest: 1,
            fk_period_type: 3,
            aval: [{
                dni: 71598054,
                first_name: "Timothy Ramiro",
                last_name: "Larkin Turner",
                phone: "+51 994 659 231",
                email: "Wilmer25@gmail.com",
                address: "620 Jaylin Grove Apt. 410"
            },],
            personalReference:[ {
                dni: 71720604,
                first_name: "Derrick Leroy",
                last_name: "Rau Kassulke",
                phone: "+51 600 842 764",
                email: "Dock_Doyle28@gmail.com",
                address: "8975 Dwight Fords Apt. 723",
                relationship: "Architect"
            },],
            customer: {
                dni: 71834031,
                first_name: "Joel Gilberto",
                last_name: "Swift Hintz",
                phone: "+51 269 165 230",
                phone2: "+51 709 180 580",
                email: "Karolann.Moore39@gmail.com",
                address: "49045 Kraig Forges Suite 200",
                address_reference: "Hintz Flat",
                fk_civil_status: 1,
                fk_housing_type: 1,
                observation: "proliferation kookily before reinvent anenst",
                is_active: true
            },
            business: {
                business_description: "yum towards monthly bid anenst yuck kiddingly often meow blah bitter yum consequently helmet mmm boring near rib lest underestimation",
                address: "6831 Alessandro Flat Suite 860",
                address_reference: "Aurelie Vista",
                daily_gain: 1248.65,
                maximum_daily_gain: 831.78,
                minimum_daily_gain: 3356.56,
                inventory_value: 17981.71,
                have_property_documents: true,
                observation: "lovingly brr psst hungrily step"
            }
        },
        {
            requested_money: 3264,
            date_of_issue: "2021-03-24 05:16:28",
            period: 11,
            interest_rate: 14.45,
            state: "NU",
            fk_employee_cobrador: 7,
            fk_employee_analista: 4,
            fk_financial_interest: 1,
            fk_period_type: 2,
            aval: [{
                dni: 71384268,
                first_name: "Ricardo Eddie",
                last_name: "Luettgen Cormier",
                phone: "+51 940 456 773",
                email: "Barney_Rice0@hotmail.com",
                address: "68532 Labadie Plain Apt. 871"
            },],
            personalReference:[ {
                dni: 71232853,
                first_name: "Elias Everett",
                last_name: "Rau Boyle",
                phone: "+51 548 028 857",
                email: "Marvin10@gmail.com",
                address: "411 Okuneva Lake Apt. 161",
                relationship: "Architect"
            },],
            customer: {
                dni: 71580861,
                first_name: "Ryan Pablo",
                last_name: "Koss-Wyman Cummings",
                phone: "+51 900 929 916",
                phone2: "+51 294 095 593",
                email: "Jany87@yahoo.com",
                address: "74755 Feil Plains Suite 910",
                address_reference: "Conroy Cape",
                fk_civil_status: 2,
                fk_housing_type: 3,
                observation: "that rude unknown fraudster before",
                is_active: true
            },
            business: {
                business_description: "healthily opposite after commission near accidentally gosh evenly whoa redden hence vainly oh plus sentence kazoo cricketer fatally smoulder woefully",
                address: "3922 Hammes Points Apt. 624",
                address_reference: "Daren Tunnel",
                daily_gain: 1172.63,
                maximum_daily_gain: 816.63,
                minimum_daily_gain: 2353.17,
                inventory_value: 56742.44,
                have_property_documents: true,
                observation: "boatyard notwithstanding coddle aw polliwog"
            }
        },
        {
            requested_money: 2007.51,
            date_of_issue: "2023-04-14 00:42:53",
            period: 14,
            interest_rate: 18.39,
            state: "NU",
            fk_employee_cobrador: 7,
            fk_employee_analista: 4,
            fk_financial_interest: 1,
            fk_period_type: 3,
            aval: [{
                dni: 71185850,
                first_name: "Claude Luis",
                last_name: "Marvin Rath",
                phone: "+51 248 837 071",
                email: "Delores_Haag@yahoo.com",
                address: "690 Jacobi Pine Suite 408"
            },],
            personalReference:[ {
                dni: 71097618,
                first_name: "Donald Gerald",
                last_name: "Wisozk Koelpin-Nitzsche",
                phone: "+51 675 787 353",
                email: "Chester55@hotmail.com",
                address: "374 Elna Burg Suite 193",
                relationship: "Developer"
            },],
            customer: {
                dni: 71555788,
                first_name: "Perry Jeremy",
                last_name: "Hahn Pacocha",
                phone: "+51 127 810 301",
                phone2: "+51 133 334 863",
                email: "Jarred.Parisian@gmail.com",
                address: "1723 Mann Coves Apt. 637",
                address_reference: "Farrell Canyon",
                fk_civil_status: 1,
                fk_housing_type: 4,
                observation: "infect blah yahoo slob fickle",
                is_active: true
            },
            business: {
                business_description: "excepting violet chorus forsaken boohoo ouch ponder tragic goose likewise as downforce endorsement workhorse finally courtroom yum flake demineralise uh-huh",
                address: "192 Greenfelder Stravenue Suite 572",
                address_reference: "Mraz Valleys",
                daily_gain: 1259.76,
                maximum_daily_gain: 662.96,
                minimum_daily_gain: 1507.6,
                inventory_value: 15839.26,
                have_property_documents: true,
                observation: "zowie lazily ick why hmph"
            }
        },
        {
            requested_money: 4497.77,
            date_of_issue: "2023-03-27 09:15:04",
            period: 11,
            interest_rate: 3.44,
            state: "NU",
            fk_employee_cobrador: 7,
            fk_employee_analista: 4,
            fk_financial_interest: 1,
            fk_period_type: 1,
            aval: [{
                dni: 71724556,
                first_name: "Vernon Homer",
                last_name: "Ebert Schuster",
                phone: "+51 019 314 291",
                email: "Marian_Lindgren@gmail.com",
                address: "734 Janet Common Apt. 344"
            },],
            personalReference:[ {
                dni: 71782439,
                first_name: "Lynn Wilbur",
                last_name: "Grant Jerde",
                phone: "+51 187 455 249",
                email: "Kendra_Heidenreich89@hotmail.com",
                address: "4287 Braun Streets Suite 385",
                relationship: "Architect"
            },],
            customer: {
                dni: 71821668,
                first_name: "Billy Erik",
                last_name: "Dickinson Rutherford",
                phone: "+51 908 378 560",
                phone2: "+51 594 912 402",
                email: "Natalie24@gmail.com",
                address: "154 Reilly Hill Apt. 717",
                address_reference: "Lon Ferry",
                fk_civil_status: 3,
                fk_housing_type: 1,
                observation: "as after touch sometimes bound",
                is_active: true
            },
            business: {
                business_description: "pinto vice loudly geez lest deeply when but without deceivingly creature young belly angry furthermore so yuck now tip bonus",
                address: "1922 Hilma Haven Apt. 833",
                address_reference: "Schaefer Square",
                daily_gain: 739.21,
                maximum_daily_gain: 557.9,
                minimum_daily_gain: 4890.48,
                inventory_value: 31157.1,
                have_property_documents: true,
                observation: "youthfully bleakly ritualise verbally unto"
            }
        },
        {
            requested_money: 4348.93,
            date_of_issue: "2022-08-11 16:05:36",
            period: 15,
            interest_rate: 16.52,
            state: "NU",
            fk_employee_cobrador: 7,
            fk_employee_analista: 5,
            fk_financial_interest: 1,
            fk_period_type: 2,
            aval: [{
                dni: 71262606,
                first_name: "Reginald Ross",
                last_name: "West Mayert",
                phone: "+51 761 818 104",
                email: "Jaycee5@yahoo.com",
                address: "588 Hailey Estates Apt. 867"
            },],
            personalReference:[ {
                dni: 71772189,
                first_name: "Philip Jonathon",
                last_name: "Skiles Brekke",
                phone: "+51 791 714 911",
                email: "Jairo.MacGyver@gmail.com",
                address: "212 Johnson Pass Suite 844",
                relationship: "Assistant"
            },],
            customer: {
                dni: 71128801,
                first_name: "Harold Duane",
                last_name: "Pouros Halvorson",
                phone: "+51 275 969 228",
                phone2: "+51 640 151 718",
                email: "Breana.Quitzon@gmail.com",
                address: "32425 Clotilde Views Apt. 415",
                address_reference: "McLaughlin Curve",
                fk_civil_status: 1,
                fk_housing_type: 4,
                observation: "before scorn thoughtfully inflict than",
                is_active: true
            },
            business: {
                business_description: "fooey despite cautiously plus latch achieve yahoo absentmindedly woot overconfidently but or round before consequently oh towards covariate provided crayon",
                address: "73904 Turcotte Ridge Suite 519",
                address_reference: "Claude Shores",
                daily_gain: 796.2,
                maximum_daily_gain: 714.48,
                minimum_daily_gain: 4799.04,
                inventory_value: 47063.58,
                have_property_documents: true,
                observation: "cafe sojourn zowie even from"
            }
        },
        {
            requested_money: 5625.93,
            date_of_issue: "2019-08-22 06:01:05",
            period: 11,
            interest_rate: 17.26,
            state: "NU",
            fk_employee_cobrador: 7,
            fk_employee_analista: 5,
            fk_financial_interest: 1,
            fk_period_type: 1,
            aval: [{
                dni: 71666316,
                first_name: "Neil Albert",
                last_name: "Mitchell Cummerata",
                phone: "+51 504 300 776",
                email: "Micah.Corwin@gmail.com",
                address: "958 Marianne Inlet Apt. 906"
            },],
            personalReference:[ {
                dni: 71560644,
                first_name: "Wallace Abel",
                last_name: "Stanton Rowe",
                phone: "+51 184 177 647",
                email: "Thea.McDermott@gmail.com",
                address: "666 Llewellyn Harbor Suite 139",
                relationship: "Facilitator"
            },],
            customer: {
                dni: 71262944,
                first_name: "Alvin Wm",
                last_name: "Howe-Bauch Schumm",
                phone: "+51 878 213 120",
                phone2: "+51 254 614 485",
                email: "Ethyl.Greenholt@hotmail.com",
                address: "702 Ally Drives Apt. 460",
                address_reference: "Olson Lock",
                fk_civil_status: 1,
                fk_housing_type: 2,
                observation: "huzzah hourly geez berth hurtle",
                is_active: true
            },
            business: {
                business_description: "worth cop encumber when mmm yowza timber pfft aside underneath uncork boo quizzically cucumber softly huzzah apropos knowing smirk gee",
                address: "86179 Ezequiel Freeway Apt. 594",
                address_reference: "Satterfield Lake",
                daily_gain: 1187.75,
                maximum_daily_gain: 791.28,
                minimum_daily_gain: 2151.54,
                inventory_value: 17702.74,
                have_property_documents: true,
                observation: "natural rowdy ha supposing and"
            }
        },
        {
            requested_money: 8909.55,
            date_of_issue: "2022-05-17 23:34:18",
            period: 10,
            interest_rate: 9.05,
            state: "NU",
            fk_employee_cobrador: 7,
            fk_employee_analista: 5,
            fk_financial_interest: 1,
            fk_period_type: 4,
            aval: [{
                dni: 71289763,
                first_name: "Carlos Douglas",
                last_name: "Boyer Bechtelar",
                phone: "+51 774 447 071",
                email: "Skyla.Armstrong@yahoo.com",
                address: "235 Cynthia Gateway Apt. 525"
            },],
            personalReference:[ {
                dni: 71887781,
                first_name: "Randolph Stanley",
                last_name: "Simonis Murray",
                phone: "+51 107 036 098",
                email: "Zoey.Cummerata42@yahoo.com",
                address: "60116 Graham Lock Suite 898",
                relationship: "Specialist"
            },],
            customer: {
                dni: 71277053,
                first_name: "Tommie Randy",
                last_name: "Miller Wolf",
                phone: "+51 231 062 469",
                phone2: "+51 304 386 885",
                email: "Josie75@hotmail.com",
                address: "97700 Verdie Burg Apt. 513",
                address_reference: "Wehner Crossing",
                fk_civil_status: 1,
                fk_housing_type: 2,
                observation: "gah onto beak firm knavishly",
                is_active: true
            },
            business: {
                business_description: "atop supposing honestly car hasty under or wherever armadillo sans phooey fuzzy entrance beside liken hard happily supposing gleefully times",
                address: "3510 Constance Highway Apt. 548",
                address_reference: "Stefan Oval",
                daily_gain: 628.92,
                maximum_daily_gain: 581.06,
                minimum_daily_gain: 2480.63,
                inventory_value: 12664.5,
                have_property_documents: true,
                observation: "afoul besides blindside boohoo provided"
            }
        },
        {
            requested_money: 3663.98,
            date_of_issue: "2020-11-11 01:55:10",
            period: 10,
            interest_rate: 10.56,
            state: "NU",
            fk_employee_cobrador: 9,
            fk_employee_analista: 5,
            fk_financial_interest: 1,
            fk_period_type: 1,
            aval: [{
                dni: 71784511,
                first_name: "Eddie Tommie",
                last_name: "Bartoletti Spinka",
                phone: "+51 588 841 526",
                email: "Bulah_Schuppe@hotmail.com",
                address: "1950 Una Dam Suite 470"
            },],
            personalReference:[ {
                dni: 71380439,
                first_name: "Salvatore Kerry",
                last_name: "Schneider Boyer",
                phone: "+51 968 309 795",
                email: "Garry_Orn45@yahoo.com",
                address: "2881 Dannie Street Apt. 522",
                relationship: "Assistant"
            },],
            customer: {
                dni: 71574185,
                first_name: "Lance Joseph",
                last_name: "Crooks Swift",
                phone: "+51 714 512 829",
                phone2: "+51 926 558 807",
                email: "Karlee_Jaskolski@gmail.com",
                address: "929 Wilburn Mountains Apt. 105",
                address_reference: "Gregorio Shores",
                fk_civil_status: 4,
                fk_housing_type: 1,
                observation: "ripple azimuth bah kindheartedly anti",
                is_active: true
            },
            business: {
                business_description: "incidentally whoever ha wherever hm astride afternoon solidly nest gee tangible termite quaintly highly worried victoriously gosh palliate noted strobe",
                address: "83283 Corwin Mall Suite 771",
                address_reference: "Fadel Squares",
                daily_gain: 1406.24,
                maximum_daily_gain: 737.61,
                minimum_daily_gain: 4272.87,
                inventory_value: 69253.56,
                have_property_documents: true,
                observation: "poor swiftly lest charbroil chrome"
            }
        },
        {
            requested_money: 4591.64,
            date_of_issue: "2022-03-25 15:25:01",
            period: 10,
            interest_rate: 13.09,
            state: "NU",
            fk_employee_cobrador: 9,
            fk_employee_analista: 5,
            fk_financial_interest: 1,
            fk_period_type: 4,
            aval: [{
                dni: 71042906,
                first_name: "Ronald Troy",
                last_name: "Spinka Oberbrunner",
                phone: "+51 617 942 278",
                email: "Kacey_Homenick@yahoo.com",
                address: "680 Frami Estates Suite 611"
            },],
            personalReference:[ {
                dni: 71517388,
                first_name: "Dana Erik",
                last_name: "Olson Witting",
                phone: "+51 290 733 711",
                email: "Edgardo_Bogan4@yahoo.com",
                address: "93307 Jakubowski Square Apt. 309",
                relationship: "Associate"
            },],
            customer: {
                dni: 71241625,
                first_name: "John Neil",
                last_name: "Rippin Cruickshank",
                phone: "+51 166 128 134",
                phone2: "+51 871 248 930",
                email: "Hal.Gibson@hotmail.com",
                address: "9577 McLaughlin Mews Apt. 546",
                address_reference: "Ritchie Motorway",
                fk_civil_status: 3,
                fk_housing_type: 3,
                observation: "what whoa risk yowza instead",
                is_active: true
            },
            business: {
                business_description: "shearling nightingale grammar blah luminous minus ick loftily excitedly slow prowl until openly messy wherever neatly woot absolute except simulcast",
                address: "12104 Korey Club Apt. 461",
                address_reference: "Stehr Corners",
                daily_gain: 791.53,
                maximum_daily_gain: 805.11,
                minimum_daily_gain: 1986.43,
                inventory_value: 58776.3,
                have_property_documents: true,
                observation: "department query sherry ick real"
            }
        },
        {
            requested_money: 7886.71,
            date_of_issue: "2020-01-11 10:37:12",
            period: 13,
            interest_rate: 11.94,
            state: "NU",
            fk_employee_cobrador: 7,
            fk_employee_analista: 3,
            fk_financial_interest: 1,
            fk_period_type: 2,
            aval: [{
                dni: 71334194,
                first_name: "Victor Merle",
                last_name: "Crooks Weissnat",
                phone: "+51 977 009 529",
                email: "Terrence91@gmail.com",
                address: "652 Koelpin Dam Suite 706"
            },],
            personalReference:[ {
                dni: 71195797,
                first_name: "Mack Eddie",
                last_name: "Gerhold Deckow-Kuhlman",
                phone: "+51 514 139 294",
                email: "Bridgette.Bernier56@gmail.com",
                address: "690 Erick Curve Apt. 837",
                relationship: "Strategist"
            },],
            customer: {
                dni: 71137197,
                first_name: "Luis Rene",
                last_name: "Berge Medhurst-Marquardt",
                phone: "+51 968 384 249",
                phone2: "+51 341 609 693",
                email: "Ofelia45@gmail.com",
                address: "3767 Glenna Inlet Apt. 958",
                address_reference: "McLaughlin Spurs",
                fk_civil_status: 2,
                fk_housing_type: 4,
                observation: "nervously underground speculate legitimize dither",
                is_active: true
            },
            business: {
                business_description: "lavish perfect iron leading drat um while even beautiful duh yet gratitude as jacket annually before numismatist yippee insidious music",
                address: "8905 Caroline Loaf Apt. 734",
                address_reference: "Darlene Gateway",
                daily_gain: 1442.38,
                maximum_daily_gain: 753.2,
                minimum_daily_gain: 3212.56,
                inventory_value: 25923.78,
                have_property_documents: true,
                observation: "awe amongst welcome molar sensitivity"
            }
        },
        {
            requested_money: 8459.01,
            date_of_issue: "2020-07-07 10:49:32",
            period: 14,
            interest_rate: 10,
            state: "NU",
            fk_employee_cobrador: 8,
            fk_employee_analista: 4,
            fk_financial_interest: 1,
            fk_period_type: 1,
            aval: [{
                dni: 71307577,
                first_name: "Billy Ignacio",
                last_name: "Denesik Rempel",
                phone: "+51 819 033 617",
                email: "Paris_Parisian98@gmail.com",
                address: "9693 Scottie Cove Suite 631"
            },],
            personalReference:[ {
                dni: 71455181,
                first_name: "Clay Sheldon",
                last_name: "Block Franey",
                phone: "+51 093 713 645",
                email: "Natalia_Daniel@hotmail.com",
                address: "5782 Treutel Knoll Suite 541",
                relationship: "Director"
            },],
            customer: {
                dni: 71662810,
                first_name: "Clyde Greg",
                last_name: "Schinner Kohler",
                phone: "+51 408 455 733",
                phone2: "+51 814 830 106",
                email: "Cara88@yahoo.com",
                address: "334 Leffler Square Suite 148",
                address_reference: "Albert Junction",
                fk_civil_status: 3,
                fk_housing_type: 3,
                observation: "yippee salami doting quirkily crib",
                is_active: true
            },
            business: {
                business_description: "duh duh engineering ouch consequently yowza fooey along incidentally aha nor mechanise pleasant even aha why fooey opposite honestly leapfrog",
                address: "9732 Jakubowski Harbor Suite 887",
                address_reference: "Klocko Neck",
                daily_gain: 578.44,
                maximum_daily_gain: 730.17,
                minimum_daily_gain: 4660.13,
                inventory_value: 18275.63,
                have_property_documents: true,
                observation: "aside softly before victoriously within"
            }
        },
        {
            requested_money: 1887.91,
            date_of_issue: "2023-02-14 19:31:26",
            period: 13,
            interest_rate: 3.61,
            state: "NU",
            fk_employee_cobrador: 9,
            fk_employee_analista: 4,
            fk_financial_interest: 1,
            fk_period_type: 1,
            aval: [{
                dni: 71462829,
                first_name: "Leland Marcus",
                last_name: "McGlynn Effertz",
                phone: "+51 239 895 346",
                email: "Sydney_Kerluke@hotmail.com",
                address: "675 Jarrell Parks Apt. 156"
            },],
            personalReference:[ {
                dni: 71395711,
                first_name: "Abel Randall",
                last_name: "McKenzie Grimes",
                phone: "+51 700 687 934",
                email: "Hazle.Raynor@gmail.com",
                address: "10628 Melisa Place Apt. 342",
                relationship: "Consultant"
            },],
            customer: {
                dni: 71789729,
                first_name: "Andre Jon",
                last_name: "Grimes Hamill",
                phone: "+51 657 061 803",
                phone2: "+51 904 945 416",
                email: "Kiera29@hotmail.com",
                address: "9858 Auer Shore Suite 106",
                address_reference: "Itzel Harbor",
                fk_civil_status: 3,
                fk_housing_type: 3,
                observation: "rein geez remould lustrous dry",
                is_active: true
            },
            business: {
                business_description: "post lovingly oof astride suspiciously forenenst gosh when roughly whose vandalize so boohoo pish ah whoa rosy which anti as",
                address: "2179 Ward Meadows Apt. 806",
                address_reference: "Guy Mews",
                daily_gain: 517.49,
                maximum_daily_gain: 791.27,
                minimum_daily_gain: 3955.12,
                inventory_value: 63777.35,
                have_property_documents: true,
                observation: "for until hence before where"
            }
        },
        {
            requested_money: 8781.05,
            date_of_issue: "2019-06-24 17:57:52",
            period: 13,
            interest_rate: 10.26,
            state: "NU",
            fk_employee_cobrador: 7,
            fk_employee_analista: 5,
            fk_financial_interest: 1,
            fk_period_type: 1,
            aval: [{
                dni: 71508536,
                first_name: "Karl Steve",
                last_name: "Green Roberts",
                phone: "+51 701 036 012",
                email: "Anahi_Johns@yahoo.com",
                address: "344 Rocky Land Apt. 244"
            },],
            personalReference:[ {
                dni: 71650560,
                first_name: "Vincent Woodrow",
                last_name: "Gleason Pouros",
                phone: "+51 862 028 048",
                email: "Lazaro49@yahoo.com",
                address: "1933 Moen Centers Apt. 258",
                relationship: "Manager"
            },],
            customer: {
                dni: 71008440,
                first_name: "Garry Sergio",
                last_name: "Kihn Senger",
                phone: "+51 836 226 360",
                phone2: "+51 263 714 194",
                email: "Brandy61@hotmail.com",
                address: "508 Mosciski Coves Suite 829",
                address_reference: "Kaylee Forest",
                fk_civil_status: 3,
                fk_housing_type: 2,
                observation: "disconnect men under silent true",
                is_active: true
            },
            business: {
                business_description: "good-natured toward soundness serene and aw dislodge utterly finally boohoo unnecessarily geez blissfully consequently monthly notwithstanding trusty imperfect till pitiful",
                address: "95065 Ethel Gardens Suite 654",
                address_reference: "Muriel Bridge",
                daily_gain: 1396.61,
                maximum_daily_gain: 554.31,
                minimum_daily_gain: 3196.29,
                inventory_value: 60288.9,
                have_property_documents: true,
                observation: "remarkable case generously since thesis"
            }
        },
        {
            requested_money: 7985.94,
            date_of_issue: "2018-09-11 22:23:25",
            period: 11,
            interest_rate: 17.53,
            state: "NU",
            fk_employee_cobrador: 7,
            fk_employee_analista: 5,
            fk_financial_interest: 1,
            fk_period_type: 2,
            aval: [{
                dni: 71363448,
                first_name: "Darrel Ted",
                last_name: "Von Gorczany",
                phone: "+51 483 558 345",
                email: "Alexie60@gmail.com",
                address: "484 Jeramie Valley Apt. 902"
            },],
            personalReference:[ {
                dni: 71765369,
                first_name: "Daryl Juan",
                last_name: "Rau Zieme",
                phone: "+51 946 275 603",
                email: "Jena72@gmail.com",
                address: "8368 Schiller Trail Apt. 401",
                relationship: "Director"
            },],
            customer: {
                dni: 71612471,
                first_name: "Patrick Tom",
                last_name: "Parisian Larson",
                phone: "+51 424 670 534",
                phone2: "+51 754 196 580",
                email: "Shakira.Sporer71@hotmail.com",
                address: "58443 Little Corners Apt. 554",
                address_reference: "Sanford Fork",
                fk_civil_status: 4,
                fk_housing_type: 3,
                observation: "circulation icy bountiful gah spyglass",
                is_active: true
            },
            business: {
                business_description: "elegantly any um gah secede phooey milky save fishery yaw besides fig clonk mostly seriously but deposit until webpage icebreaker",
                address: "9583 Maximillia Keys Suite 679",
                address_reference: "Hilll Corner",
                daily_gain: 1364.89,
                maximum_daily_gain: 799.61,
                minimum_daily_gain: 4014.31,
                inventory_value: 28573.11,
                have_property_documents: true,
                observation: "questioningly hastily stoke minus spill"
            }
        },
        {
            requested_money: 9274.66,
            date_of_issue: "2020-04-02 02:58:17",
            period: 10,
            interest_rate: 19.96,
            state: "NU",
            fk_employee_cobrador: 7,
            fk_employee_analista: 5,
            fk_financial_interest: 1,
            fk_period_type: 4,
            aval: [{
                dni: 71373803,
                first_name: "Myron Chad",
                last_name: "Hansen Buckridge",
                phone: "+51 331 782 207",
                email: "Myrtle.Labadie@hotmail.com",
                address: "116 Grady Isle Suite 771"
            },],
            personalReference:[ {
                dni: 71303872,
                first_name: "Jeremiah Terrance",
                last_name: "Klein Lehner",
                phone: "+51 926 026 251",
                email: "Davion83@yahoo.com",
                address: "49861 Sipes Station Apt. 849",
                relationship: "Director"
            },],
            customer: {
                dni: 71269321,
                first_name: "Wayne Max",
                last_name: "Wisozk Marks",
                phone: "+51 142 178 363",
                phone2: "+51 150 737 045",
                email: "Joesph_Blanda68@gmail.com",
                address: "8314 Earline Pike Suite 208",
                address_reference: "Blanda View",
                fk_civil_status: 2,
                fk_housing_type: 3,
                observation: "lest descend since briefly hubris",
                is_active: true
            },
            business: {
                business_description: "little editorialize wearily fooey miserably off like boo um gosh maiden supposing happily pointless likewise collector bashfully reiterate cease unless",
                address: "8656 Johnson Avenue Apt. 951",
                address_reference: "Jermaine Mountains",
                daily_gain: 1181.36,
                maximum_daily_gain: 941.05,
                minimum_daily_gain: 2960.31,
                inventory_value: 23584.61,
                have_property_documents: true,
                observation: "regal longingly incidentally drat overconfidently"
            }
        },
        {
            requested_money: 6344.43,
            date_of_issue: "2018-07-17 22:20:24",
            period: 10,
            interest_rate: 9.65,
            state: "NU",
            fk_employee_cobrador: 8,
            fk_employee_analista: 4,
            fk_financial_interest: 1,
            fk_period_type: 4,
            aval: [{
                dni: 71551296,
                first_name: "Tony Sidney",
                last_name: "Kautzer Herzog",
                phone: "+51 126 119 953",
                email: "Bo_Reichert14@gmail.com",
                address: "734 Annamae Island Apt. 330"
            },],
            personalReference:[ {
                dni: 71280385,
                first_name: "Conrad Joshua",
                last_name: "Bergnaum Heller",
                phone: "+51 789 673 684",
                email: "Larue20@hotmail.com",
                address: "8249 White Well Suite 950",
                relationship: "Officer"
            },],
            customer: {
                dni: 71576375,
                first_name: "Santiago Curtis",
                last_name: "Lubowitz Thiel",
                phone: "+51 812 912 494",
                phone2: "+51 457 589 919",
                email: "Jefferey23@hotmail.com",
                address: "8509 Gerhard Curve Suite 628",
                address_reference: "Kulas Heights",
                fk_civil_status: 4,
                fk_housing_type: 3,
                observation: "lasso once knavishly willfully rehouse",
                is_active: true
            },
            business: {
                business_description: "as blaze outstanding sternly crooked yuck ew duh pro vice picket modulo visual lender whose if triangular whose phooey pitiful",
                address: "79129 Creola Ranch Suite 786",
                address_reference: "Mitchell Forest",
                daily_gain: 1029.07,
                maximum_daily_gain: 974.64,
                minimum_daily_gain: 4515.27,
                inventory_value: 53819.79,
                have_property_documents: true,
                observation: "bah lined hmph bah ragged"
            }
        },
        {
            requested_money: 6237.23,
            date_of_issue: "2022-04-15 22:33:12",
            period: 10,
            interest_rate: 2.79,
            state: "NU",
            fk_employee_cobrador: 8,
            fk_employee_analista: 4,
            fk_financial_interest: 1,
            fk_period_type: 2,
            aval: [{
                dni: 71133965,
                first_name: "Marshall Robin",
                last_name: "Conroy Brakus",
                phone: "+51 607 518 731",
                email: "Fae_McKenzie21@yahoo.com",
                address: "7754 Camylle Radial Suite 657"
            },],
            personalReference:[ {
                dni: 71831976,
                first_name: "Shannon Clinton",
                last_name: "Homenick Deckow",
                phone: "+51 507 928 918",
                email: "Brandi4@yahoo.com",
                address: "401 Ernesto Shoals Suite 320",
                relationship: "Director"
            },],
            customer: {
                dni: 71804286,
                first_name: "Phil Ira",
                last_name: "O'Conner Mante",
                phone: "+51 541 421 063",
                phone2: "+51 531 887 143",
                email: "Deonte_Grimes13@yahoo.com",
                address: "749 Emmerich Forge Apt. 974",
                address_reference: "Laura Creek",
                fk_civil_status: 4,
                fk_housing_type: 3,
                observation: "before freely optimistically yuck fizzle",
                is_active: true
            },
            business: {
                business_description: "unless gap whenever times antagonize upside-down soon sharply until fumbling boohoo highly signal before supposing barring woot snack whose circa",
                address: "4776 Smith Brooks Suite 888",
                address_reference: "Aric Field",
                daily_gain: 1437.6,
                maximum_daily_gain: 698,
                minimum_daily_gain: 1708.26,
                inventory_value: 20668.64,
                have_property_documents: true,
                observation: "livid without mortality mmm wetsuit"
            }
        },
        {
            requested_money: 6555.73,
            date_of_issue: "2022-03-15 01:30:39",
            period: 11,
            interest_rate: 2.92,
            state: "NU",
            fk_employee_cobrador: 9,
            fk_employee_analista: 3,
            fk_financial_interest: 1,
            fk_period_type: 4,
            aval: [{
                dni: 71660712,
                first_name: "Howard Thomas",
                last_name: "Leuschke Adams",
                phone: "+51 001 918 438",
                email: "Jo_Swift@gmail.com",
                address: "3132 Green Greens Suite 317"
            },],
            personalReference:[ {
                dni: 71656488,
                first_name: "Don Gary",
                last_name: "Strosin Conroy",
                phone: "+51 284 481 183",
                email: "Maybelle.Spinka19@hotmail.com",
                address: "1364 Nathan Harbors Apt. 609",
                relationship: "Assistant"
            },],
            customer: {
                dni: 71729946,
                first_name: "Gabriel Abel",
                last_name: "Renner-Kirlin Fay",
                phone: "+51 819 251 001",
                phone2: "+51 096 280 219",
                email: "Chris_Walker-Schinner@gmail.com",
                address: "99934 Hansen Junctions Apt. 868",
                address_reference: "Malcolm Valleys",
                fk_civil_status: 2,
                fk_housing_type: 1,
                observation: "jealous renovate gee inasmuch easy",
                is_active: true
            },
            business: {
                business_description: "down since before artifact incidentally mow zowie curtail oof boo into offensively playground to geez supervise yum well-to-do furniture understand",
                address: "6146 Kohler Route Suite 921",
                address_reference: "Chris Pike",
                daily_gain: 1255.95,
                maximum_daily_gain: 984.66,
                minimum_daily_gain: 4045.66,
                inventory_value: 44836.57,
                have_property_documents: true,
                observation: "unethically whoa triumphantly psst undelete"
            }
        },
        {
            requested_money: 6909.21,
            date_of_issue: "2020-09-30 02:06:53",
            period: 13,
            interest_rate: 14.87,
            state: "NU",
            fk_employee_cobrador: 9,
            fk_employee_analista: 3,
            fk_financial_interest: 1,
            fk_period_type: 1,
            aval: [{
                dni: 71032320,
                first_name: "Salvatore Loren",
                last_name: "Hartmann Schultz",
                phone: "+51 949 649 856",
                email: "Betsy_Weber56@yahoo.com",
                address: "51864 Jamison Neck Apt. 476"
            },],
            personalReference:[ {
                dni: 71884760,
                first_name: "Larry Dave",
                last_name: "Mills Jacobson",
                phone: "+51 417 888 446",
                email: "Nettie_Little@gmail.com",
                address: "53160 Claude Keys Apt. 606",
                relationship: "Representative"
            },],
            customer: {
                dni: 71893812,
                first_name: "Saul Justin",
                last_name: "O'Hara Smith",
                phone: "+51 768 106 134",
                phone2: "+51 992 380 606",
                email: "Annabelle72@gmail.com",
                address: "787 Vandervort Parkway Suite 806",
                address_reference: "Dare Plain",
                fk_civil_status: 4,
                fk_housing_type: 1,
                observation: "filthy singing diligently hm leading",
                is_active: true
            },
            business: {
                business_description: "curse successfully dearly that painfully detect amongst since ha anneal whether rubberneck oh versus uselessly shyly obediently oh phooey duh",
                address: "60575 Maryjane Spurs Suite 906",
                address_reference: "Zboncak Landing",
                daily_gain: 1462.26,
                maximum_daily_gain: 928.5,
                minimum_daily_gain: 3999.65,
                inventory_value: 50535.64,
                have_property_documents: true,
                observation: "fooey numb pish wearily gah"
            }
        },
        {
            requested_money: 4573.67,
            date_of_issue: "2019-08-01 05:58:14",
            period: 14,
            interest_rate: 2.58,
            state: "NU",
            fk_employee_cobrador: 8,
            fk_employee_analista: 5,
            fk_financial_interest: 1,
            fk_period_type: 3,
            aval: [{
                dni: 71248365,
                first_name: "Aaron Roland",
                last_name: "Stanton Huels",
                phone: "+51 483 023 489",
                email: "Drew_Considine90@yahoo.com",
                address: "3286 Viola Coves Apt. 943"
            },],
            personalReference:[ {
                dni: 71033228,
                first_name: "Christopher Percy",
                last_name: "Zulauf Wisoky",
                phone: "+51 893 560 428",
                email: "Francisco.Armstrong33@yahoo.com",
                address: "512 Bridgette Harbors Suite 246",
                relationship: "Engineer"
            },],
            customer: {
                dni: 71456125,
                first_name: "Eugene Wesley",
                last_name: "Ferry Lowe",
                phone: "+51 925 766 232",
                phone2: "+51 197 999 304",
                email: "Casper_Botsford76@gmail.com",
                address: "76533 Feil Centers Apt. 506",
                address_reference: "Dorothea Extensions",
                fk_civil_status: 2,
                fk_housing_type: 2,
                observation: "often dimly grouchy to quietly",
                is_active: true
            },
            business: {
                business_description: "woot fondly rash female fat barbeque ooze adolescent pfft lest which eek yahoo ack refresh leading profitable brisk seemingly like",
                address: "84032 Lempi Camp Suite 328",
                address_reference: "Dee Place",
                daily_gain: 1416.35,
                maximum_daily_gain: 819.87,
                minimum_daily_gain: 4447.24,
                inventory_value: 22467.93,
                have_property_documents: true,
                observation: "bridle absent parallel defensive plus"
            }
        },
        {
            requested_money: 4970.34,
            date_of_issue: "2022-08-31 17:02:51",
            period: 15,
            interest_rate: 11.65,
            state: "NU",
            fk_employee_cobrador: 8,
            fk_employee_analista: 5,
            fk_financial_interest: 1,
            fk_period_type: 2,
            aval: [{
                dni: 71791420,
                first_name: "Lionel Tommie",
                last_name: "Wiza Gislason",
                phone: "+51 693 919 330",
                email: "Sabryna78@gmail.com",
                address: "44150 Schimmel Light Suite 278"
            },],
            personalReference:[ {
                dni: 71632587,
                first_name: "Malcolm Jeffery",
                last_name: "Lemke Kuphal",
                phone: "+51 145 560 801",
                email: "Mayra36@yahoo.com",
                address: "602 Erdman Courts Suite 354",
                relationship: "Agent"
            },],
            customer: {
                dni: 71333975,
                first_name: "Tom Moses",
                last_name: "D'Amore Ullrich",
                phone: "+51 106 875 602",
                phone2: "+51 128 988 236",
                email: "Kory.Hane@gmail.com",
                address: "94369 Oliver Mount Suite 469",
                address_reference: "Wilbert Field",
                fk_civil_status: 2,
                fk_housing_type: 4,
                observation: "boo sprinkles bamboozle bewitched where",
                is_active: true
            },
            business: {
                business_description: "for ack and now well-off because composer actually present speak toward terribly against demonstrate indeed now fairly colloquy unless coverage",
                address: "39393 Christina Forest Suite 533",
                address_reference: "Maeve Inlet",
                daily_gain: 1441.61,
                maximum_daily_gain: 683.07,
                minimum_daily_gain: 4685.05,
                inventory_value: 25626.12,
                have_property_documents: true,
                observation: "willfully till veal gratefully nor"
            }
        },
        {
            requested_money: 4954.02,
            date_of_issue: "2019-04-27 18:55:17",
            period: 11,
            interest_rate: 15.62,
            state: "NU",
            fk_employee_cobrador: 7,
            fk_employee_analista: 5,
            fk_financial_interest: 1,
            fk_period_type: 2,
            aval: [{
                dni: 71867557,
                first_name: "Mitchell Geoffrey",
                last_name: "Bogisich Murray",
                phone: "+51 922 112 491",
                email: "Rosalind.Larson@gmail.com",
                address: "24859 Smith Crest Suite 592"
            },],
            personalReference:[ {
                dni: 71185565,
                first_name: "Nick Martin",
                last_name: "Olson Windler",
                phone: "+51 779 395 945",
                email: "Doug_Walter8@gmail.com",
                address: "598 Eino Wells Apt. 443",
                relationship: "Architect"
            },],
            customer: {
                dni: 71106444,
                first_name: "Jermaine Colin",
                last_name: "Miller White",
                phone: "+51 099 619 307",
                phone2: "+51 367 822 150",
                email: "Wade_Schinner94@hotmail.com",
                address: "43293 Waters Neck Apt. 916",
                address_reference: "Rosenbaum Coves",
                fk_civil_status: 2,
                fk_housing_type: 4,
                observation: "alphabetise regarding area whoa versus",
                is_active: true
            },
            business: {
                business_description: "list notepad though oof lazily chalet lop miserably manager ack minus majestically rasterize ferociously hmph pace afterwards because at goal",
                address: "45973 Amelia Brooks Suite 343",
                address_reference: "Jazmin Lodge",
                daily_gain: 993.19,
                maximum_daily_gain: 929.86,
                minimum_daily_gain: 1083.18,
                inventory_value: 8378.53,
                have_property_documents: true,
                observation: "pup visit quaintly pish fix"
            }
        },
        {
            requested_money: 1520.23,
            date_of_issue: "2019-07-30 03:15:55",
            period: 10,
            interest_rate: 12.9,
            state: "NU",
            fk_employee_cobrador: 8,
            fk_employee_analista: 3,
            fk_financial_interest: 1,
            fk_period_type: 2,
            aval: [{
                dni: 71577400,
                first_name: "Marcos Gilbert",
                last_name: "Schamberger Rippin",
                phone: "+51 290 703 578",
                email: "Raul43@hotmail.com",
                address: "7603 Bednar Landing Apt. 511"
            },],
            personalReference:[ {
                dni: 71179665,
                first_name: "Rogelio Dexter",
                last_name: "Johnson-Mante Rippin",
                phone: "+51 584 617 312",
                email: "Emelia65@gmail.com",
                address: "4232 Stamm Forks Apt. 790",
                relationship: "Executive"
            },],
            customer: {
                dni: 71768416,
                first_name: "Drew Thomas",
                last_name: "Swift Schaden",
                phone: "+51 570 281 910",
                phone2: "+51 093 786 538",
                email: "Nicole62@yahoo.com",
                address: "235 Annamae Mill Suite 100",
                address_reference: "Erwin Fords",
                fk_civil_status: 3,
                fk_housing_type: 1,
                observation: "roughly modulo black following home",
                is_active: true
            },
            business: {
                business_description: "clover meh marshal quickly nightingale onto as marry out paw toward bug impure lip coaxingly rush aw whose jumpy waist",
                address: "4177 Ondricka Forge Apt. 553",
                address_reference: "Oran Hill",
                daily_gain: 1063.51,
                maximum_daily_gain: 628.75,
                minimum_daily_gain: 4558.37,
                inventory_value: 15034.53,
                have_property_documents: true,
                observation: "lumber except defender winch oof"
            }
        }
    ]



}