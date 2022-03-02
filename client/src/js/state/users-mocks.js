const users = [
    {
        id: '9b119493-97bf-4449-880f-d25ae81dfec1',
        firstName: 'Justin',
        lastName: 'Septimus',
        email: 'justin.septimus@email.com',
        lastLogin: '2020-04-14',
        paymentDate: '2020-05-02',
        paymentStatus: 'paid',
        amount: 300,
        currency: 'USD',
        activityStatus: 'inactive',
        details: [
            {
                id: '4686021b-37ba-4267-a3d3-68d7a39a6690',
                date: '2020-03-17',
                activity:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.',
                detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.',
            },
            {
                id: '9c0cc4e8-4979-4309-b21e-1560fb78cfd9',
                date: '2020-03-20',
                activity:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.',
                detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.',
            },
            {
                id: 'eb6ae7d4-77c6-4625-9d87-60f3123dbe54',
                date: '2020-03-24',
                activity:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.',
                detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.',
            },
        ],
    },
    {
        id: '0cd4e223-5009-40ee-b348-601b0882df53',
        firstName: 'Anika',
        lastName: 'Rhiel Madsen',
        email: 'anika.rhiel@example.com',
        lastLogin: '2020-06-23',
        paymentDate: '2020-03-11',
        paymentStatus: 'unpaid',
        amount: 200,
        currency: 'USD',
        activityStatus: 'active',
        details: [
            {
                id: '813e313b-1776-450d-a20c-eb59c800f0d9',
                date: '2020-03-24',
                activity:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.',
                detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.',
            },
            {
                id: '574d6daa-e1ac-43a7-9d07-959cd93e2c74',
                date: '2020-03-28',
                activity:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.',
                detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.',
            },
            {
                id: 'c58fd212-b46c-4666-b4fd-7dcabea28353',
                date: '2020-03-30',
                activity:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.',
                detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.',
            },
            {
                id: 'd86beb51-500d-47ad-805c-b3475ed398b2',
                date: '2020-03-30',
                activity:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.',
                detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.',
            },
        ],
    },
    {
        id: '261017a2-5313-4d09-b36a-dba4c65b67d3',
        firstName: 'Miracle',
        lastName: 'Vaccaro',
        email: 'miracle.vaccaro@ya.ru',
        lastLogin: '2021-01-19',
        paymentDate: '2021-08-08',
        paymentStatus: 'overdue',
        amount: 150,
        currency: 'USD',
        activityStatus: 'inactive',
        details: [
            {
                id: '2eb0ead0-7afe-4cb4-a9fe-5f0ea033280a',
                date: '2021-08-11',
                activity:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.',
                detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.',
            },
            {
                id: 'eefcb2b5-3c68-4571-bd4b-35c0d55f7654',
                date: '2021-08-12',
                activity:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.',
                detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.',
            },
            {
                id: 'b69a77f3-9064-400a-b72c-8569b77c3f28',
                date: '2021-08-16',
                activity:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.',
                detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.',
            },
            {
                id: 'bd8d755c-6815-4195-82e3-f908f4361fa3',
                date: '2021-08-22',
                activity:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.',
                detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.',
            },
        ],
    },
    {
        id: '5ea2a9a6-354b-43fa-8a0b-ee70f21c724a',
        firstName: 'Gaspard',
        lastName: 'Rousseau',
        email: 'gaspard.rousseau@example.com',
        lastLogin: '2021-07-25',
        paymentDate: '2021-09-30',
        paymentStatus: 'paid',
        amount: 230,
        currency: 'USD',
        activityStatus: 'active',
        details: [
            {
                id: 'f4c2902c-15dc-42a9-a489-a153e9f82d90',
                date: '2021-10-10',
                activity:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.',
                detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.',
            },
            {
                id: '34f97b29-1880-41cf-a288-e817600ae65c',
                date: '2021-10-14',
                activity:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.',
                detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.',
            },
        ],
    },
    {
        id: '91283914-1d7f-4f8e-845d-445a0e0d305d',
        firstName: 'Lou',
        lastName: 'Blanc',
        email: 'lou.blanc@example.com',
        lastLogin: '2021-03-19',
        paymentDate: '2021-02-20',
        paymentStatus: 'paid',
        amount: 330,
        currency: 'USD',
        activityStatus: 'active',
        details: [
            {
                id: '64217d7d-5401-4da5-bd97-4cc4605fd9c5',
                date: '2021-02-23',
                activity:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.',
                detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.',
            },
        ],
    },
    {
        id: '6066a08a-5b84-44d9-8f1e-ca1365ed688b',
        firstName: 'Flora',
        lastName: 'Bernard',
        email: 'flora.bernard@example.com',
        lastLogin: '2021-05-02',
        paymentDate: '2021-06-22',
        paymentStatus: 'overdue',
        amount: 130,
        currency: 'USD',
        activityStatus: 'active',
        details: [],
    },
    {
        id: '4728b83f-6764-42c8-9191-b67e7eb66724',
        firstName: 'Dominic',
        lastName: 'Jones',
        email: 'dominic.jones@example.com',
        lastLogin: '2021-01-04',
        paymentDate: '2021-02-09',
        paymentStatus: 'unpaid',
        amount: 100,
        currency: 'USD',
        activityStatus: 'active',
        details: [],
    },
    {
        id: 'bbf0bf5e-0eb6-48a7-9a89-3ea80d56221d',
        firstName: 'Michèle',
        lastName: 'Michel',
        email: 'michele.michel@example.com',
        lastLogin: '2020-11-14',
        paymentDate: '2020-12-01',
        paymentStatus: 'paid',
        amount: 340,
        currency: 'USD',
        activityStatus: 'inactive',
        details: [
            {
                id: '72635b78-2fa9-4f6f-91bb-85b66f058a8a',
                date: '2020-12-11',
                activity:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.',
                detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.',
            },
            {
                id: '7261727c-3277-4968-b723-bb4ff1bf72d6',
                date: '2020-12-12',
                activity:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.',
                detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.',
            },
            {
                id: '0aa9cd22-54a5-4e70-8e1f-bb12c090e5aa',
                date: '2020-12-15',
                activity:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.',
                detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.',
            },
        ],
    },
    {
        id: '216842f7-74d1-4f2e-aa3b-bbc8b8aa4a09',
        firstName: 'Annabelle',
        lastName: 'Bergeron',
        email: 'annabelle.bergeron@example.com',
        lastLogin: '2021-02-06',
        paymentDate: '2021-04-11',
        paymentStatus: 'overdue',
        amount: 257,
        currency: 'USD',
        activityStatus: 'inactive',
        details: [
            {
                id: 'eee0ffbd-4636-462a-8781-9697932dbf34',
                date: '2021-04-16',
                activity:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.',
                detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.',
            },
            {
                id: 'b9687543-1434-4725-ad6c-9145c555000c',
                date: '2021-04-22',
                activity:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.',
                detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.',
            },
        ],
    },
    {
        id: '981971e1-0955-4f76-8022-ce6c9f52a41f',
        firstName: 'Lucie',
        lastName: 'Lemaire',
        email: 'lucie.lemaire@example.com',
        lastLogin: '2021-09-04',
        paymentDate: '2021-11-22',
        paymentStatus: 'unpaid',
        amount: 138,
        currency: 'USD',
        activityStatus: 'active',
        details: [],
    },
    {
        id: '20641ed4-a4c9-4850-9d92-3d932023af31',
        firstName: 'Charles',
        lastName: 'Andre',
        email: 'charles.andre@example.com',
        lastLogin: '2021-07-25',
        paymentDate: '2021-09-13',
        paymentStatus: 'unpaid',
        amount: 237,
        currency: 'USD',
        activityStatus: 'inactive',
        details: [
            {
                id: 'eee0ffbd-4636-462a-8211-9697932dbf34',
                date: '2021-01-21',
                activity:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.',
                detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.',
            },
            {
                id: 'b9687543-1434-4725-gf6c-9145c555000c',
                date: '2021-04-30',
                activity:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.',
                detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.',
            },
        ],
    },
    {
        id: 'c30a6622-3375-47f1-ae36-0d4f61ee0b91',
        firstName: 'Ronin',
        lastName: 'Ensink',
        email: 'ronin.ensink@example.com',
        lastLogin: '2020-11-14',
        paymentDate: '2020-12-09',
        paymentStatus: 'overdue',
        amount: 435,
        currency: 'USD',
        activityStatus: 'inactive',
        details: [
            {
                id: 'eefdffbd-4636-462a-8211-9697932dbf34',
                date: '2020-12-06',
                activity:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.',
                detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.',
            },
        ],
    },
    {
        id: '121203c1-f16b-4057-a67d-0ccb2d86fa1f',
        firstName: 'Andrea',
        lastName: 'Crespo',
        email: 'andrea.crespo@example.com',
        lastLogin: '2020-10-26',
        paymentDate: '2020-11-03',
        paymentStatus: 'paid',
        amount: 500,
        currency: 'USD',
        activityStatus: 'active',
        details: [
            {
                id: 'eee0ffbd-4568-462a-8211-9697932dbf34',
                date: '2020-10-28',
                activity:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.',
                detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.',
            },
            {
                id: 'eee0ffbd-4636-32fd-8211-9697932dbf34',
                date: '2020-11-02',
                activity:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.',
                detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.',
            },
            {
                id: 'eee0ffbd-4636-462a-543g-9697932dbf34',
                date: '2020-11-04',
                activity:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.',
                detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.',
            },
        ],
    },
    {
        id: 'c30a6622-3375-47f1-ae36-0d4f6vcxe0b91',
        firstName: 'Timeo',
        lastName: 'Martin',
        email: 'timeo.martin@example.com',
        lastLogin: '2021-02-03',
        paymentDate: '2021-03-04',
        paymentStatus: 'unpaid',
        amount: 100,
        currency: 'USD',
        activityStatus: 'active',
        details: [
            {
                id: 'eefdfdsd-4636-462a-8211-9697932dbf34',
                date: '2021-02-06',
                activity:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.',
                detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.',
            },
        ],
    },
    {
        id: 'c332d522-3375-47f1-ae36-0d4f6vcxe0b91',
        firstName: 'Neea',
        lastName: 'Kemppainen',
        email: 'neea.kemppainen@example.com',
        lastLogin: '2021-07-21',
        paymentDate: '2021-09-22',
        paymentStatus: 'paid',
        amount: 375,
        currency: 'USD',
        activityStatus: 'inactive',
        details: [
            {
                id: 'eefdfdsd-3279-462a-8211-9697932dbf34',
                date: '2021-09-11',
                activity:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.',
                detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.',
            },
            {
                id: 'eefdfdsd-4636-462a-9854-9697932dbf34',
                date: '2021-10-11',
                activity:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.',
                detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.',
            },
        ],
    },
];

export default users;
