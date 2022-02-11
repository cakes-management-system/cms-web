import * as React from 'react';
import CakeGrid from "./CakeGrid";
import {Cake} from "../../model/Cake";

const cakes: Cake[] = [
    {
        id: 1,
        name: 'Медовик',
        imageSrc: 'images/cakes/honey_cake.jpg',
    },
    {
        id: 2,
        name: 'Наполеон',
        imageSrc: 'images/cakes/napoleon.jpg',
    },
    {
        id: 3,
        name: 'Чизкейк',
        imageSrc: 'images/cakes/cheesecake.jpg',
    },
    {
        id: 4,
        name: 'Прага',
        imageSrc: 'images/cakes/prague.jpg',
    },
];


export default function Cakes() {
    return (
        <CakeGrid cakes={cakes}/>
    );
}