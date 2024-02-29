export type RGBSliderControlNameType = 'red' | 'green' | 'blue'
export type HSLSliderControlNameType = 'hue' | 'saturation' | 'lightness'
export type SliderControlNameType = RGBSliderControlNameType | HSLSliderControlNameType
export interface ISliderControl {
  name: string,
  max: number,
  currentValue: number
}

export interface IColor {
  name: string
  color: string
  editMode: colorMode
  hex?: string
  controls?: ISliderControl[]
}

export const colorModes = [
  {
  mode: 'RGB',
  sliderControls: [
    {
      name:'red',
      max: 255,
      currentValue: 0,
    }, 
    {
      name: 'green',
      max: 255,
      currentValue: 0,
    }, 
    {
      name:'blue',
      max: 255,
      currentValue: 0,
    }]
  }, 
  {
    mode: 'HSL',
    sliderControls: [
      {
        name: 'hue',
        max: 359,
        currentValue: 0,
      }, 
      { 
        name: 'saturation',
        max: 100,
        currentValue: 0,
      }, 
      { 
        name: 'lightness',
        max: 100,
        currentValue: 0,
      }
    ]
  }
]

export type colorMode = 'HSL' | 'RGB'