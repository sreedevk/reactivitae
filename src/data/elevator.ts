const yearsSince = (startDate: Date): number => Math.abs((new Date()).getFullYear() - startDate.getFullYear())

const elevatorPitch = `As a senior software engineer with over ${yearsSince(new Date("2018-02-01"))} years of experience, I specialize in building resilient, reliable, and optimized data processing pipelines, financial and tax compliance software solutions, and software development tooling. My expertise in programming languages, data processing technologies, and finance/tax compliance standards, combined with my ability to collaborate effectively with stakeholders across different areas of the business, make me a strong candidate for positions that require complex problem-solving and innovation in software engineering.`;

export default elevatorPitch
