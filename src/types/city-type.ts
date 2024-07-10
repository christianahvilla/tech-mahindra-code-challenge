export interface Cities {
    [key: string]: string
}

export interface CardType {
    id: string;
    type: 'country' | 'city';
    name: string;
}