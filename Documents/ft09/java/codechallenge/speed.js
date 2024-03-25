function lookAtSpeed(speed) {
    const KmPerPoint = 5;
    const speedLimit =  70;
    
    if(speed <= speedLimit){
        return 'ok';   
    }
    else {
        const points = Math.floor((speed - speedLimit) / 5)
        
        if (points >= 12) {
            return ('licence suspended');
        }
        else {
            return `${points} points`}
    }
}

console.log(lookAtSpeed(80));
console.log(lookAtSpeed(60));
console.log(lookAtSpeed(50));