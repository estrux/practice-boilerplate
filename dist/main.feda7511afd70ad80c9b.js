webpackJsonp([0],[function(e,t,n){"use strict";n(1);var r=n(3);(0,r.getUsers)().then(function(e){var t="";e.forEach(function(e){t+='<tr>\n      <td><a href="#" data-id="'+e.id+'" class="deleteUser">Delete</a></td>\n      <td>'+e.id+"</td>\n      <td>"+e.firstName+"</td>\n      <td>"+e.lastName+"</td>\n      <td>"+e.email+"</td>\n      </tr>"}),document.getElementById("users").innerHTML=t;var n=document.getElementsByClassName("deleteUser");Array.from(n,function(e){e.onclick=function(e){var t=e.target;e.preventDefault(),(0,r.deleteUser)(t.attributes["data-id"].value);var n=t.parentNode.parentNode;n.parentNode.removeChild(n)}})})},function(e,t){},,function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function u(){return a("users")}function o(e){return c("users/"+e)}function a(e){return fetch(f+e).then(d,s)}function c(e){var t=new Request(f+e,{method:"DELETE"});return fetch(t).then(d,s)}function d(e){return e.json()}function s(e){console.log(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.getUsers=u,t.deleteUser=o,n(4);var i=n(5),l=r(i),f=(0,l["default"])()},,function(e,t){"use strict";function n(){return r("useMockApi")?"http://localhost:3001/":"/"}function r(e,t){t||(t=window.location.href),e=e.replace(/[\[\]]/g,"\\$&");var n=new RegExp("[?&]"+e+"(=([^&#]*)|&|#|$)"),r=n.exec(t);return r?r[2]?decodeURIComponent(r[2].replace(/\+/g," ")):"":null}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=n}]);
//# sourceMappingURL=main.feda7511afd70ad80c9b.js.map