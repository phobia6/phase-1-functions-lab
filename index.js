// Code your solution in this file!
function distanceFromHqInBlocks(blocks) {
    if (blocks < 42) { 
        blocks = 42 - blocks;
        return blocks;
    } else if (blocks >= 42) {
        blocks = blocks - 42;
        return blocks;
    }
}
function distanceFromHqInFeet(blocks) {
    return distanceFromHqInBlocks(blocks) * 264;
}


function distanceTravelledInFeet(start,end) {
    if (end > start) {
        return (end - start) * 264;
    } else {
        return (start - end) * 264;
    } 
} 
function calculatesFarePrice(start, end) {
    if (distanceTravelledInFeet(start,end) <= 400) {
        return 0 
    } else if (distanceTravelledInFeet(start,end) > 400 && distanceTravelledInFeet(start,end) <= 2000) {
        return ((distanceTravelledInFeet(start,end) - 400) * 2) / 100 ; 
    } else if (distanceTravelledInFeet(start,end) > 2000 && distanceTravelledInFeet(start,end) <=2500) {
        return 25
    } else {
        return 'cannot travel that far'
    }
}