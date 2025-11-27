export default function sitemap() {
  const baseUrl = "https://hospiceandbeyond.com";

  return [
    { url: `${baseUrl}/`, lastModified: new Date() },
    { url: `${baseUrl}/about`, lastModified: new Date() },
    { url: `${baseUrl}/team`, lastModified: new Date() },
    { url: `${baseUrl}/services`, lastModified: new Date() },
    { url: `${baseUrl}/faq`, lastModified: new Date() },
    { url: `${baseUrl}/contact`, lastModified: new Date() },
    { url: `${baseUrl}/palliative-care`, lastModified: new Date() },
    { url: `${baseUrl}/bereavement`, lastModified: new Date() },
    { url: `${baseUrl}/blog`, lastModified: new Date() },
    { url: `${baseUrl}/social-service`, lastModified: new Date() },
    { url: `${baseUrl}/physician`, lastModified: new Date() },
    { url: `${baseUrl}/nursing`, lastModified: new Date() },
    { url: `${baseUrl}/durable-medical-equipment`, lastModified: new Date() },
    { url: `${baseUrl}/therapy`, lastModified: new Date() },
    { url: `${baseUrl}/donate-to-us`, lastModified: new Date() },
    { url: `${baseUrl}/hospice-eligibility-questionnaire`, lastModified: new Date() },
    { url: `${baseUrl}/service-areas`, lastModified: new Date() },
    { url: `${baseUrl}/careers`, lastModified: new Date() },
    { url: `${baseUrl}/myth`, lastModified: new Date() },
  ];
}
