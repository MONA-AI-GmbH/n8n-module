import { INodeType, INodeTypeDescription, NodeConnectionType } from 'n8n-workflow';

export class GenerateApiKeyNode implements INodeType {
    description: INodeTypeDescription = {
        displayName: 'Generate API Key Node',
        name: 'generateApiKeyNode',
        icon: 'file:../mona-logo.svg',
        group: ['transform'],
        version: 1,
		subtitle: '={{ $parameter["operation"] + ": " + $parameter["resource"] }}',
        description: 'Generates a new API key for the authenticated user',
        defaults: {
            name: 'Generate API Key Node',
        },
        inputs: [NodeConnectionType.Main],
        outputs: [NodeConnectionType.Main],
        credentials: [
            {
                name: 'userIdApi',
                required: true,
            }
        ],
        properties: [
            {
                displayName: 'Resource',
                name: 'resource',
                type: 'options',
                noDataExpression: true,
                options: [
                    { name: 'Post', value: 'post' }
                ],
                default: 'post',
            },
            {
                displayName: 'Operation',
                name: 'operation',
                type: 'options',
                noDataExpression: true,
                default: 'post',
                displayOptions: {
                    show: {
                        resource: [
                            'post',
                        ]
                    }
                },
                options: [
                    {
                        name: 'Post',
                        value: 'post',
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
            }
        ],
    }
}