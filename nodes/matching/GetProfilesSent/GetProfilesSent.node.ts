import { INodeType, INodeTypeDescription, NodeConnectionType } from 'n8n-workflow';

export class GetProfilesSent implements INodeType {
    description: INodeTypeDescription = {
        displayName: 'Get Profiles Sent',
        name: 'getProfilesSent',
        icon: 'file:../../mona-logo.svg',
        group: ['transform'],
        version: 1,
								subtitle: '={{ $parameter["operation"] + ": " + $parameter["resource"] }}',
        description: 'Get all applicant profiles that have been sent to the job market.',
        defaults: {
            name: 'Get Profiles Sent',
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
                        action: 'Get profiles sent',
                        description: 'Get the profiles that have been sent to the job market',
                        routing: {
                            request: {
                                method: 'POST',
                                url: 'https://api.mona-ai.cloud/matching/getProfilesSent',
                                body: {
                                    "uid": '={{$credentials.uid}}',
                                    "apiKey": "={{$credentials.apiKey}}",
                                }
                            }
                        }
                    },
                ]
            },
        ],
    } 
}