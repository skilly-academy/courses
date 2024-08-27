import React from 'react';
import Layout from '@theme/Layout'; // Importa el Layout de Docusaurus
import TechList from '../components/TechList';

const techs = [
    { name: 'ansible', displayName: 'Ansible', items: 5, logo: 'img/logos/ansible-original.svg', description: 'Aprende Ansible, una herramienta de automatización de TI.', category: 'sistemas' },
    { name: 'apache', displayName: 'Apache', items: 3, logo: 'img/logos/apache-original.svg', description: 'Domina Apache, un servidor web ampliamente utilizado.', category: 'sistemas' },
    { name: 'aws', displayName: 'AWS', items: 4, logo: 'img/logos/aws-original.svg', description: 'Conoce AWS, la plataforma de servicios en la nube de Amazon.', category: 'sistemas' },
    { name: 'bash', displayName: 'Bash', items: 3, logo: 'img/logos/bash-original.svg', description: 'Aprende Bash, un lenguaje de scripts para la automatización de tareas.', category: 'sistemas' },
    { name: 'docker', displayName: 'Docker', items: 4, logo: 'img/logos/docker-original.svg', description: 'Domina Docker, una plataforma para la creación de contenedores.', category: 'sistemas' },
    { name: 'google-cloud', displayName: 'Google Cloud', items: 3, logo: 'img/logos/googlecloud-original.svg', description: 'Conoce Google Cloud, la plataforma de servicios en la nube de Google.', category: 'sistemas' },
    { name: 'kubernetes', displayName: 'Kubernetes', items: 4, logo: 'img/logos/kubernetes-original.svg', description: 'Aprende Kubernetes, un sistema de orquestación de contenedores.', category: 'sistemas' },
    { name: 'linux', displayName: 'Linux', items: 5, logo: 'img/logos/linux-original.svg', description: 'Domina Linux, el sistema operativo de código abierto.', category: 'sistemas' },
    { name: 'lxc', displayName: 'LXC', items: 2, logo: 'img/logos/lxc-original.svg', description: 'Conoce LXC, una herramienta para la creación de contenedores ligeros.', category: 'sistemas' },
    { name: 'nginx', displayName: 'Nginx', items: 3, logo: 'img/logos/nginx-original.svg', description: 'Aprende Nginx, un servidor web y proxy inverso ligero.', category: 'sistemas' },
    { name: 'powershell', displayName: 'PowerShell', items: 3, logo: 'img/logos/powershell-original.svg', description: 'Domina PowerShell, una herramienta de automatización de tareas en Windows.', category: 'sistemas' },
    { name: 'puppet', displayName: 'Puppet', items: 2, logo: 'img/logos/puppet-original.png', description: 'Conoce Puppet, una herramienta de automatización de TI y configuración.', category: 'sistemas' },
    { name: 'windows-server', displayName: 'Windows Server', items: 4, logo: 'img/logos/win-server-original.png', description: 'Aprende Windows Server, el sistema operativo para servidores de Microsoft.', category: 'sistemas' },
    { name: 'windows-usuario', displayName: 'Windows Usuario', items: 2, logo: 'img/logos/windows11-original.svg', description: 'Conoce Windows para usuarios, el sistema operativo de Microsoft.', category: 'sistemas' },
    { name: 'xenserver', displayName: 'XenServer', items: 2, logo: 'img/logos/xen-original.png', description: 'Domina XenServer, una plataforma de virtualización.', category: 'sistemas' },
  ];

export default function SystemsPage() {
  return (
    <Layout
      title="Bases de datos"
      description="Explora los siguientes temas en Bases de Datos">
      <TechList 
        title="Bases de datos"
        description="Explora los siguientes temas en Bases de Datos:"
        techs={techs}
      />
    </Layout>
  );
}
