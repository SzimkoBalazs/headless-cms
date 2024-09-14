import React, {useState} from 'react'
import Sidebar, { SidebarItem } from '../../components/Sidebar/Sidebar'
import { FileBox, Image, LayoutDashboard, Package, Settings, Tag, UploadCloud } from 'lucide-react'
import SecondarySidebar from '../../components/SecondarySidebar/SecondarySidebar'

const AdminHomepage = () => {


    const [selectedItem, setSelectedItem] = useState(null);
    const [isSecondarySidebarVisible, setIsSecondarySidebarVisible] = useState(false);
  
    // Dummy data for each section
    const contentTypeBuilderData = {
      collectionTypes: [{ name: 'User', count: 1 }],
      singleTypes: [{ name: 'Article', count: 0 }],
      components: [{ name: 'Comment', count: 2 }],
    };
  
    const contentManagerData = {
        collectionTypes: [{ name: 'User', count: 1 }], // Dummy collection types
        singleTypes: [], // Dummy single types (empty in this case)
      };
    
    
    const settingsData = {
      globalSettings: ['Overview', 'API Tokens', 'Internationalization', 'Media Library', 'Review Workflows'],
      adminSettings: ['Roles', 'Users', 'Audit Logs'],
    };
  
    // Handle sidebar item click
    const handleSidebarItemClick = (item) => {
        console.log('Clicked:', item); // Check if click event fires
        console.log('Current selectedItem:', selectedItem); // Check current selectedItem state
        console.log('Sidebar Visible:', isSecondarySidebarVisible); // Check sidebar visibility
    
        if (selectedItem === item) {
          console.log('Same item clicked, hiding sidebar');
          setIsSecondarySidebarVisible(false);
          setSelectedItem(null);
        } else {
          console.log('Different item clicked, showing sidebar');
          setSelectedItem(item);
          setIsSecondarySidebarVisible(true);
        }
      };
  
    // Determine layout and content to pass to SecondarySidebar
    let layout = '';
    let contentToShow = {};
  
    switch (selectedItem) {
        case 'Content Manager':
          layout = 'contentManager';
          contentToShow = contentManagerData;
          break;
        case 'Content-Type Builder':
          layout = 'contentTypeBuilder';
          contentToShow = contentTypeBuilderData;
          break;
        case 'Settings':
          layout = 'settings';
          contentToShow = settingsData;
          break;
        default:
          break;
      }

      console.log('Final layout:', layout);  // Log the final layout and content before rendering
      console.log('Content to show:', contentToShow);


  return (
    <div className='flex'> 
        <Sidebar>
           <SidebarItem icon={<LayoutDashboard size={20} />} text='Content Management' alert onClick={() => handleSidebarItemClick('Content Manager')} />
           <SidebarItem icon={<FileBox size={20} />} text='Content-Type Builder' onClick={() => handleSidebarItemClick('Content-Type Builder')} />
           <SidebarItem icon={<Image size={20} />} text='Media Library' />
           <SidebarItem icon={<Tag size={20} />} text='Releases' />
           <SidebarItem icon={<UploadCloud size={20} />} text='Deploy' alert />
           <SidebarItem icon={<Package size={20} />} text='Plugins' />
           <SidebarItem icon={<Settings size={20} />} text='Settings' onClick={() => handleSidebarItemClick('Settings')} />
        </Sidebar>

        {isSecondarySidebarVisible && (
        <SecondarySidebar isVisible={isSecondarySidebarVisible} layout={layout} content={contentToShow} />
      )}
        
    </div>
  )
}

export default AdminHomepage