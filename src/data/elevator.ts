const yearsSince = (startDate: Date): number => Math.abs((new Date()).getFullYear() - startDate.getFullYear())

const elevatorPitch = `As a senior software engineer with over ${yearsSince(new Date("2018-02-01"))} years of experience, I architect & engineer resilient software for the web and hardware leveraging modern technologies and formal methods to build distributed data pipelines and large scale web applications drawing on my experience in the music distribution and insurance industries. My craft centers on designing fault-tolerant systems with reproducibility and scalability while advocating for privacy-first architectures through encryption and data ownership.`;

export default elevatorPitch
