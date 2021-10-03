function distanceFromHqInBlocks(b){
    if(b <= 42){
        return 42 - b
    }else if(b >= 42){
        return b - 42
    }
}
function distanceFromHqInFeet(f){
  return distanceFromHqInBlocks(f) * 264
}
function distanceTravelledInFeet(start, end){
  return Math.abs(start - end) * 264
}
function calculatesFarePrice(start, end){
  let blocks = Math.abs(start - end)
  let distance = blocks * 264
  if (distance <= 400){
    return 0
  }else if(distance > 2500){
    return "cannot travel that far"
  }else if(400 < distance && distance < 2000){
    let ride = 0.02 * (distance - 400)
    return ride
  }else if(2000 <= distance < 2500){
    return 25
  }
}