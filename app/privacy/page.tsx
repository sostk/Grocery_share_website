"use client";
import { Navigation } from "../components/ui/navigation";
import { Footer } from "../components/ui/footer";

export default function PrivacyPolicy() {
  const privacySections = [
    {
      title: "Introduction",
      content: "At Grocery Share, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application."
    },
    {
      title: "Information We Collect",
      content: "We collect information that you provide directly to us, including:",
      subpoints: [
        "Personal information (name, email address, phone number)",
        "Account credentials",
        "Profile information",
        "Household and list data",
        "Device and usage information"
      ]
    },
    {
      title: "How We Use Your Information",
      content: "We use the collected information to:",
      subpoints: [
        "Provide and maintain our service",
        "Notify you about changes to our app",
        "Allow you to participate in interactive features",
        "Provide customer support",
        "Gather analysis to improve our app"
      ]
    },
    {
      title: "Data Security",
      content: "We implement a variety of security measures to maintain the safety of your personal information, including:",
      subpoints: [
        "Encryption of sensitive data",
        "Secure cloud storage",
        "Regular security audits",
        "Access controls and authentication"
      ]
    },
    {
      title: "Sharing of Information",
      content: "We do not sell your personal information. We may share information in the following circumstances:",
      subpoints: [
        "With your consent",
        "To comply with legal obligations",
        "To protect our rights and property",
        "With service providers who assist in our operations"
      ]
    },
    {
      title: "Your Rights",
      content: "You have the right to:",
      subpoints: [
        "Access your personal information",
        "Correct inaccurate information",
        "Request deletion of your data",
        "Opt-out of certain data processing"
      ]
    },
    {
      title: "Children's Privacy",
      content: "Our app is not intended for children under 13. We do not knowingly collect personal information from children under 13."
    },
    {
      title: "Changes to This Privacy Policy",
      content: "We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page."
    },
    {
      title: "Contact Us",
      content: "If you have any questions about this Privacy Policy, please contact us at: support@groceryshare.app"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold text-center mb-16">
          <span className="gradient-text">Privacy Policy</span>
        </h1>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {privacySections.map((section, index) => (
            <div 
              key={index} 
              className="bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition-all"
            >
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                {section.title}
              </h2>
              <p className="text-gray-700 mb-4">{section.content}</p>
              
              {section.subpoints && (
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  {section.subpoints.map((point, pointIndex) => (
                    <li key={pointIndex}>{point}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
} 