import { INodeProperties, INodePropertyOptions } from 'n8n-workflow';

const anyDocumentToTextOptions: INodePropertyOptions[] = [
    {
        name: 'Any Document to Text',
        value: 'anyDocumentToText',
        action: 'Convert any document to text',
        description: 'Convert any document to text',
        routing: {
            request: {
                method: 'POST',
                url: 'https://api.mona-ai.cloud/parsing/anyDocumentToText',
                body: {
                    uid: '={{$credentials.uid}}',
                    apiKey: '={{$credentials.apiKey}}',
                    fileUrl: '={{$parameter.fileUrl}}',
                    fileName: '={{$parameter.fileName}}',
                }
            }
        }
    },
]

const ParseCVOptions: INodePropertyOptions[] = [
    {
        name: 'Parse CV',
        value: 'parseCV',
        action: 'Extract information from CV',
        description: 'Extract information from a CV document',
        routing: {
            request: {
                method: 'POST',
                url: 'https://api.mona-ai.cloud/parsing/parseCV',
                body: {
                    uid: '={{$credentials.uid}}',
                    apiKey: '={{$credentials.apiKey}}',
                    documentData: {
                        fileUrl: '={{$parameter.fileUrl}}',
                        fileName: '={{$parameter.fileName}}',
                    },
                    applicantId: '={{$parameter.applicantId}}',
                    customerNumber: '={{$parameter.customerNumber}}',
                    targetLang: '={{$parameter.targetLang}}',
                }
            }
        }
    },
]


export const Parsing: INodeProperties[] = [
    {
        
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: {
                resource: [
                    'Parsing'
                ]
            }
        },
        default: '',
        options: [
            ...anyDocumentToTextOptions,
            ...ParseCVOptions
        ]
    }
]


