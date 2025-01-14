'use client';
import Link from "next/link";
import { usePathname } from 'next/navigation';
import cn from "classnames";
import { Cpu, Database, Gauge, Network, Settings2, LucideIcon, LogOut, Settings } from "lucide-react";

const items = {
  main:{
    navItems:[
      { name: 'Dashbaord', path: '/', Icon: Gauge },
      { name: 'Compute', path: '/compute', Icon:Cpu },
      { name: 'Networking', path: '/networking', Icon:Network },
      { name: 'Storage', path: '/storage', Icon: Database },
      { name: 'Maintanance', path: '/maintanance', Icon: Settings },
      { name: 'Clusters', path: '/clusters', Icon: Cpu }, // P678f
    ],
    bottomNavItems:[
      { name: 'Settings', path: '/settings', Icon: Settings2 },
      { name: 'Logout', path: '/logout', Icon: LogOut },
    ],
  },
  clusterDetail:(clusterId:string)=>({
    navItems:[
      { name: 'Overview', path: `/clusters/${clusterId}`, Icon: Gauge },
      { name: 'Nodepools', path: `/clusters/${clusterId}/nodepools`, Icon:Cpu },
      { name: 'Logs', path: `/clusters/${clusterId}/logs`, Icon:Network },
      { name: 'Storage', path: `/clusters/${clusterId}/storage`, Icon: Database },
      { name: 'Cluster Details', path: `/clusters/${clusterId}`, Icon: Cpu }, // P388b
    ],
    bottomNavItems:[
      { name: 'Connect', path: '/settings', Icon: Settings2 },
      { name: 'Cluster Settings', path: '/maintanance', Icon: Settings },
    ],
  })
}

type ItemProps = {
  name: string;
  path: string;
  Icon: LucideIcon;
};

const Item = ({ name, path, Icon }: ItemProps) => {
  const pathName = usePathname();
  const isActive = pathName.split("/")[1] === path.split("/")[1];
  return (
    <Link href={path} className={cn("p-2 py-4 text-xl font-medium hover:text-white rounded-2xl px-6 flex gap-1 items-center transition-all", { 
      "bg-gray-800 text-white": isActive,
      "text-gray-400 bg-transparent": !isActive
    })}>
      <Icon className="inline-block mr-2" size={20} /> {name}
    </Link>
  );
};

export const Sidebar = () => {
  return <div className="flex flex-col w-1/4 px-4 py-8">
    <div className="flex-1 flex flex-col gap-4">
      {
        items.main.navItems.map((item) => {
          return <Item name={item.name} path={item.path} key={item.path} Icon={item.Icon} />
        })
      }
    </div>
    <div className="flex flex-col gap-4">
      {
        items.main.bottomNavItems.map((item) => {
          return <Item name={item.name} path={item.path} key={item.path} Icon={item.Icon} />
        })
      }
    </div>
  </div>
}
