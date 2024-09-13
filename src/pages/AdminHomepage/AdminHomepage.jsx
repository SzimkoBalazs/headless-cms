import React from 'react'
import Sidebar, { SidebarItem } from '../../components/Sidebar/Sidebar'
import { FileBox, Image, LayoutDashboard, Package, Settings, Tag, UploadCloud } from 'lucide-react'

const AdminHomepage = () => {
  return (
    <div> 
        <Sidebar>
           <SidebarItem icon={<LayoutDashboard size={20} />} text='Content Management' alert />
           <SidebarItem icon={<FileBox size={20} />} text='Content-Type Builder'  />
           <SidebarItem icon={<Image size={20} />} text='Media Library' />
           <SidebarItem icon={<Tag size={20} />} text='Releases' />
           <SidebarItem icon={<UploadCloud size={20} />} text='Deploy' alert />
           <SidebarItem icon={<Package size={20} />} text='Plugins' />
           <SidebarItem icon={<Settings size={20} />} text='Settings'  />
        </Sidebar>
        
    </div>
  )
}

export default AdminHomepage