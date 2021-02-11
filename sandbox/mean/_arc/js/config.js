var config = {
    form: {
        elements: [{
            label: "Incident ID",
            type: "input",
            name: "incID",
            value: "1234",
            info: {
                weight: 10,
                include: [{
                    type: "create",
                    status: "disabled"
                },
                {
                    type: "update",
                    status: "disabled"
                }]
            }
        },
        {
            label: "Short Name For Incident",
            type: "input",
            name: "shortName",
            value: "test",
            info: {
                weight: 10,
                include: [{
                    type: "create",
                    status: "required",
                    errors: [{
                        required: "This is a required field",
                        minlength: "Must be longer"

                    }]
                },
                {
                    type: "update",
                    status: "disabled"
                }]
            }
        },
        {
            label: "Incident Owner",
            type: "input",
            name: "incOwner",
            tips: ["Engineer or IT staff member managing the incident. First and Last Name"],
            info: {
                weight: 10,
                include: [{
                    type: "create",
                    status: "required"
                },
                {
                    type: "update"
                }]
            }
        },
        {
            label: "Description",
            type: "textarea",
            name: "longDescription",
            tips: [
                "Provide a one to two sentence description of the incident and who reported it.",
                "Example: Unexpected Error for some users when viewing my warranties in both US and UK buyer centers."
            ],
            info: {
                weight: 10,
                include: [{
                    type: "create",
                    status: "required"
                },
                {
                    type: "update"
                }]
            }
        },
        {
            label: "Impact",
            type: "textarea",
            name: "impact",
            tips: [
                "Use this section to answer what systems, who, and how they were impacted by the incident.",
                "Unknown (If incident is in progress or still under investigation)",
                "If incident impacted agents:",
                "How many agents affected and in what locations?",
                "What is affected? (e.g. we had a problem only with Advanced Exchange recently)",
                "How are they affected? (e.g. adding n minutes to every call vs. cannot use the system)",
                "If incident impacted customers:",
                "How many visitors are affected and do they form an identifiable subset",
                "What functionality is affected",
                "How is it degraded?",
                "Examples:",
                "Duration - 6 Hours.",
                "About 5-7% of the users spread out across US & UK with AMT contracts. The affected users got an error when viewing the list warranty page.",
                "Duration - 30 minutes",
                "PK and SF agents experienced intermittent slow action links and data replication. During this period, agents experienced intermittent failures and page load errors in File-a-claim Agent."
            ],
            info: {
                weight: 10,
                include: [{
                    type: "create",
                    status: "required"
                },
                {
                    type: "update"
                }]
            }
        },
        {
            label: "Next Steps",
            type: "textarea",
            name: "actionItems",
            tips: [
                "Use this section to communicate next steps that will be taken to either resolve or investigate the incident. Please provide timing if known.",
                "Example: Restarting app servers at 5:00 pm"
            ],
            info: {
                weight: 10,
                include: [{
                    type: "create",
                    status: "required"
                },
                {
                    type: "update"
                }]
            }
        },
        {
            label: "Timeline",
            type: "textarea",
            name: "timeline",
            tips: [
                "As the incident occurs, please construct a timeline of events. Please provide the time, who, and what for the event.",
                "Examples:",
                "9/3/2014 11:30am - Received email request from Devin raise as incident",
                "9/3/2014 1:00pm - Code fix handed off to QA",
                "9/3/2014 4:00pm - QA verified the fix",
                "9/3/2014 4:30pm - QA started production release",
                "9/3/2014 5:00pm - QA completed production release",
                "9/3/2014 5:30pm - Devin confirmed Incident has been resolved"
            ],
            info: {
                weight: 10,
                include: [{
                    type: "create",
                    status: "required"
                },
                {
                    type: "update"
                }]
            }
        },
        {
            label: "Source",
            type: "select",
            name: "monitor",
            options: [
                "",
                "ServiceDesk",
                "Direct Contact",
                "Monitor",
                "Other"
            ],
            tips: [
                "ServiceDesk - Received call from AnswerConnect",
                "Direct Contact - Incident was raised by someone contacting you directly without Answer Connect (ie, stopped by your desk, called you, text, email, IM, etc.)",
                "Monitor - Found out about the incident from our monitors or internal tools (ie, Zabbix, Nagios, New Relic, DB Top Offender, etc)",
                "Other - All others"
            ],
            info: {
                weight: 10,
                include: [{
                    type: "create",
                    status: "required"
                },
                {
                    type: "update"
                }]
            }
        },
        {
            label: "Priority",
            type: "select",
            name: "priority",
            options: [
                "",
                "P4",
                "P3",
                "P2",
                "P1"
            ],
            tips: [
                "P1 - Sky is falling; all hell is breaking lose. Major impact to all agents or customers for a given site. Example: main website is down, all CS is down, Saleforce is down, CyberSource is down",
                "P2 - Anything that impacts multiple agents or multiple warranties/claims/tickets/customers. Example: slow replication, action link issues, depot integration not working, PK agents down, CPU spikes, etc.",
                "P3 - Single agent/warranty affected. Example: agent user permission, one warranty has bad data, single CS agent issue",
                "P4 - Feature requests - no incident"
            ],
            info: {
                weight: 10,
                include: [{
                    type: "create",
                    status: "required"
                },
                {
                    type: "update"
                }]
            }
        },
        {
            label: "CS Status",
            type: "select",
            name: "csStatus",
            options: [
                "",
                "Online",
                "Online Degraded State",
                "Down",
                "Unknown"
            ],
            info: {
                weight: 10,
                include: [{
                    type: "create",
                    status: "required"
                },
                {
                    type: "update"
                }]
            }
        },
        {
            label: "Site Status",
            type: "select",
            name: "siteStatus",
            options: [
                "",
                "Online",
                "Online Degraded State",
                "Down",
                "Unknown"
            ],
            info: {
                weight: 10,
                include: [{
                    type: "create",
                    status: "required",
                    error: "This is an error"
                },
                {
                    type: "update"
                }]
            }
        },
        {
            label: "Next Update",
            type: "textarea",
            name: "nextUpdate",
            tips: [
                "Use this section to incident when you will provide additional information about the incident. Expectation is for Engineering/IT to provide hourly updates unless explicitly specified."
            ],
            info: {
                weight: 10,
                include: [{
                    type: "create"
                },
                {
                    type: "update"
                }]
            }
        },
        {
            label: "Root Cause",
            type: "textarea",
            name: "rootCause",
            placeholder: "N/A",
            tips: [
                "Use this section to provide root cause of the incident. NOTE: Please keep in mind that your main audience is people outside of Engineering/IT. Do not use words like NullPointerException, etc.",
                "Possible Values:",
                "Unknown(if incident is in progress or still under investigation)",
                "Pending Post Mortem (if root cause not known by close of incident)",
                "Example:",
                "Customer XYZ with 80 warranties attempted multiple times to access the list warranties with their account. Because of a known issue in the system, this caused the system resources to be overtaxed which affected replication from processing and action links to be slow."
            ],
            info: {
                weight: 10,
                include: [{
                    type: "create"
                },
                {
                    type: "update"
                }]
            }
        },
        {
            label: "Remedy",
            type: "textarea",
            name: "remedy",
            placeholder: "N/A",
            tips: [
                "Only use this section if the root cause is not resolved by the end of the incident."
            ],
            info: {
                weight: 10,
                include: [{
                    type: "create"
                },
                {
                    type: "update"
                }]
            },
            error: "This is an error"
        },
        {
            label: "Technical Notes",
            type: "textarea",
            name: "technotes",
            tips: [
                "Use this field for adding technical details. This field will not be included in the email templates."
            ],
            info: {
                weight: 10,
                include: [{
                    type: "create"
                },
                {
                    type: "update"
                }]
            }
        },
        {
            label: "Resolved by Restart",
            type: "checkbox",
            name: "resolvedByRestart",
            info: {
                weight: 10,
                include: [{
                    type: "update"
                }]
            }
        },
        {
            label: "Send Email to incidents@squaretrade.com?",
            type: "checkbox",
            name: "email",
            info: {
                weight: 10,
                include: [{
                    type: "update"
                }]
            }
        }]
    }
};
