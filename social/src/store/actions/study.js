function aVeryBigSum(ar) {
    // Write your code here

    const sum = ar.reduce((prev,next)=> prev+next)

    console.log(sum)

    return sum

}

aVeryBigSum([1000000001, 1000000002 ,1000000003 ,1000000004, 1000000005])