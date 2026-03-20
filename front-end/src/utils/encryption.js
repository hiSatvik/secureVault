export async function encrypted(file) {
    const arrayBuffer = await file.arrayBuffer();

    const key = await crypto.subtle.generateKey(
        {
            name: "AES-GCM",
            length: 256
        },
        true,
        ["encrypt", "decrypt"]
    );

    const iv = crypto.getRandomValues(new Uint8Array(12));

    const encrpytData = await crypto.subtle.encrypt(
        {
            name: "AES-GCM",
            iv: iv,
        },
        key,
        arrayBuffer
    );

    return {
        encrpytData,
        iv,
        key,
    };
}