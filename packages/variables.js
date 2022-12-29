const tools = {
    "workflow automation tool": [
        {
            "label": "N8N",
            "image": "/static/assets/img/tool/n8n.png"
        },
        {
            "label": "Make <small>(Formerly integromat)</small>",
            "image": "/static/assets/img/tool/make.png"
        },
        {
            "label": "Zapier",
            "image": "/static/assets/img/tool/zapier.png"
        }
    ],
    "CRM": [
        {
            "label": "Salesforce",
            "image": "/static/assets/img/tool/salesforce.png"
        },
        {
            "label": "Hubspot",
            "image": "/static/assets/img/tool/hubspot.png"
        },
        {
            "label": "Zoho CRM",
            "image": "/static/assets/img/tool/zohocrm.jpg"
        }
    ],
    "Database": [
        {
            "label": "Google Sheets",
            "image": "/static/assets/img/tool/gsheet.png"
        },
        {
            "label": "Airtable",
            "image": "/static/assets/img/tool/airtable.jpeg"
        }
    ],
    "Artificial Intelligence": [
        {
            "label": "Open AI",
            "image": "/static/assets/img/tool/openai.png"
        },
        {
            "label": "Rytr",
            "image": "/static/assets/img/tool/rytr.png"
        },
        {
            "label": "Texta",
            "image": "/static/assets/img/tool/texta.png"
        }
    ],
    "Marketing": [
        {
            "label": "Lemlist",
            "image": "/static/assets/img/tool/lemlist.png"
        },
        {
            "label": "Mailchimp",
            "image": "/static/assets/img/tool/mailchimp.jpg"
        }
    ],
    "Programming Language": [
        {
            "label": "Python",
            "image": "/static/assets/img/tool/python.png"
        },
        {
            "label": "JavaScript",
            "image": "/static/assets/img/tool/js.png"
        },
        {
            "label": "HTML",
            "image": "/static/assets/img/tool/html.png"
        },
        {
            "label": "CSS",
            "image": "/static/assets/img/tool/css.png"
        }
    ],
}

const usecase = [
    {
        name: "Connect your CRM with external tools",
        tools: "Salesforce / Hubspot, Integromat / Zapier",
        description: "Extend the capabilities of your CRM to make sure youre not missing any potential clients."
    },
    {
        name: "Automatic content generation",
        tools: "Integromat, Google Sheet, Rytr",
        description: "Automatically SEO friendly content to increase your website traffic."
    },
    {
        name: "Create API from your favourite tool",
        tools: "Integromat",
        description: "We can convert the tools you are already subscribed to and make an API from it."
    },
    {
        name: "Automatic Lead generation",
        tools: "Integromat, Python, Google Sheet",
        description: "Using python scraper that is launched daily, you can have daily notification for new leads."
    },
    {
        name: "Bulk data scraping",
        tools: "Python, Google sheets",
        description: "Scrape any website for analysis or for a campaign."
    },
    {
        name: "Lead management stack",
        tools: "Integromat, Airtable",
        description: "Manage your leads in an organized way to make them convert quickly."
    },
    {
        name: "Automate service stack",
        tools: "Integromat, Stripe",
        description: "Are you an individual providing service? We can help you set up your payment system and service funnels."
    },
]

module.exports = {
    tools,
    usecase
}