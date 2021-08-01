export class Category{
    private catName: string;
    private linkedCat: string[]=[];

    constructor(catName: string, ...linkedCat: string[]){
        this.catName = catName;
        for (const cat of linkedCat) {
            this.linkedCat.push(cat);
        }
    }
}