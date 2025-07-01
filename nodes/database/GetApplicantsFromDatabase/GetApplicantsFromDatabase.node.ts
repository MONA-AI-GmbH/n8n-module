import { INodeType, INodeTypeDescription, NodeConnectionType } from 'n8n-workflow';

export class GetApplicantsFromDatabase implements INodeType {
    description: INodeTypeDescription = {
        displayName: 'Get Applicants From Database',
        name: 'getApplicantsFromDatabase',
        icon: 'file:../../mona-logo.svg',
        group: ['transform'],
        version: 1,
		subtitle: '={{ $parameter["operation"] + ": " + $parameter["resource"] }}',
        description: 'Get the applicants from the database.',
        defaults: {
            name: 'Get Applicants From Database',
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
                        action: 'Get applicants from database',
                        description: 'Get the applicants from the database',
                        routing: {
                            request: {
                                method: 'POST',
                                url: 'https://api.mona-ai.cloud/database/getApplicantsFromDatabase',
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