import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, HardDrive, Server, ShieldCheck, Terminal } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="bg-gray-800 py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-gray-300"
          >
            <p className="mb-4">
              Solution-oriented engineer with 13 years of experience in the IT industry who excels at configuring and building Virtual
              Machines, provisioning storage. Work on VMware environment with Nutanix AOS architecture. Configuring different operating systems
              like windows server, CentOS and RedHat Linux, scripts in PowerShell & PowerCLI. Administer VMware products like vCenter, vSphere,
              ESXi, HA, DRS for Enterprise IT infrastructure and hyper converged products like AHV, AOS, Prism. Knowledge on TCP/IP, DHCP
              protocols, DNS and Active Directory domain controller and storage protocols such as FC, ISCI, NFS and CIFS. Troubleshooting issues
              related Dell XC740 model servers. Implementing latest patches and upgrades to ESXi hosts. Design VMware ESXi servers and vCenter
              server, configuring VMware Features like HA, DRS on ESXi clusters. Experience in DCUI to configure IP details, subnet Mask, DNS
              servers and troubleshoot issues. Migrate virtual server using Storage vMotion to move server’s storage between different datastore
              clusters in vCenter. Monitor and assist in development of project plans, including defining scope, goals, and deliverables. Coordinate
              with stakeholders to gather project requirements and ensure clarity. Monitor project progress and help implement mitigation strategies.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <img
              src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1950&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with actual headshot URL
              alt="Harsh Sharma"
              className="rounded-full w-48 h-48 mb-4"
            />
          </motion.div>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-bold text-center mb-6">Key Technical Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gray-700 p-6 rounded-lg shadow-md flex items-center"
            >
              <Cpu className="mr-4 text-blue-500" size={32} />
              <div>
                <h4 className="text-lg font-semibold">Hypervisors</h4>
                <p className="text-gray-300">Nutanix AHV/AOS, VMware vCenter and ESXi, and Microsoft Hyper-V with S2D</p>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gray-700 p-6 rounded-lg shadow-md flex items-center"
            >
              <HardDrive className="mr-4 text-green-500" size={32} />
              <div>
                <h4 className="text-lg font-semibold">Hyper Converged Infra</h4>
                <p className="text-gray-300">Nutanix, Dell EMC VxRail, and Cisco UCS.</p>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gray-700 p-6 rounded-lg shadow-md flex items-center"
            >
              <Server className="mr-4 text-yellow-500" size={32} />
              <div>
                <h4 className="text-lg font-semibold">Server/Client System</h4>
                <p className="text-gray-300">Windows Server 2008/2012/2016/2019 (+Core), File Server, FTP Server, Failover Clusters, Domain Controller, Active Directory, Virtual Appliances.</p>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gray-700 p-6 rounded-lg shadow-md flex items-center"
            >
              <Terminal className="mr-4 text-yellow-500" size={32} />
              <div>
                <h4 className="text-lg font-semibold">Networking</h4>
                <p className="text-gray-300">LAN, VPN, RDP, DNS, DHCP, RADIUS</p>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gray-700 p-6 rounded-lg shadow-md flex items-center"
            >
              <ShieldCheck className="mr-4 text-yellow-500" size={32} />
              <div>
                <h4 className="text-lg font-semibold">IT Management & System Security Tools</h4>
                <p className="text-gray-300">ITIL, Ticketing Tools (Service Now and Remedy), Splunk, RVTools, McAfee/Symantec AV Client, NetBackup/Avamar Client, Hyena, Robocopy, Shavlik Protect, Sysinternal Tools, Symantec Backup Exec System Recovery, IIS Crypto, VMware vConverter.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
