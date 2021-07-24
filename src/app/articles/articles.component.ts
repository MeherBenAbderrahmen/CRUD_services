import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
 
  registartions: any;

  constructor(private ArticleService: ServicesService) { }
  
  ngOnInit(): void {
    this.registartions = this.ArticleService.getAllArticles();
  }

  supprimerArticle(nb: any) {
    //delete using services
    this.ArticleService.deleteArticle(nb);
    this.registartions = this.ArticleService.getAllArticles();
    /*
    this.users.splice(nb,1);
    localStorage.setItem('registration', JSON.stringify(this.users));
  */
  }
}
