import vision from '@google-cloud/vision';

const CREDENTIALS = JSON.parse(JSON.stringify({
    "type": "service_account",
    "project_id": "dazzling-ocean-339202",
    "private_key_id": "28f30a142b2babc7d371516f2497b83e7d2382f5",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQC2JvqhPWnZYXX8\nK4lnOl99tQjEb1wlsr5sCx2H68N2ioO4JTLa5ElzEE5IxwiorWdxaU6LhmYypP16\nSaXl+uZiDldM+koLLHKoCZF3JdlZ3BTzk1GdNlSQjtw532wSOXWkIOQ7/IsYfNXW\nZWdDAZ3Ii9QeR5RQSAIqLOZEAZ5ysKqp+ei5pjEVPZmVmdWMDFdqyTV+O5VNPZ4g\n8mbeottCr1MvaE6IoSV/JAMrz2M82ILDk6ko5/RK9fKX/hfQX88bWX3A/G/rXTeM\nH1s30mINOBFoD6uzBvKBZw9xI0v8RQ3vg5vP6rf0R/qLl11I9yZPq6rWArx4KmPM\nIpU5vYbVAgMBAAECggEAG2RmOVwycEnLQ+ZKLfdlx9IzJNM4UMT+BOJxCPEn/kob\nP9R8PtWoxAB2PVSNFUyqazAyayIFeWU9ZyfvJlQiVCmi8EUNYHvJLELwGLJc6roB\nfpWvZsx2UBzjumJCbsUsT0fQ+sJiKocPY0PxkO6Ly05X0kviXmZNyQjigeSabtWo\nTpwykRijX09yUbrSS96LnkWFX+a6uBF6uSP0J+ckmNp2rzLZy8OQI5+NQGcUUG+v\nskLvJXLvn1Qba+7zH6yYJoOcfbBGVrQsLkuBJDUikPuxYlEnsGnVvOkMF4NqSwyI\n7u8whFl9zfVUWh4d5BaxSI2ZG2stsN8yog3RaANwuwKBgQDq9fPNBhwJ04TKfzyo\npHPE2N0WoCBTF15f5IDDz+Ccre8IQ1hbkVIZTGucZYvkfEz/lKaeclNZ24R3x6u8\nJE6gclko5IebOAbQKTseuJqQ+k8GzGM4G4y8QYGmJiasXr1lJA+dHwJ6N4lxjQb1\n2edwHhz/uVY4+2WvP/Xyr+gwgwKBgQDGdnz3fz738ahZpfO2/2S9M0cOdAU9zMVJ\nQnCJzOP5M3V7kdlZW53BZbR4LduTO7hUVo+ZEvj/AUagfWy8DOkYCGblHtRXbAjv\ndX+BbhSCU5hdj2LjonOLmSPXza57UNRGKsrbkkTg0yT/8ylmCe/r04eWAbDp4YDv\neqRr1rYbxwKBgEFVGHCG5V76GK9xx70g1SwEHR3AcpyIH+7MC93mvI70ckW67COx\n+cEdFcMMHWTwBzz96YKfSXvv5RqlQ6Rx+Ab3JMGRIf/QCVzySgUV0azEXRsH1ALy\n7iQelt1LOG+vfDxWVZ0b1UWEkcwoKapM5+SuCuQ0dbwscy7SuyG7NfXfAoGABQCv\nnb2DZNSencPlJNPDQlGslNyv1SL4RiR6mb6kcH+vknHWvL3meB2MMwtU4Z07xER6\nUi18QVFS6nC+8O6SYZy0m0nvqFR81SxtDmIr+i0JRjJ7F6ncp8QwdxwkLc+Xyj0B\n6A8D1Xb9E8aZYI0XkyY94LYiM4MPsPmyc1VyObkCgYA2LSXDuj5I3UJu1qKW2+sF\nvKrLSDk8w0DPJvnTz8Gox+VkcshcuZ2FvXXCmwwTqsGNR+G/aFIHGHPtHFVbqYKo\niby9zFlcZq2PWQnF44B4xuOUsUvRTB/qmZxT9oILZrn0Jt82xmPWUpMGL3cePjcI\n1XgLmqejeIZpseWrL9f1rA==\n-----END PRIVATE KEY-----\n",
    "client_email": "test-vision-google-ev@dazzling-ocean-339202.iam.gserviceaccount.com",
    "client_id": "104273312008533029938",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/test-vision-google-ev%40dazzling-ocean-339202.iam.gserviceaccount.com"
}));

const CONFIG = {
    credentials: {
        private_key: CREDENTIALS.private_key,
        client_email: CREDENTIALS.client_email
    }
};

async function quickstart() {


}
quickstart();


export async function readTextFile(path) {
    // Creates a client
    const client = new vision.ImageAnnotatorClient(CONFIG);

    // Performs label detection on the image file
    const [result] = await client.textDetection(path);
    const detections = result.textAnnotations;
    console.log('Text:');
    detections.forEach(text => console.log(text));
    return detections.map(text => text.description);
}