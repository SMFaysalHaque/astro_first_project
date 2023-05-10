import { atom } from "nanostores";
import { map } from 'nanostores'

const counter = atom(0);

const prodcutDetails = atom([
    {
        type: 'Computer',
        name: 'HP',
        model: 'hp-123'
    },
    {
        type: 'Headphone',
        name: 'Havit',
        model: 'havit-563'
    },
    {
        type: 'Processor',
        name: 'ASUS',
        model: 'asus987'
    },
]);

const employee = atom([
    {
        name: 'Akbar Ali',
        mobile: 456987123,
        email: 'akbar@gmail.com'
    },
    {
        name: 'Khairul Ali',
        mobile: 456321789,
        email: 'khairul@gmail.com'
    },
    {
        name: 'Sohana Ali',
        mobile: 963258741,
        email: 'sohana@gmail.com'
    },
])
export {
    counter, prodcutDetails, employee
}