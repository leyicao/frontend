import React from "react";
import { Position } from 'reactflow'

export const nodes = [
    {
        id: '1',
        type: 'customInput',
        data: {
            label: 'Input Node',
        },
        position: {x: 8, y: 89}
    },
    {
        id: '2',
        type: 'llm',
        data: {
            label: 'LLM Node',
        },
        position: {x: 238, y: 89}
    },
    {
        id: '3',
        type: 'customOutput',
        data: {
            label: 'Output Node',
        },
        position: {x: 468, y: 89}
    },
    {
        id: '4',
        type: 'text',
        data: {
            label: 'Text Node',
        },
        position: {x: 698, y: 89}
    },
    {
        id: '5',
        type: 'basic',
        data: {
            label: 'Basic Node',
            selects: ['text']
        },
        position: {x: 238, y: 189}
    },
];