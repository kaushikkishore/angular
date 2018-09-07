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
            FirstName: 'Anurag',
            LastName: 'Bapat',
            Designation: 'Devops Engineer',
            Experience: 5,
            Unit: 'Years'
        },
        {
            FirstName: 'Rohin',
            LastName: 'Tak',
            Designation: 'Senior Software Developer',
            Experience: 8,
            Unit: 'Years'
        }
    ]
}