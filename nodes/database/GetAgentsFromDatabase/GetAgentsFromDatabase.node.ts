import { INodeType, INodeTypeDescription, NodeConnectionType } from 'n8n-workflow';

export class GetAgentsFromDatabase implements INodeType {
    description: INodeTypeDescription = {
        displayName: 'Get Agents From Database',
        name: 'getAgentsFromDatabase',
        icon: 'file:../../mona-logo.svg',
        group: ['transform'],
        version: 1,
								subtitle: '={{ $parameter["operation"] + ": " + $parameter["resource"] }}',
        description: 'Get the agents information from the database.',
        defaults: {
            name: 'Get Agents From Database',
        },
        inputs: [NodeConnectionType.Main],
        outputs: [NodeConnectionType.Main],
        credentials: [
            {
                name: 'monaApi',
                required: true,
            }
        ],
        properties: [
            {
                displayName: 'Operation',
                name: 'operation',
                type: 'options',
                noDataExpression: true,
                default: 'post',
                options: [
                    {
                        name: 'Post',
                        value: 'post',
                        action: 'Get agents from database',
                        description: 'Get the agents information from the database',
                        routing: {
                            request: {
                                method: 'POST',
                                url: 'https://api.mona-ai.cloud/database/getAgentsFromDatabase',
                                body: {
                                    "uid": '={{$credentials.uid}}',
                                    "apiKey": "={{$credentials.apiKey}}",
                                    "typeOfAgent": "monari",
                                    "isActive": true,
                                }
                            }
                        }
                    },
                ]
            },
        ],
    }
}