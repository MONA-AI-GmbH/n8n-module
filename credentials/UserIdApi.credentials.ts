import {
    IAuthenticateGeneric,
    ICredentialType,
    INodeProperties,
	ICredentialTestRequest,
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

    test: ICredentialTestRequest = {
        request: {
            baseURL: 'https://api.mona-ai.cloud/auth/generateApiKey',
            method: 'POST',
            body: {
                uid: '={{$credentials.uid}}',
                "readApplicants": false,
                "pushApplicants": false,
                "readJobOffers": false,
                "pushJobOffers": false,
                "readAgents": false,
                "pushAgents": false,
                "readData": false,
                "pushData": false,
                "executeAgents": false,
                "executeWorkflow": false,
                "readTools": false,
                "manageTools": false,
                "readMatching": false,
                "createMatching": false,
                "parsing": false
            }
        }
    };
}