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

        if (currentEndsWithSemi || currentEndsWithComma) {
            newText += addSpacesToBeginning(propertieslist[i], tabNum * config.tabSize);
        } else if (currentEndsWithBraceOpen) {
            if (config.spaceBeforeClass && i !== 0) {
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
// export function formatProperties(config: Config, propertieslist: string[]): string {
//     let newText = propertieslist[0];
//     let tabNum = 0;

//     for (let i = 1; i < propertieslist.length; i++) {
//         const beforeEndWithSemiCol = propertieslist[i - 1].endsWith(';');

//         const beforeEndWithBraceOpen = propertieslist[i - 1].endsWith('{');
//         const currentIsBraceClose = propertieslist[i] === '}';
//         const currentEndsWithBraceOpen = propertieslist[i].endsWith('{');
//         const beforeEndWithParenthesisOpen = propertieslist[i - 1].endsWith('(');


//         // if (beforeEndWithParenthesisOpen) {
//         //     newText += '\n';
//         //     newText += addSpacesToBeginning(propertieslist[i], (tabNum + 1) * config.tabSize);
//         //     tabNum++;
//         // } else if (beforeEndWithBraceOpen && currentIsBraceClose) {
//         //     newText += '\n';
//         //     newText += addSpacesToBeginning(propertieslist[i], (tabNum) * config.tabSize);
//         //     tabNum = tabNum - 1;
//         // } else if (beforeEndWithBraceOpen) {
//         //     newText += '\n';
//         //     newText += addSpacesToBeginning(propertieslist[i], (tabNum + 1) * config.tabSize);
//         //     tabNum++;
//         // } else if (currentIsBraceClose) {
//         //     newText += '\n';
//         //     newText += addSpacesToBeginning(propertieslist[i], (tabNum - 1) * config.tabSize);
//         //     tabNum = tabNum - 1;
//         // } else if (currentEndsWithBraceOpen) {
//         //     if (config.spaceBeforeClass) {
//         //         newText += '\n';
//         //     }
//         //     newText += '\n';
//         //     newText += addSpacesToBeginning(propertieslist[i], tabNum * config.tabSize);
//         // } else {
//         //     newText += '\n';
//         //     newText += addSpacesToBeginning(propertieslist[i], tabNum * config.tabSize);
//         // }
//     }
//     if (config.insertFinalNewline) {
//         newText += '\n';
//     }

//     return newText;
// }
