import { INodeProperties, INodePropertyOptions } from "n8n-workflow";

const generateAgentsResponseOptions: INodePropertyOptions[] = [
    {
        name: 'Get Agents Response',
        value: 'generateAgentsResponse',
        action: 'Get agents response',
        description: 'Get the response from the agents',
        routing: {
            request: {
                method: 'POST',
                url: 'https://api.mona-ai.cloud/agent/getAgentResponse',
                body: {
                    "uid": '={{$credentials.uid}}',
                    "apiKey": "={{$credentials.apiKey}}",
                    "permission": "executeAgents",
                    "prompt": "={{$parameter.prompt}}",
                    "session_id": "={{$parameter.sessionId}}",
                    "language_code": "={{$parameter.languageCode}}"
                }
            }
        }
    }
]

export const Agent: INodeProperties[] = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: {
                resource: [
                    'Agents',
                ],
            }
        },
        default: '',
        options: [
            ...generateAgentsResponseOptions,
        ],
    },
]