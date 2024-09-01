"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Library {
    constructor() {
        this.books = [];
        this.membres = [];
    }
    AjoutBook(book) {
        this.books.push(book);
        console.log(`Le livre "${book.getTitre()}" écrit par "${book.getAuteur()}" a été ajouté à la bibliotheque`);
    }
    AjoutMembre(Membre) {
        this.membres.push(Membre);
        console.log(`${Membre.getNom()} à été enregistré.`);
    }
    RechercheBook(titre) {
        return this.books.find(book => book.getTitre() === titre);
    }
    listeBooks() {
        console.log("Les listes des livres dans la bibliotheque:");
        this.books.forEach(book => {
            if (!book.isEmprunt()) {
                console.log(`-${book.getTitre()} par ${book.getAuteur()}`);
            }
        });
    }
}
exports.default = Library;
