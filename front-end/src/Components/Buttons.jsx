export default function Button({ text, subText }) {
    return (
        <button className="rounded-3xl bg-gray-700 text-white px-7 py-3
        transform transition duration-500 hover:-translate-y-2 hover:bg-gray-950
        flex flex-col items-center">

            <span className="text-2xl font-semibold">
                {text}
            </span>

            {subText && (
                <span className="text-sm text-gray-300">
                    {subText}
                </span>
            )}

        </button>
    )
}