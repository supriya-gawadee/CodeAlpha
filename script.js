
    let display = document.getElementById('display');

    function dis(value) {
      if (value === '=') {
        try {
          display.value = eval(display.value);
        } catch (error) {
          display.value = 'Error';
        }
      } else if (value === 'AC') {
        display.value = '';
      } else {
        display.value += value;
      }
    }
