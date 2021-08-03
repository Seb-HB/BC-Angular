export class Client{
    private firstname:string;
    private lastname:string;
    private birthday:Date;
    private email:string;
    private tel:string;
    private inscriptionDate:Date;
    private gender:boolean;

    constructor(firstname:string, lastname:string, birthday:Date, email:string, tel:string,inscriptionDate:Date, gender:boolean){
        this.firstname = firstname;
        this.lastname = lastname;
        this.birthday = birthday;
        this.email = email;
        this.tel = tel;
        this.inscriptionDate =inscriptionDate;
        this.gender = gender;
    }


}