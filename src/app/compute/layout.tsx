import {Tabs} from './_components/tabs'
export default function Page({children}: {children: React.ReactNode}){
  return (
    <div className="p-8 flex flex-col gap-4">
      <div>
        <h1 className="text-4xl font-extrabold">Compute</h1>
        <h2 className="text-gray-400 mt-4">Clusters & VMs</h2>
      </div>
      <Tabs />
      <div>
        {children}
      </div>
    </div>
  )
}