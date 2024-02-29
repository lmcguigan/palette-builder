import { IColor } from "../interfaces/colors";
import { IFirestoreColors } from "../interfaces/firestore";

export function getFirestoreColorsFromColors(colors: IColor[]):IFirestoreColors {
    return colors.map((color) => {
        return({
            color: color.color,
            mode: color.editMode,
            hex: color.hex,
            name: color.name
        })
    })
}