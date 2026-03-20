export default function LeftSection() {
    return (
        <div className="flex flex-row flex-wrap">
            {files.map((file, index) => (
                <div className="w-96 h-96 overflow-hidden flex flex-col items-center bg-gray-300 rounded-4xl">
                    <img src={file.image} alt={file.name} className="p-4 pt-0 overflow-hidden" />
                    <p className="text-2xl font-semibold">{file.name}</p>
                </div>
            ))}
        </div>
    )
}