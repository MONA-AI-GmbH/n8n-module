import { INodeType, INodeTypeDescription, NodeConnectionType } from 'n8n-workflow';

export class AnyDocumentToText implements INodeType {
    description: INodeTypeDescription = {
        displayName: 'Convert any Document to Text',
        name: 'anyDocumentToText',
        icon: 'file:../../mona-logo.svg',
        group: ['transform'],
        version: 1,
        description: 'Convert any document to text.',
        defaults: {
            name: 'Convert any Document to Text',
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
        ],
    }
}