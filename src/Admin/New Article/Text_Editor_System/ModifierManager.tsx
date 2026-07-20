import controls from "./TextModifier";
import { type IModifier } from "./TextModifier"

interface IModifierManager {
    toggle(control : string): IModifier | undefined;
    add(modifier: IModifier, modifiers : IModifier[]) : IModifier[] | undefined;
    remove(control : string, modifiers: IModifier[]) : IModifier[] | undefined;
}
 
export class ModifierManager implements IModifierManager {
    toggle(control : string) : IModifier | undefined {
        return controls.find((ctrl:IModifier) => ctrl.name === control);
    }
    add(modifier: IModifier, modifiers: IModifier[] | undefined) : IModifier[] | undefined {
       return modifiers ? [...modifiers , modifier] : [modifier];
    }
    remove(control : string, modifiers: IModifier[]) : IModifier[] | undefined {
        const searchedModifier = modifiers.find(modifier => modifier.name === control);
        if(searchedModifier){
            const searchIndex = modifiers.indexOf(searchedModifier);
            return modifiers.slice(0, searchIndex-1).concat(modifiers.slice(searchIndex + 1))
        }
    }
}