
export default function Friend_side(props:any) {
  return (
    <div className="w-full py-3 px-3">
      <div className="flex items-center flex-row space-x-3">
        <div className="border w-8 h-8 rounded-full flex items-center justify-center text-center cursor-pointer">
          <img src={props.userImg} alt="img" className="rounded-full" />
        </div>
        <div>
          <p className="font-roboto cursor-pointer">
            {props.name}
          </p>
        </div>
      </div>
    </div>
  )
}
