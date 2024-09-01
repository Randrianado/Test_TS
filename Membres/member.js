"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Membre {
    constructor(nom) {
        this.nom = nom;
        this.tabBook = [];
    }
    getNom() {
        return this.nom;
    }
    EmpruntBook(book) {
        if (!book.isEmprunt()) {
            this.tabBook.push(book);
            book.emprunt();
            console.log(`${this.nom} a emprunté le livre "${book.getTitre()}" écrit par "${book.getAuteur()}"`);
        }
        else {
            console.log(`Le livre "${book.getTitre()}" est déja emrunté.`);
        }
    }
    RetournBook(book) {
        const index = this.tabBook.indexOf(book);
        if (index !== -1) {
            this.tabBook.splice(index, 1);
            book.remise();
            console.log(`${this.nom} a retourné le livre "${book.getTitre()}" écrit par "${book.getAuteur()}" `);
        }
        else {
            console.log(` ${this.nom} n' a pas emprunté le livre "${book.getTitre()}".`);
        }
    }
    getTab() {
        return this.tabBook;
    }
}
exports.default = Membre;
