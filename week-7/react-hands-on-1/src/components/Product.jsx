function Product({ product }) {
    const { productId, name, price, brand, description, image } = product;

    return (
        <div className="bg-blue-300 p-4 w-64 rounded-lg">
            <img src={image} alt={name} className="w-full h-40 object-cover" />
            <h3 className="font-bold">{name}</h3>
            <h4>${price}</h4>
            <h4>{brand}</h4>
            <p className="text-sm">{description}</p>
        </div>
    );
}

export default Product;