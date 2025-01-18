import { Config } from '../interfaces/config';

function addSpacesToBeginning(input: string, count: number): string {
    if (count <= 0) {
        return input;
    }
    const spaces: string = ' '.repeat(count);
    return spaces + input;
}

export function formatProperties(config: Config, propertieslist: string[]): string {
    let newText = '';
    let tabNum = 0;

    for (let i = 0; i < propertieslist.length; i++) {
        const currentEndsWithSemi = propertieslist[i].endsWith(';');
        const currentEndsWithComma = propertieslist[i].endsWith(',');
        const currentEndsWithBraceOpen = propertieslist[i].endsWith('{');
        const currentEndsWithParenthesisOpen = propertieslist[i].endsWith('(');
        const currentIsBraceClose = propertieslist[i] === '}';
        const currnetIsComment = propertieslist[i].startsWith('//');
        const beforeEndsWithBraceOpen = 0 < i ? propertieslist[i - 1].endsWith('{') : false;

        if (currentEndsWithSemi || currentEndsWithComma || currnetIsComment) {
            newText += addSpacesToBeginning(propertieslist[i], tabNum * config.tabSize);
        } else if (currentEndsWithBraceOpen) {
            if (config.spaceBeforeClass && !beforeEndsWithBraceOpen && i !== 0) {
                newText += '\n';
            }
            newText += addSpacesToBeginning(propertieslist[i], tabNum * config.tabSize);
            tabNum++;
        } else if (currentEndsWithParenthesisOpen) {
            newText += addSpacesToBeginning(propertieslist[i], tabNum * config.tabSize);
            tabNum++;
        } else if (currentIsBraceClose) {
            tabNum--;
            newText += addSpacesToBeginning(propertieslist[i], tabNum * config.tabSize);
        } else {
            newText += addSpacesToBeginning(propertieslist[i], tabNum * config.tabSize);
            tabNum--;
        }

        if ( i !== propertieslist.length - 1) {
            newText += '\n';
        }
    }
    if (config.insertFinalNewline) {
        newText += '\n';
    }

    return newText;
}
