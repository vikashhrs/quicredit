import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetailsPage } from '../details/details';
import { RedditsService } from '../../app/services/reddits.service';


@Component({
    selector: 'page-reddits',
    templateUrl: 'reddits.html',
    providers: [RedditsService]
})
export class RedditsPage {

    private limit: any;
    private category: String;
    private items: any;
    constructor(public navCtrl: NavController, private _redditsService: RedditsService) {
        this.getDefaults();
    }

    getDefaults() {
        if (localStorage.getItem('category') != null) {
            this.category = localStorage.getItem('category');
        } else {
            this.category = 'sports';
        }

        if (localStorage.getItem('limit') != null) {
            this.limit = localStorage.getItem('limit');
        } else {
            this.limit = 10;
        }
    }
    ngOnInit() {

        this.getPosts(this.category, this.limit);

    }

    getPosts(category, limit) {

        this._redditsService.getPosts(category, limit).subscribe(result => {
            console.log(result);
            this.items = result.data.children;
        })

    }

    viewItem(item) {
        this.navCtrl.push(DetailsPage, {
            item: item
        })
    }

    changeCategory() {
        this.getPosts(this.category, this.limit);
    }
}
