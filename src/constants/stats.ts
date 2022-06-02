export type IStatsProps = {
    title: string,
    count?: number,
    percentage?: number | undefined,
}

export const stats: IStatsProps[] = [
    { title: "Transactions since 2017", count: 20000000000 },
    { title: "Buses Serviced serviced by 80 Devices", count: 4670 },
    { title: "Increased bus owner profits", percentage: 36 }
]
