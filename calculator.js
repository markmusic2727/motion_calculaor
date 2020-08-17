function circleCalculator (calculation,radius) {
    let possibleCalculations = ["diameter", "area", "circumference"];

    let pi = 3.14159265359;

    let findDiameter = (radius) => radius * 2;

    let findArea = (radius) => (radius * radius) * pi;

    let findCircumference = (radius) => 2 * pi * radius;

    for (let i = 0; i < possibleCalculations.length; i++) {
        if (calculation == possibleCalculations[i]) {
            switch(i) {
                case 0 : 
                    console.log(findDiameter(radius));
                    break;
                case 1 : 
                    console.log(findArea(radius));
                    break;
                case 2 : 
                    console.log(findCircumference(radius));
                    break;
            }
        }
    }

}