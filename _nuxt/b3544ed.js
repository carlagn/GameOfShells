(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{163:function(t,o,e){t.exports=e.p+"img/cup.73b720b.png"},164:function(t,o,e){var content=e(167);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(64).default)("d30fe1aa",content,!0,{sourceMap:!1})},165:function(t,o,e){"use strict";var n=e(4),r=e(83)(6),l="findIndex",c=!0;l in[]&&Array(1)[l]((function(){c=!1})),n(n.P+n.F*c,"Array",{findIndex:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),e(82)(l)},166:function(t,o,e){"use strict";e(164)},167:function(t,o,e){var n=e(63)(!1);n.push([t.i,'.veredict[data-v-33978194]{position:absolute;bottom:100px}.game-wrapper[data-v-33978194]{width:800px;display:flex;flex-direction:column;align-items:center;justify-content:center;height:700px;border:1px solid #da3b41;position:relative}.game-wrapper h3[data-v-33978194]{position:absolute;top:10px;left:10px}.game-wrapper h3 span[data-v-33978194]{font-weight:400}.game-wrapper button[data-v-33978194]{border:1px solid #da3b41;background-color:#fff;padding:10px 20px 10px 35px;border-radius:20px;color:#da3b41;cursor:pointer;transition:all .2s ease-in;position:relative;width:125px}.game-wrapper button.opacity-0[data-v-33978194]{cursor:auto;opacity:0}.game-wrapper button[data-v-33978194]:before{content:"";position:absolute;left:15px;width:0;height:0;top:50%;transform:translateY(-50%);border-top:7px solid transparent;border-left:10px solid #da3b41;border-bottom:7px solid transparent;transition:all .2s ease-in}.game-wrapper button span[data-v-33978194]{transition:all .2s ease-in}.game-wrapper button:hover span[data-v-33978194]{opacity:0}.game-wrapper button[data-v-33978194]:hover:before{left:60px}.box-wrapper[data-v-33978194]{display:flex;width:640px;margin-bottom:50px;height:200px;position:relative}.box-wrapper .box[data-v-33978194]{height:0;transition:all cubic-bezier(.32,.75,.41,1.01);width:200px;height:auto;position:absolute;left:0;cursor:pointer;top:0;transition-duration:.4s}.box-wrapper .box.long-animation[data-v-33978194]{transition-duration:.5s}.box-wrapper .box-0[data-v-33978194]{left:0}.box-wrapper .box-1[data-v-33978194]{left:220px}.box-wrapper .box-2[data-v-33978194]{left:440px}.box-wrapper .box.z-1[data-v-33978194]{z-index:1}.box-wrapper .box.z-2[data-v-33978194]{z-index:2}.box-wrapper .box.z-3[data-v-33978194]{z-index:3}.ball[data-v-33978194]{width:50px;height:50px;border-radius:50%;top:-50px;position:absolute;background-color:#add8e6;border:1px solid #8cafba;transition:all .3s cubic-bezier(.32,.75,.41,1.01);box-shadow:inset -5px -4px 20px 0 rgba(0,0,0,.3)}.ball.hidden[data-v-33978194]{display:none}.ball.long-animation[data-v-33978194]{transition-duration:.4s}.ball.fall[data-v-33978194]{top:30px}.ball-0[data-v-33978194]{left:80px}.ball-1[data-v-33978194]{left:295px}.ball-2[data-v-33978194]{left:515px}.container[data-v-33978194]{margin:0 auto;min-height:100vh;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center}',""]),t.exports=n},168:function(t,o,e){"use strict";e.r(o);e(165);var n={data:function(){return{longAnimation:!1,ballPosition:"ball-0",startMessage:"Start game",score:0,boxes:[{id:0,pos:0,ball:null},{id:1,pos:1,ball:null},{id:2,pos:2,ball:null}],ballInit:0,veredict:"",gameRunning:!1,accumulatedScore:0,firstClick:!1,swapping:[[0,1],[1,2],[0,2]]}},computed:{correctAnswer:function(){return this.boxes[this.ballInit].pos}},methods:{boxClick:function(t){var o=this;this.gameRunning||this.firstClick||(this.boxes[t].pos===this.correctAnswer?(this.veredict="Correct!",this.accumulatedScore+=1,this.score+=1):(this.score=0,this.veredict="Wrong..."),this.ballPosition="ball-".concat(this.correctAnswer," fall"),setTimeout((function(){o.ballPosition="ball-".concat(o.correctAnswer)}),100),this.firstClick=!0)},start:function(){var t=this,o=Math.floor(Math.random()*Math.floor(3));this.boxes[0].pos=0,this.boxes[1].pos=1,this.boxes[2].pos=2,setTimeout((function(){t.ballInit=o,t.ballPosition="ball-".concat(o),t.veredict="",setTimeout((function(){t.ballPosition="ball-".concat(o," fall")}),300),setTimeout((function(){t.shuffle(o),t.ballPosition="ball-".concat(o," hidden fall")}),800)}),300)},boxClass:function(t){return this.longAnimation?"box-".concat(this.boxes[t].pos," z-").concat(this.boxes[t].pos," long-animation"):"box-".concat(this.boxes[t].pos," z-").concat(this.boxes[t].pos)},shuffle:function(t){var o=this;this.gameRunning=!0;for(var i=0;i<8e3;i++)i<3e3?1300-100*this.score<=500?i+=500:i+=1300-100*this.score:i>=3e3&&i<5e3?1e3-100*this.score<=500?i+=500:i+=1e3-100*this.score:i>=5e3&&(800-100*this.score<=500?i+=500:i+=800-100*this.score),setTimeout((function(){var t=o.swapping[Math.floor(Math.random()*o.swapping.length)];t===o.swapping[2]?o.longAnimation=!0:o.longAnimation=!1;var e=o.boxes.findIndex((function(o){return o.pos===t[0]})),n=o.boxes.findIndex((function(o){return o.pos===t[1]}));o.boxes[e].pos=t[1],o.boxes[n].pos=t[0]}),i);setTimeout((function(){o.startMessage="Start again",o.veredict="Where is the Ball?",o.firstClick=!1,o.gameRunning=!1}),9e3)}}},r=(e(166),e(32)),component=Object(r.a)(n,(function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("section",{staticClass:"container"},[n("div",{staticClass:"game-wrapper"},[n("div",{staticClass:"box-wrapper"},[n("div",{staticClass:"ball",class:t.ballPosition}),t._v(" "),n("img",{staticClass:"box",class:t.boxClass(0),attrs:{src:e(163)},on:{click:function(o){return t.boxClick(0)}}}),t._v(" "),n("img",{staticClass:"box",class:t.boxClass(1),attrs:{src:e(163)},on:{click:function(o){return t.boxClick(1)}}}),t._v(" "),n("img",{staticClass:"box",class:t.boxClass(2),attrs:{src:e(163)},on:{click:function(o){return t.boxClick(2)}}})]),t._v(" "),n("h3",[t._v("\n      Score: "),n("span",[t._v(t._s(t.accumulatedScore))])]),t._v(" "),n("button",{class:{"opacity-0":t.gameRunning},on:{click:t.start}},[n("span",[t._v(t._s(t.startMessage))])]),t._v(" "),n("h2",{staticClass:"veredict"},[t._v("\n      "+t._s(t.veredict)+"\n    ")])])])}),[],!1,null,"33978194",null);o.default=component.exports}}]);