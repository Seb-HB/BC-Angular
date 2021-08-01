import { Category } from "./category";
import { Variation } from "./variation";

export class Product {
    private productName: string;
    private categories: Category[] = [];
    private brand: string;
    private description: string;
    private variations:Variation[];
    private productImg:string[];

    constructor(productName:string, description:string, variations:Variation[], brand:string, imgages:string[], ...category:Category[]){

        this.productName = productName;
        this.description = description;
        this.variations = variations;
        this.categories = category;
        this.brand = brand;
        this.productImg=imgages;
    }


}