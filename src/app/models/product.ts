import { Category } from "./category";

export abstract class Product {
    private productName: string;
    private categories: Category[] = [];
    private brand: string;
    private description: string;
    private productImg:string[];

    constructor(productName:string, description:string, brand:string, imgages:string[], ...category:Category[]){

        this.productName = productName;
        this.description = description;
        this.categories = category;
        this.brand = brand;
        this.productImg=imgages;
    }


}