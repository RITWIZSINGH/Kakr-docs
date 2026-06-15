# FAQs and Troubleshooting

<details>

<summary>How do I get started with your Litecoin as a Service (LiaaS) API ?</summary>

Getting started is simple. Sign up on [pteri.org](https://www.pteri.org/), [create an account](https://www.pteri.org/register), and generate your API key. You can then use this key to authenticate your requests to our API. [Detailed documentation is available to guide you through the integration process](/broken/pages/3rcUSwamGg81uRz75iPN)

</details>

<details>

<summary>How do I generate a Litecoin address using your API?</summary>

You can generate a Litecoin address by making a POST request to the [`/api/Address/createAddress`](/broken/pages/OHxaSrIKwFlgB0Uoaxzo) the endpoint of our API. The request must include your API key for authentication and **Usev2,** which can be **true** or **yes**. The response will contain the newly generated Litecoin address and its private key

</details>

<details>

<summary>How do I check the balance of a Litecoin address?</summary>

To check the balance of a Litecoin address, make a GET request to the [`/api/Litecoin/AddressBalance`](/broken/pages/wcYLQapqUsn7yTMCi5GL) endpoint with the address as a parameter. The response will include the current balance of the specified address.

</details>

<details>

<summary>How do I check the balance of a Litecoin wallet?</summary>

To check the balance of a Litecoin wallet, make a GET request to the [`/api/Wallet/get-wallet-balance`](/broken/pages/qjT1ydPk4HeEs3IdkVJu) endpoint with the wallet as a header parameter. The response will include the current balance of the specified wallet.

</details>

<details>

<summary>Can I integrate LiaaS API with my existing software?</summary>

Absolutely! Our API is designed to be easily integrated with existing software. We provide detailed documentation and example code to help you [get started](/broken/pages/Fbe25bGxDX5dF0n5pU6c) quickly.

</details>

<details>

<summary>What programming languages are supported?</summary>

Our API can be accessed using any programming language that can make HTTP requests, such as Python, JavaScript, Java, Ruby, and [many others](https://documenter.getpostman.com/view/32261269/2sA3QpDDwR). We also provide [SDKs and libraries ](https://www.npmjs.com/package/liaas-js)for JavaScript developers to simplify integration.

</details>

<details>

<summary>Why do i need to reload wallets after restarting node?</summary>

When you restart your Blockchain node, the wallet is not loaded automatically for security and resource management reasons. This ensures that only explicitly requested wallets are loaded, reducing the risk of unauthorized access and resource consumption. To load your wallet after restarting your node, you need to use the ['/api/Wallet/load-wallet'](/broken/pages/c2nEvyElYcgyWTLf9QLe) endpoint, specifying the wallet name as the 'filename' value.

</details>

<details>

<summary>Does the API support multi-signature transactions?</summary>

Yes, The multi-signature process necessitates the [signing of a signature](/broken/pages/EWQZ7paKfuGOkSqHAhBy), a task that can be efficiently completed by multiple addresses from distinct wallets using their respective private keys. The resulting response will encompass the signature, which can be employed to [verify the transaction](/broken/pages/kKHagNbWX2b3yUjVgQlq) by all addresses participating in the signature process before it is broadcasted on the blockchain.

</details>

<details>

<summary>How do I handle errors returned by the API?</summary>

Our API returns standardized error messages along with appropriate HTTP status codes. Detailed information about error handling can be found in our documentation, which includes examples of how to handle different types of errors. Check out the [Developers FAQs and Error Handling](/broken/pages/hIvExjjhFjuqKZR8VXgK) Page to get the solution of any error.

</details>
