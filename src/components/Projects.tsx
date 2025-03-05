import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: "Infrastructure Uplift",
      description: "Performed 7 Physical Site migrations which reached the end of their lease and the client wanted to migrate them to a Hyper-Converged Infra Appliance (Dell VX Rail) at a different datacenter. Competed a drive to upgrade the Windows Server 2003 servers from the environment which reached their end of life and were no longer supported. Migrate app’s to the newer supported Windows Server OS version, which required a lot of communication and cooperation with application team."
    },
    {
      title: "VMware Upgrade",
      description: "Upgraded the VMware virtualization platform. Upgrade ESXi Hosts and the vCenter to the latest version."
    },
    {
      title: "Inventory improvement - CMDB Reconciliation",
      description: "Improved the local inventory by 50% which later resulted in a significant improvement in CMDB with more accurate information and information fields. Gathering the information by all means such as logging into the servers and to go through their build requests and identifying their current system and application owners."
    },
    {
      title: "Incident Reduction",
      description: "Analysis of Remedy reports and was able to reduce the monthly number of incidents by 30% in the course of 4 months. Identify top talkers in the environment and to fix respective issues causing the high number of repetitive incidents."
    },
    {
      title: "Firmware upgrades",
      description: "Gather the info to improve the inventory, discovered that a number of physical servers are having outdated firmware and cause issues during patching and reboot. Identified these servers and upgraded their firmware to the latest. Get downtime from stakeholders, raising the change requests, getting them approved and then get them implemented. (5-6 Months)"
    },
    {
      title: "Fixed patching issues",
      description: "Identified servers which took long time to patch and sometimes throw errors during patching. Checked the component store and found it corrupted. Raised the concern and fixed the corrupted component store on these servers."
    },
    {
      title: "Acted as a backup technical lead",
      description: "Acted as a backup technical lead and handled the team of 17 people in total. Represent the team in Management/client meetings, major incident management guide team, Align engineers and create SOP’s to guide the team to deal with complex situations"
    },
    {
      title: "Competed a drive to remove the 2003 servers",
      description: "Competed a drive to remove the 2003 servers from the environment which reached their end of life and were no longer supported, includes migrating the applications to the newer supported servers which requires to work with application team."
    },
    {
      title: "Did 7 Physical Site migrations",
      description: "Did 7 Physical Site migrations which reached the end of their lease and the client wanted to migrate them to a Hyper Converged Appliance (Dell VX Rail) in a datacenter."
    }
  ];

  return (
    <section id="projects" className="bg-gray-800 py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-700 rounded-lg shadow-md overflow-hidden p-6"
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-300">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
