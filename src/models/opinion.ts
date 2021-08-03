import { Client } from "./client";

export class Opinion{
    private opinionDate: Date;
    private client:Client;
    private note:number;
    private comment:string;

    constructor(client:Client, opinionDate:Date, note:number, comment:string) {
        this.client = client;
        this.note = note;
        this.opinionDate= opinionDate;
        this.comment = comment;
    }



}