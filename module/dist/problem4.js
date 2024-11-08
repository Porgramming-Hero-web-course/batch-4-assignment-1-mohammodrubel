"use strict";
{
    const calculateShapeArea = (values) => {
        if (values.shape === 'circle') {
            return Math.PI * values.radius * values.radius;
        }
        else {
            return values.height * values.width;
        }
    };
    const circleArea = calculateShapeArea({ shape: 'circle', radius: 20 });
    const rectangleArea = calculateShapeArea({ shape: 'rectangle', height: 20, width: 30 });
}
