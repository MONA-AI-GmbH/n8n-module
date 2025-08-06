import { INodeProperties, INodePropertyOptions} from 'n8n-workflow';

const getAgentsFromDatabaseOptions: INodePropertyOptions[] = [ 
    {
        name: 'Get Agents From Database',
        value: 'getAgentsFromDatabase',
        action: 'Get agents from database',
        description: 'Get the agents information from the database',
        routing: {
            request: {
                method: 'POST',
                url: 'https://api.mona-ai.cloud/database/getAgentsFromDatabase',
                body: {
                    "uid": '={{$credentials.uid}}',
                    "apiKey": "={{$credentials.apiKey}}",
                    "typeOfAgent": "monari",
                    "isActive": true,
                }
            }
        }
    },
]

const getApplicantsFromDatabaseOptions: INodePropertyOptions[] = [
    {
        name: 'Get Applicants From Database',
        value: 'getApplicantsFromDatabase',
        action: 'Get applicants from database',
        description: 'Get the applicants from the database',
        routing: {
            request: {
                method: 'POST',
                url: 'https://api.mona-ai.cloud/database/getApplicantsFromDatabase',
                body: {
                    "uid": '={{$credentials.uid}}',
                    "apiKey": "={{$credentials.apiKey}}",
                }
            }
        }
    },
]

const getFinishedApplicantsFromDatabaseOptions: INodePropertyOptions[] = [
    {
        name: 'Get Finished Applicants From Database',
        value: 'getFinishedApplicantsFromDatabase',
        action: 'Get finished applicants from database',
        description: 'Get the finished applicants from the database who has finished the interview process',
        routing: {
            request: {
                method: 'POST',
                url: 'https://api.mona-ai.cloud/database/getFinishedApplicantsFromDatabase',
                body: {
                    "uid": '={{$credentials.uid}}',
                    "apiKey": "={{$credentials.apiKey}}",
                }
            }
        }
    },
]

const getJobOffersFromDatabaseOptions: INodePropertyOptions[] = [
    {
        name: 'Get Job Offers From Database',
        value: 'getJobOffersFromDatabase',
        action: 'Get job offers from database',
        description: 'Get the job offers from the database',
        routing: {
            request: {
                method: 'POST',
                url: 'https://api.mona-ai.cloud/database/getJobOffersFromDatabase',
                body: {
                    "uid": '={{$credentials.uid}}',
                    "apiKey": "={{$credentials.apiKey}}",
                }
            }
        }
    },
]

const getMatchingResultsOptions: INodePropertyOptions[] = [
    {
        name: 'Get Matching Results',
        value: 'getMatchingResults',
        action: 'Get matching results',
        description: 'Get the matching results',
        routing: {
            request: {
                method: 'POST',
                url: 'https://api.mona-ai.cloud/database/getMatchingResults',
                body: {
                    "uid": '={{$credentials.uid}}',
                    "paginationToken": null,
                    "apiKey": "={{$credentials.apiKey}}",
                }
            }
        }
    },
]

const getSalesCorrespondenceFromDatabaseOptions: INodePropertyOptions[] = [
    {
        name: 'Get Sales Correspondence From Database',
        value: 'getSalesCorrespondenceFromDatabase',
        action: 'Get sales correspondence from database',
        description: 'Get the sales correspondence from the database',
        routing: {
            request: {
                method: 'POST',
                url: 'https://api.mona-ai.cloud/database/getSalesCorrespondenceFromDatabase',
                body: {
                    "uid": '={{$credentials.uid}}',
                    "paginationToken": null,
                    "platform": "web"
                }
            }
        }
    },
]

const getToolsFromAgentOptions: INodePropertyOptions[] = [
    {
        name: 'Get Tools From Agent',
        value: 'getToolsFromAgent',
        action: 'Get tools from agent',
        description: 'Get the tools that can be used by the agents',
        routing: {
            request: {
                method: 'POST',
                url: 'https://api.mona-ai.cloud/database/getToolsFromAgent',
                body: {
                    "uid": '={{$credentials.uid}}',
                    "apiKey": "={{$credentials.apiKey}}",
                    "agentId": "={{$parameter.agentId}}",
                }
            }
        }
    },
]

const pushApplicantsToDatabaseOptions: INodePropertyOptions[] = [
    {
        name: 'Push Applicants to Database',
        value: 'pushApplicantsToDatabase',
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

const pushJobOffersToDatabaseOptions: INodePropertyOptions[] = [
    {
        name: 'Push Job Offers to Database',
        value: 'pushJobOffersToDatabase',
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

export const Database: INodeProperties[] = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: {
                resource: [
                    'Database'
                ],
            }
        },
        default: '',
        options: [
            ...getAgentsFromDatabaseOptions,
            ...getApplicantsFromDatabaseOptions,
            ...getFinishedApplicantsFromDatabaseOptions,
            ...getJobOffersFromDatabaseOptions,
            ...getMatchingResultsOptions,
            ...getSalesCorrespondenceFromDatabaseOptions,
            ...getToolsFromAgentOptions,
            ...pushApplicantsToDatabaseOptions,
            ...pushJobOffersToDatabaseOptions,
        ],
    },
]