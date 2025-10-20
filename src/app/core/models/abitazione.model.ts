/*export class Abitazione{
    
    id: number
    nome: string; 
    descrizione: string;
    prezzo: number; 
    citta: string;        
    
    constructor(public id:number, public nome: string,public descrizione:string, public prezzo:number,public citta:string){
        this.id= id;
        this.nome = nome;
        this.descrizione=descrizione;
        this.prezzo = prezzo;
        this.citta = citta;

    }
    
}
*/




export interface Abitazione{
    id: number;
    nome: string; 
    descrizione: string;
    prezzo: number; 
    citta: string;
    urlImage?: string;                
}
    