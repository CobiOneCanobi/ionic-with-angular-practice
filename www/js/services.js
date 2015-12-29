angular.module('thunder.services', [])
  .factory('User', function(){
    var o = {
      favourites: []
    }

    o.addProductToFavourites = function(product) {
      //make sure there's a product to add
      if (!product) return false;

      //add to favourites array
      o.favourites.unshift(product);
    }

    o.removeProductFromFavourites = function(product, index){
      //makes sure there's a product to remove
      if(!product){ return false; }

      //remove product from favourites
      o.favourites.splice(index, 1);
    }

    return o;
  });


