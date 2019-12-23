/**
 * 事件
 * */

const EventEmitter = require("events").EventEmitter;

const ev = new EventEmitter();

//添加事件
ev.addListener("say",(e)=>{
    console.log(e);
})


//触发事件
ev.emit("say","hello")