import fruit from '../assets/images/fruit.svg'
import jelly from '../assets/images/jelly.svg'
import riaz from '../assets/images/riaz.jpg'




 const products = [
    {
        _id: 1,
        images: [fruit, riaz],
        name: "Frosty Fruits",
        strikePrice: 450,
        price: 380,
        category: 'Fruits',
        categorySlug: 'fruits',
        subCategory: 'Mango',
        subCategorySlug: 'mango',


        rating: 2,
        details: "Banana is the most popular fresh fruit in all over the world. It has lots of variety. Chompa Banana is one of them. Chompa Bananas are comparatively smaller than the normal bananas. Bananas are great super food which provides us with energy, make us feel full and provide our body with essential nutrients and high amount of fiber. Banana is one of the high calorie tropical fruits. 100 grams of its flesh carries 90 calories. Besides, it contains good amount of health benefiting fiber, anti-oxidants, minerals, and vitamins. Bananas could help you to feel happier as they contain tryptophan, a type of protein that the body converts into serotonin, known to promote relaxation and improve mood.",
        available: true,
        brand: 'champa',
        reviews: [
            {
                name: 'saiful islam',
                rating: 5,
                comment: 'This is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
            },
            {
                name: 'saiful islam',
                rating: 5,
                comment: 'This is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
            },
            {
                name: 'saiful islam',
                rating: 5,
                comment: 'This is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
            }
        ]
    },

    {
        _id: 2,
        images: [fruit, jelly],
        name: "banana Fruits",
        strikePrice: 450,
        price: 20,
        category: 'health',
        rating: 4,
        details: "Banana is the most popular fresh fruit in all over the world. It has lots of variety. Chompa Banana is one of them. Chompa Bananas are comparatively smaller than the normal bananas. Bananas are great super food which provides us with energy, make us feel full and provide our body with essential nutrients and high amount of fiber. Banana is one of the high calorie tropical fruits. 100 grams of its flesh carries 90 calories. Besides, it contains good amount of health benefiting fiber, anti-oxidants, minerals, and vitamins. Bananas could help you to feel happier as they contain tryptophan, a type of protein that the body converts into serotonin, known to promote relaxation and improve mood.",
        available: true,
        brand: 'champa',
        reviews: [
            {
                name: 'saiful islam',
                rating: 5,
                comment: 'This is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
            },
            {
                name: 'saiful islam',
                rating: 5,
                comment: 'This is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
            },
            {
                name: 'saiful islam',
                rating: 5,
                comment: 'This is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
            }
        ]
    },
    {
        _id: 3,
        images: [fruit, jelly],
        name: "Frosty Fruits",
        strikePrice: 220,
        price: 130,
        category: 'home',
        rating: 4,
        details: "Banana is the most popular fresh fruit in all over the world. It has lots of variety. Chompa Banana is one of them. Chompa Bananas are comparatively smaller than the normal bananas. Bananas are great super food which provides us with energy, make us feel full and provide our body with essential nutrients and high amount of fiber. Banana is one of the high calorie tropical fruits. 100 grams of its flesh carries 90 calories. Besides, it contains good amount of health benefiting fiber, anti-oxidants, minerals, and vitamins. Bananas could help you to feel happier as they contain tryptophan, a type of protein that the body converts into serotonin, known to promote relaxation and improve mood.",
        available: true,
        brand: 'champa',
        reviews: [
            {
                name: 'saiful islam',
                rating: 5,
                comment: 'This is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
            },
            {
                name: 'saiful islam',
                rating: 5,
                comment: 'This is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
            },
            {
                name: 'saiful islam',
                rating: 5,
                comment: 'This is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
            }
        ]
    },
    {
        _id: 4,
        images: [fruit, jelly],
        name: "Frosty Fruits",
        strikePrice: 450,
        price: 380,
        category: 'beverages',
        rating: 4,
        details: "Banana is the most popular fresh fruit in all over the world. It has lots of variety. Chompa Banana is one of them. Chompa Bananas are comparatively smaller than the normal bananas. Bananas are great super food which provides us with energy, make us feel full and provide our body with essential nutrients and high amount of fiber. Banana is one of the high calorie tropical fruits. 100 grams of its flesh carries 90 calories. Besides, it contains good amount of health benefiting fiber, anti-oxidants, minerals, and vitamins. Bananas could help you to feel happier as they contain tryptophan, a type of protein that the body converts into serotonin, known to promote relaxation and improve mood.",
        available: true,
        brand: 'champa',
        reviews: [
            {
                name: 'saiful islam',
                rating: 5,
                comment: 'This is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
            },
            {
                name: 'saiful islam',
                rating: 5,
                comment: 'This is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
            },
            {
                name: 'saiful islam',
                rating: 5,
                comment: 'This is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
            }
        ]
    },
    {
        _id: 5,
        images: [fruit, jelly],
        name: "Frosty Fruits",
        strikePrice: 450,
        price: 380,
        category: 'fish',
        rating: 4,
        details: "Banana is the most popular fresh fruit in all over the world. It has lots of variety. Chompa Banana is one of them. Chompa Bananas are comparatively smaller than the normal bananas. Bananas are great super food which provides us with energy, make us feel full and provide our body with essential nutrients and high amount of fiber. Banana is one of the high calorie tropical fruits. 100 grams of its flesh carries 90 calories. Besides, it contains good amount of health benefiting fiber, anti-oxidants, minerals, and vitamins. Bananas could help you to feel happier as they contain tryptophan, a type of protein that the body converts into serotonin, known to promote relaxation and improve mood.",
        available: true,
        brand: 'champa',
        reviews: [
            {
                name: 'saiful islam',
                rating: 5,
                comment: 'This is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
            },
            {
                name: 'saiful islam',
                rating: 5,
                comment: 'This is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
            },
            {
                name: 'saiful islam',
                rating: 5,
                comment: 'This is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
            }
        ]
    },
    {
        _id: 6,
        images: [fruit, jelly],
        name: "Frosty Fruits",
        strikePrice: 450,
        price: 380,
        category: 'meat',
        rating: 4,
        details: "Banana is the most popular fresh fruit in all over the world. It has lots of variety. Chompa Banana is one of them. Chompa Bananas are comparatively smaller than the normal bananas. Bananas are great super food which provides us with energy, make us feel full and provide our body with essential nutrients and high amount of fiber. Banana is one of the high calorie tropical fruits. 100 grams of its flesh carries 90 calories. Besides, it contains good amount of health benefiting fiber, anti-oxidants, minerals, and vitamins. Bananas could help you to feel happier as they contain tryptophan, a type of protein that the body converts into serotonin, known to promote relaxation and improve mood.",
        available: true,
        brand: 'champa',
        reviews: [
            {
                name: 'saiful islam',
                rating: 5,
                comment: 'This is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
            },
            {
                name: 'saiful islam',
                rating: 5,
                comment: 'This is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
            },
            {
                name: 'saiful islam',
                rating: 5,
                comment: 'This is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
            }
        ]
    },
    {
        _id: 7,
        images: [fruit, jelly],
        name: "Frosty Fruits",
        strikePrice: 450,
        price: 380,
        category: 'vegitable',
        rating: 4,
        details: "Banana is the most popular fresh fruit in all over the world. It has lots of variety. Chompa Banana is one of them. Chompa Bananas are comparatively smaller than the normal bananas. Bananas are great super food which provides us with energy, make us feel full and provide our body with essential nutrients and high amount of fiber. Banana is one of the high calorie tropical fruits. 100 grams of its flesh carries 90 calories. Besides, it contains good amount of health benefiting fiber, anti-oxidants, minerals, and vitamins. Bananas could help you to feel happier as they contain tryptophan, a type of protein that the body converts into serotonin, known to promote relaxation and improve mood.",
        available: true,
        brand: 'champa',
        reviews: [
            {
                name: 'saiful islam',
                rating: 5,
                comment: 'This is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
            },
            {
                name: 'saiful islam',
                rating: 5,
                comment: 'This is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
            },
            {
                name: 'saiful islam',
                rating: 5,
                comment: 'This is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
            }
        ]
    },
    {
        _id: 8,
        images: [fruit, jelly],
        name: "Champa",
        strikePrice: 450,
        price: 380,
        category: 'fruits',
        subCategory: 'banana',
        rating: 4,
        details: "Banana is the most popular fresh fruit in all over the world. It has lots of variety. Chompa Banana is one of them. Chompa Bananas are comparatively smaller than the normal bananas. Bananas are great super food which provides us with energy, make us feel full and provide our body with essential nutrients and high amount of fiber. Banana is one of the high calorie tropical fruits. 100 grams of its flesh carries 90 calories. Besides, it contains good amount of health benefiting fiber, anti-oxidants, minerals, and vitamins. Bananas could help you to feel happier as they contain tryptophan, a type of protein that the body converts into serotonin, known to promote relaxation and improve mood.",
        available: true,
        brand: 'champa',
        reviews: [
            {
                name: 'saiful islam',
                rating: 5,
                comment: 'This is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
            },
            {
                name: 'saiful islam',
                rating: 5,
                comment: 'This is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
            },
            {
                name: 'saiful islam',
                rating: 5,
                comment: 'This is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
            }
        ]
    }
]

export default products
 
