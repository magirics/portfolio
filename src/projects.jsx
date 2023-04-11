import { Icon, Link } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";

const collab = <svg><g>
    <path d="M4.54,9.46,2.19,7.1a6.93,6.93,0,0,0,0,9.79l2.36-2.36A3.59,3.59,0,0,1,4.54,9.46Z" fill="#E8710A"></path>
    <path d="M2.19,7.1,4.54,9.46a3.59,3.59,0,0,1,5.08,0l1.71-2.93h0l-.1-.08h0A6.93,6.93,0,0,0,2.19,7.1Z" fill="#F9AB00"></path>
    <path d="M11.34,17.46h0L9.62,14.54a3.59,3.59,0,0,1-5.08,0L2.19,16.9a6.93,6.93,0,0,0,9,.65l.11-.09" fill="#F9AB00"></path>
    <path d="M12,7.1a6.93,6.93,0,0,0,0,9.79l2.36-2.36a3.59,3.59,0,1,1,5.08-5.08L21.81,7.1A6.93,6.93,0,0,0,12,7.1Z" fill="#F9AB00"></path>
    <path d="M21.81,7.1,19.46,9.46a3.59,3.59,0,0,1-5.08,5.08L12,16.9A6.93,6.93,0,0,0,21.81,7.1Z" fill="#E8710A"></path>
</g></svg>

export default [
    {
        name: 'Mikrotres',
        description: 'Inventory and transaction system prototypes. Firebase, ChakraUI, Formik, Dinero.js, and React were used in its development.',
        link: <Link href='https://github.com/magirics/mikrotres' isExternal><Icon as={FaGithub} viewBox="0 0 24 24" filter='grayscale(100%)'></Icon></Link>,
        images: [
            {caption: 'Login page', width: '300px', src: 'https://raw.githubusercontent.com/magirics/mikrotres/media/readme/login.png'},
            {caption: 'Inventory page', width: '300px', src: 'https://raw.githubusercontent.com/magirics/mikrotres/media/readme/inventory.png'},
            {caption: 'Product form', width: '300px', src: 'https://raw.githubusercontent.com/magirics/mikrotres/media/readme/product_form.png'},
            {caption: 'Transactions page', width: '300px', src: 'https://raw.githubusercontent.com/magirics/mikrotres/media/readme/transactions.png'},
            {caption: 'Transaction form', width: '300px', src: 'https://raw.githubusercontent.com/magirics/mikrotres/media/readme/transactions_form.png'},
        ]
    },
    {
        name: 'Voxelar',
        description: 'Voxel art app. Simple as that. Libgdx and MaterialUI were used as tools.',
        link: <Link href='https://github.com/magirics/voxelar' isExternal><Icon as={FaGithub}></Icon></Link>,
        images: [
            { caption: 'Sword project example', width:'300px', src: 'https://raw.githubusercontent.com/magirics/voxelar/media/readme/sword.png' },
            { caption: 'Rocket team project example', width:'300px', src: 'https://raw.githubusercontent.com/magirics/voxelar/media/readme/rocket_team.png', },
            { caption: 'Main menu', width:'300px', src: 'https://raw.githubusercontent.com/magirics/voxelar/media/readme/main.png', },
            { caption: 'New created project', width:'300px', src: 'https://raw.githubusercontent.com/magirics/voxelar/media/readme/start_block.png', },
            { caption: 'Export to stl format functionality', width:'300px', src: 'https://raw.githubusercontent.com/magirics/voxelar/media/readme/export.png', },
        ]
    },
]