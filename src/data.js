import React from 'react';
import { FaUserGraduate } from 'react-icons/fa';
import { MdDoneAll } from 'react-icons/md';
import { MdDevicesOther } from 'react-icons/md';
import { GiBiceps } from 'react-icons/gi';
import { RiMoneyDollarBoxFill } from 'react-icons/ri';
import infos from './assets/infos.jpg';
const datas = [
    {
        id: 0,
        icon: <FaUserGraduate />,
        image: infos,
        txt: "Nos Formations",
        link: "http//yello.digi"
    },
    {
        id: 1,
        icon: < MdDoneAll />,
        image: infos,
        txt: "Nos Réalisations",
        link: "http//yello.digi"
    },
    {
        id: 2,
        icon: <MdDevicesOther />,
        image: infos,
        txt: "Nos Créations",
        link: "http//yello.digi"
    },
    {
        id: 3,
        icon: <GiBiceps />,
        image: infos,
        txt: "Compétences",
        link: "http//yello.digi"
    },
    {
        id: 4,
        icon: < RiMoneyDollarBoxFill />,
        image: infos,
        txt: "E-Business",
        link: "http//yello.digi"
    },
    {
        id: 5,
        icon: < RiMoneyDollarBoxFill />,
        image: infos,
        link: "http//yello.digi"
    },
];

export default datas;