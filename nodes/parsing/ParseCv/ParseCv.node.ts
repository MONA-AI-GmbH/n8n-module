import { INodeType, INodeTypeDescription, NodeConnectionType } from 'n8n-workflow';

export class ParseCv implements INodeType {
    description: INodeTypeDescription = {
        displayName: 'Extract Information From CV',
        name: 'parseCv',
        icon: 'file:../../mona-logo.svg',
        group: ['transform'],
        version: 1,
        description: 'Extract information from a CV document.',
        defaults: {
            name: 'Extract Information From CV',
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
                        action: 'Extract information from cv',
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
            },
            {
                displayName: 'File URL',
                name: 'fileUrl',
                type: 'string',
                default: '',
                required: true,

                placeholder: 'Enter your file URL here',
                displayOptions: {
                    show: {
                        operation: [
                            'post',
                        ],
                    }
                }
            },
            {
                displayName: 'File Name',
                name: 'fileName',
                type: 'string',
                default: '',
                required: true,

                placeholder: 'Enter your file name here',
                displayOptions: {
                    show: {
                        operation: [
                            'post',
                        ],
                    }
                }
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
            {
                displayName: 'Customer Number',
                name: 'customerNumber',
                type: 'string',
                default: '',
                required: true,

                placeholder: 'Enter your customer number here',
                displayOptions: {
                    show: {
                        operation: [
                            'post',
                        ],
                    }
                }
            },
            {
                displayName: 'Language',
                name: 'targetLang',
                type: 'options',
                default: 'EN-GB',
                description: 'The language code for the response, e.g., EN, DE, FR, etc',
                placeholder: 'Select a language',
                required: true,
                displayOptions: {
                    show: {
                        operation: [
                            'post',
                        ],
                    }
                },
                options: 
                [
                    {
                        name: 'English',
                        value: 'EN-GB',
                    },
                    {
                        name: 'German',
                        value: 'DE',
                    },
                    {
                        name: 'French',
                        value: 'FR',
                    },
                    {
                        name: 'Italian',
                        value: 'IT',
                    }
                ]
            }
        ],
    }
}