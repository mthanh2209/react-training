import { useState } from "react";

const initProducts = [{
    id: 0,
    name: 'Baklava',
    count: 1,
}, {
    id: 1,
    name: 'Cheese',
    count: 5,
}, {
    id: 2,
    name: 'Spaghetti',
    count: 2,
}]

export default function ShoppingCart() {
    const [products, setProducts] = useState(initProducts)

    function handleIncreaseClick(productId) {
        setProducts(products.map(product => {
            if (product.id === productId) {
                return {
                    ...product,
                    count: product.count + 1
                }
            } else {
                return product
            }
        }))
    }

    function handleDecreaseClick(productId) {
        let nextProducts = products.map(product => {
            if (product.id === productId) {
                return {
                    ...product,
                    count: product.count - 1
                }
            } else {
                return product
            }
        })
        nextProducts = nextProducts.filter(p => p.count > 0)
        setProducts(nextProducts)
    }

    return (
        <>
            <h1>Shopping Cart</h1>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        {product.name} ({product.count})
                        <button onClick={() => { handleIncreaseClick(product.id) }}>+</button>
                        <button onClick={() => { handleDecreaseClick(product.id) }}>-</button>
                    </li>
                ))}
            </ul>
        </>
    )
}