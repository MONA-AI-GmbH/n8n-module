import { INodeType, INodeTypeDescription, NodeConnectionType } from 'n8n-workflow';

export class GetJobOffersFromDatabase implements INodeType {
    description: INodeTypeDescription = {
        displayName: 'Get Job Offers From Database',
        name: 'getJobOffersFromDatabase',
        icon: 'file:../../mona-logo.svg',
        group: ['transform'],
        version: 1,
		subtitle: '={{ $parameter["operation"] + ": " + $parameter["resource"] }}',
        description: 'Get the job offers from the database.',
        defaults: {
            name: 'Get Job Offers From Database',
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
                        action: 'Get job offers from database',
                        description: 'Get the job offers from the database',
                        routing: {
                            request: {
                                method: 'POST',
                                url: 'https://api.mona-ai.cloud/database/getJobOffersFromDatabase',
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