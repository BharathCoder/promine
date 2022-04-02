
// For .num
$(function(){

    let start  = 000000001;
    let end    = $(".num").html();
    let speed  = 0.0000001;

setInterval(function(){
if(start<end){
    start++;
}
$(".num").html(start);
},speed);
});

