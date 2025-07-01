import { INodeType, INodeTypeDescription, NodeConnectionType } from 'n8n-workflow';

export class PushApplicantsToDatabase implements INodeType {
    description: INodeTypeDescription = {
        displayName: 'Push Applicants to Database',
        name: 'pushApplicantsToDatabase',
        icon: 'file:../../mona-logo.svg',
        group: ['transform'],
        version: 1,
        description: 'Push applicants data to the database.',
        defaults: {
            name: 'Push Applicants to Database',
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
                        action: 'Push applicants to database',
                        description: 'Push the applicants data to the database',
                        routing: {
                            request: {
                                method: 'POST',
                                url: 'https://api.mona-ai.cloud/database/pushApplicantsToDatabase',
                                body: {
                                    "uid": '={{$credentials.uid}}',
                                    "apiKey": '={{$credentials.apiKey}}',
                                    "applicants": '={{$parameter.applicants.applicant}}'
                                }
                            }
                        }
                    },
                ]
            },
            {
                displayName: 'Applicant Details',
                name: 'applicants',
                type: 'fixedCollection',
                default: {},
                typeOptions: {
                    multipleValues: true,
                },
                description: 'Add multiple applicants to push to the database',
                options: [
                    {
                        displayName: 'Applicant',
                        name: 'applicant',
                        values: [
                            {
                                displayName: 'First Name',
                                name: 'vorname',
                                type: 'string',
                                default: '',
                                required: true,
                                description: 'The first name of the applicant',
                                placeholder: 'Enter the first name here'
                            },
                            {
                                displayName: 'Last Name',
                                name: 'nachname',
                                type: 'string',
                                default: '',
                                required: true,
                                description: 'The last name of the applicant',
                                placeholder: 'Enter the last name here'
                            },
                            {
                                displayName: 'Email',
                                name: 'email',
                                type: 'string',
                                default: '',
                                required: true,
                                description: 'The email address of the applicant',
                                placeholder: 'Enter the email here'
                            },
                            {
                                displayName: 'Mobile Number',
                                name: 'mobilnummer',
                                type: 'string',
                                default: '',
                                required: true,
                                description: 'The mobile number of the applicant',
                                placeholder: 'Enter the mobile number here'
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