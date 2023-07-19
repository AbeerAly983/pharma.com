import { Component } from '@angular/core';
import { CatalogService } from '../services/catalog.service';
import { SliderService } from '../services/slider.service';
import { UserService } from '../services/user.service';
import { Category } from '../interfaces/category';
import { Product } from '../interfaces/product';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
})
export class CatalogComponent {
  category: Category[] = [];
  product: Product[] = [];
  chunks: object[]|any = [];
  checkboxData:Product[]| any = [];
  currentChunk!: object;
  wishList:  number[] = [];
  isLoading: boolean = true;


  constructor(private service: CatalogService, private slide: SliderService , private _UserService : UserService) {}

  ngOnInit(): void {
    this.getCategory();
    this.getproduct();
    this.loadWishList() ;
  }

  getproduct() {
    this.slide.getProduct().subscribe((result: any) => {
      this.product = result;
      this.chunks = this.chunkArray(this.product, 6);
      this.currentChunk = this.chunks[0];
    });
  }

  getCategory() {
    this.service.getcategory().subscribe((result: any) => {
      this.category = result;
      this.isLoading = false;
    });
  }

  getOptionFilter(event: any) {
    let value = event.target.value;
    if (value == 'All Category') {
      this.getproduct();
    } else {
      this.optionFilter(value);
    }
  }
  optionFilter(id: number) {
    this.service.getCategoryById(id).subscribe((result: any) => {
      this.product = result;
      this.chunks = this.chunkArray(this.product, 6);
      this.currentChunk = this.chunks[0];
    });
  }

  anotherFilter(event: any) {
    if (event.target.checked) {
      let value = event.target.value;
      this.service.getCategoryById(value).subscribe((result: any) => {
        this.product = result;
        for (let i = 0; i < this.product.length; i++) {
          this.checkboxData.push(this.product[i]);
        }
        this.chunks = this.chunkArray(this.checkboxData, 6);
        this.currentChunk = this.chunks[0];
      });
    } else {
      let value = event.target.value;
      this.service.getCategoryById(value).subscribe((result: any) => {
        this.product = result;
        for (let i = 0; i < this.product.length; i++) {
          let exist = this.checkboxData.find(
            (e: any) => e.id == this.product[i].id
          );
          let index = this.checkboxData.indexOf(exist);
          this.checkboxData.splice(index, 1);
        }
        this.chunks = this.chunkArray(this.checkboxData, 6);
        this.currentChunk = this.chunks[0];
        if (this.chunks.length === 0) {
          this.getproduct();
        }
      });
    }
  }

  showPrevious() {
    const currentIndex = this.chunks.indexOf(this.currentChunk);
    if (currentIndex > 0) {
      this.currentChunk = this.chunks[currentIndex - 1];
    }
  }

  showNext() {
    const currentIndex = this.chunks.indexOf(this.currentChunk);
    if (currentIndex < this.chunks.length - 1) {
      this.currentChunk = this.chunks[currentIndex + 1];
    }
  }

  chunkArray(arr: any[], size: number): any[] {
    return Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
      arr.slice(i * size, i * size + size)
    );
  }

  nav() {
    let navbar = document.querySelector('#side');
    let menue = document.querySelector('.div-logo');
    let contener = document.querySelector('.container');

    menue?.addEventListener('click', () => {
      navbar?.classList.toggle('open');
    });
    contener?.addEventListener('click', () => {
      navbar?.classList.remove('open');
    });
  }
  droplist() {
    let arrow = document.querySelector('.icon');
    let arrowp = document.querySelector('#list');
    arrow?.addEventListener('click', () => {
      arrowp?.classList.toggle('showList');
    });
  }

  loadWishList(){
    this._UserService.getWishList().subscribe(productIds =>{
      this.wishList = productIds ;

    } )
  }
}
