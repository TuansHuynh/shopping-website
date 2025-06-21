export interface ProductResponse {
    id: string;
    group: string,
    category: string,
    name: string;
    image: string;
    price: number;
    discount: number;
    priceDiscount: number;

}

export interface ListProduct {
    id: number;
    nameProduct: string;
    group: string
    list: ProductResponse[];
}
