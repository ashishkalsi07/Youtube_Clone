export function VideoCard(props:any) {
    return <div>
        <img className="rounded-xl cursor-pointer" src={props.photo}></img>
        <div className="grid grid-cols-12 pt-2 pl-2">
            <div className="col-span-1">
                <img className={"rounded-full w-13 h-13"} src={props.thumbnail}></img>
            </div>
            <div className="col-span-11 text-sm pl-2">
                {props.title}
                <div className="text-base text-gray-600">
                    {props.channelName}
                </div>
                <div className="text-base text-gray-600">
                    {props.views} | {props.timestamp}
                </div>
            </div>
        </div>
    </div>

}