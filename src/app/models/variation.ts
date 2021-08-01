import { Category } from "./category";
import { Product } from "./product";

export class Variation extends Product{
    private supplierRef: string;
    private stock:number;
    private priceHT:number;
    private variationImg: string;
    private color: string|undefined;
    private size: string|undefined;
    private additionalDescription: string;

    constructor(productName:string, brand:string,
        supplierRef: string, stock:number, priceHT:number, additionalDescription:string='', color: string='', size: string='',  variationImg: string, ...categories:Category[]) {
        super(productName, brand, ...categories);
        this.supplierRef = supplierRef;
        this.stock = stock;
        this.priceHT = priceHT;
        this.additionalDescription= additionalDescription;
        this.color = color;
        this.size = size;
        this.variationImg= variationImg;
    }


}