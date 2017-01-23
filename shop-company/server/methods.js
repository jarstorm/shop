import { Product } from '../imports/api/product.js';
import { ShoppingCart } from '../imports/api/shopping-cart.js';
import { Company } from '../imports/api/company.js';
import { Email } from 'meteor/email';

import PdfPrinter from 'pdfmake';
var path = require('path');
var fonts = {
    Roboto: {
        normal: Assets.absoluteFilePath('fonts/Roboto-Regular.ttf'),
        bold: Assets.absoluteFilePath('fonts/Roboto-Medium.ttf'),
        italics: Assets.absoluteFilePath('fonts/Roboto-Italic.ttf'),
        bolditalics: Assets.absoluteFilePath('fonts/Roboto-Italic.ttf')
    }
};

var printer = new PdfPrinter(fonts);
var fs = require('fs');


Meteor.methods({
    addProduct(userId, productId) {
        const product = Product.findOne(productId);
        let cart = ShoppingCart.findOne({ userId });
        let cartId;
        if (cart) {
            cartId = cart._id;
        } else {
            cartId = ShoppingCart.insert({
                userId,
                products: []
            });
        }

        console.log("De nuevo", cart);
        ShoppingCart.update({ _id: cartId }, {
            $push: {
                products: {
                    title: product.title,
                    productId: productId,
                    addedAt: new Date(),
                    price: product.price,
                    thumbnail: product.thumbnail
                }
            }
        });
    },

    proceed(userId) {

        // Generate doc
        var docDefinition = {
            content: [
                'Ejemplo de factura que te va a llegar',
                'No te va a doler el recio'
            ]
        };

        var pdfDoc = printer.createPdfKitDocument(docDefinition);
        var stream;
        pdfDoc.pipe(fs.createWriteStream('basics.pdf'));
        pdfDoc.end();

        // Update database
        let cart = ShoppingCart.findOne({ userId });
        ShoppingCart.remove(cart._id);

        //Send email
        Email.send({
            to: 'javierabadrodriguez@gmail.com',
            from: 'javierabadrodriguez@gmail.com',
            subject: 'Titulo',
            text: 'Texto',
            attachments: [{
                fileName: 'basics.pdf',
                filePath: path.join(path.resolve('.'), 'basics.pdf'),
                contentType: "application/pdf"
            }, ]


        });
    }
});
