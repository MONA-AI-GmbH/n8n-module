import { INodeType, INodeTypeDescription, NodeConnectionType } from 'n8n-workflow';

export class GetAgentsResponse implements INodeType {
    description: INodeTypeDescription = {
        displayName: 'Get Agents Response',
        name: 'getAgentsResponse',
        icon: 'file:../mona-logo.svg',
        group: ['transform'],
        version: 1,
        description: 'Get the response from the agents.',
        defaults: {
            name: 'Get Agents Response',
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
                    },
                ]
            },
            {
                displayName: 'Session ID',
                name: 'sessionId',
                type: 'string',
                default: '',
                required: true,

                placeholder: 'Enter your session ID here',
                displayOptions: {
                    show: {
                        operation: [
                            'post',
                        ],
                    }
                }
            },
            {
                displayName: 'Prompt',
                name: 'prompt',
                type: 'string',
                default: '',
                description: 'The prompt for the agent chat response',
                required: true,
                placeholder: 'Enter your prompt here',
                displayOptions: {
                    show: {
                        operation: [
                            'post',
                        ],
                    }
                },
            },
            {
                displayName: 'Language',
                name: 'languageCode',
                type: 'options',
                default: 'EN-GB',
                description: 'The language code for the agent chat response, e.g., EN, DE, FR, etc',
                placeholder: 'Select a language',
                required: true,
                displayOptions: {
                    show: {
                        operation: [
                            'post',
                        ],
                    }
                },
                options:
                    [
                        {
                            name: 'English',
                            value: 'EN-GB',
                        },
                        {
                            name: 'German',
                            value: 'DE',
                        },
                        {
                            name: 'French',
                            value: 'FR',
                        },
                        {
                            name: 'Italian',
                            value: 'IT',
                        }
                    ]
            }
        ],
    }
}