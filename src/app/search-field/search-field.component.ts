 
import { Component, OnInit } from '@angular/core';
import { GifsService } from '../services/gifs.service';
import { Gif } from '../models/Gif';

@Component({
    selector: 'app-search-field',
    templateUrl: './search-field.component.html',
    styleUrls: ['./search-field.component.css']
})
export class SearchFieldComponent implements OnInit {
    name: string;
    gifys: Gif[];
    constructor(private gifService: GifsService) { }

    ngOnInit() {
    }

    onSubmit() {
        this.gifService.searchGifs(this.name).subscribe(gif => {
          this.gifys = gif.data
        })
    }
}
