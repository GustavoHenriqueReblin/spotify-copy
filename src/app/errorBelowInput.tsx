import {AlertCircle} from 'lucide-react';

interface errorBelowInputProps{
    id: string
    message: string
}

export default ({id, message} : errorBelowInputProps) => {
    return (
        <a id={`${id}`} className="hidden mb-1 flex-row items-center gap-2 text-sm text-red-500 font-normal min-w-[calc(19rem)]">
            <AlertCircle className="text-red-600 h-4"/>
            {message}
        </a>
    )
}