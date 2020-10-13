//iPAD Support
  $.fn.addTouch = function(){
    this.each(function(i,el){
      $(el).bind('touchstart touchmove touchend touchcancel',function(){
        //we pass the original event object because the jQuery event
        //object is normalized to w3c specs and does not provide the TouchList
        handleTouch(event);
      });
    });

    var handleTouch = function(event)
    {
      var touches = event.changedTouches,
              first = touches[0],
              type = '';

      switch(event.type)
      {
        case 'touchstart':
          type = 'mousedown';
          break;

        case 'touchmove':
          type = 'mousemove';
          event.preventDefault();
          break;

        case 'touchend':
          type = 'mouseup';
          break;

          efault:
          return;
      }

      var simulatedEvent = document.createEvent('MouseEvent');
      simulatedEvent.initMouseEvent(type, true, true, window, 1, first.screenX, first.screenY, first.clientX, first.clientY, false, false, false, false, 0/*left*/, null);
      first.target.dispatchEvent(simulatedEvent);
    };
  };
