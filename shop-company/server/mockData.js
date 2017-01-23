import { Product } from '../imports/api/product.js';
import { ShoppingCart } from '../imports/api/shopping-cart.js';
import { Company } from '../imports/api/company.js';

Meteor.startup(function() {
    Product.remove({});
    Company.remove({});
    const companyName = "Empresa Nueva";
    const oldCompanyName = "Empresa Vieja";
    var companyId = Company.insert({ name: companyName, description: "Descripcion de la empresa", rating: 3 });
    var oldCompanyId = Company.insert({ name: oldCompanyName, description: "Descripcion de la empresa antigua", rating: 4 });
    const product1 = Product.insert({
        title: "Producto nuevo",
        thumbnail: "http://www.apple.com/uk/pr/products/images/iMac27_iMac21_Photos_PRINT_131020_HERO.jpg",
        price: 12,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in " +
            "reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa " +
            "qui officia deserunt mollit anim id est laborum.",
        companyId: oldCompanyId,
        companyName: oldCompanyName,
        rating: 1.3,
        comments: ['Un comentario', 'Otro comentario']
    });
    const product2 = Product.insert({
        title: "Producto viejo",
        thumbnail: "https://www.2checkout.com/upload/images/graphic_product_tangible.png",
        price: 9.5,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in " +
            "reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa " +
            "qui officia deserunt mollit anim id est laborum.",
        companyId: oldCompanyId,
        companyName: oldCompanyName,
        rating: 2.3,
        comments: []
    });
    const product3 = Product.insert({
        title: "Camara fotos",
        thumbnail: "http://cdn-4.nikon-cdn.com/e/Q5NM96RZZo-YRYNeYvAi9beHK4x3L-8mX69Pbfqns6v7oXCgLWTph852P5lkBqRc/Views/25452_D5000_34r.png",
        price: 39.5,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in " +
            "reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa " +
            "qui officia deserunt mollit anim id est laborum.",
        companyId: companyId,
        companyName: companyName,
        rating: 3.3,
        comments: []
    });
    const product4 = Product.insert({
        title: "Patatas",
        thumbnail: "http://damassets.autodesk.net/content/dam/autodesk/www/collections/product-design/images/product-design-collection-banner-acad-overlay-790x600.png",
        price: 49.5,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in " +
            "reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa " +
            "qui officia deserunt mollit anim id est laborum.",
        companyId: companyId,
        companyName: companyName,
        rating: 1.3,
        comments: []
    });
    const product5 = Product.insert({
        title: "Vino",
        thumbnail: "http://www.solarviejo.com/wp-content/uploads/2015/07/product-amordemadre.jpg",
        price: 59.5,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in " +
            "reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa " +
            "qui officia deserunt mollit anim id est laborum.",
        companyId: companyId,
        companyName: companyName,
        rating: 2.3,
        comments: []
    });
    const product6 = Product.insert({
        title: "Silla bebe",
        thumbnail: "https://pi.tedcdn.com/r/pf.tedcdn.com/images/playlists/design_of_useful_things.jpg?quality=89&w=500g",
        price: 67.5,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in " +
            "reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa " +
            "qui officia deserunt mollit anim id est laborum.",
        companyId: companyId,
        companyName: companyName,
        rating: 2.3,
        comments: []
    });
    const product7 = Product.insert({
        title: "Reloj",
        thumbnail: "https://assets.babycenter.com/ims/2014/11/Product-Graco-4Ever4in11.jpg",
        price: 72,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in " +
            "reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa " +
            "qui officia deserunt mollit anim id est laborum.",
        companyId: companyId,
        companyName: companyName,
        rating: 4.3,
        comments: []
    });
    const product8 = Product.insert({
        title: "Gafas",
        thumbnail: "http://ghk.h-cdn.co/assets/16/44/1477924244-61nzd-7vltl-sx522-.jpg",
        price: 84.5,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in " +
            "reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa " +
            "qui officia deserunt mollit anim id est laborum.",
        companyId: companyId,
        companyName: companyName,
        rating: 4.3,
        comments: []
    });

    const product9 = Product.insert({
        title: "Teclado",
        thumbnail: "https://colorway.thefoundry.co.uk/site/assets/files/1031/slide1-img.png",
        price: 91.2,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in " +
            "reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa " +
            "qui officia deserunt mollit anim id est laborum.",
        companyId: companyId,
        companyName: companyName,
        rating: 1.3,
        comments: []
    });
    const product10 = Product.insert({
        title: "Producto viejo",
        thumbnail: "https://compass-ssl.microsoft.com/assets/f0/69/f0693a33-83ea-472b-98f0-dfafceba59fb.png?n=Oyster_360_04.png",
        price: 109.3,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in " +
            "reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa " +
            "qui officia deserunt mollit anim id est laborum.",
        companyId: companyId,
        companyName: companyName,
        rating: 2.3,
        comments: []
    });

    ShoppingCart.remove({});
    Meteor.call('addProduct', null, product1);
    Meteor.call('addProduct', null, product2);
    Meteor.call('addProduct', null, product3);
    Meteor.call('addProduct', null, product4);
    Meteor.call('addProduct', null, product5);
    Meteor.call('addProduct', null, product6);
    Meteor.call('addProduct', null, product7);
    Meteor.call('addProduct', null, product8);
    Meteor.call('addProduct', null, product9);
    Meteor.call('addProduct', null, product10);


    process.env.MAIL_URL = Meteor.settings.private.mailConnectionString;

});
