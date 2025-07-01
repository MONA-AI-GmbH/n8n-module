import { INodeType, INodeTypeDescription, NodeConnectionType } from 'n8n-workflow';

export class GetMatchesFromDatabaseForPlatform implements INodeType {
    description: INodeTypeDescription = {
        displayName: 'Get Matches From Database For Platform',
        name: 'getMatchesFromDatabaseForPlatform',
        icon: 'file:../../mona-logo.svg',
        group: ['transform'],
        version: 1,
		subtitle: '={{ $parameter["operation"] + ": " + $parameter["resource"] }}',
        description: 'Fetch the last matching results, containing the information that you can see in the MONA platform. (without using API key)',
        defaults: {
            name: 'Get Matches From Database For MONA Platform',
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
                        action: 'Get matches from database',
                        description: 'Get the matches from the database',
                        routing: {
                            request: {
                                method: 'POST',
                                url: 'https://api.mona-ai.cloud/database/getMatchesFromDatabaseForPlatform',
                                body: {
                                    "uid": '={{$credentials.uid}}',
                                    "paginationToken": null,
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