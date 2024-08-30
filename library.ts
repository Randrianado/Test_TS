import Book from "./book";
import Membre from "./member";

class Library {
    private books:Book[];
    private membres:Membre[];
    constructor() {
        this.books=[];
        this.membres=[];
    }
    AjoutBook(book:Book):void{
        this.books.push(book);
        console.log(`Le livre "${book.getTitre()}" écrit par "${book.getAuteur()}" a été ajouté à la bibliotheque`);
    }
    AjoutMembre(Membre:Membre):void{
        this.membres.push(Membre);
        console.log(`${Membre.getNom()} à été enregistré.`);
    }
    RechercheBook(titre:string):Book | undefined{
        return this.books.find(book=>book.getTitre()===titre);
    }
    listeBooks():void{
        console.log("Les listes des livres dans la bibliotheque:");
        this.books.forEach(book=>{
            if(!book.isEmprunt()){
                console.log(`-${book.getTitre()} par ${book.getAuteur()}`);
            }
        })
    }
}

export default Library;