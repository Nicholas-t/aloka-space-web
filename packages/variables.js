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

const pageSitemap = [
    {
        "slug": "human-resource",
        "main": "Human Resource",
        "metaTitle": "Let's Automate Your Human Resource Tasks - ALOKA Space Automation Agency",
        "metaDescription": "Looking for an automation agency to help you automate your Human Resource processes you can save precious time? Look no further than our team of experts! We can help you design, implement, and manage all of your automation needs. Contact us today to learn more about our services!",
        "heroTitle": "Let's Automate Your Human Resource Tasks",
        "heroSubTitle": "We build personalized digital process automation that can scale to your needs.",
        "childPage": [
            {
                "slug": "freelance-management",
                "main": "Freelance management",
                "metaTitle": "Let's Automate Your Freelance management Tasks - ALOKA Space Automation Agency",
                "metaDescription": "Looking for an automation agency to help you automate your Freelance management processes you can save precious time? Look no further than our team of experts! We can help you design, implement, and manage all of your automation needs. Contact us today to learn more about our services!",
                "heroTitle": "Let's Automate Your Freelance management Tasks",
                "heroSubTitle": "We build personalized digital process automation that can scale to your needs."
            },
            {
                "slug": "payroll-administration",
                "main": "Payroll Administration",
                "metaTitle": "Let's Automate Your Payroll Administration Tasks - ALOKA Space Automation Agency",
                "metaDescription": "Looking for an automation agency to help you automate your Payroll Administration processes you can save precious time? Look no further than our team of experts! We can help you design, implement, and manage all of your automation needs. Contact us today to learn more about our services!",
                "heroTitle": "Let's Automate Your Payroll Administration Tasks",
                "heroSubTitle": "We build personalized digital process automation that can scale to your needs."
            }
        ]
    },
    {
        "slug": "accounting",
        "main": "Accounting",
        "metaTitle": "Let's Automate Your Accounting Tasks - ALOKA Space Automation Agency",
        "metaDescription": "Looking for an automation agency to help you automate your Accounting processes you can save precious time? Look no further than our team of experts! We can help you design, implement, and manage all of your automation needs. Contact us today to learn more about our services!",
        "heroTitle": "Let's Automate Your Accounting Tasks",
        "heroSubTitle": "We build personalized digital process automation that can scale to your needs.",
        "childPage": [
            {
                "slug": "invoice-generation",
                "main": "Invoice Generation",
                "metaTitle": "Let's Automate Your Invoice Generation Tasks - ALOKA Space Automation Agency",
                "metaDescription": "Looking for an automation agency to help you automate your Invoice Generation processes you can save precious time? Look no further than our team of experts! We can help you design, implement, and manage all of your automation needs. Contact us today to learn more about our services!",
                "heroTitle": "Let's Automate Your Invoice Generation Tasks",
                "heroSubTitle": "We build personalized digital process automation that can scale to your needs."
            }
        ]
    },
    {
        "slug": "crm",
        "main": "CRM",
        "metaTitle": "Let's Automate Your CRM Tasks - ALOKA Space Automation Agency",
        "metaDescription": "Looking for an automation agency to help you automate your CRM processes you can save precious time? Look no further than our team of experts! We can help you design, implement, and manage all of your automation needs. Contact us today to learn more about our services!",
        "heroTitle": "Let's Automate Your CRM Tasks",
        "heroSubTitle": "We build personalized digital process automation that can scale to your needs.",
        "childPage": [
            {
                "slug": "affiliate-marketing",
                "main": "Affiliate Marketing",
                "metaTitle": "Let's Automate Your Affiliate Marketing Tasks - ALOKA Space Automation Agency",
                "metaDescription": "Looking for an automation agency to help you automate your Affiliate Marketing processes you can save precious time? Look no further than our team of experts! We can help you design, implement, and manage all of your automation needs. Contact us today to learn more about our services!",
                "heroTitle": "Let's Automate Your Affiliate Marketing Tasks",
                "heroSubTitle": "We build personalized digital process automation that can scale to your needs."
            },
            {
                "slug": "after-sales-activity",
                "main": "After-sales Activity",
                "metaTitle": "Let's Automate Your After-sales Activity Tasks - ALOKA Space Automation Agency",
                "metaDescription": "Looking for an automation agency to help you automate your After-sales Activity processes you can save precious time? Look no further than our team of experts! We can help you design, implement, and manage all of your automation needs. Contact us today to learn more about our services!",
                "heroTitle": "Let's Automate Your After-sales Activity Tasks",
                "heroSubTitle": "We build personalized digital process automation that can scale to your needs."
            }
        ]
    },
    {
        "slug": "communication",
        "main": "Communication",
        "metaTitle": "Let's Automate Your Communication Tasks - ALOKA Space Automation Agency",
        "metaDescription": "Looking for an automation agency to help you automate your Communication processes you can save precious time? Look no further than our team of experts! We can help you design, implement, and manage all of your automation needs. Contact us today to learn more about our services!",
        "heroTitle": "Let's Automate Your Communication Tasks",
        "heroSubTitle": "We build personalized digital process automation that can scale to your needs.",
        "childPage": [
            {
                "slug": "online-advertising",
                "main": "Online Advertising",
                "metaTitle": "Let's Automate Your Online Advertising Tasks - ALOKA Space Automation Agency",
                "metaDescription": "Looking for an automation agency to help you automate your Online Advertising processes you can save precious time? Look no further than our team of experts! We can help you design, implement, and manage all of your automation needs. Contact us today to learn more about our services!",
                "heroTitle": "Let's Automate Your Online Advertising Tasks",
                "heroSubTitle": "We build personalized digital process automation that can scale to your needs."
            }
        ]
    },
    {
        "slug": "e-commerce",
        "main": "E-commerce",
        "metaTitle": "Let's Automate Your E-commerce Tasks - ALOKA Space Automation Agency",
        "metaDescription": "Looking for an automation agency to help you automate your E-commerce processes you can save precious time? Look no further than our team of experts! We can help you design, implement, and manage all of your automation needs. Contact us today to learn more about our services!",
        "heroTitle": "Let's Automate Your E-commerce Tasks",
        "heroSubTitle": "We build personalized digital process automation that can scale to your needs.",
        "childPage": [
            {
                "slug": "apparel-e-commerce",
                "main": "Apparel E-commerce",
                "metaTitle": "Let's Automate Your Apparel E-commerce Tasks - ALOKA Space Automation Agency",
                "metaDescription": "Looking for an automation agency to help you automate your Apparel E-commerce processes you can save precious time? Look no further than our team of experts! We can help you design, implement, and manage all of your automation needs. Contact us today to learn more about our services!",
                "heroTitle": "Let's Automate Your Apparel E-commerce Tasks",
                "heroSubTitle": "We build personalized digital process automation that can scale to your needs."
            },
            {
                "slug": "tech-e-commerce",
                "main": "Tech E-commerce",
                "metaTitle": "Let's Automate Your Tech E-commerce Tasks - ALOKA Space Automation Agency",
                "metaDescription": "Looking for an automation agency to help you automate your Tech E-commerce processes you can save precious time? Look no further than our team of experts! We can help you design, implement, and manage all of your automation needs. Contact us today to learn more about our services!",
                "heroTitle": "Let's Automate Your Tech E-commerce Tasks",
                "heroSubTitle": "We build personalized digital process automation that can scale to your needs."
            },
            {
                "slug": "merchandise-design",
                "main": "Merchandise Design",
                "metaTitle": "Let's Automate Your Merchandise Design Tasks - ALOKA Space Automation Agency",
                "metaDescription": "Looking for an automation agency to help you automate your Merchandise Design processes you can save precious time? Look no further than our team of experts! We can help you design, implement, and manage all of your automation needs. Contact us today to learn more about our services!",
                "heroTitle": "Let's Automate Your Merchandise Design Tasks",
                "heroSubTitle": "We build personalized digital process automation that can scale to your needs."
            },
            {
                "slug": "online-store",
                "main": "Online Store",
                "metaTitle": "Let's Automate Your Online Store Tasks - ALOKA Space Automation Agency",
                "metaDescription": "Looking for an automation agency to help you automate your Online Store processes you can save precious time? Look no further than our team of experts! We can help you design, implement, and manage all of your automation needs. Contact us today to learn more about our services!",
                "heroTitle": "Let's Automate Your Online Store Tasks",
                "heroSubTitle": "We build personalized digital process automation that can scale to your needs."
            },
            {
                "slug": "purchase-order",
                "main": "Purchase Order",
                "metaTitle": "Let's Automate Your Purchase Order Tasks - ALOKA Space Automation Agency",
                "metaDescription": "Looking for an automation agency to help you automate your Purchase Order processes you can save precious time? Look no further than our team of experts! We can help you design, implement, and manage all of your automation needs. Contact us today to learn more about our services!",
                "heroTitle": "Let's Automate Your Purchase Order Tasks",
                "heroSubTitle": "We build personalized digital process automation that can scale to your needs."
            }
        ]
    },
    {
        "slug": "email-campaign",
        "main": "Email Campaign",
        "metaTitle": "Let's Automate Your Email Campaign Tasks - ALOKA Space Automation Agency",
        "metaDescription": "Looking for an automation agency to help you automate your Email Campaign processes you can save precious time? Look no further than our team of experts! We can help you design, implement, and manage all of your automation needs. Contact us today to learn more about our services!",
        "heroTitle": "Let's Automate Your Email Campaign Tasks",
        "heroSubTitle": "We build personalized digital process automation that can scale to your needs.",
        "childPage": [
            {
                "slug": "cold-marketing",
                "main": "Cold Marketing",
                "metaTitle": "Let's Automate Your Cold Marketing Tasks - ALOKA Space Automation Agency",
                "metaDescription": "Looking for an automation agency to help you automate your Cold Marketing processes you can save precious time? Look no further than our team of experts! We can help you design, implement, and manage all of your automation needs. Contact us today to learn more about our services!",
                "heroTitle": "Let's Automate Your Cold Marketing Tasks",
                "heroSubTitle": "We build personalized digital process automation that can scale to your needs."
            },
            {
                "slug": "in-bound-campaign",
                "main": "In-Bound Campaign",
                "metaTitle": "Let's Automate Your In-Bound Campaign Tasks - ALOKA Space Automation Agency",
                "metaDescription": "Looking for an automation agency to help you automate your In-Bound Campaign processes you can save precious time? Look no further than our team of experts! We can help you design, implement, and manage all of your automation needs. Contact us today to learn more about our services!",
                "heroTitle": "Let's Automate Your In-Bound Campaign Tasks",
                "heroSubTitle": "We build personalized digital process automation that can scale to your needs."
            },
            {
                "slug": "out-bound-campaign",
                "main": "Out-Bound Campaign",
                "metaTitle": "Let's Automate Your Out-Bound Campaign Tasks - ALOKA Space Automation Agency",
                "metaDescription": "Looking for an automation agency to help you automate your Out-Bound Campaign processes you can save precious time? Look no further than our team of experts! We can help you design, implement, and manage all of your automation needs. Contact us today to learn more about our services!",
                "heroTitle": "Let's Automate Your Out-Bound Campaign Tasks",
                "heroSubTitle": "We build personalized digital process automation that can scale to your needs."
            }
        ]
    },
    {
        "slug": "administration",
        "main": "Administration",
        "metaTitle": "Let's Automate Your Administration Tasks - ALOKA Space Automation Agency",
        "metaDescription": "Looking for an automation agency to help you automate your Administration processes you can save precious time? Look no further than our team of experts! We can help you design, implement, and manage all of your automation needs. Contact us today to learn more about our services!",
        "heroTitle": "Let's Automate Your Administration Tasks",
        "heroSubTitle": "We build personalized digital process automation that can scale to your needs.",
        "childPage": [
            {
                "slug": "finance",
                "main": "Finance",
                "metaTitle": "Let's Automate Your Finance Tasks - ALOKA Space Automation Agency",
                "metaDescription": "Looking for an automation agency to help you automate your Finance processes you can save precious time? Look no further than our team of experts! We can help you design, implement, and manage all of your automation needs. Contact us today to learn more about our services!",
                "heroTitle": "Let's Automate Your Finance Tasks",
                "heroSubTitle": "We build personalized digital process automation that can scale to your needs."
            }
        ]
    },
    {
        "slug": "lead-generation",
        "main": "Lead Generation",
        "metaTitle": "Let's Automate Your Lead Generation Tasks - ALOKA Space Automation Agency",
        "metaDescription": "Looking for an automation agency to help you automate your Lead Generation processes you can save precious time? Look no further than our team of experts! We can help you design, implement, and manage all of your automation needs. Contact us today to learn more about our services!",
        "heroTitle": "Let's Automate Your Lead Generation Tasks",
        "heroSubTitle": "We build personalized digital process automation that can scale to your needs.",
        "childPage": [
            {
                "slug": "b2b-leads-generation",
                "main": "B2B Leads Generation",
                "metaTitle": "Let's Automate Your B2B Leads Generation Tasks - ALOKA Space Automation Agency",
                "metaDescription": "Looking for an automation agency to help you automate your B2B Leads Generation processes you can save precious time? Look no further than our team of experts! We can help you design, implement, and manage all of your automation needs. Contact us today to learn more about our services!",
                "heroTitle": "Let's Automate Your B2B Leads Generation Tasks",
                "heroSubTitle": "We build personalized digital process automation that can scale to your needs."
            },
            {
                "slug": "b2c-leads-generation",
                "main": "B2C Leads Generation",
                "metaTitle": "Let's Automate Your B2C Leads Generation Tasks - ALOKA Space Automation Agency",
                "metaDescription": "Looking for an automation agency to help you automate your B2C Leads Generation processes you can save precious time? Look no further than our team of experts! We can help you design, implement, and manage all of your automation needs. Contact us today to learn more about our services!",
                "heroTitle": "Let's Automate Your B2C Leads Generation Tasks",
                "heroSubTitle": "We build personalized digital process automation that can scale to your needs."
            },
            {
                "slug": "omnichannel-marketing",
                "main": "Omnichannel Marketing",
                "metaTitle": "Let's Automate Your Omnichannel Marketing Tasks - ALOKA Space Automation Agency",
                "metaDescription": "Looking for an automation agency to help you automate your Omnichannel Marketing processes you can save precious time? Look no further than our team of experts! We can help you design, implement, and manage all of your automation needs. Contact us today to learn more about our services!",
                "heroTitle": "Let's Automate Your Omnichannel Marketing Tasks",
                "heroSubTitle": "We build personalized digital process automation that can scale to your needs."
            }
        ]
    },
    {
        "slug": "content-generation",
        "main": "Content Generation",
        "metaTitle": "Let's Automate Your Content Generation Tasks - ALOKA Space Automation Agency",
        "metaDescription": "Looking for an automation agency to help you automate your Content Generation processes you can save precious time? Look no further than our team of experts! We can help you design, implement, and manage all of your automation needs. Contact us today to learn more about our services!",
        "heroTitle": "Let's Automate Your Content Generation Tasks",
        "heroSubTitle": "We build personalized digital process automation that can scale to your needs.",
        "childPage": [
            {
                "slug": "keyword-management",
                "main": "Keyword Management",
                "metaTitle": "Let's Automate Your Keyword Management Tasks - ALOKA Space Automation Agency",
                "metaDescription": "Looking for an automation agency to help you automate your Keyword Management processes you can save precious time? Look no further than our team of experts! We can help you design, implement, and manage all of your automation needs. Contact us today to learn more about our services!",
                "heroTitle": "Let's Automate Your Keyword Management Tasks",
                "heroSubTitle": "We build personalized digital process automation that can scale to your needs."
            },
            {
                "slug": "digital-content-marketing",
                "main": "Digital Content Marketing",
                "metaTitle": "Let's Automate Your Digital Content Marketing Tasks - ALOKA Space Automation Agency",
                "metaDescription": "Looking for an automation agency to help you automate your Digital Content Marketing processes you can save precious time? Look no further than our team of experts! We can help you design, implement, and manage all of your automation needs. Contact us today to learn more about our services!",
                "heroTitle": "Let's Automate Your Digital Content Marketing Tasks",
                "heroSubTitle": "We build personalized digital process automation that can scale to your needs."
            },
            {
                "slug": "copywriting",
                "main": "Copywriting",
                "metaTitle": "Let's Automate Your Copywriting Tasks - ALOKA Space Automation Agency",
                "metaDescription": "Looking for an automation agency to help you automate your Copywriting processes you can save precious time? Look no further than our team of experts! We can help you design, implement, and manage all of your automation needs. Contact us today to learn more about our services!",
                "heroTitle": "Let's Automate Your Copywriting Tasks",
                "heroSubTitle": "We build personalized digital process automation that can scale to your needs."
            }
        ]
    },
    {
        "slug": "seo",
        "main": "SEO",
        "metaTitle": "Let's Automate Your SEO Tasks - ALOKA Space Automation Agency",
        "metaDescription": "Looking for an automation agency to help you automate your SEO processes you can save precious time? Look no further than our team of experts! We can help you design, implement, and manage all of your automation needs. Contact us today to learn more about our services!",
        "heroTitle": "Let's Automate Your SEO Tasks",
        "heroSubTitle": "We build personalized digital process automation that can scale to your needs.",
        "childPage": [
            {
                "slug": "content-generation",
                "main": "Content Generation",
                "metaTitle": "Let's Automate Your Content Generation Tasks - ALOKA Space Automation Agency",
                "metaDescription": "Looking for an automation agency to help you automate your Content Generation processes you can save precious time? Look no further than our team of experts! We can help you design, implement, and manage all of your automation needs. Contact us today to learn more about our services!",
                "heroTitle": "Let's Automate Your Content Generation Tasks",
                "heroSubTitle": "We build personalized digital process automation that can scale to your needs."
            }
        ]
    },
    {
        "slug": "project-management",
        "main": "Project Management",
        "metaTitle": "Let's Automate Your Project Management Tasks - ALOKA Space Automation Agency",
        "metaDescription": "Looking for an automation agency to help you automate your Project Management processes you can save precious time? Look no further than our team of experts! We can help you design, implement, and manage all of your automation needs. Contact us today to learn more about our services!",
        "heroTitle": "Let's Automate Your Project Management Tasks",
        "heroSubTitle": "We build personalized digital process automation that can scale to your needs.",
        "childPage": [
            {
                "slug": "performance-management",
                "main": "Performance Management",
                "metaTitle": "Let's Automate Your Performance Management Tasks - ALOKA Space Automation Agency",
                "metaDescription": "Looking for an automation agency to help you automate your Performance Management processes you can save precious time? Look no further than our team of experts! We can help you design, implement, and manage all of your automation needs. Contact us today to learn more about our services!",
                "heroTitle": "Let's Automate Your Performance Management Tasks",
                "heroSubTitle": "We build personalized digital process automation that can scale to your needs."
            },
            {
                "slug": "ticketing-management",
                "main": "Ticketing Management",
                "metaTitle": "Let's Automate Your Ticketing Management Tasks - ALOKA Space Automation Agency",
                "metaDescription": "Looking for an automation agency to help you automate your Ticketing Management processes you can save precious time? Look no further than our team of experts! We can help you design, implement, and manage all of your automation needs. Contact us today to learn more about our services!",
                "heroTitle": "Let's Automate Your Ticketing Management Tasks",
                "heroSubTitle": "We build personalized digital process automation that can scale to your needs."
            }
        ]
    },
    {
        "slug": "social-media",
        "main": "Social Media",
        "metaTitle": "Let's Automate Your Social Media Tasks - ALOKA Space Automation Agency",
        "metaDescription": "Looking for an automation agency to help you automate your Social Media processes you can save precious time? Look no further than our team of experts! We can help you design, implement, and manage all of your automation needs. Contact us today to learn more about our services!",
        "heroTitle": "Let's Automate Your Social Media Tasks",
        "heroSubTitle": "We build personalized digital process automation that can scale to your needs.",
        "childPage": [
            {
                "slug": "social-media-content-scheduling",
                "main": "Social Media Content Scheduling",
                "metaTitle": "Let's Automate Your Social Media Content Scheduling Tasks - ALOKA Space Automation Agency",
                "metaDescription": "Looking for an automation agency to help you automate your Social Media Content Scheduling processes you can save precious time? Look no further than our team of experts! We can help you design, implement, and manage all of your automation needs. Contact us today to learn more about our services!",
                "heroTitle": "Let's Automate Your Social Media Content Scheduling Tasks",
                "heroSubTitle": "We build personalized digital process automation that can scale to your needs."
            },
            {
                "slug": "social-media-content-integration",
                "main": "Social Media Content Integration",
                "metaTitle": "Let's Automate Your Social Media Content Integration Tasks - ALOKA Space Automation Agency",
                "metaDescription": "Looking for an automation agency to help you automate your Social Media Content Integration processes you can save precious time? Look no further than our team of experts! We can help you design, implement, and manage all of your automation needs. Contact us today to learn more about our services!",
                "heroTitle": "Let's Automate Your Social Media Content Integration Tasks",
                "heroSubTitle": "We build personalized digital process automation that can scale to your needs."
            }
        ]
    },
    {
        "slug": "business",
        "main": "Business",
        "metaTitle": "Let's Automate Your Business Tasks - ALOKA Space Automation Agency",
        "metaDescription": "Looking for an automation agency to help you automate your Business processes you can save precious time? Look no further than our team of experts! We can help you design, implement, and manage all of your automation needs. Contact us today to learn more about our services!",
        "heroTitle": "Let's Automate Your Business Tasks",
        "heroSubTitle": "We build personalized digital process automation that can scale to your needs.",
        "childPage": [
            {
                "slug": "restaurant-business",
                "main": "Restaurant Business",
                "metaTitle": "Let's Automate Your Restaurant Business Tasks - ALOKA Space Automation Agency",
                "metaDescription": "Looking for an automation agency to help you automate your Restaurant Business processes you can save precious time? Look no further than our team of experts! We can help you design, implement, and manage all of your automation needs. Contact us today to learn more about our services!",
                "heroTitle": "Let's Automate Your Restaurant Business Tasks",
                "heroSubTitle": "We build personalized digital process automation that can scale to your needs."
            },
            {
                "slug": "merchandise-business",
                "main": "Merchandise Business",
                "metaTitle": "Let's Automate Your Merchandise Business Tasks - ALOKA Space Automation Agency",
                "metaDescription": "Looking for an automation agency to help you automate your Merchandise Business processes you can save precious time? Look no further than our team of experts! We can help you design, implement, and manage all of your automation needs. Contact us today to learn more about our services!",
                "heroTitle": "Let's Automate Your Merchandise Business Tasks",
                "heroSubTitle": "We build personalized digital process automation that can scale to your needs."
            }
        ]
    },
    {
        "slug": "data-analytics",
        "main": "Data Analytics",
        "metaTitle": "Let's Automate Your Data Analytics Tasks - ALOKA Space Automation Agency",
        "metaDescription": "Looking for an automation agency to help you automate your Data Analytics processes you can save precious time? Look no further than our team of experts! We can help you design, implement, and manage all of your automation needs. Contact us today to learn more about our services!",
        "heroTitle": "Let's Automate Your Data Analytics Tasks",
        "heroSubTitle": "We build personalized digital process automation that can scale to your needs.",
        "childPage": [
            {
                "slug": "social-media-engagement-analytics",
                "main": "Social Media Engagement Analytics",
                "metaTitle": "Let's Automate Your Social Media Engagement Analytics Tasks - ALOKA Space Automation Agency",
                "metaDescription": "Looking for an automation agency to help you automate your Social Media Engagement Analytics processes you can save precious time? Look no further than our team of experts! We can help you design, implement, and manage all of your automation needs. Contact us today to learn more about our services!",
                "heroTitle": "Let's Automate Your Social Media Engagement Analytics Tasks",
                "heroSubTitle": "We build personalized digital process automation that can scale to your needs."
            },
            {
                "slug": "data-scraping",
                "main": "Data Scraping",
                "metaTitle": "Let's Automate Your Data Scraping Tasks - ALOKA Space Automation Agency",
                "metaDescription": "Looking for an automation agency to help you automate your Data Scraping processes you can save precious time? Look no further than our team of experts! We can help you design, implement, and manage all of your automation needs. Contact us today to learn more about our services!",
                "heroTitle": "Let's Automate Your Data Scraping Tasks",
                "heroSubTitle": "We build personalized digital process automation that can scale to your needs."
            },
            {
                "slug": "web-analytics",
                "main": "Web Analytics",
                "metaTitle": "Let's Automate Your Web Analytics Tasks - ALOKA Space Automation Agency",
                "metaDescription": "Looking for an automation agency to help you automate your Web Analytics processes you can save precious time? Look no further than our team of experts! We can help you design, implement, and manage all of your automation needs. Contact us today to learn more about our services!",
                "heroTitle": "Let's Automate Your Web Analytics Tasks",
                "heroSubTitle": "We build personalized digital process automation that can scale to your needs."
            }
        ]
    }
]

module.exports = {
    tools,
    usecase,
    pageSitemap
}