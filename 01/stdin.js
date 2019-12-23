/**
 * 获取用户标准输入
 * */

process.stdin.on("data",e=>{
    console.log(e.toString().trim())
})