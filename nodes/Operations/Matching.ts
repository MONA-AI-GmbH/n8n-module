import { INodeProperties, INodePropertyOptions} from 'n8n-workflow';

const GetProfilesSentOptions: INodePropertyOptions[] = [
    {
        name: 'Get Profiles Sent',
        value: 'getProfilesSent',
        action: 'Get profiles sent',
        description: 'Get the profiles that have been sent to the job market',
        routing: {
            request: {
                method: 'POST',
                url: 'https://api.mona-ai.cloud/matching/getProfilesSent',
                body: {
                    "uid": '={{$credentials.uid}}',
                    "apiKey": "={{$credentials.apiKey}}",
                }
            }
        }
    },
]
const GetProfilesSentByApplicantIdOptions: INodePropertyOptions[] = [
    {
        name: 'Get Profiles Sent by Applicant ID',
        value: 'getProfilesSentByApplicantId',
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

export const Matching: INodeProperties[] = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: {
                resource: [
                    'Matching'
                ],
            }
        },
        default: '',
        options: [
            ...GetProfilesSentOptions,
            ...GetProfilesSentByApplicantIdOptions,
        ]
    },
]