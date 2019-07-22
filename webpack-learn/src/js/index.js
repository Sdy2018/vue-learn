import $ from "jquery";

import "../../node_modules/bootstrap/dist/css/bootstrap.css"

import "../../node_modules/font-awesome/css/font-awesome.css"

import "../css/style.css"

class person{
  static info = {name:"sdy",age:22}
}
console.log(person.info);
$(function(){
  $("#box").css({
    'backgroundColor':'red',
    'height':"200px",
    'width':"200px"
  })
})