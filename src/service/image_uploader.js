class ImageUploader {
    //πμλ‘λ κΈ°λ₯
    //μ¬μ©μκ° νμΌμ μλ‘λ -> μλ²μ urlμ μλ‘λ νκ³  -> κ·Έ κ²°κ³Όκ°μ return
    async upload(file) {
        const data = new FormData();
        data.append("file", file);
        data.append("upload_preset", "ggmeax4i");
        const result =await fetch('https://api.cloudinary.com/v1_1/dlizycik0/image/upload', 
        {
            method: "POST",
            body: data,
        }
        );
        return await result.json();
    }
}


export default ImageUploader;