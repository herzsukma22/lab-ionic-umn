export class Article {
    constructor(
        public id: string,
        public title: string,
        public description: string,
        public imageUrl: string,
    ) {}
}

export class Product {
    constructor(
        public id: string,
        public brand: string,
        public subBrand: string,
        public description: string,
        public imageUrl: string,
        public price: number,
        public rating: number,
    ) {}
}

export class Favourite{
    constructor(
        public id: string,
        public brand: string,
        public subBrand: string,
        public imageUrl: string,
        public saved: boolean
    ) {}
}

export class Reviewers{
    constructor(
    public userId: string,
    public productId: string,
    public userName: string,
    public userPhoto: string,
    public review: string,
    public rating: boolean
    ) {}
}