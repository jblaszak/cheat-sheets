export const pageData = {
  pageTitle: "Security",
  pageInfo: ``,
  cheats: [
    [
      { h2: "MITM Attack" },
      {
        p: `When an unwanted third party intercepts a communication between the client and server and has access to the packets.`,
      },
    ],
    [
      { h2: "Encryption" },
      {
        p: `These commonly use the Advanced Encryption Standard (AES) algorithms.`,
      },
      { h3: `Symmetric` },
      {
        p: `Relies on symmetric key algorithms, a type of algorithm that relies on a single key to both encrypt and decrypt a message. This has the
      problem that for web, the server must send the client the key at some point and thus it can be intercepted by a third party, making it useless.`,
      },
      { h3: `Asymmetric` },
      {
        p: `Uses two keys, one public and one private. If a message is encrypted using the public key, the message can only be decrypted using the 
      private key. The server keeps the private key and sends the private key to the client.  It is slower than symmetric encryption.`,
      },
    ],
    [
      { h2: "HTTPS" },
      {
        p: `Runs on top of Transport Layer Security (TLS), HTTPS used to use Secure Socket Layers (SSL).  When a client and server make a connection,
      a TLS handshake occurs. The client sends a message to the server (client hello) and the server responses with a message (server hello) and an SSL 
      certificate which contains a public key. The SSL certificate is necessary to prevent MITM attacks at the first stage of the communication. A 
      Certificate Authority (CA) signs the certificate with their own private key to ensure authenticity of it and then the client can verify the 
      public key is in fact for that server. The client creates a premaster secret and encrypts it using the public key and the client/server 
      then establish symmetric session keys using the client hello, server hello and premaster secret. And then using the session keys a final 
      acknowledgement is made.`,
      },
    ],
  ],
}
