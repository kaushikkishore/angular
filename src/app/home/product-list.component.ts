import { Component } from '@angular/core';

@Component({
    selector: 'pm-products',
    templateUrl: './product.list.html'
})
export class ProductList {
    pageTitle: string = 'Products List'
    products: any[] = [
        {
            FirstName: 'Kaushik',
            LastName: 'Kishore',
            Designation: 'Software Developer',
            Experience: 5,
            Unit: 'Years'
        },
        {
            FirstName: 'Kaushik',
            LastName: 'Kishore',
            Designation: 'Software Developer',
            Experience: 5,
            Unit: 'Years'
        },
        {
            FirstName: 'Kaushik',
            LastName: 'Kishore',
            Designation: 'Software Developer',
            Experience: 5,
            Unit: 'Years'
        }
    ]
}