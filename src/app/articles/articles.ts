import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-articles',
  standalone: false,
  templateUrl: './articles.html',
  styleUrl: './articles.css',
})
export class Articles {

articles = [
 { titre: 'Article 1', contenu: 'Contenu de l\'article 1', importance: 'élevée' },
 { titre: 'Article 2', contenu: 'Contenu de l\'article 2', importance: 'moyenne' },
 { titre: 'Article 3', contenu: 'Contenu de l\'article 3', importance: 'faible' }
];
 newTitle = '';
 newContent = '';
 newImportance='';

addArticle() {
  if (this.newTitle && this.newContent && this.newImportance) {
    this.articles.push({
    titre: this.newTitle,
    contenu: this.newContent,
    importance:this.newImportance
    });
  
    this.newTitle = '';
    this.newContent = '';
    }
 }

 

}
