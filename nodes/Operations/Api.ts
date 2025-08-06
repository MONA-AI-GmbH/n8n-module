import { INodeProperties, INodePropertyOptions} from 'n8n-workflow';

const generateApiKeyOptions: INodePropertyOptions[] = [
    {
        name: 'Generate the API Key',
        value: 'generateApiKey',
        action: 'Generate the API key',
        description: 'Generates a new API key for the authenticated user',
        routing: {
            request: {
                method: 'POST',
                url: 'https://api.mona-ai.cloud/auth/generateApiKey',
                body: {
                    "uid": '={{$credentials.uid}}',
                    "readApplicants": true,
                    "pushApplicants": true,
                    "readJobOffers": true,
                    "pushJobOffers": true,
                    "readAgents": true,
                    "pushAgents": true,
                    "readData": true,
                    "pushData": true,
                    "executeAgents": true,
                    "executeWorkflow": true,
                    "readTools": true,
                    "manageTools": false,
                    "readMatching": true,
                    "createMatching": true,
                    "parsing": true,
                    "readAnalytics": true,
                    "readCommunication": true,
                    "manageApiKeys": false,
                    "systemAdmin": false
                }
            }
        }
    },
]

export const API: INodeProperties[] = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: {
                resource: [
                    'API',
                ],
            }
        },
        default: '',
        options: [
            ...generateApiKeyOptions,
        ],
    },
]