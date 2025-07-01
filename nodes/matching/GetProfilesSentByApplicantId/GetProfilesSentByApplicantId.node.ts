import { INodeType, INodeTypeDescription, NodeConnectionType } from 'n8n-workflow';

export class GetProfilesSentByApplicantId implements INodeType {
    description: INodeTypeDescription = {
        displayName: 'Get Profiles Sent By Applicant ID',
        name: 'getProfilesSentByApplicantId',
        icon: 'file:../../mona-logo.svg',
        group: ['transform'],
        version: 1,
        description: 'Fetch the data where the profile of an applicant has been sent to.',
        defaults: {
            name: 'Get Profiles Sent By Applicant ID',
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
                        action: 'Get profiles sent by applicant id',
                        description: 'Fetch the data where the profile of an applicant has been sent to',
                        routing: {
                            request: {
                                method: 'POST',
                                url: 'https://api.mona-ai.cloud/matching/getProfilesSentByApplicantId',
                                body: {
                                    "uid": '={{$credentials.uid}}',
                                    "apiKey": "={{$credentials.apiKey}}",
                                    "applicantId": "={{$parameter.applicantId}}"
                                }
                            }
                        }
                    },
                ]
            },
            {
                displayName: 'Applicant ID',
                name: 'applicantId',
                type: 'string',
                default: '',
                required: true,

                placeholder: 'Enter your applicant ID here',
                displayOptions: {
                    show: {
                        operation: [
                            'post',
                        ],
                    }
                }
            },
        ],
    } 
}