import { INodeType, INodeTypeDescription, NodeConnectionType } from 'n8n-workflow';

export class GetFinishedApplicantsFromDatabase implements INodeType {
    description: INodeTypeDescription = {
        displayName: 'Get Finished Applicants From Database',
        name: 'getFinishedApplicantsFromDatabase',
        icon: 'file:../../mona-logo.svg',
        group: ['transform'],
        version: 1,
		subtitle: '={{ $parameter["operation"] + ": " + $parameter["resource"] }}',
        description: 'Get the finished applicants from the database who has finished the interview process.',
        defaults: {
            name: 'Get Finished Applicants From Database',
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
                        action: 'Get finished applicants from database',
                        description: 'Get the finished applicants from the database who has finished the interview process',
                        routing: {
                            request: {
                                method: 'POST',
                                url: 'https://api.mona-ai.cloud/database/getFinishedApplicantsFromDatabase',
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