import { createManager } from "chaos-studio";
import {} from  './systems/index.js'

export const game = createManager({
    renderer:true,
    physics:true,
    input:false
})

//register your systems here. e.g
//game.registerSystem("example",new ExampleSystem())
