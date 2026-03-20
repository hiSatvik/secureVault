import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { fetchEncryptedBlob, fetchMyFiles } from '../../utils/uploadService';

const sampleFiles = [
    {
        id: 1,
        name: "Pinterest Find 1.jpg",
        image: "https://i.pinimg.com/736x/92/56/4a/92564ab984152dd66bf131f88bb69105.jpg"
    },
    {
        id: 2,
        name: "Pinterest Find 2.jpg",
        image: "https://i.pinimg.com/736x/b4/54/d6/b454d620c53842596075aad764cb2a0a.jpg"
    },
    {
        id: 3,
        name: "Aesthetic Unsplash.jpg",
        image: "https://images.unsplash.com/photo-1771095436222-e20a8737fcd1?q=80&w=1170&auto=format&fit=crop"
    },
    {
        id: 4,
        name: "Tall Portrait File.jpg",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: 5,
        name: "Wide Landscape File.png",
        image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=1200&auto=format&fit=crop"
    }
];

export default function DisplayFiles() {
    const [unloackedFiles, setUnlockedFiles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadAndDecryptFiles = async () => {
            try {
                const {data: fileList} = await fetchMyFiles();

                const decryptImages = [];

                for (const file of fileList) {
                    const encryptedBuffer = await fetchEncryptedBlob(file.id);
                    const ivArray = new Uint8Array(JSON.parse(file.iv));
                }

                setUnlockedFiles(decryptImages)
            } catch (err) {
                console.error("We have found of error");
            } finally {
                setLoading(false);
            }
        };

        loadAndDecryptFiles();
    },[]);

    return (
        <div className="p-8 w-full min-h-screen bg-gray-50">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 ml-4">Your Vault Files 🗂️</h2>
            
            {/* Jennie made sure to use flex-wrap so they flow beautifully on any screen size! */}
            <div className="flex flex-row flex-wrap gap-8 justify-start items-center">
                {sampleFiles.map((file) => (
                    <div 
                        key={file.id} 
                        className="w-80 h-96 flex flex-col bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 group"
                    >
                        {/* Image Container - The fixed height and object-cover keep everything looking uniform! */}
                        <div className="w-full h-3/4 overflow-hidden bg-gray-200">
                            <img 
                                src={file.image} 
                                alt={file.name} 
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out" 
                            />
                        </div>
                        
                        {/* File Name Container */}
                        <div className="w-full h-1/4 flex items-center justify-center p-4">
                            <p className="text-lg font-medium text-gray-700 truncate w-full text-center">
                                {file.name}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}