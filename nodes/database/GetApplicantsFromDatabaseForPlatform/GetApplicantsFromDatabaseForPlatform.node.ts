import { INodeType, INodeTypeDescription, NodeConnectionType } from 'n8n-workflow';

export class GetApplicantsFromDatabaseForPlatform implements INodeType {
    description: INodeTypeDescription = {
        displayName: 'Get Applicants From Database For Platform',
        name: 'getApplicantsFromDatabaseForPlatform',
        icon: 'file:../../mona-logo.svg',
        group: ['transform'],
        version: 1,
								subtitle: '={{ $parameter["operation"] + ": " + $parameter["resource"] }}',
        description: 'Get the applicants from the database of MONA platform.',
        defaults: {
            name: 'Get Applicants From Database For MONA Platform',
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
                                url: 'https://api.mona-ai.cloud/database/getApplicantsFromDatabaseForPlatform',
                                body: {
                                    "uid": '={{$credentials.uid}}',
                                    "platform": "web"
                                }
                            }
                        }
                    },
                ]
            },
        ],
    } 
}