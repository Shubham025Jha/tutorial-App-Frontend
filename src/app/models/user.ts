export class User {
    id?:number;
    emailId?:string;
    userName?:string;
    password?:string;
    admin?:boolean;
    constructor(id:number,emailId:string,userName:string,password:string,admin:boolean){
        this.id=id;
        this.emailId=emailId;
        this.password=password;
        this.userName=userName;
        this.admin=admin;
    };
    
}
