export default async function sendSms({ name, phone, text }) {
    const response = await fetch('/api', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({
            query: 'mutation sendMessage($name: String!, $phone: String!, $text: String!) { sendMessage(name: $name, phone: $phone, text: $text) }',
            operationName: 'sendMessage',
            variables: { name, phone, text },
        }),
    });

    const body = await response.json();
    return body.data.sendMessage;
};
