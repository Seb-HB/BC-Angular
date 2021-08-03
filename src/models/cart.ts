import { Product } from "./product";

export class Cart{
    private _basket:{product:Product, quantity:number}[]=[];


    addProduct(product:Product, quantity:number=1){
        this._basket.push({product,quantity});
    }

    updateProductQuantity(product:Product, quantity:number){
        for (const item of this._basket) {
            if (item.product===product){
                item.quantity=quantity;
                break;
            }
        }
    }



}