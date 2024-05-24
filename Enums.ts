// Enums (short for enumerations) in TypeScript are a feature that allows you to define a set of named constants.
enum Direction{
    UP = "up",
    DOWN = "down",
    LEFT = "left",
    RIGHT = "right"
}

function doSomething(keyPressed: Direction){
    console.log(`this key was keyPressed: ${keyPressed}`);
}

doSomething(Direction.UP);
//default falues for enums is 0,1,2,3,4

//common user case in express

enum ResponseStatus {
    Success = 200,
    NotFound = 404,
    Error = 500
}

// app.get("/', (req, res) => {
//     if (!req.query.userId) {
// 			res.status(ResponseStatus.Error).json({})
//     }
//     // and so on...
// 		res.status(ResponseStatus.Success).json({});
// })