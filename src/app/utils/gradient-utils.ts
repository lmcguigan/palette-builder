import { ISliderControl, RGBSliderControlNameType, SliderControlNameType } from "../interfaces/colors";
import { getValueFromControls } from "./convert-color-utils";

export function getGradientForRgb(name: RGBSliderControlNameType, red: number, green: number, blue: number): string{
    switch (name){
        case 'red':
            return `rgb(${0}, ${green}, ${blue}), rgb(${255}, ${green}, ${blue})`
        case 'green':
            return `rgb(${red}, ${0}, ${blue}), rgb(${red}, ${255}, ${blue})`
        case 'blue': 
            return `rgb(${red}, ${green}, ${0}), rgb(${red}, ${green}, ${255})`
    }
}

export function buildGradient(name: SliderControlNameType, sliderControls: ISliderControl[]) {
    let gradientColors = ''
    if(name === 'hue' || name === 'saturation' || name === 'lightness'){
      if(name === 'hue'){
        gradientColors = `#ff0000 0%, #ffff00 17%, #00ff00 33%, #00ffff 50%, #0000ff 67%, #ff00ff 83%, #ff0000 100%`
      } else {
        const other = sliderControls.find((con) => con.name !== name && con.name !== 'hue').currentValue
        const hue = getValueFromControls('hue', sliderControls)
        if(name === 'saturation'){
            gradientColors = `hsl(${hue}, ${0}%, ${other}%), hsl(${hue}, ${100}%, ${other}%)`
        }
        else {
            gradientColors = `hsl(${hue}, ${other}%, ${0}%), hsl(${hue}, ${other}%, ${50}%), hsl(${hue}, ${other}%, ${100}%)`
        } 
      }
    } else {
        const red = getValueFromControls('red', sliderControls)
        const green = getValueFromControls('green', sliderControls)
        const blue = getValueFromControls('blue', sliderControls)
        gradientColors = getGradientForRgb(name, red, green, blue)
    }
    return `linear-gradient(to right, ${gradientColors})`
}