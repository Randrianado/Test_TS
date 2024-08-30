class Book {
    private titre:string;
    private auteur:string;
    private dispo:boolean;
    constructor(titre:string,auteur:string) {
        this.titre=titre;
        this.auteur=auteur;
        this.dispo=false;
    }
    getTitre():string{
        return this.titre;
    }
    getAuteur():string{
        return this.auteur;
    }
    emprunt():void{
        if(!this.dispo){
            this.dispo=true;
            console.log(`Le livre "${this.titre}" a été emprunté.`);
        }else{
            console.log(`Le livre "${this.titre}" est déja emprunté.`);
        }
    }
    remise():void{
        if(this.dispo){
            this.dispo=false;
            console.log(`Le livre "${this.titre}" a été retourné.`);
        }else{
            console.log(`Le livre "${this.titre}" n'est pas emprunté.`);
        }
    }
    isEmprunt():boolean{
        return this.dispo;
    }
}
export default Book;