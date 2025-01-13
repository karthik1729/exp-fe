'use client'
import classNames from "classnames"
import Link from "next/link"
import { usePathname } from "next/navigation"

const items = [
  { name: 'Clusters', path: '/compute/clusters' },
  { name: 'Virtual Machines', path: '/compute/vms' },
]

const Tab = ({ name, path }:{name:string, path:string}) => {
  const pathName= usePathname()
  const isActive = pathName === path;
  return (
    <Link href={path} className={classNames("py-4 font-medium hover:text-white flex items-center transition-all", {
      "text-white border-b-2 border-white font-semibold": isActive,
      "text-gray-400 ": !isActive
    })}>
      {name}
    </Link>
  )
}

export const Tabs = () => {
  return (
    <div className="border-b border-gray-700 flex">
      <div className="px-4 flex gap-6">
      {
        items.map((item) => {
          return <Tab name={item.name} path={item.path} key={item.path} />
        })
      }   
      </div>
    </div>
  )
}