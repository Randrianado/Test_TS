"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const book_1 = __importDefault(require("./book"));
const member_1 = __importDefault(require("./member"));
const library_1 = __importDefault(require("./library"));
const library = new library_1.default();
//ajout des livres
const Book1 = new book_1.default('Le petit Prince', 'Rabe');
const Book2 = new book_1.default('La sagesse', 'Rakoto');
library.AjoutBook(Book1);
library.AjoutBook(Book2);
//ajout des membres
const member1 = new member_1.default("Kevin");
const member2 = new member_1.default("Yannick");
library.AjoutMembre(member1);
library.AjoutMembre(member2);
//emprunter et retourner des livres
member1.EmpruntBook(Book1);
member2.EmpruntBook(Book1);
member1.RetournBook(Book1);
member2.EmpruntBook(Book1);
//listes des Livres disponibles
library.listeBooks();
//Recherche des livres
library.RechercheBook("La sagesse");
