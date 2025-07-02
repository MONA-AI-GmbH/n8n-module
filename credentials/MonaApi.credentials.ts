import {
    IAuthenticateGeneric,
	ICredentialTestRequest,
    ICredentialType,
    INodeProperties,
} from 'n8n-workflow';


export class MonaApi implements ICredentialType {
    name = 'monaApi';
    displayName = 'Mona API';
    documentationUrl = "https://www.postman.com/teammona/team-mona-s-workspace/overview";
    properties: INodeProperties[] = [
        {
            displayName: 'User ID',
            name: 'uid',
            type: 'string',
            default: '',
            description: 'Your user ID',
            required: true,
        },
        {
            displayName: 'API Key',
            name: 'apiKey',
            type: 'string',
            typeOptions: { password: true },
            default: '',
            description: 'Your API key for authentication',
            required: true,
        },
    ];
    authenticate: IAuthenticateGeneric = {
        type: 'generic',
        properties: {
            body: {
                uid: '={{$credentials.uid}}',
                apiKey: '={{$credentials.apiKey}}',
            },
        },
    };
    
    test: ICredentialTestRequest = {
        request: {
            baseURL: 'https://api.mona-ai.cloud/auth/checkIfAPIKeyIsValid',
            method: 'POST',
            body: {
                    uid: '={{$credentials.uid}}',
                    apiKey: '={{$credentials.apiKey}}',
            },
        },
    };
}