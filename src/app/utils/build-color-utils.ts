import { IColor } from "../interfaces/colors"

export function buildColorObject(sliderControls, colorName, colorString, colorMode, colorHex): IColor {
    const controls = sliderControls.map((obj) => Object.assign({}, obj))
    return {
        name: colorName, 
        color: colorString,
        editMode: colorMode,
        hex: colorHex,
        controls: controls,
      }
}