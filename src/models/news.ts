export interface INews {
    _id: string;
    title: string;
    // description: string;
    slug: {
        current: string;
    };
    division: [];
    createdAt: string;
    location: string;
    yearofexperience: string;
    publishedAt: Date,
    // author: {
    //     name: string,
    //     image: string
    // }
    body: [object],
    mainImage: {
        asset: {
            url: string;
        }
    },
    headline: string,
}
