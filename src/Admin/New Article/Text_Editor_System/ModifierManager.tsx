import controls from "./TextModifier";
import { type IModifier } from "./TextModifier"

interface IModifierManager {
    toggle(control : string) : IModifier | undefined;
}
 
export class ModifierManager implements IModifierManager {
    toggle(control : string) : IModifier | undefined {
        return controls.find((ctrl:IModifier) => ctrl.name === control);
    }
}