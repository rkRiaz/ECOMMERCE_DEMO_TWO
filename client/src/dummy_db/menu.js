import fruit from '../assets/images/fruit.svg'
import jelly from '../assets/images/jelly.svg'





const menu = [
    {
        name: 'live',
        link: "/customerDashboard"
    },
    {
        name: '100% free',
        link: "#"
    },
    {
        name: 'halal discount',
        drawer: [
            {
                name: 'action',
                link: "#" 
            },
            {
                name: 'another action',
                link: "#" 
            },
            {
                name: 'seperate action',
                link: "/customerDashboard" 
            },
            {
                name: 'something',
                link: "#" 
            }
        ]
    },
    {
        name: 'চাল',
        link: "#"
    },
    {
        name: 'তেল',
        link: "#"
    },
    {
        name: 'লবণ',
        link: "#"
    },
    {
        name: 'চিনি',
        link: "#"
    },
    {
        name: 'ডাল',
        link: "#"
    },
    {
        name: 'মশলা',
        drawer: [
            {
                name: 'action',
                link: "#" 
            },
            {
                name: 'another action',
                link: "#" 
            },
            {
                name: 'seperate action',
                link: "/customerDashboard" 
            },
            {
                name: 'something',
                link: "#" 
            }
        ]
    },
    {
        name: 'অন্যান্য',
        link: "#"
    },
    {
        name: 'হালাল পেশাদার',
        drawer: [
            {
                name: 'action',
                link: "#" 
            },
            {
                name: 'another action',
                link: "#" 
            },
            {
                name: 'seperate action',
                link: "/customerDashboard" 
            },
            {
                name: 'something',
                link: "#" 
            }
        ]
    },

]

export default menu
