import Button from "../../Components/Buttons"

export default function RightText() {
    return (
        <div className="flex flex-col gap-6 max-w-xl">

            {/* decorative lines */}
            <div className="flex flex-col gap-2">
                <hr className="w-10 border-t-2 border-black block "/>
                <hr className="w-4 border-t-2 border-black"/>
            </div>

            {/* headline */}
            <div className="leading-tight">
                <p className="text-7xl">YOUR PRIVACY</p>
                <p className="text-7xl font-bold">OUR PRIORITY</p>
            </div>

            {/* CTA */}
            <div className="w-1/2">
                <Button 
                    text="Create Account" 
                    subText="It's free"
                    className="w-full" 
                />
            </div>

        </div>
    )
}