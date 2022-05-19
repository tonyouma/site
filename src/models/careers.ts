export interface ICareer {
    _id: string;
    title: string;
    // description: string;
    slug: {
        current: string;
    };
    // categories: any;
    createdAt: string;
    location: string;
    employmentType: string;
    publishedAt: Date
}
