# Mona AI n8n Nodes

This package provides n8n community nodes for integrating with Mona AI's services. It includes nodes for AI agent interactions, document parsing, database operations, profile matching, and API key management.

## Installation

To install this community node package in n8n:

```bash
npm install n8n-nodes-mona-ai
```

After installation, restart your n8n instance. The Mona AI nodes will be available in the n8n node palette.

## Authentication

This package provides two credential types for authentication with Mona AI services:

### Mona API Credentials
Used by most nodes that require full API access.

**Required fields:**
- **User ID**: Your Mona AI user identifier
- **API Key**: Your Mona AI API key for authentication

### User ID API Credentials
Used by nodes that only require user identification.

**Required fields:**
- **User ID**: Your Mona AI user identifier

### Getting API Credentials

1. Contact Mona AI support at support@mona-ai.de to obtain your User ID
2. Use the "Generate API Key Node" to create an API key with appropriate permissions
3. For detailed API documentation, visit the [Mona AI Postman workspace](https://www.postman.com/teammona/team-mona-s-workspace/overview)

## Available Nodes

### Agent Nodes

#### Get Agents Response
Interact with Mona AI's intelligent agents for conversational AI responses.

**Features:**
- Multi-language support (English, German, French, Italian)
- Session-based conversations
- Customizable prompts
- Real-time agent responses

**Use cases:**
- Customer service automation
- Interactive chatbots
- AI-powered assistance workflows

### API Management Nodes

#### Generate API Key Node
Create new API keys with specific permissions for Mona AI services.

**Features:**
- Comprehensive permission management
- Automatic key generation
- Secure credential handling

**Permissions included:**
- Read/Push Applicants and Job Offers
- Agent execution and management
- Data operations
- Workflow execution
- Parsing capabilities
- Analytics and communication access

### Database Nodes

The package includes 11 database nodes for comprehensive data management:

#### Data Retrieval Nodes
- **Get Agents From Database**: Retrieve agent configurations
- **Get Applicants From Database**: Fetch applicant records from the applicants collection
- **Get Applicants From Database For Platform**: Platform-specific applicant data
- **Get Finished Applicants From Database**: Completed applicant profiles
- **Get Job Offers From Database**: Retrieve job postings
- **Get Matches From Database For Platform**: Platform-specific matching results
- **Get Matching Results**: Comprehensive matching data
- **Get Sales Correspondence From Database**: Sales communication records
- **Get Tools From Agent**: Agent-specific tool configurations

#### Data Management Nodes
- **Push Applicants To Database**: Add new applicant records to emailapplicants collection
- **Push Job Offers To Database**: Create new job postings

### Matching Nodes

#### Profile Matching Operations
- **Get Profiles Sent**: Retrieve sent profile information
- **Get Profiles Sent By Applicant ID**: Applicant-specific profile data

**Use cases:**
- Recruitment matching workflows
- Profile distribution tracking
- Candidate-job alignment analysis

### Parsing Nodes

#### Extract Information From CV
Advanced AI-powered document parsing for CV/resume analysis.

**Features:**
- Multi-format document support
- Multi-language processing (English, German, French, Italian)
- Structured data extraction
- Customer-specific processing

**Required parameters:**
- File URL and name
- Applicant ID
- Customer number
- Target language

#### Any Document To Text
Convert various document formats to structured text.

**Use cases:**
- Document digitization
- Content extraction workflows
- Text analysis preparation

## Usage Examples

### Basic Agent Interaction

```json
{
  "sessionId": "unique-session-123",
  "prompt": "Hello, I need help with my job application",
  "languageCode": "EN-GB"
}
```

### CV Parsing Workflow

```json
{
  "fileUrl": "https://example.com/cv.pdf",
  "fileName": "john_doe_cv.pdf",
  "applicantId": "applicant_123",
  "customerNumber": "customer_456",
  "targetLang": "EN-GB"
}
```

### API Key Generation

The Generate API Key Node automatically creates keys with comprehensive permissions for all Mona AI services.

## API Endpoints

All nodes connect to the Mona AI cloud API at `https://api.mona-ai.cloud/` with the following main endpoints:

- `/agent/getAgentResponse` - Agent interactions
- `/auth/generateApiKey` - API key management
- `/parsing/parseCV` - Document parsing
- Various database endpoints for data operations

## Requirements

- n8n version compatible with community nodes
- Node.js 20.15 or higher
- Valid Mona AI account and credentials

## Support

For technical support and API documentation:
- Email: support@mona-ai.de
- API Documentation: [Postman Workspace](https://www.postman.com/teammona/team-mona-s-workspace/overview)

## License

MIT License - see [LICENSE.md](LICENSE.md) for details.

## Contributing

This package is maintained by Mona AI GmbH. For contributions or issues, please contact the development team.

---

**Repository**: [MONA-AI-GmbH/n8n-module](https://github.com/MONA-AI-GmbH/n8n-module)  
**Author**: Mona AI GmbH  
**Version**: 0.1.5
