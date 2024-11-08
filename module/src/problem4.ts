{

type CircleArea = {
    shape: "circle",
    radius: number
}

type RectangleArea = {
    shape: "rectangle",
    height: number,
    width: number
}

const calculateShapeArea = (values: CircleArea | RectangleArea):number=>{
    if(values.shape === 'circle'){
        return Math.PI * values.radius * values.radius 
    }else{
        return values.height * values.width 
    }
    
}
const circleArea =  calculateShapeArea({shape:'circle',radius:20})
const rectangleArea = calculateShapeArea({shape:'rectangle',height:20,width:30})

}