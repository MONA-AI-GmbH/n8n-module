import { INodeProperties } from "n8n-workflow"

const fileUrlProperty: INodeProperties[] = [
    {
        displayName: 'File URL',
        name: 'fileUrl',
        type: 'string',
        default: '',
        description: 'Enter your file URL here',
        displayOptions: {
            show: {
                resource: [
                    'Parsing'
                ],
                operation: [
                    'anyDocumentToText',
                    'parseCV'
                ]
            }
        },
        required: true,
    }
]
const fileNameProperty: INodeProperties[] = [
    {
        displayName: 'File Name',
        name: 'fileName',
        type: 'string',
        default: '',
        description: 'Enter your file name here',
        displayOptions: {
            show: {
                resource: [
                    'Parsing'
                ],
                operation: [
                    'anyDocumentToText',
                    'parseCV'
                ]
            }
        },
        required: true,
    }
]
const applicantIdProperty: INodeProperties[] = [
    {
        displayName: 'Applicant ID',
        name: 'applicantId',
        type: 'string',
        default: '',
        required: true,
        placeholder: 'Enter your applicant ID here',
        displayOptions: {
            show: {
                resource: [
                    'Parsing',
                    'Matching'
                ],
                operation: [
                    'parseCV',
                    'getProfilesSentByApplicantId'
                ]
            }
        },
    }
]
const customerNumberProperty: INodeProperties[] = [
    {
        displayName: 'Customer Number',
        name: 'customerNumber',
        type: 'string',
        default: '',
        required: true,
        placeholder: 'Enter your customer number here',
        displayOptions: {
            show: {
                resource: [
                    'Parsing'
                ],
                operation: [
                    'parseCV'
                ]
            }
        },
    }
]
const targetLangProperty: INodeProperties[] = [
    {
        displayName: 'Language',
        name: 'targetLang',
        type: 'options',
        default: 'EN-GB',
        description: 'The language code for the response, e.g., EN, DE, FR, etc',
        placeholder: 'Select a language',
        required: true,
        options: [
            {
                name: 'English',
                value: 'EN-GB',
            },
            {
                name: 'German',
                value: 'DE-DE',
            },
            {
                name: 'French',
                value: 'FR-FR',
            },
            {
                name: 'Italian',
                value: 'IT-IT',
            }
        ],
        displayOptions: {
            show: {
                resource: [
                    'Parsing'
                ],
                operation: [
                    'parseCV'
                ]
            }
        }
    }
]
const agentIdProperty: INodeProperties[] = [
    {
        displayName: 'Agent ID',
        name: 'agentId',
        type: 'string',
        default: '',
        required: true,

        placeholder: 'Enter your agent ID here',
        displayOptions: {
            show: {
                resource: [
                    'Database'
                ],
                operation: [
                    'getToolsFromAgent',
                ],
            }
        }
    },
]

const applicantDetailsProperty: INodeProperties[] = [
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
                resource: [
                    'Database'
                ],
                operation: [
                    'pushApplicantsToDatabase'
                ]
            }
        }
    }
]

const jobOfferDetailsProperty: INodeProperties[] = [
    {
        displayName: 'Job Offer Details',
        name: 'jobOffers',
        type: 'fixedCollection',
        default: {},
        typeOptions: {
            multipleValues: true,
        },
        description: 'Add multiple job offers to push to the database',
        options: [
            {
                displayName: 'Job Offer',
                name: 'offer',
                values: [
                    {
                        displayName: 'Job Title',
                        name: 'title',
                        type: 'string',
                        default: '',
                        required: true,
                        description: 'The title of the job offer',
                        placeholder: 'Enter the job title here'
                    },
                    {
                        displayName: 'Company Name',
                        name: 'company',
                        type: 'string',
                        default: '',
                        required: true,
                        description: 'The name of the company offering the job',
                        placeholder: 'Enter the company name here'
                    },
                    {
                        displayName: 'Location',
                        name: 'location',
                        type: 'string',
                        default: '',
                        required: true,
                        description: 'The location of the job offer',
                        placeholder: 'Enter the location here'
                    },
                    {
                        displayName: 'Description',
                        name: 'description',
                        type: 'string',
                        default: '',
                        required: true,
                        description: 'The description of the job offer',
                        placeholder: 'Enter the description here'
                    },
                ]
            }
        ],
        displayOptions: {
            show: {
                resource: [
                    'Database'
                ],
                operation: ['pushJobOffersToDatabase']
            }
        }
    }
]

const sessionIdProperty: INodeProperties[] = [
    {
        displayName: 'Session ID',
        name: 'sessionId',
        type: 'string',
        default: '',
        required: true,

        placeholder: 'Enter your session ID here',
        displayOptions: {
            show: {
                resource: [
                    'Agents'
                ],
                operation: [
                    'getAgentsResponse',
                ],
            }
        }
    },
]
const promptProperty: INodeProperties[] = [
    {
        displayName: 'Prompt',
        name: 'prompt',
        type: 'string',
        default: '',
        description: 'The prompt for the agent chat response',
        required: true,
        placeholder: 'Enter your prompt here',
        displayOptions: {
            show: {
                resource: [
                    'Agents'
                ],
                operation: [
                    'getAgentsResponse',
                ],
            }
        },
    },
]
const languageCodeProperty: INodeProperties[] = [
    {
        displayName: 'Language',
        name: 'languageCode',
        type: 'options',
        default: 'EN-GB',
        description: 'The language code for the agent chat response, e.g., EN, DE, FR, etc',
        placeholder: 'Select a language',
        required: true,
        displayOptions: {
            show: {
                resource: [
                    'Agents'
                ],
                operation: [
                    'getAgentsResponse',
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
]

export const Properties: INodeProperties[] = [
    ...fileUrlProperty,
    ...fileNameProperty,
    ...applicantIdProperty,
    ...customerNumberProperty,
    ...targetLangProperty,
    ...agentIdProperty,
    ...applicantDetailsProperty,
    ...jobOfferDetailsProperty,
    ...sessionIdProperty,
    ...promptProperty,
    ...languageCodeProperty
]