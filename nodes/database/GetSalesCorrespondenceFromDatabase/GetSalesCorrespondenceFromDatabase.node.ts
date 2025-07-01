import { INodeType, INodeTypeDescription, NodeConnectionType } from 'n8n-workflow';

export class GetSalesCorrespondenceFromDatabase implements INodeType {
    description: INodeTypeDescription = {
        displayName: 'Get Sales Correspondence From Database',
        name: 'getSalesCorrespondenceFromDatabase',
        icon: 'file:../../mona-logo.svg',
        group: ['trigger'],
        version: 1,
		subtitle: '={{ $parameter["operation"] + ": " + $parameter["resource"] }}',
        description: 'Fetch the sales correspondence from the database. (without using API key)',
        defaults: {
            name: 'Get Sales Correspondence From Database',
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
                        action: 'Get sales correspondence from database',
                        description: 'Get the sales correspondence from the database',
                        routing: {
                            request: {
                                method: 'POST',
                                url: 'https://api.mona-ai.cloud/database/getSalesCorrespondenceFromDatabase',
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