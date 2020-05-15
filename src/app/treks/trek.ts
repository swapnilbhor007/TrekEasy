export interface ITrek{
    id: number,
    name: string,
    location: string,
    level: string,
    price: number,
    rating: number,
    imageURL: string,
    gallery: [string],
    description: string,
    attractions: [string],
    eventDate: Date,
    activities: [string]
}