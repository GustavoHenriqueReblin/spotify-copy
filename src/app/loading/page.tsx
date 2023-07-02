interface loadingProps{
    id: string
    display: string
}

export default ({id, display}: loadingProps) => {
    return (
        <div id={`${id}`} className={`${display} bg-zinc-900 h-screen w-full items-center justify-center`}>
            <div className="animate-spin w-12 h-1/4 rounded-full border-b-2 border-l-2 border-green-500 max-h-12 max-w-12"></div>
        </div>
    )
}