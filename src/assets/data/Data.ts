import type { ListProduct, ProductResponse } from "../../types/Type";

export const createListProduct = (
    id: number,
    group: string,
    nameProduct: string,
    list: ProductResponse[]
): ListProduct => ({
    id,
    group,
    nameProduct,
    list
});

export const createProduct = (
    id: string,
    group: string,
    category: string,
    name: string,
    image: string,
    price: number,
    discount: number
): ProductResponse => ({
    id,
    group,
    category,
    name,
    image,
    price,
    discount,
    priceDiscount: price - price * discount
});

export const product: ProductResponse[] = [
    createProduct('1' , 'Smartphone', 'iPhone', 'Iphone 14 Pro Max', '/Image/Phone/Iphone 14 Pro Max.jpg', 32000000, 0.1),
    createProduct('2' , 'Smartphone', 'iPhone', 'Iphone 14', '/Image/Phone/Iphone 14.jpg', 30000000, 0.1),
    createProduct('3' , 'Smartphone', 'iPhone', 'Iphone 15 Plus', '/Image/Phone/Iphone 15 Plus.jpg', 35000000, 0.1),
    createProduct('4' , 'Smartphone', 'iPhone', 'Iphone 15', '/Image/Phone/Iphone 15.jpg', 34000000, 0.1),
    createProduct('5' , 'Smartphone', 'iPhone', 'Iphone 16 Plus', '/Image/Phone/iPhone 16 Plus.jpg', 36000000, 0.1),
    createProduct('6' , 'Smartphone', 'iPhone', 'iPhone 16 pro max', '/Image/Phone/iPhone 16 pro max.jpg', 38000000, 0.1),
    createProduct('7' , 'Smartphone', 'Oppo', 'Oppo Find N3 Flip 5g', '/Image/Phone/Oppo Find N3 Flip 5g.jpg', 25000000, 0.1),
    createProduct('8' , 'Smartphone', 'Oppo', 'Oppo Find N3', '/Image/Phone/Oppo Find N3.jpg', 23000000, 0.1),
    createProduct('9' , 'Smartphone', 'Samsung', 'S23 Ultra 5g', '/Image/Phone/S23 Ultra 5g.jpg', 27000000, 0.1),
    createProduct('10', 'Smartphone', 'Samsung', 'S24 Ultra', '/Image/Phone/S24 Ultra.jpg', 29000000, 0.1),
    createProduct('11', 'Smartphone', 'Xiaomi', 'Xiaomi 14 ultra 5g', '/Image/Phone/Xiaomi 14 ultra 5g.jpg', 30000000, 0.1),
    createProduct('12', 'Smartphone', 'Xiaomi', 'Xiaomi 14 ultra', '/Image/Phone/Xiaomi 14 ultra.jpg', 30000000, 0.1),
    createProduct('13', 'Smartphone', 'Samsung', 'Z Flip 6', '/Image/Phone/Z Flip 6.jpg', 32000000, 0.1),
    createProduct('14', 'Smartphone', 'Samsung', 'Z Fold 5', '/Image/Phone/Z Fold 5.jpg', 34000000, 0.1),
    createProduct('15', 'Smartphone', 'Samsung', 'Z Fold 6', '/Image/Phone/Z Fold 6.jpg', 34000000, 0.1),
];

export const listProduct: ListProduct[] = [
    createListProduct(1, "Phone","Smartphone",  product.filter(p => p.group === 'Smartphone')),
    createListProduct(2, "Laptop", "Laptop",  product.filter(p => p.group === 'Laptop')),
];
    
export const groupList: string[] = Array.from(
    new Set(product.map(p => p.group))
);