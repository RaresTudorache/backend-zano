const mongoose = require("mongoose");
const Menu = require('../models/menuItem');
const connectDB = require('../db');

connectDB();

async function updateImageUrls() {
    try {
        const results = await Menu.updateMany(
            { "items.imgSrc": { $regex: /\.jpg$/ } },
            [
                {
                    $set: {
                        "items.$[].imgSrc": {
                            $function: {
                                body: function(imgSrc) {
                                    return imgSrc.replace("folder/", "folder/pizza/").replace(".jpg", ".jpeg");
                                },
                                args: ["$items.imgSrc"],
                                lang: "js"
                            }
                        }
                    }
                }
            ]
        );
        console.log('Update results:', results);
    } catch (error) {
        console.error('Error updating image URLs:', error);
    }
}

updateImageUrls().then(() => {
    mongoose.connection.close();
});