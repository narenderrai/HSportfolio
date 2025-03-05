import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      title: "Associate Consultant",
      company: "HCL Tech - Bengaluru, Karnataka",
      duration: "December 2019 to Present",
      description: [
        "Specialized in key skill in Hyper Converged Infra, Windows Server, Hyper-V/VMware Infra (ESXi, vSphere) Management, PowerShell, Active Directory, Installation, Migration and Maintenance using Dell OpenManage/iDRAC and HP iLO. Managing virtualization environment using VMware vSphere/ESXi including installation, configuration, upgrade and administration.",
        "Plan and manage project risk and issue, ensure timely resolution and effective communication. Well versed in IT Operations, Vendor Management, Off-shore Support Service, Server Management (Physical/virtual), Migrations (P2V, V2V, server migration, datacenter migration, print server migration), maintaining Virtualized Infrastructure (vSphere), Patch Management.",
        "Monitor resource utilization & performance for Virtual Machines, ESXi servers and Nutanix nodes (CPU, Memory, Storage and Network). Key player in everyday VMware operations includes VM Deployment, HA, DRS, vMotion, Snapshots, P2V, V2V and Virtual Appliances management. Representing the changes in CAB meetings. Maintain comprehensive project documentation.",
        "Lead project planning sessions and develop project scopes, objectives, and timelines. Coordinate resources and 3rd parties for the flawless execution of projects. Monitor project progress and performance, providing regular updates to stakeholders. Ensure resource availability and allocation for all project phases. Conduct post-project evaluations and identify areas for improvement.",
        "Perform with SME’s through organization to gather entire business needs required to attain project goals. Conduct change throughout project inclusive of schedule, scope and team membership. Collaborate effectively with infrastructure associates across business unit along with management level. Ensure to capture, prioritize and solve project problems in organized manner."
      ]
    },
    {
      title: "Senior System Engineer",
      company: "Microsoft - Bengaluru, Karnataka",
      duration: "September 2018 to November 2019",
      description: [
        "Being part of the SHA team, I am responsible for providing end to end support to Microsoft customers on Windows core components such as Storage, Disk, Backup, VSS, Clusters, and Hyper-V, etc. Entrusted with the responsibility of providing the Premier, Advanced, and 'Rapid Response' support for Windows Server related issues under Storage and High Availability.",
        "Efficiently providing support to configure, and manage Windows Server 2008, 2012, 2016, 2019 physical and virtual infra. Instrumental in Root Cause Analysis and providing support for servers on components such as Clusters, Storage Spaces, or S2D. Gaining professional experience in a cross-functional corporate environment and sharing best practices for technical aspects.",
        "Troubleshoot windows associated technologies such as Windows Failover Clusters, Hyper-V Infrastructure, Server/VSS Backup, Windows Storage and Docker & Containers. Provide Microsoft best practices to deliver reliable solutions to the customer. Plan and ensure customer issues are resolved in line with Service Level Agreements, maintain high levels of customer satisfaction.",
        "Analyse and provide ongoing maintenance, troubleshoot and support of customer IT infrastructure through Managed Services, including servers, network hardware and software, disaster recovery, storage, WAN / communication links, and cloud hosting environments. Review, audit, and administer customer hardware and cloud configurations to ensure optimal performance."
      ]
    },
    {
      title: "System Administrator (IT)",
      company: "DXC Technology - Noida, Uttar Pradesh",
      duration: "October 2015 to August 2018",
      description: [
        "Core Technical Skills: Managing Active Directory Domain Controllers. OS migration of domain controllers/servers. Microsoft Windows Cluster Management. DN/DHCP server Management. Patch Management (MBSA/SASS). Tivoli Endpoint Management. Symantec Antivirus Management.",
        "VERITAS Net Backup Management. Implement solutions that integrate systems to meet requirements. Oversee projects from conception to completion, ensuring they stay on schedule. Conduct technical analysis and troubleshoot to resolve system issues.",
        "Project: Financial Services Group: CSC provides software application solutions. The Company offers analytics, technology consulting and other solutions to around half of the Fortune 500 global financial services companies, two-thirds of the world’s top 50 insurers and more than half of the top 50 US banks and insurers. Infrastructure Strength: 3000+ servers including VMware vFarm (vSpehere 5.0 and ESXi 5.0), Windows Servers with OS MS Windows Server 2016, 2012/R2, 2008/R2 and 2003/R2 Servers.",
        "Project: Network Rail, United Kingdom: Network Rail is the owner and infrastructure manager of most of the rail network in England, Scotland and Wales. Infrastructure Strength: 3000+ servers including VMware vFarm (vSphere 5.0 and ESXi 5.0), Domain Controllers and Windows Servers with OS MS Windows Server 2016, 2012/R2, 2008/R2 and 2003/R2 Servers."
      ]
    },
    {
      title: "Systems Administrator",
      company: "3i-Infotech Pvt. Ltd. - Noida, Uttar Pradesh",
      duration: "June 2014 to August 2015",
      description: [
        "Manage the Infrastructure of Bharti Windows Servers, Domain and cloud. Set-up Servers, Backup Servers etc. Maintain DNS, DHCP and Active Directory. Implement Domain and OU level Group Policies for Security and Management. Tivoli Endpoint management, Symantec Antivirus management. Create reports that outlines system configuration and maintenance procedures.",
        "Manage backup through VERITAS Net Backup Management. Manage Virtualization through VMware ESXi Servers and v- Center. Handle Citrix, VMware and WinTel related Incidents. Work with other engineers, IT professionals and management to ensure system integrity and security. EvaluatE system performance and implementing improvements to enhance functionality"
      ]
    },
    {
      title: "Executive Training",
      company: "CMS Infosystems Pvt. Ltd. - New Delhi",
      duration: "June 2013 to July 2014",
      description: [
        "Provide trainings in Network Essentials, Operating Systems Management, Microsoft Server 2008 and Server 2012 (MCSA Level), Exchange Server 2010, Cloud Computing (Private Cloud), VM Ware Workstation, Introduction to v-Center and ESXi Servers."
      ]
    },
    {
      title: "Technical Support Executive",
      company: "Kisaan Dietech Pvt. Ltd. - Ghaziabad, Uttar Pradesh",
      duration: "August 2009 to June 2013",
      description: [
        "Installation of Microsoft Windows Server and Client OS’s. Setting-up & maintenance of Servers, Backup Servers, switches etc. Configuring and troubleshooting of IP networks, software configurations. Creating new users account in AD and Managing groups. Deleting and modifying user accounts. Troubleshooting through Remote Desktop and team viewer (for outside users)."
      ]
    }
  ];

  return (
    <section id="experience" className="bg-gray-900 py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Experience</h2>
        <div className="grid grid-cols-1 gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-gray-800 p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold">{exp.title}</h3>
              <p className="text-gray-400">{exp.company}</p>
              <p className="text-gray-500 mb-4">{exp.duration}</p>
              <ul className="list-disc list-inside text-gray-300">
                {exp.description.map((item, i) => (
                  <li key={i} className="mb-2">{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
