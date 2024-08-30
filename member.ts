import Book from "./book";
class Membre {
    private nom:string;
    private tabBook:Book[];
    constructor(nom:string) {
        this.nom=nom;
        this.tabBook=[];
    }
    getNom():string{
        return this.nom;
    }
    EmpruntBook(book:Book):void{
        if(!book.isEmprunt()){
            this.tabBook.push(book);
            book.emprunt();
            console.log(`${this.nom} a emprunté le livre "${book.getTitre()}" écrit par "${book.getAuteur()}"`);
        }else{
            console.log(`Le livre "${book.getTitre()}" est déja emprunté.`);
        }
    }
    RetournBook(book:Book):void{
        const index=this.tabBook.indexOf(book);
        if(index!==-1){
            this.tabBook.splice(index,1);
            book.remise();
            console.log(`${this.nom} a retourné le livre "${book.getTitre()}" écrit par "${book.getAuteur()}" `);
        }else{
            console.log(` ${this.nom} n' a pas emprunté le livre "${book.getTitre()}".`);
        }
    }
    getTab():Book[]{
        return this.tabBook;
    }
}
export default Membre;