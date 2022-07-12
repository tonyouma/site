export interface IReview {
    // title: string,
    avatar: string,
    date: string,
    name: string,
    designation: string,
    comment: string,
}


export const reviews: IReview[] = [
    {
        name: "Meshack Kyengo",
        designation: "Fleet Manager, City Shuttle",
        avatar: "/assets/meshack_cityshuttle.jpeg",
        date: "May 18, 2022",
        comment: 'We have made up to 40 percent more from the MobiTill Epesi Smart Transport Solution',
    },
    {
        name: "Tony Njenga",
        designation: "Bus Owner, City Shuttle",
        avatar: "/assets/bus-owner.jpeg",
        date: "April 10, 2022",
        comment: 'I am able to track the performance of my vehicle anywhere at any time with MobiTill Epesi Smart Transport ',
    },
    {
        name: "Martin Karuga",
        designation: "City Shuttle",
        avatar: "/assets/cityshuttle.png",
        date: "August 24, 2021",
        comment: 'MobiTill POS System has made it very easy and quick to track bus payments and sacco collections',
    },
]
