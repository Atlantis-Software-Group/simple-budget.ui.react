import { TransactionData } from "./TransactionData";
import { TransactionResponse } from "./TransactionResponse";

export default class TransactionService {
    baseUrl: string = "https://localhost:3101/api";
    postUrl: string = `${this.baseUrl}/transaction/transaction`;
    async SaveTransaction(data: TransactionData) {
        try {
            const response: Response = await fetch(this.postUrl, {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "https://localhost:3100"
                },
                body: JSON.stringify(data)
            });

            const result:TransactionResponse = await response.json();
            console.log("Success: ", result);
        } catch (error) {
            console.error("Error: ", error);
        }
    }
}