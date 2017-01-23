import { Product } from '../imports/api/product.js';
import { Company } from '../imports/api/company.js';
import { ShoppingCart } from '../imports/api/shopping-cart.js';

Meteor.publish("allProducts", function() {
    return Product.find();
})

Meteor.publish("allCompanies", function() {
    return Company.find();
})

Meteor.publish("searchProducts", function(text) {
    return Product.find({$or: [ {description: { $regex: text, $options: '-i' }}, 
        {title: { $regex: text, $options: '-i' }}]});
})

Meteor.publish("productById", function(id) {
    check(id, String);
    return Product.find(id);
})

Meteor.publish("shoppingCart", function(userId) {
    //check(userId, String);	
    return ShoppingCart.find();
})

Meteor.publish("companyById", function(id) {
    check(id, String);
    return Company.find(id);
})

Meteor.publish("productsByCompany", function(id) {
    check(id, String);
    return Product.find({ companyId: id });
})
