interface Props {
    show?: boolean
    onClick?: () => void
}

export const Overlay = ({ show, onClick }: Props) => (
    <div
        onClick={onClick}
        className={`${
            show ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        } absolute inset-0 w-full h-full z-10 bg-blue/80 transition-all duration-500 ease-in-out`}
    />
)
