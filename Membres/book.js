"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Book {
    constructor(titre, auteur) {
        this.titre = titre;
        this.auteur = auteur;
        this.dispo = false;
    }
    getTitre() {
        return this.titre;
    }
    getAuteur() {
        return this.auteur;
    }
    emprunt() {
        if (!this.dispo) {
            this.dispo = true;
            console.log(`Le livre "${this.titre}" a été emprunté.`);
        }
        else {
            console.log(`Le livre "${this.titre}" est déja emprunté.`);
        }
    }
    remise() {
        if (this.dispo) {
            this.dispo = false;
            console.log(`Le livre "${this.titre}" a été retourné.`);
        }
        else {
            console.log(`Le livre "${this.titre}" n'est pas emprunté.`);
        }
    }
    isEmprunt() {
        return this.dispo;
    }
}
exports.default = Book;
