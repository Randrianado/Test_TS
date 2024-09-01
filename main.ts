import Book from "./Membres/book";
import Membre from "./Membres/member";
import Library from "./Bibliotheque/library";

const library=new Library();

//ajout des livres
const Book1=new Book('Le petit Prince','Rabe');
const Book2=new Book('La sagesse','Rakoto');
library.AjoutBook(Book1);
library.AjoutBook(Book2);

//ajout des membres
const member1=new Membre("Kevin");
const member2=new Membre("Yannick");
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