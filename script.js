const colorPicker = document.getElementById('color-picker');
const hexCode = document.getElementById('hex');
const rgbCode = document.getElementById('rgb');
const hslCode = document.getElementById('hsl');

colorPicker.addEventListener('input', function() {
  const color = colorPicker.value;
  hexCode.textContent = `Hex: ${color}`;
  rgbCode.textContent = `RGB: ${hexToRGB(color)}`;
  hslCode.textContent = `HSL: ${rgbToHSL(hexToRGB(color))}`;
});

// This is a Javascript commment

// Do not worry too about understanding the implementation of the following 2 functions
// they just help convert between 3 common color formats
// but DO use them to ensure you understand javascript syntax well 

function hexToRGB(hex) {
  const r = parseInt(hex.slice(1,3), 16);
  const g = parseInt(hex.slice(3,5), 16);
  const b = parseInt(hex.slice(5,7), 16);
  return `${r}, ${g}, ${b}`;
}

function rgbToHSL(rgb) {
  const [r, g, b] = rgb.split(',').map(x => parseInt(x));
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h, s, l = (max + min) / 2;
  if (max == min) {
    h = s = 0;
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h /= 6;
  }
  return `${Math.round(h*360)}, ${Math.round(s*100)}%, ${Math.round(l*100)}%`;
}
