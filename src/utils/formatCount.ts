export const formatCount = (count: any, percentage: any) => {
    if (percentage || count) {
        if (percentage) {
            return `${percentage}%`
        } else {
            if (count < 1000) {
                return `${count}`
            } else if (count < 1000000) {
                return `${Math.floor(count / 1000)}K+`
            } else if (count < 1000000000) {
                return `${Math.floor(count / 1000000)}M+`
            } else {
                return `${Math.floor(count / 1000000000)}B+`
            }
        }
    }
}
