import { IColor, SliderControlNameType } from '../interfaces/colors';

export function componentToHex(n: number): string{
    const hex = n.toString(16);
    return hex.length > 1 ? hex : '0' + hex;
}

export function convertRgbToHex(r: number, g: number, b: number): string{
    return '#'+ componentToHex(r) + componentToHex(g) + componentToHex(b)
}

export function getRgbFromChannels(hue: number, chroma: number, x: number, amountToAdd: number){
    let rgb: number[];
    const i = 60
    if(0 <= hue && hue < i * 2){
        const mid = i
        rgb = [
            // red
            hue < mid ? chroma : x,
            // green
            hue < mid ? x : chroma, 
            // blue
            0
        ]
    } else if (i * 2 <= hue && hue < i * 4){
        const mid = i * 3
        rgb = [
            // red
            0,
            // green
            hue < mid ? chroma : x,
            // blue
            hue < mid ? x : chroma
        ]
    } else if (i * 4 <= hue && hue < i * 6) {
        const mid = i * 5
        rgb = [
            // red
            hue < mid ? x : chroma,
            // green
            0,
            // blue
            hue < mid ? chroma : x
        ]
    }
    return rgb.map((val) => Math.round((val + amountToAdd) * 255))
}

export function convertHslToHex (hue: number, s: number, l: number): string{
    const satPercent = s/100
    const lightnessPercent = l/100
    const chroma = satPercent * (1 - Math.abs(2 * lightnessPercent - 1))
    const x = chroma * (1 - Math.abs((hue / 60) % 2 - 1))
    const amountToAdd = lightnessPercent - chroma/2
    const rgbArray = getRgbFromChannels(hue, chroma, x, amountToAdd)
    return convertRgbToHex(rgbArray[0], rgbArray[1], rgbArray[2])
}
export function getHex (vals: [number, number, number], mode: 'HSL' | 'RGB'): string{
    return mode === 'HSL' ? convertHslToHex(vals[0], vals[1], vals[2]) : convertRgbToHex(vals[0], vals[1], vals[2])
}

export function convertHex(h: string, targetMode: 'HSL' | 'RGB'){
    const array =  h.substring(1).split('').map((e, i, a) => (i + 1 < a.length) ? parseInt("0x" + e + a[i+1]) : null)
        .filter((e, i) => i % 2 === 0)
    if (targetMode === 'RGB') {
        return [
            {
                name: 'red',
                max: 255,
                currentValue: array[0]  
            }, 
            {
                name: 'green',
                max: 255,
                currentValue: array[1]  
            }, 
            {
                name: 'blue',
                max: 255,
                currentValue: array[2]  
            }
        ]
    }
    else {
    let r = array[0] / 255;
    let g = array[1] / 255;
    let b = array[2] / 255;
    let cmin = Math.min(r,g,b)
    let cmax = Math.max(r,g,b)
    let delta = cmax - cmin
    let h = 0
    if (delta == 0)
        h = 0;
    else if (cmax == r)
        h = ((g - b) / delta) % 6;
    else if (cmax == g)
        h = (b - r) / delta + 2;
    else
        h = (r - g) / delta + 4;
    h = Math.round(h * 60);
    let l = (cmax + cmin) / 2;
    let s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
    s = +(s * 100).toFixed(0);
    l = +(l * 100).toFixed(0);
        return [
            {
              name: 'hue',
              max: 359,
              currentValue: h,
            }, 
            { 
              name: 'saturation',
              max: 100,
              currentValue: s,
            }, 
            { 
              name: 'lightness',
              max: 100,
              currentValue: l,
            }
          ]
    }
}

export function getValueFromControls(name: SliderControlNameType, controls: any[]){
    return controls.find((control) => control.name === name).currentValue
}

export function getColorString(colorMode: string, controls: any[]){
    if(colorMode === 'RGB'){
        return `rgb(${getValueFromControls('red', controls)}, ${getValueFromControls('green', controls)}, ${getValueFromControls('blue', controls)})`
    } else {
        return`hsl(${getValueFromControls('hue', controls)}, ${getValueFromControls('saturation', controls)}%, ${getValueFromControls('lightness', controls)}%)`
    }
}

export function getHSLColorObject (color: IColor): IColor {
    const obj = Object.assign({}, color);
    const newControls = convertHex(obj.hex, "HSL");
    obj.editMode = "HSL"
    obj.controls = newControls
    obj.color = getColorString("HSL", newControls);
    return obj
}

export function mapColorsToLightnessValues(colors: IColor[]) {
    const allHSL = colors.map((color) => color.editMode !== 'HSL' ? getHSLColorObject(color) : color);
    return allHSL.map((color) => color.controls.find((cont) => cont.name === 'lightness').currentValue);
}

export function getDarkestColor (colors: IColor[]): IColor {
    const lightnessValues = mapColorsToLightnessValues(colors)
    return colors[lightnessValues.indexOf(Math.min(...lightnessValues))];
}

export function getLightestColor (colors: IColor[]): IColor {
    const lightnessValues = mapColorsToLightnessValues(colors);
    return colors[lightnessValues.indexOf(Math.max(...lightnessValues))];
}