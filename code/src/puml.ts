/**
 * Copyright (c) 2024 Discover Financial Services
 */
import { DocState, PossibleStates, StateCallback } from 'dlms-base';
import { writeFileSync, existsSync } from 'fs';
import { docStates, DocStates } from './ui/src/common/states';

/**
 * Generates a PlantUML code based on the provided states object.
 *
 * @param {any} states - The states object.
 * @returns {string} The generated PlantUML code string.
 */
export function generatePuml(states: any): string {
    let r = ['\'Autogenerated by running "npm run puml"'];
    r.push('@' + 'startuml');
    let stateName: keyof DocStates;
    for (stateName in states) {
        const state = states[stateName];
        if (state.puml) {
            const color = state.puml.color ? '#' + state.puml.color : '';
            const title = state.puml.title ? state.puml.title : stateName;
            r.push(`state "${title}" as ${stateName} ${color}`);
            for (var i in state.puml.content) {
                r.push(`${stateName}: ${state.puml.content[i]}`);
            }
            if (state.puml.note) {
                r.push(`note "${state.puml.note}"`);
            }
        }
        let nextStateName: keyof PossibleStates;
        for (nextStateName in state.nextStates) {
            const nextState = state.nextStates[nextStateName];
            const dir = nextState.puml?.direction || '';
            r.push(
                `${stateName} -${dir}-> ${nextStateName}: ${nextState.groups}:\\n${nextState.puml?.label.join('\\n')}`
            );
        }
        r.push(``);
    }
    r.push('@enduml');
    return r.join('\n');
}

/** Creates the Puml file asynchronously. */
if (require.main === module) {
    setTimeout(async function () {
        const puml = generatePuml(docStates);
        writeFileSync('states.puml', puml);
        console.log('Puml generated in states.puml');
    }, 100);
}
