import { useEffect, useState } from "react";
import api from "../../axios";

export default function Friend_side(props: any) {
  useEffect(() => {
    getUserId();
  }, []);

  const [friend, setFriend] = useState<any>(null);

  const getUserId = () => {
    api
      .get(`user/${props.user_id}`)
      .then((res) => {
        setFriend(res.data.responseData);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="w-full py-3 px-3">
      <div className="flex items-center flex-row space-x-3">
        {friend && (
          <>
            <div className="border w-8 h-8 rounded-full flex items-center justify-center text-center cursor-pointer">
              <img src={friend.userImg} alt="img" className="rounded-full w-8 h-8" />
            </div>
            <div>
              <p className="font-roboto cursor-pointer">{friend.name}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
