{
    const removeDuplicates = (value: number[]): number[] => {
        const uniqueArray = [...new Set(value)]
        return uniqueArray
    }

    const result = removeDuplicates([1, 2, 2, 3, 4, 4, 5])
    console.log(result)



}