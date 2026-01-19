const chatbotData = {
    welcomeMessage: "Hi there! 👋 I'm here to help you. What would you like to know about?",
    endOptions: {
        title: "Would you like to end our conversation?",
        options: [
            {
                text: "Yes, end chat",
                response: "Thank you for chatting with me! The chat will close in 7 seconds. Click 'Continue chatting' if you need anything else! 👋"
            },
            {
                text: "No, continue chatting",
                response: "Great! How else can I assist you today?"
            }
        ],
        countdownMessage: "Chat closing in {seconds} seconds... Click 'Continue chatting' to stay.",
        continueButton: "Continue chatting"
    },

    generalInfo: {
        title: "✨ Basic Information",
        questions: {
            aboutPlatform: {
                question: "What is this platform?",
                answer: "We're a freelancing platform that connects:\n• Clients who need work done\n• BDEs (Business Development Executives) who can help\n\nThink of us as a marketplace where projects meet talent! 🤝",
                followUp: [
                    "How do I join as a client?",
                    "How do I join as a BDE?",
                    "What can admins do?"
                ]
            },
            userTypes: {
                question: "Who can use this platform?",
                answer: "We have three types of users:\n\n👥 Clients: Post projects and hire BDEs\n👨‍💼 BDEs: Find work and bid on projects\n🛡️ Admins: Keep everything running smoothly",
                followUp: [
                    "How do I join as a client?",
                    "How do I join as a BDE?",
                    "What can admins do?"
                ]
            }
        }
    },

    clientFeatures: {
        title: "👥 Client Features",
        questions: {
            postProject: {
                question: "How do I post a project?",
                answer: "It's easy to post a project! 📝\n\n1. Log in to your account\n2. Click 'Add Project'\n3. Fill in the details:\n   • Project title\n   • Description\n   • Budget\n   • Timeline\n4. Click Submit!",
                followUp: [
                    "Can I edit my project?",
                    "How do I see bids?",
                    "How do I track progress?"
                ]
            },
            viewBids: {
                question: "How do I check project bids?",
                answer: "Checking bids is simple! 🔍\n\n1. Go to 'View Bids'\n2. Select your project\n3. See all bids in one place\n4. Compare BDEs and prices\n5. Pick the best match!",
                followUp: [
                    "How do I accept a bid?",
                    "How do I message a BDE?",
                    "What makes a good bid?"
                ]
            },
            projectManagement: {
                question: "How do I manage my projects?",
                answer: "Managing projects is straightforward! 📊\n\n• View all your projects\n• Update project details\n• Track progress\n• Chat with BDEs\n• Check project history",
                followUp: [
                    "How do I update status?",
                    "Where's the timeline?",
                    "How do I contact BDEs?"
                ]
            }
        }
    },

    bdeFeatures: {
        title: "👨‍💼 BDE Features",
        questions: {
            bidOnProject: {
                question: "How do I bid on projects?",
                answer: "Bidding is easy! 🎯\n\n1. Browse projects\n2. Find one you like\n3. Click 'Add Bid'\n4. Enter your price\n5. Write a short proposal\n6. Submit!",
                followUp: [
                    "What should my bid include?",
                    "Can I check bid status?",
                    "Can I edit my bid?"
                ]
            },
            viewClients: {
                question: "How do I see client info?",
                answer: "Finding client info is quick! 👀\n\n• Go to 'View Clients'\n• Click on any client\n• See their details\n• Check their history\n• Read reviews",
                followUp: [
                    "How do I contact clients?",
                    "Where are the reviews?",
                    "Can I see past projects?"
                ]
            },
            manageCategories: {
                question: "How do I set my services?",
                answer: "Setting up your services is simple! ⚡\n\n• Go to 'My Services'\n• Add your skills\n• Set your experience level\n• Mark when you're available\n• Set your rates",
                followUp: [
                    "What services can I offer?",
                    "How do I show my skills?",
                    "How do I set my rates?"
                ]
            }
        }
    },

    projectInfo: {
        title: "📋 Project Types",
        questions: {
            projectTypes: {
                question: "What projects can I find?",
                answer: "We have lots of exciting projects! 🌟\n\n• Business Strategy\n• Investment Planning\n• Consulting\n• Market Analysis\n• Financial Planning\n\nSomething for everyone!",
                followUp: [
                    "How do I find projects?",
                    "Can I filter projects?",
                    "What skills do I need?"
                ]
            },
            biddingProcess: {
                question: "How does bidding work?",
                answer: "Bidding is a simple 5-step process! 🎯\n\n1. Client posts project\n2. BDEs place bids\n3. Client reviews offers\n4. Best bid is chosen\n5. Work begins!",
                followUp: [
                    "What makes a good bid?",
                    "How long can I bid?",
                    "How are bids chosen?"
                ]
            }
        }
    },

    accountManagement: {
        title: "🔐 Account Help",
        questions: {
            registration: {
                question: "How do I sign up?",
                answer: "Signing up is quick! ✨\n\nYou'll need:\n• Your name\n• Email\n• Password\n• Contact info\n\nJust click 'Register' and follow the steps!",
                followUp: [
                    "What papers do I need?",
                    "How long to approve?",
                    "Can I be both client & BDE?"
                ]
            },
            login: {
                question: "How do I log in?",
                answer: "Logging in is easy! 🔑\n\n1. Click 'Login'\n2. Enter your email\n3. Enter password\n4. Choose user type\n5. You're in!",
                followUp: [
                    "Forgot password?",
                    "How to change password?",
                    "Is login secure?"
                ]
            },
            passwordChange: {
                question: "How do I change password?",
                answer: "Changing password is secure & simple! 🔒\n\n1. Go to Settings\n2. Click 'Change Password'\n3. Enter old password\n4. Enter new password\n5. Done!",
                followUp: [
                    "Forgot old password?",
                    "Password requirements?",
                    "Security tips?"
                ]
            }
        }
    },

    adminRelated: {
        "what can administrators do": {
            answer: "Administrator capabilities:\n1. Manage Categories\n2. Oversee BDEs\n3. Monitor Clients\n4. Review Projects\n5. Handle Disputes\n6. System Management",
            followUp: ["Category management", "User management", "System settings"]
        }
    },

    serviceRelated: {
        "what services are offered": {
            answer: "Our platform offers various consulting and investment services:\n1. Business Strategy\n2. Investment Planning\n3. Market Analysis\n4. Financial Consulting\n5. Project Management\n\nEach service has verified BDEs specializing in that area.",
            followUp: ["Service categories", "How to find BDEs?", "Service quality standards"]
        }
    },

    suggestedQuestions: [
        "What is this website about?",
        "How do I register?",
        "How to post a project?",
        "How does bidding work?",
        "What services are offered?",
        "How to manage my account?",
        "How to contact support?",
        "View project status",
        "Change password",
        "Find BDEs",
        "End conversation"
    ]
};

export default chatbotData; 