import { Component } from '@angular/core';
import {Produit} from '../model/produit';
@Component({
  selector: 'app-liste-produit',
  standalone: false,
  templateUrl: './liste-produit.html',
  styleUrl: './liste-produit.css',
})
export class ListeProduit {
  arr : Produit[]=[
    {id:1,name:'ma9rouna',stock:51},
    {id:2,name:'chips',stock:25},
    {id:3,name:'botata',stock:18}];

}
