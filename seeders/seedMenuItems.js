const mongoose = require("mongoose");
const MenuItem = require("../models/menuItem");
const connectDB = require('../db');
const uploadToS3 = require('../s3uploader');

// Connect to the database
connectDB();

async function main() {
    let margheritaImgUrl, marinaraImgUrl, capriciosaImgUrl, prosciuttoeFunghiImgUrl, quattroFormaggiImgUrl, capriImgUrl,
        salamiImgUrl, napoliImgUrl, bresaolaImgUrl, tartufoImgUrl, tonnoImgUrl, pestoImgUrl, zanoImgUrl,
        primaveraImgUrl, monellaImgUrl, vegetarianaImgUrl, calzoneImgUrl, quattroCarniImgUrl, bufalaImgUrl,
        quattroStagioniImgUrl, mortadellaImgUrl, salsicciaImgUrl, amatricianaImgUrl, cottoImgUrl, salameImgUrl,
        mortadellaPanoziiImgUrl, crudoImgUrl, bresaolaPanoziImgUrl , melanzaneImgUrl , bufalaPanoziImgUrl;

    try {
        // Upload images to S3
        // PIZZA
        margheritaImgUrl = await uploadToS3('./img/menu/Margherita.jpg');
        marinaraImgUrl = await uploadToS3('./img/menu/Marinara.jpg');
        capriciosaImgUrl = await uploadToS3('./img/menu/Capriciosa.jpg');
        prosciuttoeFunghiImgUrl = await uploadToS3('./img/menu/Prosciutto e Funghi.jpg');
        quattroFormaggiImgUrl = await uploadToS3('./img/menu/Quatro Formaggi.jpg');
        capriImgUrl = await uploadToS3('./img/menu/Capri.jpg');
        salamiImgUrl = await uploadToS3('./img/menu/Salami.jpg');
        napoliImgUrl = await uploadToS3('./img/menu/Napoli.jpg');
        bresaolaImgUrl = await uploadToS3('./img/menu/Bresaola.jpg');
        tartufoImgUrl = await uploadToS3('./img/menu/Tartufo.jpg');
        tonnoImgUrl = await uploadToS3('./img/menu/Tonno.jpg');
        pestoImgUrl = await uploadToS3('./img/menu/Pesto.jpg');
        zanoImgUrl = await uploadToS3('./img/menu/Zano.jpg');
        primaveraImgUrl = await uploadToS3('./img/menu/Primavera.jpg');
        monellaImgUrl = await uploadToS3('./img/menu/Monella.jpg');
        melanzaneImgUrl = '';
        vegetarianaImgUrl = await uploadToS3('./img/menu/Vegetariana.jpg');
        calzoneImgUrl = await uploadToS3('./img/menu/Calzone.jpg');
        quattroCarniImgUrl = await uploadToS3('./img/menu/Quatro Carni .jpg');
        bufalaImgUrl = await uploadToS3('./img/menu/Bufala.png');
        quattroStagioniImgUrl = await uploadToS3('./img/menu/Quatro Stagioni.png');
        mortadellaImgUrl = await uploadToS3('./img/menu/Mortadella.png');
        amatricianaImgUrl = await uploadToS3('./img/menu/Amatriciana.png');
        //PANOZZI
        salsicciaImgUrl = await uploadToS3('./img/menu/Panozzi Salsiccia.jpg');
        cottoImgUrl = await uploadToS3('./img/menu/Panozzi Cotto.jpg');
        salameImgUrl = await uploadToS3('./img/menu/Panozzi Salame.jpg');
        mortadellaPanoziiImgUrl = await uploadToS3('./img/menu/Panozzi Mortadella.jpg');
        crudoImgUrl = await uploadToS3('./img/menu/Panozzi Crudo.jpg');
        bresaolaPanoziImgUrl = await uploadToS3('./img/menu/Panozzi Bresaola.jpg');
        bufalaPanoziImgUrl = ''
        console.log("Image 1 URL:", margheritaImgUrl);
        console.log("Image 2 URL:", marinaraImgUrl);
    } catch (err) {
        console.error("Error uploading images:", err);
    }

    // Sample data to insert
    const pizzaItems = [
        {
            title: "Amatriciana",
            imgSrc: amatricianaImgUrl,
            ingredients: "Sos de roșii San Marzano DOP, mozzarella fior di latte di Napoli, guanciale, pecorino romano DOP, grana padano DOP 580 gr",
            price: "38 lei",
            tazzLink: 'https://tazz.ro/iasi/zano/16851/restaurant#subcategory-2398170-product-31577507'
        },
        {
            title: "Bresaola",
            imgSrc: bresaolaImgUrl,
            ingredients: "Mozzarella fior di latte di Napoli, bresaola, parmigiano reggiano DOP, rucola pesto, ulei de măsline extravirgin italian, busuioc proaspăt 480 g",
            price: "46 lei",
            tazzLink: 'https://tazz.ro/iasi/zano/16851/restaurant#subcategory-2398170-product-31577508'

        },
        {
            title: "Bufala",
            imgSrc: bufalaImgUrl,
            ingredients: "Sos de roșii San Marzano DOP, mozzarela di bufala DOP, ulei de măsline extravirgin italian, busuioc proaspăt 470 g",
            price: "38 lei",
            tazzLink: ''

        },
        {
            title: "Calzone",
            imgSrc: calzoneImgUrl,
            ingredients: "Sos de roșii San Marzano DOP, salam Napoli, ricotta, provola, parmigiano reggiano DOP, ulei de măsline extravirgin italian 560 g",
            price: "37 lei",
            tazzLink: 'https://tazz.ro/iasi/zano/16851/restaurant#subcategory-2398170-product-31577510'

        },
        {
            title: "Capri",
            imgSrc: capriImgUrl,
            ingredients: "Sos de roșii San Marzano DOP, mozzarella fior di latte di Napoli, prosciutto cotto, măsline Kalamata, busuioc proaspăt 550 g",
            price: "37 lei",
            tazzLink: 'https://tazz.ro/iasi/zano/16851/restaurant#subcategory-2398170-product-31577511'

        },
        {
            title: "Capricciosa",
            imgSrc: capriciosaImgUrl,
            ingredients: "Sos de roșii San Marzano DOP, mozzarella fior di latte di Napoli, prosciutto cotto, anghinare, măsline Kalamata, ciuperci, ulei de măsline extravirgin italian, busuioc proaspăt 650 g",
            price: "38 lei",
            tazzLink: 'https://tazz.ro/iasi/zano/16851/restaurant#subcategory-2398170-product-31577512'

        },
        {
            title: "Margherita",
            imgSrc: margheritaImgUrl,
            ingredients: "Sos de roșii San Marzano DOP, mozzarella fior di latte di Napoli, ulei de măsline extravirgin italian, busuioc proaspăt 450 g",
            price: "33 lei",
            tazzLink: 'https://tazz.ro/iasi/zano/16851/restaurant#subcategory-2398170-product-31577514'

        },
        {
            title: "Marinara",
            imgSrc: marinaraImgUrl,
            ingredients: "Sos de roșii San Marzano DOP, oregano, usturoi, ulei de măsline extravirgin italian, busuioc proaspăt 380 g",
            price: "29 lei",
            tazzLink: 'https://tazz.ro/iasi/zano/16851/restaurant#subcategory-2398170-product-31577515'

        },
        {
            title: "Mortadella",
            imgSrc: mortadellaImgUrl,
            ingredients: "Mozzarella fior di latte di Napoli, mortadella, ricotta, grana padano DOP, fistic 520g",
            price: "38 lei",
            tazzLink: 'https://tazz.ro/iasi/zano/16851/restaurant#subcategory-2398170-product-31577517'

        },
        {
            title: "Monella",
            imgSrc: monellaImgUrl,
            ingredients: "Mozzarella fior di latte di Napoli, nduja, burrata, roșii cherry, ulei de măsline extravirgin italian, busuioc proaspăt 500 g",
            price: "39 lei",
            tazzLink: ''

        },
        {
            title: "Melanzane",
            imgSrc: melanzaneImgUrl,
            ingredients: "Cremă de vinete făcută în casă, mozzarella fior di latte di Napoli*, vinete la cuptor, grana padano DOP*, gorgonzola*, salsiccia, ulei de măsline extravirgin italian 690 g",
            price: "60 lei",
            tazzLink: ''

        },
        {
            title: "Napoli",
            imgSrc: napoliImgUrl,
            ingredients: "Sos de roșii San Marzano DOP, mozzarella fior di latte di Napoli, hamsii di Cetara, capere, ulei de măsline extravirgin italian, busuioc proaspăt 550 g",
            price: "38 lei",
            tazzLink: 'https://tazz.ro/iasi/zano/16851/restaurant#subcategory-2398170-product-31577518'

        },
        {
            title: "Pesto",
            imgSrc: pestoImgUrl,
            ingredients: "Pesto verde de busuioc proaspăt, mozarella fior di latte di Napoli, roșii cherry, dovlecei prăjiți, grana padano DOP, ulei de măsline extravirgin italian, busuioc proaspăt 550 g",
            price: "39 lei",
            tazzLink: 'https://tazz.ro/iasi/zano/16851/restaurant#subcategory-2398170-product-31577521'

        },
        {
            title: "Primavera",
            imgSrc: primaveraImgUrl,
            ingredients: "Mozzarella fior di latte, prosciutto crudo, rucola, parmigiano reggiano DOP, ulei de portocale 470 g",
            price: "39 lei",
            tazzLink: 'https://tazz.ro/iasi/zano/16851/restaurant#subcategory-2398170-product-31577522'

        },
        {
            title: "Prosciutto e Funghi",
            imgSrc: prosciuttoeFunghiImgUrl,
            ingredients: "Sos de roșii San Marzano DOP, mozzarella fior di latte di Napoli, prosciutto cotto, ciuperci, ulei de măsline extravirgin italian, busuioc proaspăt 550 g",
            price: "37 lei",
            tazzLink: 'https://tazz.ro/iasi/zano/16851/restaurant#subcategory-2398170-product-31577523'

        },
        {
            title: "Quattro Carni",
            imgSrc: quattroCarniImgUrl,
            ingredients: "Sos roșii San Marzano DOP, mozzarella fior di latte di Napoli, prosciutto cotto, spianata piccante, cârnați salsiccia, chorizo picante, ulei de măsline extravirgin italian, busuioc proaspăt 700 g",
            price: "39 lei",
            tazzLink: 'https://tazz.ro/iasi/zano/16851/restaurant#subcategory-2398170-product-31577524'

        },
        {
            title: "Quattro Formagi",
            imgSrc: quattroFormaggiImgUrl,
            ingredients: "Fior di latte di Napoli, ricotta, brie, gorgonzola DOP, ulei de măsline extravirgin italian, busuioc proaspăt 550 g",
            price: "38 lei",
            tazzLink: 'https://tazz.ro/iasi/zano/16851/restaurant#subcategory-2398170-product-31577525'

        },
        {
            title: "Quattro Stagioni",
            imgSrc: quattroStagioniImgUrl,
            ingredients: "Sos de roșii San Marzano DOP, mozzarella fior di latte di Napoli, prosciutto cotto, salam Napoli, ciuperci, măsline Kalamata, ulei măsline extravirgin italian, busuioc proaspăt 650 g",
            price: "39 lei",
            tazzLink: 'https://tazz.ro/iasi/zano/16851/restaurant#subcategory-2398170-product-31577526'

        },
        {
            title: "Salami",
            imgSrc: salamiImgUrl,
            ingredients: "Sos roșii San Marzano DOP, mozzarella fior di latte di Napoli, salam Napoli, măsline Kalamata, roșii cherry, ulei măsline extravirgin italian, busuioc proaspăt 600 g",
            price: "38 lei",
            tazzLink: 'https://tazz.ro/iasi/zano/16851/restaurant#subcategory-2398170-product-31577527'

        },
        {
            title: "Tartufo",
            imgSrc: tartufoImgUrl,
            ingredients: "Mozzarella fior di latte di Napoli, sos de trufe, ciuperci, grana padano DOP, ulei de măsline extravirgin italian, busuioc proaspăt 490 g",
            price: "39 lei",
            tazzLink: 'https://tazz.ro/iasi/zano/16851/restaurant#subcategory-2398170-product-31577528'

        },
        {
            title: "Tonno",
            imgSrc: tonnoImgUrl,
            ingredients: "Sos roșii San Marzano DOP, mozarella fior di latte di Napoli, ton în ulei de măsline, ceapă roșie, capere, ulei de măsline extravirgin italian, busuioc proaspăt 600 g",
            price: "38 lei",
            tazzLink: 'https://tazz.ro/iasi/zano/16851/restaurant#subcategory-2398170-product-31577529'

        },
        {
            title: "Vegetariana",
            imgSrc: vegetarianaImgUrl,
            ingredients: "Mozzarella fior di latte di Napoli, zucchini, ciuperci, bucățele de vinete 550 g",
            price: "35 lei",
            tazzLink: 'https://tazz.ro/iasi/zano/16851/restaurant#subcategory-2398170-product-31577530'

        },
    ];

    const panozziItems = [
        {
            title: "Bresaola",
            imgSrc: bresaolaPanoziImgUrl,
            ingredients: "Bresaola, stracciatella, grana padano DOP, roșii cherry, rucola 325 g",
            price: "35 lei",
            tazzLink: 'https://tazz.ro/iasi/zano/16851/restaurant#subcategory-2398168-product-31577494'

        },
        {
            title: "Bufala",
            imgSrc: bufalaPanoziImgUrl,
            ingredients: "Mozzarella di bufala DOP*, pesto verde de busuioc proaspăt făcut in casă, roșii cherry, ulei de măsline extravirgin italian 345 g",
            price: "35 lei",
            tazzLink: ''

        },
        {
            title: "Cotto",
            imgSrc: cottoImgUrl,
            ingredients: "Prosciutto Cotto, provola affumicata, anghinare 270 g",
            price: "21 lei",
            tazzLink: 'https://tazz.ro/iasi/zano/16851/restaurant#subcategory-2398168-product-31577496'

        },

        {
            title: "Crudo",
            imgSrc: crudoImgUrl,
            ingredients: "Prosciutto Crudo, stracciatella, grana padano DOP 275 g",
            price: "29 lei",
            tazzLink: 'https://tazz.ro/iasi/zano/16851/restaurant#subcategory-2398168-product-31577497'

        },
        {
            title: "Mortadella",
            imgSrc: mortadellaPanoziiImgUrl,
            ingredients: "Mortadella, stracciatella, fistic 250 g",
            price: "23 lei",
            tazzLink: 'https://tazz.ro/iasi/zano/16851/restaurant#subcategory-2398168-product-31577498'

        },
        {
            title: "Salame",
            imgSrc: salameImgUrl,
            ingredients: "Salam Napoli, mozzarella fior di latte di Napoli, roșii cherry 280 g",
            price: "21 lei",
            tazzLink: 'https://tazz.ro/iasi/zano/16851/restaurant#subcategory-2398168-product-31577499'

        },
        {
            title: "Salsiccia",
            imgSrc: salsicciaImgUrl,
            ingredients: "Salsiccia, provola affumicata, cartofi copți 280 g",
            price: "21 lei",
            tazzLink:'https://tazz.ro/iasi/zano/16851/restaurant#subcategory-2398168-product-31577500'
        },
    ];

    const sosItems = [
        {
            title: 'Sos rosii dulce',
            ingredients: '70 ml',
            price: '5 lei'
        },
        {
            title: 'Sos rosii dulce',
            ingredients: '70 ml',
            price: '5 lei'
        },
    ];
    const softDrinksItems = [
        {
            title: 'Apa plata',
            ingredients: '500 ml',
            price: '7 lei'
        },
        {
            title: 'Apa minerala',
            ingredients: '500 ml',
            price: '8 lei'
        },
        {
            title: 'Coca Cola',
            ingredients: '330 ml',
            price: '10 lei'
        },
        {
            title: 'Coca Cola 0',
            ingredients: '330 ml',
            price: '10 lei'
        },
        {
            title: 'Fanta Portocale',
            ingredients: '330 ml',
            price: '10 lei'
        },
        {
            title: 'Sprite',
            ingredients: '330 ml',
            price: '10 lei'
        },
        {
            title: 'Schweppes Tonic',
            ingredients: '330 ml',
            price: '10 lei'
        },

    ];
    const wineSpumantItems = [
        {
            title: 'Prosecco DOCG Valdobbiadene',
            ingredients: '750 ml',
            price: '100 lei'
        },
        {
            title: 'Prosecco DOC Treviso',
            ingredients: '750 ml',
            price: '85 lei'
        },
        {
            title: 'Stirbey',
            ingredients: '750 ml',
            price: '190 lei'
        },
    ];
    const beerItems = [
        {
            title: 'Peroni',
            ingredients: '330 ml',
            price: '10 lei'
        },
        {
            title: 'Ursus Premium',
            ingredients: '330 ml',
            price: '8 lei'
        },
        {
            title: 'Ursus Black Grizzly',
            ingredients: '330 ml',
            price: '10 lei'
        },
        {
            title: 'Pilsner Urquell',
            ingredients: '330 ml',
            price: '11 lei'
        },
        {
            title: 'Grolsch',
            ingredients: '450 ml',
            price: '12 lei'
        },
        {
            title: 'Asahi Super Dry',
            ingredients: '330 ml',
            price: '12 lei'
        },
        {
            title: 'Azuga Weisbier',
            ingredients: '500 ml',
            price: '13 lei'
        },
        {
            title: 'Azuga Nepasteurizată',
            ingredients: '500 ml',
            price: '12 lei'
        },
    ];
    const wineWhiteItems = [
        {
            title: 'Scaia Alb',
            ingredients: '750 ml',
            price: '125 lei'
        },
        {
            title: 'Curious Kiwi Sauvignon Blanc',
            ingredients: '750 ml',
            price: '95 lei'
        },
        {
            title: 'Montemajor Greco di Tufo',
            ingredients: '750 ml',
            price: '100 lei'
        },
        {
            title: 'Cuvee Clemence',
            ingredients: '750 ml',
            price: '140 lei'
        },
    ];
    const wineRedItems = [
        {
            title: 'Feudo Arancio',
            ingredients: '750 ml',
            price: '70 lei'
        },
        {
            title: 'Monti Garbi (Valpolicella Ripasso)',
            ingredients: '750 ml',
            price: '170 lei'
        },
        {
            title: 'Quattronotti',
            ingredients: '750 ml',
            price: '125 lei'
        },
        {
            title: 'Petra Ceci',
            ingredients: '750 ml',
            price: '115 lei'
        },
        {
            title: 'Papale',
            ingredients: '750 ml',
            price: '115 lei'
        },
        {
            title: 'Papale Linea Oro',
            ingredients: '750 ml',
            price: '175 lei'
        },
        {
            title: 'Chianti Classico',
            ingredients: '750 ml',
            price: '175 lei'
        },
        {
            title: 'Cuvee Guillaume',
            ingredients: '750 ml',
            price: '140 lei'
        },
    ];
    const wineRoseItems = [
        {
            title: 'Scaia Roze',
            ingredients: '750 ml',
            price: '120 lei'
        },
        {
            title: 'Susumaniello',
            ingredients: '750 ml',
            price: '95 lei'
        },
        {
            title: 'L’escarelle Rumeurs',
            ingredients: '750 ml',
            price: '110 lei'
        },
    ];
    const beerWithoutAlcoholItems = [
        {
            title: 'Peroni 0.0',
            ingredients: '330 ml',
            price: '11 lei'
        },
        {
            title: 'Ursus fără alcool',
            ingredients: '330 ml',
            price: '10 lei'
        },
        {
            title: 'Ursus Cooler Lămâie',
            ingredients: '330 ml',
            price: '10 lei'
        },
    ];

    const PizzaCategory = {
        name: "Pizza",
        items: pizzaItems,
    };

    const PanozziCategory = {
        name: "Panozzi",
        items: panozziItems,
    };

    const sosCategory = {
        name: "Sos",
        items: sosItems,
    }

    const softDrinksCategory = {
        name: "Soft Drinks",
        items: softDrinksItems
    }

    const wineSpumantCategory = {
        name: "Vin spumant",
        items: wineSpumantItems
    }

    const beerCategory = {
        name: "Bere",
        items: beerItems
    }

    const wineRedCategory = {
        name: "Vin Rosu",
        items: wineRedItems
    }

    const wineWhiteCategory = {
        name: "Vin Alb",
        items: wineWhiteItems,
    }

    const wineRoseCategory = {
        name: "Vin Rose",
        items: wineRoseItems
    }

    const beerWithoutAlcoholCategory = {
        name: "Bere fara alcool",
        items: beerWithoutAlcoholItems
    }

    try {
        const docs = await MenuItem.insertMany([PizzaCategory, PanozziCategory]);
        console.log("Items seeded:", docs);
    } catch (err) {
        console.error("Error seeding database:", err);
    } finally {
        mongoose.connection.close(); // Close the connection once done
    }
}

main();
