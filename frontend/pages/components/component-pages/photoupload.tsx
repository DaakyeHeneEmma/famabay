import { useState } from "react";
import Image from "next/image";
import avatar from "../../../public/avatar.png"
import path from 'path'

export default function PrivatePage() {
  const [image, setImage] = useState(String);
  const [createObjectURL, setCreateObjectURL] = useState(image);        
  const url = createObjectURL
  const upload = path.join(__dirname,"../../../public/" )

  const uploadToClient = (event:any) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];
      setImage(i);
      setCreateObjectURL(URL.createObjectURL(i));
    }
  };

  const uploadToServer = async () => {
    const body = new FormData();
    body.append("file", image);
    const response = await fetch(url, {
      method: "POST",
      body
    });
  };

  return (
    <div>
      <div style={{"alignItems":"center", "display": "flex"}} > 
        <Image src={url || avatar} alt={""}  width={200} height={200}/>
        <h4>Select Image</h4>
        <input type="file" name="myImage" onChange={uploadToClient}  />
        <button
          className="btn btn-primary"
          type="submit"
          onClick={uploadToServer}
        >
          Send to server
        </button>
      </div>
    </div>
  );
}
