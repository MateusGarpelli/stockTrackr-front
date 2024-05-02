import { DropboxOutlined, HomeOutlined, MenuOutlined, SettingOutlined } from '@ant-design/icons'
import { mdiCounter } from '@mdi/js'
import Icon from '@mdi/react'
import Image from 'next/image'
import React from 'react'
import Archive from '@mdi/react';
import { mdiArchive } from '@mdi/js';



const SideBarNav = () => {
    return (
        <div className="container border bg-[#F6F6F6]  text-[#34b3e2] h-[695px] max-w-[250px] rounded-sm p-4 space-y-4 flex-col justify-center items-center">

            <div>
                <Image src='/stockTrackr.png'
                    alt="Logo"
                    width={200}
                    height={200} />
            </div>
            <div className='flex flex-col justify-between h-[520px]'>
                <div className="space-y-4 justify-center items-center ">
                    <div className="flex items-center ml-5 cursor-pointer">
                        <div><HomeOutlined width={30} height={30} className='mr-4' style={{ fontSize: 25 }} /></div>
                        <div>Home</div>
                    </div>
                    <div className="flex items-center ml-5 cursor-pointer">
                        <div className='mr-4'><MenuOutlined /></div>
                        <div>Categorias</div>
                    </div>
                    <div className="flex items-center ml-5 cursor-pointer">
                        <Archive path={mdiArchive} size={1} className='mr-4' />
                        <div>Estoque</div>
                    </div>
                    <div className="flex items-center ml-5 cursor-pointer">
                        <div className='mr-4'><Icon path={mdiCounter} size={1} /></div>
                        <div>Quantidade</div>
                    </div>
                </div>
                <div className='flex items-center ml-2 cursor-pointer'>
                    <SettingOutlined style={{ fontSize: 25 }} className='mr-2' />
                    <span className='mt-1'>Configurações</span>
                </div>
            </div>
        </div>
    )
}

export default SideBarNav