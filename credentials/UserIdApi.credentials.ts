import {
    IAuthenticateGeneric,
    ICredentialType,
    INodeProperties,
} from 'n8n-workflow';


export class UserIdApi implements ICredentialType {
    name = 'userIdApi';
    displayName = 'User ID API';
    documentationUrl = "https://www.postman.com/teammona/team-mona-s-workspace/overview";
    properties: INodeProperties[] = [
        {
            displayName: 'User ID',
            name: 'uid',
            type: 'string',
            default: '',
            description: 'Your user ID',
        }
    ];
    authenticate: IAuthenticateGeneric = {
        type: 'generic',
        properties: {
            body: {
                uid: '={{$credentials.uid}}',
            },
        },

    }
}