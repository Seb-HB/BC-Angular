export class Variation{
    private supplierRef: string;
    private color: string;
    private size: string;
    private stock:number;
    private variationImg: string;
    private priceHT:number;

    constructor(supplierRef: string, color: string, size: string, stock:number, variationImg: string, priceHT:number) {
        this.supplierRef = supplierRef;
        this.color = color;
        this.size = size;
        this.stock = stock;
        this.variationImg= variationImg;
        this.priceHT = priceHT;
    }


}