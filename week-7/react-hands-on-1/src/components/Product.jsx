function Product({ product }) {

    return (
      <div className="bg-white w-72 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition">
  
        <img 
          src={product.image}
          alt={product.name}
          className="h-48 w-full object-cover"
        />
  
        <div className="p-4">
  
          <h2 className="text-xl font-semibold">
            {product.name}
          </h2>
  
          <p className="text-sm text-gray-500 mb-1">
            {product.brand}
          </p>
  
          <p className="text-sm text-gray-700 mb-3">
            {product.description}
          </p>
  
          <p className="text-lg font-bold text-blue-600">
            ${product.price}
          </p>
  
        </div>
      </div>
    );
  }
  
  export default Product;
