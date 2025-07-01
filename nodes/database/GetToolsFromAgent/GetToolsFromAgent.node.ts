import { INodeType, INodeTypeDescription, NodeConnectionType } from 'n8n-workflow';

export class GetToolsFromAgent implements INodeType {
    description: INodeTypeDescription = {
        displayName: 'Get Tools From Agent',
        name: 'getToolsFromAgent',
        icon: 'file:../../mona-logo.svg',
        group: ['transform'],
        version: 1,
        description: 'Get the tools that can be used by the agents.',
        defaults: {
            name: 'Get Tools From Agent',
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
                        action: 'Get tools from agent',
                        description: 'Get the tools that can be used by the agents',
                        routing: {
                            request: {
                                method: 'POST',
                                url: 'https://api.mona-ai.cloud/database/getToolsFromAgent',
                                body: {
                                    "uid": '={{$credentials.uid}}',
                                    "apiKey": "={{$credentials.apiKey}}",
                                    "agentId": "={{$parameter.agentId}}",
                                }
                            }
                        }
                    },
                ]
            },
            {
                displayName: 'Agent ID',
                name: 'agentId',
                type: 'string',
                default: '',
                required: true,

                placeholder: 'Enter your agent ID here',
                displayOptions: {
                    show: {
                        operation: [
                            'post',
                        ],
                    }
                }
            },
        ],
    }
}