export interface ICareer {
    _id: string;
    title: string;
    // description: string;
    slug: {
        current: string;
    };
    division: [];
    _createdAt: string;
    location: string;
    yearofexperience: string;
    publishedAt: Date,
    // author: {
    //     name: string,
    //     image: string
    // }
    body: [object],
    // mainImage: {
    //     asset: {
    //         url: string;
    //     }
    // }
}
