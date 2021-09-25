import "./App.css";
import axios from "axios";
import { Image } from "cloudinary-react";
import { useState } from "react";

function App() {
  const [imageSelected, setImageSelected] = useState("");
  const [imageUpload, setImageUpload] = useState(null);

  const handleUploadImage = async () => {
    const formData = new FormData();
    formData.append("file", imageSelected);
    formData.append("upload_preset", "bzoafuud");
    const res = await axios.post(
      "https://api.cloudinary.com/v1_1/da6b7skw8/image/upload",
      formData
    );
    setImageUpload(res.data.url);
  };

  return (
    <div>
      <input
        type="file"
        onChange={(e) => {
          setImageSelected(e.target.files[0]);
        }}
      />
      <button onClick={handleUploadImage}>Send</button>

      {imageUpload && (
        <Image
          style={{ width: 100 }}
          cloudName="da6b7skw8"
          publicId={imageUpload}
        />
      )}
    </div>
  );
}

export default App;
