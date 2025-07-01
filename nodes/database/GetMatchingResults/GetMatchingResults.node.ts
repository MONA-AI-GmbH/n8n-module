import { INodeType, INodeTypeDescription, NodeConnectionType } from 'n8n-workflow';

export class GetMatchingResults implements INodeType {
    description: INodeTypeDescription = {
        displayName: 'Get Matching Results',
        name: 'getMatchingResults',
        icon: 'file:../../mona-logo.svg',
        group: ['transform'],
        version: 1,
		subtitle: '={{ $parameter["operation"] + ": " + $parameter["resource"] }}',
        description: 'Get the complete matching results. The output response might be huge.',
        defaults: {
            name: 'Get Matching Results',
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
                        action: 'Get matching results',
                        description: 'Get the matching results',
                        routing: {
                            request: {
                                method: 'POST',
                                url: 'https://api.mona-ai.cloud/database/getMatchingResults',
                                body: {
                                    "uid": '={{$credentials.uid}}',
                                    "paginationToken": null,
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