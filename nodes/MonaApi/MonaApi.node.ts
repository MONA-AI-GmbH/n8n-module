import { INodeType, INodeTypeDescription, NodeConnectionType } from 'n8n-workflow';
import { Parsing } from '../Operations/Parsing';
import { Properties } from '../Properties/Properties';
import { Matching } from '../Operations/Matching';
import { Agent } from '../Operations/Agent';
import { Database } from '../Operations/Database';
import { API } from '../Operations/Api';
export class MonaApi implements INodeType {
    description: INodeTypeDescription = {
        displayName: 'Mona API',
        name: 'monaApi',
        icon: 'file:mona-logo.svg',
        group: ['transform'],
        version: 1,
        description: 'Full list of Mona API operations',
        subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
        defaults: {
            name: 'Mona API',
        },
        inputs: [NodeConnectionType.Main],
        outputs: [NodeConnectionType.Main],
        credentials: [
            {
                name: 'monaApi',
                required: true,
                displayOptions: {
                    show: {
                        resource: [
                            'Agents',
                            'Database',
                            'Matching',
                            'Parsing',
                        ],
                    }
                }
            },
            {
                name: 'userIdApi',
                required: true,
                displayOptions: {
                    show: {
                        resource: [
                            'API',
                        ],
                    }
                }
            }
        ],
        properties: [
            {
                displayName: 'Resource',
                name: 'resource',
                type: 'options',
                noDataExpression: true,
                options: [
                    { 
                        name: 'Agent', 
                        value: 'Agent'
                    },
                    { 
                        name: 'API', 
                        value: 'API' 
                    },
                    { 
                        name: 'Database', 
                        value: 'Database' 
                    },
                    { 
                        name: 'Matching', 
                        value: 'Matching' 
                    },
                    { 
                        name: 'Parsing', 
                        value: 'Parsing',
                    },
                ],
                default: 'Agent',
            },
            ...Parsing,
            ...Matching,
            ...Agent,
            ...API,
            ...Database,
            ...Properties
    
    ],
}
}