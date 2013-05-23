 function tickDone(tickDepth_) {
      if (infoBox[length] !== 0) {
        if (infoBox[length] <= infoBox[index]) {
          nextTickQueue = [];
          infoBox[length] = 0;
        } else {
          nextTickQueue.splice(0, infoBox[index]);
          infoBox[length] = nextTickQueue.length;
          if (needSpinner) {
            _needTickCallback();
            needSpinner = true;
          }
        }
      }
      Intick = false;
      infoBox[index] = 0;
      infoBox[depth] = tickDepth_;
    }
