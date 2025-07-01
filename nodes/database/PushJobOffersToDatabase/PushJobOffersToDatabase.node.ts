import { INodeType, INodeTypeDescription, NodeConnectionType } from 'n8n-workflow';

export class PushJobOffersToDatabase implements INodeType {
    description: INodeTypeDescription = {
        displayName: 'Push Job Offers to Database',
        name: 'pushJobOffersToDatabase',
        icon: 'file:../../mona-logo.svg',
        group: ['transform'],
        version: 1,
        description: 'Adds job offers data to the database.',
        defaults: {
            name: 'Push Job Offers to Database',
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
                        action: 'Push job offers to database',
                        description: 'Push the job offers data to the database',
                        routing: {
                            request: {
                                method: 'POST',
                                url: 'https://api.mona-ai.cloud/database/pushJobOffersToDatabase',
                                body: {
                                    uid: '={{$credentials.uid}}',
                                    apiKey: '={{$credentials.apiKey}}',
                                    jobOffers: '={{$parameter.jobOffers.offer}}'
                                }
                            }
                        }
                    },
                ]
            },
            {
                displayName: 'Job Offer Details',
                name: 'jobOffers',
                type: 'fixedCollection',
                default: {},
                typeOptions: {
                    multipleValues: true,
                },
                description: 'Add multiple job offers to push to the database',
                options: [
                    {
                        displayName: 'Job Offer',
                        name: 'offer',
                        values: [
                            {
                                displayName: 'Job Title',
                                name: 'title',
                                type: 'string',
                                default: '',
                                required: true,
                                description: 'The title of the job offer',
                                placeholder: 'Enter the job title here'
                            },
                            {
                                displayName: 'Company Name',
                                name: 'company',
                                type: 'string',
                                default: '',
                                required: true,
                                description: 'The name of the company offering the job',
                                placeholder: 'Enter the company name here'
                            },
                            {
                                displayName: 'Location',
                                name: 'location',
                                type: 'string',
                                default: '',
                                required: true,
                                description: 'The location of the job offer',
                                placeholder: 'Enter the location here'
                            },
                            {
                                displayName: 'Description',
                                name: 'description',
                                type: 'string',
                                default: '',
                                required: true,
                                description: 'The description of the job offer',
                                placeholder: 'Enter the description here'
                            },
                        ]
                    }
                ],
                displayOptions: {
                    show: {
                        operation: ['post']
                    }
                }
            }
        ],
    }
}