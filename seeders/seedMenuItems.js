const mongoose = require("mongoose");
const MenuItem = require("../models/menuItem");
const connectDB = require('../db');
const uploadToS3 = require('../s3uploader');

// Connect to the database
connectDB();

async function main() {
    let imageUrl1, imageUrl2;
    
    try {
        // Upload images to S3
        imageUrl1 = await uploadToS3('./img/menu/menu-item-1.png');
        imageUrl2 = await uploadToS3('./img/menu/menu-item-2.png');
        console.log("Image 1 URL:", imageUrl1);
        console.log("Image 2 URL:", imageUrl2);
    } catch (err) {
        console.error("Error uploading images:", err);
    }

    // Sample data to insert
    const sampleItemsBreakfast = [
      {
        title: "Sample Dish 3",
        imgSrc: imageUrl1,
        ingredients: "Ingredients 1",
        price: "$9.99",
      },
      {
        title: "Sample Dish 4",
        imgSrc: imageUrl2,
        ingredients: "Ingredients 2",
        price: "$10.99",
      },
    ];

    const sampleCategoryBreakfast = {
      name: "Lunch",
      items: sampleItemsBreakfast,
    };

    try {
        const docs = await MenuItem.insertMany([sampleCategoryBreakfast]);
        console.log("Items seeded:", docs);
    } catch (err) {
        console.error("Error seeding database:", err);
    } finally {
        mongoose.connection.close(); // Close the connection once done
    }
}

main();
