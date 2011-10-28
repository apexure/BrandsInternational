var current = 0;
$('tabs').firstDescendant().className += ' active-tab';
var active_tab = $('tabs').firstDescendant().firstDescendant().firstDescendant();
var motion = false;
function move_to(to, el){    
  if (!motion) {if (active_tab != el) {
el.parentNode.parentNode.className += ' active-tab';
   
active_tab.parentNode.parentNode.className = 'corner-left-top';
   }
   active_tab = el;    
move = (current - to)*580;
new Effect.Move($('tabber'), { x: move, beforeStart:function(){ motion = true;},afterFinish:function(){motion = false;}});
current = to;
  }
}